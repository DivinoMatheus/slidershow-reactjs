import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SliderImage from '../SliderImage'
import { Container, Content, PreviousButton, NextButton, Footer, FooterImage } from './styles';

function Slidershow({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMaxNext = ((selectedIndex + 1) === images.length);
  const isMaxPrevious = (selectedIndex === 0);

  function nextImage() {
    return setSelectedIndex(selectedIndex + 1)
  }

  function previousImage() {
    return setSelectedIndex(selectedIndex - 1)
  }

  function selectImage(index) {
    return setSelectedIndex(index);
  }

  return (
    <Container>
      <Content>
        {!isMaxPrevious && (
          <PreviousButton onClick={previousImage}>
            <FiChevronLeft />
          </PreviousButton>
        )}
        <SliderImage image={images[selectedIndex]} />
        {!isMaxNext && (
          <NextButton onClick={nextImage}>
            <FiChevronRight />
          </NextButton>
        )}
      </Content>
      <Footer>
        {images.map((image, index) => <FooterImage key={index} src={image.source} active={index === selectedIndex} onClick={() => selectImage(index)} />)}
      </Footer>
    </Container>
  );
}

export default Slidershow;