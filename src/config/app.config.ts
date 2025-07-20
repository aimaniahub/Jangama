// Application configuration
export const appConfig = {
  // Try environment variable first, fallback to hardcoded URL as last resort
  appScriptUrl: import.meta.env.VITE_APPSCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzkZ41Pzfsa-SmJwljHZ3iKvV6uCB0d-T2VQGrt_UEr0DLvua3WYepyEB5wo21MCWNHTA/exec',
  
  // Google Analytics ID
  gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID || 'G-3JPFB78GJR',
  
  // Development flag
  isDevelopment: import.meta.env.DEV,
  
  // Production flag
  isProduction: import.meta.env.PROD,
};

// Validation function
export const validateConfig = () => {
  return !!appConfig.appScriptUrl;
};
