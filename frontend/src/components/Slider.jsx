import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import main from "../Images/main.png";
import main2 from "../Images/main2.jpeg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightgray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
`;

const ImageWrapper = styled.div`
  height: 100%;
  display: flex;
`;

const ImageSlide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 70%;
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>
      <ImageWrapper>
        <ImageSlide>
          <ImageContainer>
            <Image src={main} alt="main" />
          </ImageContainer>
          <TextContainer>
            <Title>Durable Paracord Cables</Title>
            <Description>Choose a Paracable that suits you!</Description>
            <Button>SHOP NOW</Button>
          </TextContainer>
        </ImageSlide>
        <ImageSlide>
          <ImageContainer>
            <Image src={main2} alt="main" />
          </ImageContainer>
          <TextContainer>
            <Title>Durable Paracord Cables</Title>
            <Description>Choose a Paracable that suits you!</Description>
            <Button>SHOP NOW</Button>
          </TextContainer>
        </ImageSlide>
      </ImageWrapper>
      <Arrow direction="right">
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
};

export default Slider;
