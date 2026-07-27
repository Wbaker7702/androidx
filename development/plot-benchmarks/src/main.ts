import { mount } from 'svelte';
import './assets/overrides.css';
import App from './lib/App.svelte';
import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics
inject({ mode: import.meta.env.DEV ? 'development' : 'production' });

const app = mount(App, { target: document.getElementById("app")!! });

export default app;
