import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import './style.css';
import 'primevue/resources/themes/aura-light-blue/theme.css';
import 'primeicons/primeicons.css'
import App from './App.vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

const app = createApp(App);
app.use(PrimeVue);

app.component('Button', Button);
app.component('Divider', Divider);

app.mount('#app');
