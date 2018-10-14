/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { width as twWidth } from '../../tailwind';

const Wrapper = styled.svg`
  ${tw('stroke-current absolute')};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`;

const icons = {
  cloud: {
    shape: (
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    ),
    viewBox: '-1 0 30 30',
  },
  fav: {
    shape: (
      <path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
    ),
    viewBox: '0 0 24 24',
  },
  world: {
    shape: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    ),
    viewBox: '0 0 30 30',
  },
  wifi: {
    shape: (
      <path d="M2.06 10.06c.51.51 1.32.56 1.87.1 4.67-3.84 11.45-3.84 16.13-.01.56.46 1.38.42 1.89-.09.59-.59.55-1.57-.1-2.1-5.71-4.67-13.97-4.67-19.69 0-.65.52-.7 1.5-.1 2.1zm7.76 7.76l1.47 1.47c.39.39 1.02.39 1.41 0l1.47-1.47c.47-.47.37-1.28-.23-1.59-1.22-.63-2.68-.63-3.91 0-.57.31-.68 1.12-.21 1.59zm-3.73-3.73c.49.49 1.26.54 1.83.13 2.44-1.73 5.72-1.73 8.16 0 .57.4 1.34.36 1.83-.13l.01-.01c.6-.6.56-1.62-.13-2.11-3.44-2.49-8.13-2.49-11.58 0-.69.5-.73 1.51-.12 2.12z" />
    ),
    viewBox: '0 0 30 30',
  },
  code: {
    shape: (
      <path d="M8.7 15.9L4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.4zm6.6 0l3.9-3.9-3.9-3.9c-.39-.39-.39-1.01 0-1.4.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0-.39-.39-.39-1.01 0-1.4z" />
    ),
    viewBox: '0 0 30 42',
  },
  content: {
    shape: (
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 9h10.5v3.5H4V9zm0 5.5h10.5V18H5c-.55 0-1-.45-1-1v-2.5zM19 18h-2.5V9H20v8c0 .55-.45 1-1 1z" />
    ),
    viewBox: '0 0 30 44.58',
  },
  mac: {
    shape: (
      <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM5 5h14c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1zm7 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    ),
    viewBox: '-1 0 30 30',
  },
  phone: {
    shape: (
      <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
    ),
    viewBox: '-1 0 30 30',
  },
};

const SVG = ({ stroke, fill, width, icon, left, top, className }) => (
  <Wrapper
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    fill={fill}
    svgWidth={twWidth[`${width}`]}
    left={left}
    top={top}
    className={className}
  >
    {icons[icon].shape}
  </Wrapper>
);

export default SVG;

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf(['cloud', 'fav', 'world', 'wifi', 'code', 'content', 'mac', 'phone']).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  className: PropTypes.string,
};

SVG.defaultProps = {
  stroke: 'transparent',
  width: 8,
  fill: 'none',
  left: '0%',
  top: '0%',
  className: 'fancy-icon',
};
