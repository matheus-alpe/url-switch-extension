import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import '@mdi/font/css/materialdesignicons.css'
import './style.css'

const vuetify = createVuetify({
  components,
  directives,

  theme: {
    themes: {
      light: {
        colors: {
          surface: '#14859E',
        },
      },
    },
  },

  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

createApp(App).use(vuetify).mount('#app-url-switch')
