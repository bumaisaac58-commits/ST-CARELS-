* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f7fb;
  color: #1f2937;
}

button {
  font: inherit;
}

.page-shell {
  min-height: 100vh;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: #0d47a1;
  color: white;
  padding: 18px 24px;
}

.topbar h2 {
  margin: 0;
  font-size: 1.6rem;
}

.topbar p {
  margin: 5px 0 0;
  opacity: 0.9;
  font-size: 0.9rem;
}

.logout-btn,
.action-btn,
.nav-btn {
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.logout-btn {
  background: white;
  color: #0d47a1;
  padding: 10px 16px;
  font-weight: bold;
}

.layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: calc(100vh - 120px);
}

.sidebar {
  background: #eaf2ff;
  padding: 20px 16px;
  border-right: 1px solid #dfe9fa;
}

.sidebar h3 {
  margin: 0 0 16px;
  color: #0d47a1;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
}

.nav-btn {
  display: block;
  width: 100%;
  text-align: left;
  background: transparent;
  color: #1f2937;
  padding: 12px 14px;
  margin-bottom: 8px;
  font-weight: 600;
}

.nav-btn.active,
.nav-btn:hover {
  background: #d7e8ff;
  color: #0d47a1;
}

.main-content {
  padding: 24px;
}

.welcome-panel,
.panel,
.stat-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.04);
}

.welcome-panel {
  padding: 24px;
  margin-bottom: 22px;
}

.welcome-panel h1 {
  margin: 0 0 8px;
  color: #0d47a1;
}

.welcome-panel p {
  margin: 0;
  color: #4b5563;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 22px;
}

.stat-card {
  padding: 20px;
}

.stat-card p {
  margin: 0 0 8px;
  color: #64748b;
}

.stat-card h2 {
  margin: 0;
  font-size: 2rem;
  color: #0d47a1;
}

.panel {
  padding: 20px;
  margin-bottom: 22px;
}

.panel h2 {
  margin-top: 0;
  color: #0d47a1;
}

.notice {
  background: #edf6ff;
  color: #0d47a1;
  border-left: 4px solid #0d47a1;
  padding: 12px 14px;
  border-radius: 10px;
}

.quick-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.action-btn {
  background: #0d47a1;
  color: white;
  padding: 12px 16px;
  font-weight: bold;
}

.action-btn.secondary {
  background: #eaf2ff;
  color: #0d47a1;
}

.hidden {
  display: none !important;
}

footer {
  text-align: center;
  color: #64748b;
  padding: 18px 20px 26px;
  font-size: 0.9rem;
}

@media (max-width: 820px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid #dfe9fa;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}

