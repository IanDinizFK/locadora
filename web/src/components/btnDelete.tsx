import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import '../styles/btnDelete.css';

export function BtnDelete(){
    return(
            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <button className="Button violet">Deletar conta</button>
              </AlertDialog.Trigger>
              <AlertDialog.Portal>
                <AlertDialog.Overlay className="AlertDialogOverlay" />
                <AlertDialog.Content className="AlertDialogContent">
                  <AlertDialog.Title className="AlertDialogTitle">Você realmente tem certeza disso?</AlertDialog.Title>
                  <AlertDialog.Description className="AlertDialogDescription">
                    Essa ação não tem volta e será deletada diretamente do seu banco de dados.
                  </AlertDialog.Description>
                  <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                    <AlertDialog.Cancel asChild>
                      <button className="Button mauve">Cancelar</button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                      <button className="Button red">Sim, deletar a conta</button>
                    </AlertDialog.Action>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
            
          
    )
}


