import './App.css'
import {BrowserRouter} from 'react-router-dom'
import UserRoutes from './router/Index'

function App() {

  return (
    <>
      <BrowserRouter>
        <UserRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
