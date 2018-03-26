import React, {
  PropTypes
} from 'react';
import {
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  Redirect
} from 'react-router';
import {
  asyncRouterMap
} from './router.data';
import {
  randomStr
} from './utils/tools';


export default function({
  history
}) {
  return (
    <Router history={history}>
      {
        asyncRouterMap.map((k,i)=>{
            return (
              <Route key={randomStr(10)} path={k.path} component={k.component}>
                {
                  k.children.map((ck,j)=>{
                    if (j == 0) return <IndexRoute key={randomStr(10)} component={ck.component} />
                    return <Route key={randomStr(10)} path={ck.path} component={ck.component}/>
                  })
                }
              </Route>
            )
        })
      }
    </Router>
  );
};