import './styles/global.css';
import { NewClientForm } from "./components/NewClientForm"
import { ClientInform } from './components/ClientInform';
import { ListClient } from './components/ListClients';
import { useState } from 'react';
import { Check } from 'phosphor-react';
import { SeachClient } from './components/seachClient';



function App() {

  return (
    <div className="w-screen h-screen justify-center items-center">
        <SeachClient/>
        <div>
           {/*<ClientInform cpf="602323232"/> */}
           { /*<NewClientForm/> */}
           {<ListClient/>}
        </div>

    </div> 
  )
}

export default App
