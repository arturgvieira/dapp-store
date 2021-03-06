import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import DappItem from './DappItem';

class DappList extends Component {
  static propTypes = {
    apps: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
    loadApps: PropTypes.object.isRequired,
  };

  render() {
    const { apps } = this.props;

    return (
      <Fragment>
        {apps.map(app => (
          <DappItem key={app.id} app={app} />
        ))}
      </Fragment>
    );
  }
}

export default DappList;
