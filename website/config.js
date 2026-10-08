// API Configuration
// In production set window.SITE_CONFIG.apiUrl or rely on same-origin /api proxying.
const configuredApiUrl = window.SITE_CONFIG && window.SITE_CONFIG.apiUrl;
const API_URL = configuredApiUrl
  ? configuredApiUrl.replace(/\/$/, '')
  : window.location.hostname === 'localhost'
    ? 'http://localhost:4000'
    : window.location.origin;

// Export for use in other files
window.API_CONFIG = {
  API_URL: API_URL,
  ENDPOINTS: {
    BYPASS: `${API_URL}/api/bypass/bypass`,
    STATS: `${API_URL}/api/bypass/stats`,
    HEALTH: `${API_URL}/health`
  }
};

console.log('🔧 API Configuration loaded:', window.API_CONFIG);
