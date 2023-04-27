import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import Spacer from '../Spacer';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $100!
      </MarketingMessage>
      <SearchInput />
      <Spacer size={24}/>
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  min-height: 40px;
  padding-left: 32px;
  padding-right: 32px;
  `;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
  
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;
  margin-left: 24px;
  margin-right: 24px;
  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
