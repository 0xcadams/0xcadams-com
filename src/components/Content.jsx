import React, { useContext } from "react";
import styled, { css } from "styled-components";
import Typical from "react-typical";

import { AppContext } from "./../App/AppContext";

const sharedStyles = css`
  transition: color 0.5s linear;
  font-weight: normal;
  position: relative;
  z-index: 1;
`;

const C = {
  Name: styled.a`
    ${sharedStyles};
    font-size: 5rem;
    margin: 0 0 0 15px;
    font-weight: 600;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 4.5rem;
    }
  `,
  HexPrefix: styled.span`
    color: ${({ theme }) => theme.tertiaryTextColor};
  `,
  Title: styled.h2`
    ${sharedStyles};
    font-size: 2.2rem;
    margin: 1rem 0 6rem;
    font-weight: 300;
    padding: 0 10px;
    color: ${({ theme }) => theme.secondaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 1.5rem;
    }
    text-decoration: none;
  `,
  Link: styled.a`
    ${sharedStyles};
    text-decoration: none;
    color: ${({ theme }) => theme.secondaryTextColor};
  `,
};

export const Content = () => {
  const { theme } = useContext(AppContext);

  return (
    <div>
      <C.Name
        theme={theme}
        data-v2="name"
        aria-label="My nickname is 0xcadams"
        href="https://github.com/0xcadams"
        target="_blank"
      >
        <C.HexPrefix theme={theme}>0x</C.HexPrefix>
        <Typical steps={[2000, "cadams"]} loop={1} wrapper="span" />
      </C.Name>
      <C.Title
        theme={theme}
        data-v2="title"
        aria-label="web3 engineer @ proofofresidency, optimist, learner"
      >
        web3 engineer @{" "}
        <C.Link
          theme={theme}
          data-v2="company"
          href="https://proofofresidency.xyz"
          target="_blank"
        >
          proofofres
        </C.Link>
        , optimist, learner
      </C.Title>
    </div>
  );
};
