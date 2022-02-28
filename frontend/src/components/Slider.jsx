import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { sliderInfo } from "../data";
import { useState } from "react";

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
  z-index: 2;
`;

const ImageWrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideMove * -100}vw);
  transition: all 1.5s ease;
`;

const ImageSlide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 800px;
  max-height: 500px;
  object-fit: contain;
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
  const [slideMove, setSlideMove] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideMove(slideMove > 0 ? slideMove - 1 : 1);
    } else {
      setSlideMove(slideMove < 1 ? slideMove + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>
      <ImageWrapper slideMove={slideMove}>
        {sliderInfo.map((item) => (
          <ImageSlide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <TextContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>SHOP NOW</Button>
            </TextContainer>
          </ImageSlide>
        ))}
      </ImageWrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
};

export default Slider;
