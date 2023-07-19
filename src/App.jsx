import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
export const AppContext = createContext()
import data from './assets/data.json'
import Main from './layouts/Main/Main'
import List from './pages/List/List'
import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <List array={data} />,
        errorElement: <Error />,
      },
      
    ],
  },
])
function App() {
  
  return (
    <div className='App'>
      <AppContext.Provider
        value={{}}
      >
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
