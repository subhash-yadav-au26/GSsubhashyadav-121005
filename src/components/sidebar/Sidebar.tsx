import "./Sidebar.css"
import { NavLink } from 'react-router-dom'
import companyLogo from '../../assets/company-logo.svg';
import { routeList } from "../../utils/constants/routes";
import { routeType } from "../../types";

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <img src={companyLogo} alt="company-logo" className="company-logo" />
            <nav>
                <ul>
                    {
                        routeList.map((link:routeType,index: number) => (
                            <div className="sub-link" key={index}>
                                <li>
                                    <NavLink to={link.path}  className={({ isActive }) => (isActive ? "active" : "")}>
                                        <div className="sub-text-icon">
                                            <link.icon className="icons" size={20}/>
                                            <span>{link.name}</span>
                                        </div>
                                    </NavLink>
                                </li>
                            </div>
                            
                        ))
                    }
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar