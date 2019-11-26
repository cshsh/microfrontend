import router from './src/router'
router.beforeEach((to, from ,next) => {
  console.log('beforeRouter', from)
  next()
})
