create extension if not exists "pgcrypto";

create table if not exists public.students (
  id uuid primary key default gen_random_uuid(),
  admission_number text not null unique,
  full_name text not null,
  gender text not null,
  class_name text not null,
  date_of_birth date,
  guardian_name text,
  guardian_phone text,
  status text not null default 'Active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.students enable row level security;

create policy "Public can read students"
on public.students for select
using (true);

create policy "Public can insert students"
on public.students for insert
with check (true);

create policy "Public can update students"
on public.students for update
using (true)
with check (true);

create policy "Public can delete students"
on public.students for delete
using (true);

create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_students_updated_at on public.students;
create trigger set_students_updated_at
before update on public.students
for each row
execute procedure public.update_updated_at_column();
