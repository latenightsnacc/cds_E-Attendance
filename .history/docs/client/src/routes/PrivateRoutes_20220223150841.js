import React from 'react';
import { Route, Link } from 'react-router-dom';
import { uniqBy } from 'lodash';
import roles from '../config/rolesConfig';
import * as Routes from '../index'
const userRoles = [
    ...['coordinator', 'manager',],
    'member'
];
let allowedRoutes = userRoles.reduce( (acc, role) => {
    return [
        ...acc,
        ...roles[role].routes
    ]
}, []);

allowedRoutes = uniqBy(allowedRoutes, 'element');
const PrivateRoutes = ({match}) => {
    <section>
      <div>
        {
          allowedRoutes.map(({component, url}) => (
            <Route
              key={component}
              path={`${match.path}${url}`}
              component={Routes[component]}
            />
          ))
        }
      </div>
    </section>
}

export default PrivateRoutes;