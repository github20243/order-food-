import styled from "styled-components";
import { Button } from "../UI/Button";
import { MinusIcon, PlusIcon } from "../../assets/icon-collection";

const BasketItem = ({ title, price, amount, id, onRemoveFood, onAddFood }) => {
  const tamak = {
    title,
    price,
    amount: 1,
    id,
  };
  return (
    <Container>
      <MealInfo>
        <Title>{title}</Title>
        <SecondInfo>
          <Price>${price}</Price>
          <Amount>x {amount}</Amount>
        </SecondInfo>
      </MealInfo>

      <ButtonsContainer>
        <Button variant="icon" onClick={() => onAddFood(tamak)}>
          <PlusIcon />
        </Button>
        <Button variant="icon" onClick={() => onRemoveFood(id)}>
          <MinusIcon />
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default BasketItem;

const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 25px 10px;
  width: 520px;
  border-bottom: 1px solid #d6d6d6;

  p {
    margin: 0;
  }
`;

const MealInfo = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled("p")`
  font-weight: 600;
  font-size: 20px;
`;

const SecondInfo = styled("div")`
  display: flex;
  gap: 47px;
`;

const Price = styled("p")`
  color: #ad5502;
  font-weight: 600;
  font-size: 18px;
`;

const Amount = styled("p")`
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid #d6d6d6;
`;

const ButtonsContainer = styled("div")`
  display: flex;
  gap: 14px;
  height: 46px;
  width: 150px;
  align-items: flex-end;
`;
