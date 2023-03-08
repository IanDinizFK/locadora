import { FormEvent, useEffect, useState } from 'react';
import { api } from '../lib/axios';
import '../styles/global.css';

interface UserInfo {
    email: string;
    name: string;
    cpf: string;
    rg: string;
    address: string;
    city: string;
    tel: string;
    profession: string;

}


export function NewClientForm() {

    const [userInfo, setUserInfo] = useState<UserInfo>({
        email: '',
        name: '',
        cpf: '',
        rg: '',
        address: '',
        city: '',
        tel: '',
        profession: '',
      });
    const [btnStatus, setStatus] = useState(true);

    useEffect(() => {
        if(userInfo.cpf.length == 11 && userInfo.name != '' && userInfo.rg.length == 8){
            setStatus(false);
        }
      }, [userInfo]);

    async function newClientSubmit(event: FormEvent) {

        try {
            const response = await api.post('/clientes', userInfo)
            console.log(response.data)
            window.location.reload()
        } catch (error) {
            console.log(error)
            alert("O CPF/RG DIGITADO JÁ ESTÁ CADASTRADO")
        }
    } 


    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <h2 className='font-semibold text-gray-800 mb-4'>Informações do Cliente</h2>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <h3 className='font-semibold text-gray-600 mb-1'>Nome</h3>
                        <input className="Input" type="text" id="name" value={userInfo.name} placeholder='Ex: Ian Diniz Teste' onChange={event => setUserInfo({ ...userInfo, name: event.target.value })} />
                    </div>
                    <div>
                        <h3 className='font-semibold text-gray-600 mb-1'>CPF</h3>
                        <input className="Input" type="number" placeholder='000.000.000-00' id="cpf" value={userInfo.cpf} onChange={event => setUserInfo({ ...userInfo, cpf: event.target.value.toString() })} />
                    </div>
                    <div>
                        <h3 className='font-semibold text-gray-600 mb-1'>RG</h3>
                        <input className="Input" type="number" placeholder='0.000.000' id="rg" value={userInfo.rg} onChange={event => setUserInfo({ ...userInfo, rg: event.target.value.toString() })} />
                    </div>
                    <div>
                        <h3 className='font-semibold text-gray-600 mb-1'>Email</h3>
                        <input className="Input" type="text" placeholder='Ex: teste@dominio.com' id="email" value={userInfo.email} onChange={event => setUserInfo({ ...userInfo, email: event.target.value })} />
                    </div>
                    <div>
                        <h3 className='font-semibold text-gray-600 mb-1'>Endereço</h3>
                        <input className="Input" type="text" placeholder='Ex: Rua Cavalcante de Napoleão, 75' id="address" value={userInfo.address} onChange={event => setUserInfo({ ...userInfo, address: event.target.value })} />
                    </div>
                    <div>
                        <h3 className='font-semibold text-gray-600 mb-1'>Cidade</h3>
                        <input className="Input" type="text" id="firstName" placeholder='Campina Grande - PB' />
                    </div>
                    <div>
                        <h3 className='font-semibold text-gray-600 mb-1'>Telefone</h3>
                        <input className="Input" type="number" placeholder='Ex: (83) 90000-0000' id="tel" value={userInfo.tel} onChange={event => setUserInfo({ ...userInfo, tel: event.target.value.toString() })} />
                    </div>
                    <div>
                        <h3 className='font-semibold text-gray-600 mb-1'>Profissão</h3>
                        <input className="Input" type="text" placeholder='Ex: Estudante' id="profession" value={userInfo.profession} onChange={event => setUserInfo({ ...userInfo, profession: event.target.value })} />
                    </div>

                </div>
                <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                    <button className='w-full p-2 justify-center gap-4 Button bg-green-500 space-y-100' disabled={btnStatus} onClick={newClientSubmit}>{btnStatus ? 'Preencha todos os campos' : 'Adicionar'}</button>
                </div>
            </div>
        </div>
    )
}