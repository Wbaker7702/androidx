import './assets/overrides.css';
import App from './lib/App.svelte';
import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics
inject({ mode: import.meta.env.DEV ? 'development' : 'production' });

const app = new App({
  target: document.getElementById('app')!,
});

export default app;
