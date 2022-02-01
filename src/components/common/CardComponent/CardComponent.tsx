import React from 'react';
import { Wrapper, CardStyle, ContentStyle } from '../../../theme';

const CardComponent: React.FunctionComponent = (props) => {
  return (
    <Wrapper>
      <CardStyle>
        <ContentStyle>{props.children}</ContentStyle>
      </CardStyle>
    </Wrapper>
  );
};

export default CardComponent;