import './bootstrap';

window.Echo.channel('broadcasts').listen('BroadcastEvent', e => console.log(e));
