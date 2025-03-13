import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { app } from './index'

export const handler = serve({
  fetch: app.fetch,
}) 