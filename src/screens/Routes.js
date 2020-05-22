import React, { Suspense, lazy } from 'react'
import {Route, Switch} from 'react-router-dom'

const AsyncList = lazy(() => import('./list/List'))
const AsyncDetails = lazy(() => import('./details/Details'))

class Routes extends React.Component {

  render() {

    return (
      <Suspense fallback={ <div></div> }>
        <Switch>
          <Route exact path="/case/:id" component={AsyncDetails} />
          <Route exact path="/" component={AsyncList} />
        </Switch>
      </Suspense>     
    );
  }
}

export default Routes;
