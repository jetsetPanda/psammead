import styled from 'styled-components';
import { shape, string, bool } from 'prop-types';
import { C_SHADOW, C_WHITE } from '@bbc/psammead-styles/colours';
import { GEL_SPACING_TRPL } from '@bbc/gel-foundations/spacings';
import { getBodyCopy } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const Paragraph = styled.p`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${({ darkMode }) => (darkMode ? C_WHITE : C_SHADOW)};
  padding-bottom: ${GEL_SPACING_TRPL};
  margin: 0; /* Reset */
`;

Paragraph.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  darkMode: bool,
};

Paragraph.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  darkMode: false,
};

export default Paragraph;
