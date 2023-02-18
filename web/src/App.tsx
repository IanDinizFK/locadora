import './styles/global.css';
import { TesteABC } from "./components/teste"
import { BtnDelete } from './components/btnDelete';
import { BtnEdit } from './components/btnEdit';


function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <h5 className="flex gap-2">Nome: <p>Ian Diniz</p> </h5>
        <p>Teste</p>
        <p>Teste</p>
        <p>Teste</p>
        <p>Teste</p>
        <p>Teste</p>
        <div className="items-center gap-2 flex">
          <BtnDelete/>
          <BtnEdit/>
        </div>
      </div>
        
    </div> 
  )
}

export default App
