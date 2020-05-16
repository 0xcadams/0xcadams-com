/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'react-emotion';

const TitleHero = styled.div`
  ${tw('flex flex-row items-center mb-4')};
`;

const styles = {
  card: {},
  media: {
    height: 215,
  },
  avatar: {
    marginRight: 10,
  },
};

const MediaCard = ({ classes, title, link, children, imageSrc, screenImageSrc }) => (
  <Card className={classes.card}>
    <CardActionArea target="_blank" href={link} rel="noopener">
      <CardMedia className={classes.media} image={screenImageSrc} title={title} />
      <CardContent>
        <TitleHero>
          <Avatar src={imageSrc} alt={title} className={classes.avatar} />
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
        </TitleHero>
        <Typography variant="subtitle1" color="textSecondary">
          {children}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  imageSrc: PropTypes.string.isRequired,
  screenImageSrc: PropTypes.string.isRequired,
};

export default withStyles(styles)(MediaCard);
