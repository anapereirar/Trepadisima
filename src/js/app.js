import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
import '../css/estilos-ana.css';


// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

var app = new Framework7({
  root: '#app', // App root element
  component: App, // App main component

  name: 'Trepadisima', // App name
  theme: 'auto', // Automatic theme detection



  // App routes
  routes: routes,
});


//$$(document).on('page:init', '.page[data-name="burlesque"]', function (e, page) {
//var swipeToClosePopup = app.popup.create({
//  el: '.popup-swipe-to-close',
//  swipeToClose: true,
//});
//});

$$(document).on('page:init', '.page[data-name="burlesque"]', function (e, page) {
app.sheet.create({
  el: '.my-sheet-swipe-to-close',
  swipeToClose: true,
  backdrop: true,
});
});
