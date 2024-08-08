import {z} from "zod"
import { zValidator } from "@hono/zod-validator"
import { clerkMiddleware, getAuth  } from "@hono/clerk-auth"

import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app
.get('/hello', 
    clerkMiddleware(),
    (c) => {
        const auth = getAuth(c);
        if( !auth?.userId)
            return c.json({error: 'Unathorized'})
        return c.json({
            message: 'Hello Next.js!',
            userId: auth?.userId,
        })
})
.post("/", 
    zValidator("json", z.object({
        name: z.string(),
        userId: z.number(),
    })), 
    (c) =>{
        const {name, userId} = c.req.valid('json');
        return c.json({});
})
  
export const GET = handle(app)
export const POST = handle(app)