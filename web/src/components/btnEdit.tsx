import React, { FormEvent, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import '../styles/BtnEdit.css';
import { X } from 'phosphor-react'
import { api } from '../lib/axios';



interface UserInfo {
  id: string;
  email: string;
  name: string;
  cpf: string;
  rg: string;
  address: string;
  city: string;
  tel: string;
  profession: string;

}

export function BtnEdit(props: any) {
  const [userInfo, setUserInfo] = useState({...props});
  useEffect(() => {
    setUserInfo({ ...props });
  }, [props]);
  async function attUserInfo(event: FormEvent) {
    
    
    console.log("CHAMOU")
    console.log(userInfo)

    /** await api.post('/upClient/' + id + '/', {
       userInfo
     }) */

    alert('Hábito Criado com sucesso');
  }


  

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">
          Editar Perfil
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/20 fixed inset-0" />
        <Dialog.Content className="absolute p-10 bg-white rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="DialogTitle">Editar Cadastro</Dialog.Title>
          <label className='text-black'>ID: {props.id}</label>
          <Dialog.Description className="DialogDescription top-1/2 left-1/2  -translate-y-1/2 ">
            Para salvar as alterações clique no botão abaixo.
          </Dialog.Description>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Nome
              </label>
              <input className="Input" id="name" value={userInfo.name} onChange={event => setUserInfo({ ...userInfo, name: event.target.value })} />
              
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="email">
                Email
              </label>
              <input className="Input" id="email" value={userInfo.email} onChange={event => setUserInfo({ ...userInfo, email: event.target.value })} />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="rg">
                RG
              </label>
              <input className="Input" id="rg" value={userInfo.rg} onChange={event => setUserInfo({ ...userInfo, rg: event.target.value })} />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="cpf">
                CPF
              </label>
              <input className="Input" id="cpf" value={userInfo.cpf} onChange={event => setUserInfo({ ...userInfo, cpf: event.target.value })} />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="address">
                Endereço
              </label>
              <input className="Input" id="address" value={userInfo.address} onChange={event => setUserInfo({ ...userInfo, address: event.target.value })} />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="tel">
                Telefone
              </label>
              <input className="Input" id="tel" value={userInfo.tel} onChange={event => setUserInfo({ ...userInfo, tel: event.target.value })} />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="profession">
                Profissão
              </label>
              <input className="Input" id="profession" value={userInfo.profession} onChange={event => setUserInfo({ ...userInfo, profession: event.target.value })} />
            </fieldset>
            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
              <Dialog.Close asChild>
                <button className="Button green w-screen h-screen" onClick={attUserInfo}>Salvar alterações</button>
              </Dialog.Close>
            </div>
          <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
            <X size={24} arial-label="Fechar" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}