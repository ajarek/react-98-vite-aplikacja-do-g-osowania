import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
export const AppContext = createContext()
import data from './assets/data.json'
import Main from './layouts/Main/Main'
import List from './pages/List/List'
import Result from './pages/Result/Result'
import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <List/>,
        errorElement: <Error />,
      },
      {
        path: '/wyniki',
        element: <Result />,
        errorElement: <Error />,
      },
      
    ],
  },
])
function App() {
  const [selectedOption, setSelectedOption] = useState();
  const [range, setRange] = useState([]);
  return (
    <div className='App'>
      <AppContext.Provider
        value={{selectedOption, setSelectedOption, range, setRange, data }}
      >
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
