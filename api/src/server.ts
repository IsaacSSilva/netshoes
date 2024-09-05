import { app } from './app.js'
import { env } from './lib/env.js'

app
  .listen({
    port: env.PORT,
    host: '0.0.0.0'
  })
  .then(() => {
    console.log('Runner Server HTTP! 🔥')
  })
