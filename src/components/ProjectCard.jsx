/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { colors } from '../../tailwind';

const Wrapper = styled.a`
  width: 100%;
  ${tw('shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 mx-auto text-white')};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-10px);
  }
`;

const Text = styled.div`
  ${tw('opacity-75 font-sans text-center text-sm md:text-base')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const TitleHero = styled.div`
  ${tw('flex flex-col lg:flex-row content-center items-center justify-center mb-4')};
`;

const Title = styled.div`
  ${tw('text-white uppercase text-2xl md:text-3xl self-center tracking-wide font-sans')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
  ${tw('w-16 xl:w-16 h-full mb-4 mr-0 md:mr-3 lg:mb-0')};
`;

const ProjectCard = ({ title, link, children, imageSrc }) => (
  <Wrapper
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    bg={colors['grey-dark']} // `linear-gradient(to right, ${colors['grey-dark']} 0%, ${colors['grey-darker']} 100%)`}
  >
    <TitleHero>
      <Image src={imageSrc} alt={title} />
      <Title>{title}</Title>
    </TitleHero>
    <Text>{children}</Text>
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  imageSrc: PropTypes.string.isRequired,
};
