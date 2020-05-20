
import HomePage from '../pages/home.f7.html';
import AboutPage from '../pages/about.f7.html';
import FormPage from '../pages/form.f7.html';
import Cuerpo from '../pages/about.f7.html';
import Maquillaje from '../pages/form.f7.html';
import Cabello from '../pages/form.f7.html';
import Vestuario from '../pages/vestuario.f7.html';
import Padding from '../pages/padding.f7.html';
import Tucking from '../pages/tucking.f7.html';
import Características from '../pages/vest-caract.f7.html';
import Shows from '../pages/shows.f7.html';
import Lipsync from '../pages/lipsync.f7.html';
import Bailes from '../pages/bailes.f7.html';


import DynamicRoutePage from '../pages/dynamic-route.f7.html';
import RequestAndLoad from '../pages/request-and-load.f7.html';
import NotFoundPage from '../pages/404.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
    {
    path: '/vestuario/',
    component: Vestuario,
  },
    {
    path: '/',
    component: Cuerpo,
  },
    {
    path: '/padding/',
    component: Padding,
  },
 {
    path: '/tucking/',
    component: Tucking,
  },
    {
    path: '/vest-caract/',
    component: Características,
  },
    {
    path: '/shows/',
    component: Shows,
  },
     {
    path: '/lipsync/',
    component: Lipsync,
  },
    {
    path: '/bailes/',
    component: Bailes,
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
