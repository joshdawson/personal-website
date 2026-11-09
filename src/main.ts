import { ViteSSG } from 'vite-ssg/single-page';
import '@cds/city/css/regular.css';
import '@cds/city/css/medium.css';
import '@cds/city/css/semibold.css';
import './style.css';
import 'primeicons/primeicons.css';
import App from './App.vue';

export const createApp = ViteSSG(App);
