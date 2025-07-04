import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initWebVitals, preloadCriticalResources, optimizeImages } from './utils/webVitals.ts'

// Initialize Web Vitals tracking
initWebVitals();

// Preload critical resources
preloadCriticalResources();

// Optimize images after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  optimizeImages();
});

createRoot(document.getElementById("root")!).render(<App />);
