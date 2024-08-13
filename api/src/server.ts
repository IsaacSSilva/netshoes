import { env } from './lib/env.js'
import { app } from './register.js'

app
  .listen({
    port: env.port,
    host: '0.0.0.0'
  })
  .then(() => {
    console.log('Runner Server HTTP! 🔥')
  })
