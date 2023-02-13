import './styles/global.css';
import { TesteABC } from "./components/teste"


function App() {
  return (
    <div>
      <TesteABC completed={3}/>
      <TesteABC completed={3}/>
      <TesteABC completed={3}/>
    </div>
    
  )
}

export default App
