import data from './assets/data.json'
import List from './List/List'

const App = () => {
  return (
    <div>
     <List array={data}/>
    </div>
  )
}

export default App