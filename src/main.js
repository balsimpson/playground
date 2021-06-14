import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { createMetaManager } from 'vue-meta'
import store from './store'
import './assets/tailwind.css'

// const metaManager = createMetaManager();

let app = createApp(App);
app.use(store)
    .use(router)
    // .use(metaManager)
    .mount("#app");