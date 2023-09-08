import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vue3starRatings from 'vue3-star-ratings'

// Vue Router
import { router } from "./router";

import { registerStore } from "./store";

// import packages
import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp(App).use(pinia);
registerStore();
app.use(router);
app.component("vue3-star-ratings", vue3starRatings);
app.mount('#app');