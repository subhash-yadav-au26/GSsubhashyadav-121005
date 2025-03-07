import {Routes,Route} from 'react-router-dom';
import { Fragment, Suspense } from 'react';
import DashboardLayout from '../pages/layouts/Index';
import { routeList } from '../utils/constants/routes';
import { routeType } from '../types';

const UserRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <DashboardLayout>
          <Routes>
            {
              routeList.map((link:routeType,index:number)=>(
                <Fragment key={index}>
                  <Route path={link.path} element={<link.page/>}/>
                </Fragment>
              ))
            }
          </Routes>
        </DashboardLayout>
    </Suspense>
  )
}

export default UserRoutes