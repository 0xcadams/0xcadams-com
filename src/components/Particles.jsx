import React, { useContext } from "react";
import styled from "styled-components";
import { Particles as ReactParticles } from "react-tsparticles";

import { AppContext } from "./../App/AppContext";

const P = {
  Container: styled.div`
    transition: background-color 0.5s linear;
    position: absolute;
    background-color: ${({ theme }) => theme.background};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: 0;
  `,
};

export const Particles = () => {
  const { theme } = useContext(AppContext);

  const OPTIONS = {
    background: {
      color: {
        value: theme.background,
      },
    },
    fullScreen: {
      zIndex: 1,
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          distance: 100,
          duration: 2,
          opacity: 0,
          size: 0,
        },
        repulse: {
          distance: 150,
        },
      },
    },
    particles: {
      color: {
        value: theme.secondaryTextColor,
      },
      links: {
        color: {
          value: "#ffffff",
        },
        distance: 150,
        opacity: 0.4,
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 600,
          },
        },
        enable: true,
        outModes: {
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        random: true,
        speed: 1,
      },
      number: {
        density: {
          enable: true,
        },
        value: 160,
      },
      opacity: {
        random: {
          enable: true,
        },
        value: {
          min: 0,
          max: 1,
        },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0,
        },
      },
      size: {
        random: {
          enable: true,
        },
        value: {
          min: 1,
          max: 2,
        },
      },
    },
  };

  return (
    <P.Container theme={theme}>
      <ReactParticles width="100vw" height="100vh" options={OPTIONS} />
    </P.Container>
  );
};
