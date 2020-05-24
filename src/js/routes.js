
import HomePage from '../pages/home.f7.html';
import Maquillaje from '../pages/maquillaje.f7.html';
import Productos from '../pages/productos.f7.html';
import Cara from '../pages/cara.f7.html';
import InstructivoCara from '../pages/instructivocara.f7.html';
import Cuerpo from '../pages/cuerpo.f7.html';
import InstructivoCuerpo from '../pages/instructivocuerpo.f7.html';
import Cabello from '../pages/cabello.f7.html';
import InstructivoPeluca from '../pages/instructivopeluca.f7.html';
import CuidadoPeluca from '../pages/cuidadopeluca.f7.html';

import AboutPage from '../pages/about.f7.html';
import FormPage from '../pages/form.f7.html';


import DynamicRoutePage from '../pages/dynamic-route.f7.html';
import RequestAndLoad from '../pages/request-and-load.f7.html';
import NotFoundPage from '../pages/404.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
    {
    path: '/maquillaje/',
    component: Maquillaje,
  },
    
    {
    path: '/productos/',
    component: Productos,
  },
    {
    path: '/cara/',
    component: Cara,
  },
    {
    path: '/instructivocara/',
    component: InstructivoCara,
  },
    {
    path: '/cuerpo/',
    component: Cuerpo,
  },
    {
    path: '/instructivocuerpo/',
    component: InstructivoCuerpo,
  },
    {
    path: '/cabello/',
    component: Cabello,
  },
    {
    path: '/instructivopeluca/',
    component: InstructivoPeluca,
  },
    {
    path: '/cuidadopeluca/',
    component: CuidadoPeluca,
  },
    
    
  {
    path: '/about/',
    component: AboutPage,
  },
  
  {
    path: '/form/',
    component: FormPage,
  },


  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
