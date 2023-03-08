import { FastifyInstance } from "fastify"
import { prisma } from "./lib/prisma"
import {z} from 'zod'



export async function appRoutes(app: FastifyInstance){

    //cadastrar cliente
    app.post('/clientes', async (request) => {
        const createClientBody = z.object({
            email: z.string(),
            name: z.string(),
            rg: z.string(),
            cpf: z.string(),
            address: z.string(),
            city: z.string(),
            tel: z.string(),
            profession: z.string()
        })

        const {email, name, rg, cpf, address, city, tel, profession} = createClientBody.parse(request.body)

        await prisma.cliente.create({
            data:{
                email,
                name,
                rg,
                cpf,
                tel,
                address,
                city,
                profession
            }
        })
    })

    //atualizar cadastro
    app.patch('/upClient/:id/', async (request) =>{
        const toggleClient = z.object({
            id: z.string(),
        })
        const {id} = toggleClient.parse(request.params)
        const upClient = z.object({
            email: z.string(),
            name: z.string(),
            rg: z.string(),
            cpf: z.string(),
            address: z.string(),
            city: z.string(),
            tel: z.string(),
            profession: z.string()
        })
        const {email, name, rg, cpf, address, city, tel, profession} = upClient.parse(request.body)
        console.log(upClient)
        const cliente = await prisma.cliente.update({
            where:{ 
                id: id
            },
            data: {
                email: email,
                name: name,
                rg: rg,
                cpf: cpf,
                tel: tel,
                city: city,
                address: address,
                profession: profession,
            }
            
        })
    })

    //enconstrar um cadastro pelo CPF
    app.patch('/getClient/:cpf/', async (request) => {

        const toggleClient = z.object({
            cpf: z.string(),
        })

        const {cpf} = toggleClient.parse(request.params)

        const cliente = await prisma.cliente.findUnique({
            where:{ 
                cpf: cpf
            }
        })
        if(cliente){
            return cliente
        }else{
            return "Não encontrado"
        }
        
    })

    //deletar cliente
    app.delete('/delete/:id', async (request) => {

        const getId = z.object({
            id: z.string()
        })

        const {id} = getId.parse(request.params)
        await prisma.cliente.deleteMany({
            where: {id: id}
        });
          
    })

    //retorna todos os clientes
    app.get('/getClients', async (request) => {
        const allClients = await prisma.cliente.findMany()
        return allClients
    })

}