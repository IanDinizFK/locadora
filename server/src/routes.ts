import { FastifyInstance } from "fastify"
import { prisma } from "./lib/prisma"
import {z} from 'zod'



export async function appRoutes(app: FastifyInstance){
    app.post('/', async (request) => {
        const createProductBody = z.object({
            codigo: z.string(),
            title: z.string(),
            price: z.number()

        })
    })

    app.get('/return', async (request) => {
        const getNome = z
    })

}