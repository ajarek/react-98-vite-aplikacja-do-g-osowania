import data from './assets/data.json'
import List from './List/List'
import Header from './Header/Header'

const App = () => {
 
  return (
    <div>
      <Header/>
     <List array={data}  />
    </div>
  )
}

export default App