import {Routes,Route} from 'react-router-dom';
import { Fragment, Suspense } from 'react';
import DashboardLayout from '../pages/layouts/Index';
import { routeList } from '../utils/constants/routes';
import { routeType } from '../types';
import NotFound from '../pages/not-found/NotFound';

const UserRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<DashboardLayout/>}>
            {
              routeList.map((link:routeType,index:number)=>(
                <Fragment key={index}>
                  <Route path={link.path} element={<link.page/>}/>
                </Fragment>
              ))
            }
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Suspense>
  )
}

export default UserRoutes