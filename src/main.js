

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

   // Desativa Devtools em produção
if (process.env.NODE_ENV === 'production') {
    app.config.devtools = false;
    app.config.performance = false; // Opcional, desativa medições de performance
  }

const app = createApp(App)

app.use(router)

app.mount('#app')
