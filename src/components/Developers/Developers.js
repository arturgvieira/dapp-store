import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from 'components/shared/PrivateRoute';

import SubmitDapp from './SubmitDapp';

class Developers extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute component={SubmitDapp} exact path="/developers/submit" />
      </Switch>
    );
  }
}

export default Developers;