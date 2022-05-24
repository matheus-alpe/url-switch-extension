import Vue from 'vue';
import vuetify from '@plugins/vuetify';
import Popup from '@pages/popup/Popup.vue';

import './styles/app.scss';

new Vue({
    vuetify,
    render: (h) => h(Popup),
}).$mount('#app');
