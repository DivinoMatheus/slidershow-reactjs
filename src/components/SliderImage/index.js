import React from 'react';
import { Container, ContainerImage, BlurredImage, Image, OpacityLayer } from './styles';

function SliderImage({ image, onClick }) {
  return (
    <Container onClick={onClick}>
      <BlurredImage image={image.source} />
      <ContainerImage>
        <Image src={image.source} />
      </ContainerImage>
      <OpacityLayer />
    </Container>
  );
}

export default SliderImage;