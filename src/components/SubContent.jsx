import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { AppContext } from "./../App/AppContext";

const sharedStyles = css`
  transition: color 0.5s linear;
  font-weight: normal;
  position: relative;
  z-index: 1;
`;

const C = {
  Title: styled.h2`
    ${sharedStyles};
    font-size: 1.1rem;
    margin: 1.6rem 0 6rem;
    font-weight: 300;
    color: ${({ theme }) => theme.secondaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 0.9rem;
    }
    text-decoration: none;
  `,
  Link: styled.a`
    ${sharedStyles};
    text-decoration: none;
    color: ${({ theme }) => theme.secondaryTextColor};
  `,
};

export const SubContent = () => {
  const { theme } = useContext(AppContext);

  return (
    <div>
      <C.Title theme={theme}>
        <C.Link
          theme={theme}
          data-v2="research"
          href="https://scholar.google.com/citations?user=mCFBgl0AAAAJ&hl=en"
          target="_blank"
          aria-label="Google scholar link"
        >
          research
        </C.Link>
        ,{" "}
        <C.Link
          theme={theme}
          data-v2="ethereum"
          href="https://etherscan.io/address/0xa678c0342cc2ad21b084923b995a63cd5d439b5b"
          target="_blank"
          aria-label="Ethereum address"
        >
          eth
        </C.Link>
        ,{" "}
        <C.Link
          theme={theme}
          data-v2="education"
          href="https://isearch.asu.edu/profile/1642683"
          target="_blank"
          aria-label="education"
        >
          education
        </C.Link>
      </C.Title>
    </div>
  );
};
