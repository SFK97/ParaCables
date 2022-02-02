import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: lightpink;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpecialOffer = () => {
  return (
    <Container>Limited Time Offer! Free Shipping on Orders Over £50</Container>
  );
};

export default SpecialOffer;
