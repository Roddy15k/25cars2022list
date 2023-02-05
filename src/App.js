import './App.css'
import Dialog from './components/Dialog'
import carArray from './25carlist2022.json'
import List from './components/Listpage'
import Types from './components/Types'

const App = () => {
  return (
    <div className="flex-row">
      <Dialog />
      <List carArray={carArray} />
    </div>
  )
}

export default App
