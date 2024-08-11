import styled from "styled-components";

const TotalAmount = ({ totalAmount = 0 }) => {
  return (
    <Container>
      <StyledTotalAmount>Total Amount</StyledTotalAmount>
      <TotalPrice>${totalAmount.toFixed(2)}</TotalPrice>
    </Container>
  );
};

export default TotalAmount;

const Container = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const StyledTotalAmount = styled("p")`
  font-weight: 700;
  font-size: 20px;
`;

const TotalPrice = styled("p")`
  color: #8a2b06;
  font-weight: 600;
  font-size: 22px;
`;
