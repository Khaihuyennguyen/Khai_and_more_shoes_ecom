import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';

const Sidebar = () => {
  return (
    <Wrapper>
      <Link href="/types">Types</Link>
      <Link href="/Materials">Materials</Link>
      <ActiveLink href="/running">Colors</ActiveLink>
      <Link href="/OurStory">Our Stories</Link>
      <Link href="/howitworks">How it works</Link>
      <Link href="/contactus">Contact Us</Link>
      <Link href="/faq">FAQ's</Link>
    </Wrapper>
  );
};

const Wrapper = styled.aside``;

const Link = styled.a`
  display: block;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
  line-height: 2;
`;

const ActiveLink = styled(Link)`
  color: ${COLORS.primary};
`;

export default Sidebar;
