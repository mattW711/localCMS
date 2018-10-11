export const middleware = {
  auth ({store, next, to}) {
    if (!store.getters['auth/isLoggedIn']) {
      next({
        name: 'login',
        query: {
          next: to.path
        }
      })
    }
  },
  guest ({store, next}) {
    if (store.getters['auth/isLoggedIn']) {
      next('/?logged_in=1')
    }
  },
  verifyToken ({store}) {
    store.dispatch('auth/verifyToken')
  }
}

export const registerMiddleware = (router, store) => {
  router.beforeEach((to, from, next) => {
    if ('middleware' in to.meta) {
      switch (to.meta.middleware) {
        case 'auth':
          middleware.auth({store, next, to})
          break
        case 'guest':
          middleware.guest({store, next, to})
          break
      }
    }

    next()
  })

  router.afterEach((to, from) => {
    middleware.verifyToken({store})
  })
}
