import styled from "styled-components";
import { BasketIcon } from "../../assets/icon-collection";
import { BASE_STYLES } from "../../helpers/constants";

export const Basket = ({ orders = 20, onOpen }) => {
  return (
    <Wrapper onClick={onOpen}>
      <BasketIcon />
      <YourCard>Your Cart</YourCard>
      <Orders>{orders}</Orders>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background-color: ${BASE_STYLES.BLACK_BROWN};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 33px;
  border-radius: 30px;
  gap: 15px;
  text-align: center;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${BASE_STYLES.LIGTH_BROWN};
  }
  &:active {
    background-color: ${BASE_STYLES.DARK_BROWN};
  }
`;

const Orders = styled.div`
  background-color: ${BASE_STYLES.BROWN};
  width: 40px;
  padding: 5px 8px;
  border-radius: 30px;
`;
const YourCard = styled.p`
  font-size: 16px;
`;
