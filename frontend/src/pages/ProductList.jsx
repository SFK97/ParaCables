import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import PopularProducts from "../components/PopularProducts";
import SpecialOffer from "../components/SpecialOffer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 20px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <SpecialOffer />
      <Navbar />
      <Title>Charging Cables</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Colour
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Purple</Option>
            <Option>Orange</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Length
            </Option>
            <Option>1 meter</Option>
            <Option>2 meter</Option>
            <Option>3 meter</Option>
            <Option>4 meter</Option>
            <Option>5 meter</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <PopularProducts />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
