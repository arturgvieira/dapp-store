import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faGithub,
  faMedium,
} from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/fontawesome-free-regular';

import Modal from 'components/shared/Modal';

import {
  KakaoTalkLink,
  ListContainer,
  ListItem,
  SocialLink,
  WeChatButton,
  WeChatModalContent,
  WeChatQrCode,
} from './styles';

const socialUrls = {
  twitter: 'https://twitter.com/mobius_network',
  facebook: 'https://www.facebook.com/mobiusnet',
  github: 'https://github.com/mobius-network',
  medium: 'https://medium.com/mobius-network',
  email: 'mailto:hello@mobius.network',
};

class SocialLinks extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  state = {
    isWeChatModalVisible: false,
  };

  toggleWeChatModal = () => this.setState({ isWeChatModalVisible: !this.state.isWeChatModalVisible });

  render() {
    const { t } = this.props;
    const { isWeChatModalVisible } = this.state;

    return (
      <Fragment>
        <ListContainer>
          <ListItem>
            <SocialLink href={socialUrls.twitter} title="Twitter">
              <FontAwesomeIcon fixedWidth icon={faTwitter} size="lg" />
            </SocialLink>
          </ListItem>

          <ListItem>
            <SocialLink href={socialUrls.facebook} title="Facebook">
              <FontAwesomeIcon fixedWidth icon={faFacebook} size="lg" />
            </SocialLink>
          </ListItem>

          <ListItem>
            <SocialLink href={socialUrls.github} title="Github">
              <FontAwesomeIcon fixedWidth icon={faGithub} size="lg" />
            </SocialLink>
          </ListItem>

          <ListItem>
            <SocialLink href={socialUrls.medium} title="Medium">
              <FontAwesomeIcon fixedWidth icon={faMedium} size="lg" />
            </SocialLink>
          </ListItem>

          <ListItem>
            <SocialLink href={socialUrls.email}>
              <FontAwesomeIcon fixedWidth icon={faEnvelope} size="lg" />
            </SocialLink>
          </ListItem>
        </ListContainer>

        <Modal
          closeButton
          contentLabel="WeChat QR Code Modal"
          fluid
          isOpen={isWeChatModalVisible}
          onRequestClose={this.toggleWeChatModal}
          title={t('socialLinks.weChatModalTitle')}
        >
          <WeChatModalContent>
            <WeChatQrCode />
          </WeChatModalContent>
        </Modal>
      </Fragment>
    );
  }
}

export default SocialLinks;
