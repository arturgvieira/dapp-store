import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';

import Button from 'components/shared/Button';
import ConfirmationModal from 'components/shared/ConfirmationModal';

import AppDepositForm from './AppDepositForm';
import { ButtonRow, AppBalance, AppBalanceAmount } from './styles';

class BalanceButtons extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    appAccount: PropTypes.object,
    isAppOpening: PropTypes.bool,
    isAuthorized: PropTypes.bool.isRequired,
    mobiAppBalance: PropTypes.number.isRequired,
    openDapp: PropTypes.func.isRequired,
    releaseAppBalance: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isAppOpening: false,
    mobiAppBalance: 0,
  };

  state = {
    depositFormActive: false,
    submitReserveConfirmationVisible: false,
  };

  showDepositForm = () => {
    this.setState({ depositFormActive: true });
  };

  hideDepositForm = () => {
    this.setState({ depositFormActive: false });
  };

  toggleSubmitReserveConfirmation = () => this.setState({
    submitReserveConfirmationVisible: !this.state
      .submitReserveConfirmationVisible,
  });

  handleGoToAppClick = () => {
    const { app, openDapp, appAccount } = this.props;

    if (isNil(appAccount)) {
      this.toggleSubmitReserveConfirmation();

      return;
    }

    openDapp(app);
  };

  handleConfirmation = () => {
    const { app, openDapp } = this.props;

    this.setState({ submitReserveConfirmationVisible: false }, () => openDapp(app));
  };

  render() {
    const { depositFormActive, submitReserveConfirmationVisible } = this.state;

    const {
      app,
      isAppOpening,
      isAuthorized,
      mobiAppBalance,
      releaseAppBalance,
      t,
    } = this.props;

    return (
      <Fragment>
        <ButtonRow>
          {isAuthorized ? (
            <Button
              fullWidth
              isLoading={isAppOpening}
              onClick={this.handleGoToAppClick}
            >
              {t('balanceButtons.goToAppButton')}
            </Button>
          ) : (
            <Button fullWidth to="/login">
              {t('balanceButtons.goToAppUnauthorizedButton')}
            </Button>
          )}
        </ButtonRow>

        <ButtonRow>
          {depositFormActive ? (
            <AppDepositForm app={app} onSuccess={this.hideDepositForm} />
          ) : (
            <Button fullWidth onClick={this.showDepositForm} theme="secondary">
              {t('balanceButtons.depositFunds')}
            </Button>
          )}
        </ButtonRow>

        {mobiAppBalance > 0 && (
          <ButtonRow>
            <Button
              fullWidth
              isLoading={releaseAppBalance.loading}
              onClick={releaseAppBalance.mutate}
              theme="secondary"
            >
              {t('balanceButtons.releaseFunds')}
            </Button>
          </ButtonRow>
        )}

        <AppBalance>
          {t('balanceButtons.balance')}
          <AppBalanceAmount>{mobiAppBalance} MOBI</AppBalanceAmount>
        </AppBalance>

        <ConfirmationModal
          isConfirming={isAppOpening}
          isOpen={submitReserveConfirmationVisible}
          onCancel={this.toggleSubmitReserveConfirmation}
          onConfirm={this.handleConfirmation}
          title={t('balanceButtons.submitReserveConfirmationTitle')}
        >
          {t('balanceButtons.submitReserveConfirmationText')}
        </ConfirmationModal>
      </Fragment>
    );
  }
}

export default BalanceButtons;
