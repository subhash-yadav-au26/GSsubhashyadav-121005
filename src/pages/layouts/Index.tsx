import './Index.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'

const Layout = ({children}:any) => {
  return (
    <div className='container'>
        <Sidebar/>
        <div className='main-content'>
          <Header/>
          <div className='content'>{children}</div>
        </div>
    </div>
  )
}

export default Layout