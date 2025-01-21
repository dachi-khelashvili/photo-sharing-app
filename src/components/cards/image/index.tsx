import React from 'react';
import { Container, Image, Footer, Title, Group } from './styles';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { THEME } from 'consts';
import { IconButton } from 'components';

export type PhotoType = {
  path: string;
  uploader: string;
  description: string;
};

type ImageCardProps = {
  photo: PhotoType;
  show: boolean;
  like: number;
  onClick: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
};

export const ImageCard: React.FC<ImageCardProps> = ({
  photo,
  show,
  like,
  onClick,
  onClickLike,
  onClickDislike,
}) => {
  return (
    <Container>
      <Image src={photo.path} alt={photo.path} onClick={onClick} />
      <Footer>
        <Title>{photo.uploader}</Title>
        {show && (
          <Group>
            <IconButton onClick={onClickLike}>
              <ThumbsUp size={16} color={THEME.COLORS.BORDER.GREEN} />
            </IconButton>
            <IconButton onClick={onClickDislike}>
              <ThumbsDown size={16} color={THEME.COLORS.BORDER.RED} />
            </IconButton>
            {like}
          </Group>
        )}
      </Footer>
    </Container>
  );
};
