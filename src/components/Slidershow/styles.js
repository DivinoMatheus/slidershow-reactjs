import styled from 'styled-components';
export const Container = styled.div`
  position: relative;
  max-width: 800px;
  max-height: 500px;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  width: 800px;
`;

export const PreviousButton = styled.button`
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background-color: #DDD;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  border-radius: 100%;
  border: none;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.32);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.32);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.32);

  svg {
    font-size: 23px;
    color: #555;
  }

  &:focus { 
    outline: none;
  }

  &:hover { 
    cursor: pointer;
  }

  &:active { 
    background-color: #AAA;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  z-index: 5;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: #DDD;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  border-radius: 100%;
  border: none;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.32);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.32);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.32);

  svg {
    font-size: 23px;
    color: #555;
  }

  &:focus { 
    outline: none;
  }

  &:hover { 
    cursor: pointer;
  }

  &:active { 
    background-color: #AAA;
  }
`;

export const Footer = styled.div`
  display: flex;
  height: 120px;
  width: 100%;
  min-width: 500px;
  max-width: 800px;
  align-items: center;
  padding-left: 5px;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #DADADA;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
    cursor: pointer;
  }
`;


export const FooterImage = styled.img`
  height: 90px;
  width: 90px;
  object-fit: cover;
  border-radius: 3px;
  margin-right: 5px;
  border: 2px solid ${props => props.active ? '#3498db' : '#bbb'};

  &:hover { 
    cursor: pointer;
    opacity: ${props => props.active ? 1 : 0.8};
  }
`;

