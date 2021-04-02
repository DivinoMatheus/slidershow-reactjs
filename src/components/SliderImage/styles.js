import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 400px;
  background-color: transparent;
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  object-fit: cover;
`;

export const BlurredImage = styled.div`
  border: 1px solid #ccc;
  height: 100%;
  background-image: ${props => `url(${props.image})`};
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: 1000px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const Image = styled.img`
  height: 95%;
`;

export const ContainerImage = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  overflow: hidden;
  width: 600px;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
  height: 400px;
`;

export const OpacityLayer = styled.div`
  position: absolute;
  overflow: hidden;
  backdrop-filter: blur(8px);
  width: 800px;
  object-fit: cover;
  height: 400px;
  border-radius: 10px;
  background-color: #000000BB;
`;