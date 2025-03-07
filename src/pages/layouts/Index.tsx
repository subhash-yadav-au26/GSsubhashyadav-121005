import './Index.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <div className='container'>
        <Sidebar/>
        <div className='main-content'>
          <Header/>
          <div className='content'><Outlet/></div>
        </div>
    </div>
  )
}

export default Layout