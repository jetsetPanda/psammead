import styled from '@emotion/styled';
import { number, bool } from 'prop-types';
import { C_LUNAR, C_SHADOW } from '@bbc/psammead-styles/colours';
import { BBC_BLOCKS, BBC_BLOCKS_DARK_MODE } from '@bbc/psammead-assets/svgs';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

const bgImageDark = `url(data:image/svg+xml;base64,${BBC_BLOCKS_DARK_MODE})`;
const bgImageRegular = `url(data:image/svg+xml;base64,${BBC_BLOCKS})`;

const ImagePlaceholder = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  background-color: ${({ darkMode }) => (darkMode ? C_SHADOW : C_LUNAR)};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 60px 17px;
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    background-size: 77px 22px;
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    background-size: 93px 27px;
  }

  padding-bottom: ${props => props.ratio}%;
  width: 100%;
  background-image: ${({ darkMode }) =>
    darkMode ? bgImageDark : bgImageRegular};
`;

ImagePlaceholder.propTypes = {
  ratio: number.isRequired,
  darkMode: bool,
};

ImagePlaceholder.defaultProps = {
  darkMode: false,
};

export default ImagePlaceholder;
