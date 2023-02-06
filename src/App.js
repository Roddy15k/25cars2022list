import './App.css'
import Dialog from './components/Dialog'
import carArray from './25carlist2022.json'
import List from './components/Listpage'
import Comps from './components/Top2comps'

import Suvbutton from './components/TypeModel'

const App = () => {
  return (
    <div className="flex-row">
      <Dialog />
      <List carArray={carArray} />
      <Suvbutton />
      <Comps />
    </div>
  )
}

export default App
