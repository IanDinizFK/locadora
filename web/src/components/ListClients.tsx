import { FormEvent, useEffect, useState } from 'react';
import { api } from '../lib/axios';
import '../styles/global.css';

type UserInfo = Array<{
    email: string;
    name: string;
    cpf: string;
    rg: string;
    address: string;
    city: string;
    tel: string;
    profession: string;

}>[]


export function ListClient() {

    const [clients, setClients] = useState<UserInfo>([])
    useEffect(() => {
        api.get('getClients').then(response => {
            setClients(response.data)
        })
    }, [])
    return (
        <div className="grid grid-cols-1 gap-4">
            {clients.map((client, i) => (
                <div key={i} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                    <h2 className="font-semibold text-gray-800 mb-4">Informações do Cliente</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-gray-600 mb-1">Nome</h3>
                            <div className="h-10 flex items-center">
                                <p className='text-black'>{client.name}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-gray-600 mb-1">CPF</h3>
                            <div className="h-10 flex items-center">
                                <p className='text-black'>{client.cpf}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-gray-600 mb-1">RG</h3>
                            <div className="h-10 flex items-center">
                                <p className='text-black'>{client.rg}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-gray-600 mb-1">Email</h3>
                            <div className="h-10 flex items-center">
                                <p className='text-black'>{client.email}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-gray-600 mb-1">Endereço</h3>
                            <div className="h-10 flex items-center">
                                <p className='text-black'>{client.address}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-gray-600 mb-1">Cidade</h3>
                            <div className="h-10 flex items-center">
                                <p className='text-black'>{client.city}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-gray-600 mb-1">Telefone</h3>
                            <div className="h-10 flex items-center">
                                <p className='text-black'>{client.tel}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="font-semibold text-gray-600 mb-1">Profissão</h3>
                            <div className="h-10 flex items-center">
                                <p className='text-black'>{client.profession}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}