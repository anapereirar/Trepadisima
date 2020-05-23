
import HomePage from '../pages/home.f7.html';
import Historia from '../pages/historia.f7.html';
import Dragsfamosas from '../pages/dragsfamosas.f7.html';
import Lascasas from '../pages/lascasas.f7.html';
import Naomi from '../pages/naomi.f7.html';
import Alaska from '../pages/alaska.f7.html';
import Trixie from '../pages/trixie.f7.html';
import Aquaria from '../pages/aquaria.f7.html';
import RuPaul from '../pages/rupaul.f7.html';
import Alyssa from '../pages/alyssa.f7.html';
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
    path: '/historia/',
    component: Historia,
  },
    {
    path: '/dragsfamosas/',
    component: Dragsfamosas,
  },
    {
    path: '/lascasas/',
    component: Lascasas,
  },

    {
    path: '/naomi/',
    component: Naomi,
  },
    {
    path: '/alaska/',
    component: Alaska,
  },
    {
    path: '/trixie/',
    component: Trixie,
  },
    {
    path: '/aquaria/',
    component: Aquaria,
  },
    {
    path: '/rupaul/',
    component: RuPaul,
  },
    {
    path: '/alyssa/',
    component: Alyssa,
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
