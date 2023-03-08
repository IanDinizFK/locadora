import { useEffect, useState } from 'react';
import { api } from "../lib/axios"
import { BtnDelete } from './btnDelete';
import { BtnEdit } from './btnEdit';

type UserInfo = {
  id: string;
  email: string;
  name: string;
  cpf: string;
  rg: string;
  address: string;
  city: string;
  tel: string;
  profession: string;
};

interface UserCpf {
  cpf: string;
}

export function ClientInform({ cpf }: UserCpf) {
  const [userInfo, setUserInfo] = useState<UserInfo>([]);

  useEffect(() => {
    api.patch('getClient/' + cpf + '/').then(response => {
      setUserInfo(response.data);
    });
  }, []);

  if (!userInfo) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <h3 className='text-red-500 text-xl font-semibold mb-4'>
          CLIENTE NÃO ENCONTRADO !
        </h3>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded'
          onClick={window.location.reload}>
          Recarregar a página
        </button>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='font-semibold text-gray-800 mb-4'>Informações do Cliente</h2>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <h3 className='font-semibold text-gray-600 mb-1'>ID</h3>
            <p className='font-semibold text-gray-500'>{userInfo.id}</p>
          </div>
          <div>
            <h3 className='font-semibold text-gray-600 mb-1'>Nome</h3>
            <p className='font-semibold text-gray-500'>{userInfo.name}</p>
          </div>
          <div>
            <h3 className='font-semibold text-gray-600 mb-1'>CPF</h3>
            <p className='font-semibold text-gray-500'>{userInfo.cpf}</p>
          </div>
          <div>
            <h3 className='font-semibold text-gray-600 mb-1'>RG</h3>
            <p className='font-semibold text-gray-500'>{userInfo.rg}</p>
          </div>
          <div>
            <h3 className='font-semibold text-gray-600 mb-1'>Email</h3>
            <p className='font-semibold text-gray-500'>{userInfo.email}</p>
          </div>
          <div>
            <h3 className='font-semibold text-gray-600 mb-1'>Endereço</h3>
            <p className='font-semibold text-gray-500'>{userInfo.address}</p>
          </div>
          <div>
            <h3 className='font-semibold text-gray-600 mb-1'>Cidade</h3>
            <p className='font-semibold text-gray-500'>{userInfo.city}</p>
          </div>
          <div>
            <h3 className='font-semibold text-gray-600 mb-1'>Telefone</h3>
            <p className='font-semibold text-gray-500'>{userInfo.tel}</p>
          </div>
          <div>
            <h3 className='font-semibold text-gray-600 mb-1'>Profissão</h3>
            <p className='font-semibold text-gray-500'>{userInfo.profession}</p>
          </div>
        </div>
      </div>
      <div className='flex gap-2'>
        <BtnDelete id={userInfo.id} />
                    <BtnEdit
                            id={userInfo.id}
                            name={userInfo.name}
                            email={userInfo.email}
                            cpf={userInfo.cpf}
                            rg={userInfo.rg}
                            address= {userInfo.address}
                            city= {userInfo.city}
                            tel= {userInfo.tel}
                            profession= {userInfo.profession}
                    />
                </div>
            </div>
        )
    } 
