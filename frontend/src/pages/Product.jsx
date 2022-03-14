import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import SpecialOffer from "../components/SpecialOffer";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  background-color: lightgray;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  font-weight: 500;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const Product = () => {
  return (
    <Container>
      <SpecialOffer />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://images.pexels.com/photos/415043/pexels-photo-415043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </ImageContainer>
        <InfoContainer>
          <Title>USB C Charging Cable</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            excepturi eaque totam provident exercitationem, velit facilis earum
            quisquam voluptates obcaecati. Illum laborum dignissimos, eum
            perferendis alias aliquid blanditiis non. Saepe.
          </Desc>
          <Price>£19.99</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Colour</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="white" />
              <FilterColor color="blue" />
              <FilterColor color="green" />
              <FilterColor color="orange" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>1 Meter</FilterSizeOption>
                <FilterSizeOption>2 Meter</FilterSizeOption>
                <FilterSizeOption>3 Meter</FilterSizeOption>
                <FilterSizeOption>4 Meter</FilterSizeOption>
                <FilterSizeOption>5 Meter</FilterSizeOption>
                <FilterSizeOption>6 Meter</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
