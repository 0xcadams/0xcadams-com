import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import { AppContext } from './../App/AppContext';

const sharedStyles = css`
  transition: color 0.5s linear;
  font-weight: normal;
  position: relative;
  z-index: 1;
`;

const C = {
  Name: styled.h1`
    ${sharedStyles};
    font-size: 6rem;
    margin: 0;
    font-weight: 600;
    color: ${({ theme }) => theme.primaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 4.5rem;
    }
  `,
  Title: styled.h2`
    ${sharedStyles};
    font-size: 2.2rem;
    margin: 1rem 0 6rem;
    font-weight: 300;
    color: ${({ theme }) => theme.secondaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 1.5rem;
    }
  `,
};

export const Content = () => {
  const { theme } = useContext(AppContext);

  return (
    <div>
      <C.Name theme={theme} data-v2='name' aria-label='My name is Chase Adams'>Chase Adams</C.Name>
      <C.Title theme={theme} data-v2='title' aria-label='An unusual affinity for code and a passion for learning'>An unusual affinity for code and a passion for learning.</C.Title>
    </div>
  );
};
