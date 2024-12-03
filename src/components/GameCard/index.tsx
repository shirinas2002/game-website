import React, { ReactElement } from 'react';
import { Game } from '../../types';
import { BROWSER, WINDOWS } from './constants';
import usePlatformIcons from '../../hooks/usePlatformIcons';
import {
  StyledLink,
  Img,
  Title,
  Details,
  Description,
  Icon,
  Genre,
} from './styles';

interface Props {
  content: Game;
}

const GameCard = ({ content }: Props): ReactElement => {
  const { id, title, thumbnail, short_description, genre, platform } = content;

  // Use the custom hook
  const platformIcons = usePlatformIcons();

  const icons = platform.split(',').map(p => {
    let icon = null;
    switch (p.trim()) {
      case BROWSER:
        icon = (
          <Icon
            key={`${id}-browser`}
            alt="browser icon"
            src={platformIcons.BROWSER}
          />
        );
        break;
      case WINDOWS:
        icon = (
          <Icon
            key={`${id}-windows`}
            alt="windows icon"
            src={platformIcons.WINDOWS}
          />
        );
        break;
      default:
        break;
    }
    return icon;
  });

  const link = `/game/${id}`;

  return (
    <StyledLink to={link}>
      <Img alt={`${title}-logo`} src={thumbnail} />
      <Details>
        <Title>{title}</Title>
        <Description>{short_description}</Description>
        <Genre>{genre}</Genre>
        {icons}
      </Details>
    </StyledLink>
  );
};

export default GameCard;
