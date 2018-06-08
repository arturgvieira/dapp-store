import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import Button from 'components/shared/Button';

export default class DownloadKeypair extends Component {
  static propTypes = {
    downloadKeypair: PropTypes.func.isRequired,
  };

  render() {
    const { downloadKeypair } = this.props;

    return (
      <Pane theme="wide" withGradient>
        <Pane.Header
          title="Download Your Key Pair"
          caption="You will need your key pair file in order to login to you wallet in the future.
            Store it in a safe place."
        />

        <Pane.Section>
          <Button theme="secondary" onClick={downloadKeypair} fullWidth>
            Download Now
          </Button>
        </Pane.Section>
      </Pane>
    );
  }
}
