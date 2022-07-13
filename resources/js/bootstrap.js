import _ from 'lodash';
window._ = _;

import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import bootstrap from 'bootstrap/dist/js/bootstrap'
window.bootstrap = bootstrap;

// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';
// window.Pusher = Pusher;
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     wsHost: import.meta.env.VITE_PUSHER_APP_HOST,
//     wsPort: import.meta.env.VITE_PUSHER_APP_PORT,
//     wssPort: import.meta.env.VITE_PUSHER_APP_PORT,
//     forceTLS: import.meta.env.VITE_PUSHER_APP_SCHEME === 'http',
//     encrypted: true,
//     disableStats: false,
//     enabledTransports: ['ws', 'wss'],
// });
