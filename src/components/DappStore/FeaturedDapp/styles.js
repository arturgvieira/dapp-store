import styled from 'styled-components';

import Button from 'components/shared/Button';
import Pane from 'components/shared/Pane';
import Pic from 'components/shared/Pic';
import {
  colors,
  fontSizes,
  breakpoints,
  lineHeights,
} from 'components/shared/Styleguide';

export const Container = styled(Pane)`
  margin: 60px 0;

  @media screen and (min-width: ${breakpoints.md}) {
    margin: 0;
  }
`;

export const Content = styled(Pane.Section)`
  padding: 0 50px;
  text-align: center;
`;

export const AppPic = styled(Pic)`
  margin: 0 auto 20px;
  transform: translateY(-12px);
`;

export const Footer = styled(Pane.Footer)`
  justify-content: flex-end;
`;

export const ReadMoreButton = styled(Button)`
  margin: 0 10px;
`;

export const Title = styled.p`
  color: ${colors.textLight};
  font-size: 15px;
  margin: 0 0 5px;
`;

export const AppName = styled.p`
  color: ${colors.textDefault};
  font-size: ${fontSizes.heading};
  font-weight: 700;
  margin: 0 0 15px;
`;

export const AppTagline = styled.p`
  color: ${colors.textDefault};
  font-size: ${fontSizes.paneCaption};
  margin: 0 0 30px;
  line-height: ${lineHeights.default};
`;
