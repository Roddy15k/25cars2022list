import './App.css'
import Dialog from './components/Dialog'
import carArray from './25carlist2022.json'
import List from './components/Listpage'

import Suvbutton from './components/TypeModel'

const App = () => {
  return (
    <div className="flex-row">
      <Dialog />
      <List carArray={carArray} />

      <Suvbutton />
    </div>
  )
}

export default App
