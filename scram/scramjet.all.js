// Placeholder: fetch from https://github.com/Sea-Math/sail/blob/main/scram/scramjet.all.js
function $scramjetLoadController(){ return { ScramjetController: class { constructor(){ } async init(){} createFrame(){ return { frame: document.createElement('iframe'), addEventListener(){}, go(){}, back(){}, forward(){}, reload(){} }; } } }; }
function $scramjetLoadWorker(){ return { ScramjetServiceWorker: class { constructor(){ this.client=null; } async loadConfig(){} route(){ return false; } async fetch(e){ return fetch(e.request); } addEventListener(){} } }; }
