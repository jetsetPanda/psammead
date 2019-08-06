import React from 'react';
import styled, { css } from 'styled-components';
import { bool, oneOf, shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  MEDIA_QUERY_TYPOGRAPHY,
} from '@bbc/gel-foundations/breakpoints';
import { GEL_SPACING_QUAD } from '@bbc/gel-foundations/spacings';
import { C_PEBBLE } from '@bbc/psammead-styles/colours';

import { PlainTitle, LinkTitle } from './titles';

const labelWrapperTopMargin = ({ script }) =>
  script
    ? `
        margin-top: 2rem;

        ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
          margin-top: 1rem;
        }
      `
    : `margin-top: ${GEL_SPACING_QUAD};`;

const Bar = styled.div`
  border-top: 0.0625rem solid ${C_PEBBLE};
  left: 0;
  right: 0;

  @media screen and (-ms-high-contrast: active) {
    border-color: windowText;
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    position: absolute;
    top: ${({ script }) =>
      0.5 + script.doublePica.groupD.lineHeight / 2 / 16}rem;
  }
`;

const SectionLabelWrapper = styled.div`
  position: relative;
  ${labelWrapperTopMargin};

  ${({ visuallyHidden }) =>
    visuallyHidden &&
    css`
      // Hide when under 600px
      @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
        clip-path: inset(100%);
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        overflow: hidden;
        position: absolute;
        width: 1px;
      }
    `}
`;

SectionLabelWrapper.propTypes = {
  bar: bool.isRequired,
  script: shape(scriptPropType).isRequired,
  visuallyHidden: bool.isRequired,
};

const Heading = styled.h2`
  /* reset default margins */
  margin: 0;
  padding: 0;
`;

const SectionLabel = ({
  bar,
  children: title,
  dir,
  href,
  labelId,
  linkText,
  script,
  service,
  visuallyHidden,
}) => (
  <SectionLabelWrapper
    script={script}
    bar={bar}
    visuallyHidden={visuallyHidden}
  >
    {bar && <Bar script={script} />}
    <Heading script={script}>
      {linkText && href ? (
        <LinkTitle
          dir={dir}
          href={href}
          labelId={labelId}
          linkText={linkText}
          script={script}
          service={service}
        >
          {title}
        </LinkTitle>
      ) : (
        <PlainTitle script={script} dir={dir} id={labelId} service={service}>
          {title}
        </PlainTitle>
      )}
    </Heading>
  </SectionLabelWrapper>
);

SectionLabel.defaultProps = {
  bar: true,
  dir: 'ltr',
  href: null,
  linkText: null,
  visuallyHidden: false,
};

SectionLabel.propTypes = {
  bar: bool,
  children: string.isRequired,
  dir: oneOf(['ltr', 'rtl']),
  href: string,
  labelId: string.isRequired,
  linkText: string,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  visuallyHidden: bool,
};

export default SectionLabel;
