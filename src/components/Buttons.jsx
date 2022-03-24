import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from './../App/AppContext';
import { GitHub, LinkedIn, Twitter, Email, Medium } from './../icons';

const Container = styled.div`
  a,
  a:active,
  a:hover {
    outline: 0;
  }

  .button-container {
    display: inline-block;
    height: 6rem;
    width: 6rem;
    margin: 0 1.75rem;
  }

  .button {
    transition: color 0.5s linear;
    height: 6rem;
    width: 6rem;
    color: ${({ theme }) => theme.primaryTextColor};
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    position: relative;
    z-index: 1;
    border-radius: 25%;
  }

  .icon {
    height: 4.5rem;
    width: 4.5rem;
    padding: 1rem;
  }

  .button:active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  .button-container:hover .icon {
    box-shadow: 0 0 0.25rem 0.25rem rgba(128, 128, 128, 0.25);
  }

  @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
    .button-container {
      height: 4rem;
      width: 4rem;
      margin: 0 0.8rem;
    }

    .button {
      height: 4rem;
      width: 4rem;
    }

    .icon {
      height: 3rem;
      width: 3rem;
      padding: 0.5rem;
    }
  }
`;

export const Buttons = () => {
  const { theme } = useContext(AppContext);

  const DATA = [
    {
      href: 'https://github.com/0xcadams',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      label: 'GitHub',
    },
    {
      href: 'https://twitter.com/0xcadams',
      aria: 'Visit my Twitter profile',
      icon: <Twitter />,
      label: 'Twitter',
    },
    {
      href: 'https://www.linkedin.com/in/0xcadams',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      label: 'LinkedIn',
    },
    {
      href: 'https://0xcadams.medium.com',
      aria: 'Visit my Medium profile',
      icon: <Medium />,
      label: 'LinkedIn',
    },
    {
      href: 'mailto:me@0xcadams.com',
      aria: 'Send me an email with this template',
      icon: <Email />,
      label: 'Email',
    },
  ];

  return (
    <Container theme={theme}>
      {DATA.map(({ href, aria, icon, label }, i) => (
        <span className='button-container' key={i}>
          <a className='button' href={href} target='_blank' aria-label={aria} rel='noopener noreferrer'>
            <div className='icon'>{icon}</div>
          </a>
        </span>
      ))}
    </Container>
  );
};
