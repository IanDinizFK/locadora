import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import '../styles/BtnEdit.css';
import {Plus, X} from 'phosphor-react'

export function BtnEdit(){
    return(
        <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet" size="large">
        Editar Perfil
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="w-screen h-screen bg-black/20 fixed inset-0" />
      <Dialog.Content className="absolute p-10 bg-white rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Dialog.Title className="DialogTitle">Editar Cadastro</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Para salvar as alterações clique no botão abaixo.
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Nome
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Email
          </label>
          <input className="Input" id="username" defaultValue="exemplo@gmail.com" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            RG
          </label>
          <input className="Input" id="username" defaultValue="465.268-10" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            CPF
          </label>
          <input className="Input" id="username" defaultValue="000.111.222-10" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Endereço
          </label>
          <input className="Input" id="username" defaultValue="Rua Campinas, 75" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Telefone
          </label>
          <input className="Input" id="username" defaultValue="(83)98235-6577" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Profissão
          </label>
          <input className="Input" id="username" defaultValue="Agente de empregos" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <button className="Button green w-screen h-screen">Salvar alterações</button>
          </Dialog.Close>
        </div>
        <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
              <X size={24} arial-label="Fechar"/>
            </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
    )
}