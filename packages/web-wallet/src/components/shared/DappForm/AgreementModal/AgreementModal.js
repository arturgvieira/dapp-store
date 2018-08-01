import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/shared/Modal';
import FormRow from 'components/shared/FormRow';
import CheckboxInput from 'components/shared/CheckboxInput';
import Button from 'components/shared/Button';

import { Content, ControlRow, Header, Paragraph, ActionsRow } from './styles';

class AgreementModal extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    isConfirming: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const {
      handleSubmit, isConfirming, isOpen, onCancel, t,
    } = this.props;

    return (
      <Modal
        contentLabel="Agreement Modal"
        fluid
        isClosable={false}
        isOpen={isOpen}
        shouldCloseOnOverlayClick={false}
        title={t('dappForm.agreementModal.title')}
      >
        <Content onSubmit={handleSubmit}>
          <Header>{t('dappForm.agreementModal.header')}</Header>

          {t('dappForm.agreementModal.text')
            .split('\n')
            .map((line, index) => <Paragraph key={index}>{line}</Paragraph>)}

          <ControlRow>
            <FormRow
              name="agree"
              component={CheckboxInput}
              inputProps={{
                label: t('dappForm.agreementModal.agree'),
              }}
            />
          </ControlRow>

          <ActionsRow>
            <Button
              disabled={isConfirming}
              isLoading={isConfirming}
              type="submit"
              wide
            >
              {t('dappForm.agreementModal.submitButton')}
            </Button>
            <Button onClick={onCancel} type="button" theme="text" wide>
              {t('shared.cancel')}
            </Button>
          </ActionsRow>
        </Content>
      </Modal>
    );
  }
}

export default AgreementModal;