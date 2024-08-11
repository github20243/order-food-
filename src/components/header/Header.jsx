import styled from "styled-components";
import { BASE_STYLES } from "../../helpers/constants";
import { Basket } from "../basket/Basket";
import { useContext } from "react";
import { BasketContext } from "../../store/BasketProvider";

export const Header = ({ onOpen }) => {
  const { items } = useContext(BasketContext);
  const orders = items.reduce((san, obj) => {
    return san + obj.amount;
  }, 0);
  return (
    <StyledHeader>
      <Container>
        <Title>ReactMeals</Title>
        <Basket onOpen={onOpen} orders={orders} />
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  background-color: ${BASE_STYLES.BROWN};
  position: fixed;
  top: 0;
  z-index: 10;
`;

const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  color: white;
`;
