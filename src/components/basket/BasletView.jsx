import styled from "styled-components";
import BasketItem from "./BasketItem";
import { Button } from "../UI/Button";
import TotalAmount from "./TotalAmout";
import Modal from "../UI/Modal";
import { useContext } from "react";
import { BasketContext } from "../../store/BasketProvider";

const BasketView = ({ onClose }) => {
  const { items, onRemoveFood, onAddFood } = useContext(BasketContext);

  const totalAmount = items.reduce((currentSum, currentTamak) => {
    return currentSum + currentTamak.price * currentTamak.amount;
  }, 0);
  return (
    <Modal onClose={onClose}>
      <MealContainer>
        {items && items.length > 0
          ? items.map((item) => (
              <BasketItem
                key={item.id}
                {...item}
                onRemoveFood={onRemoveFood}
                onAddFood={onAddFood}
              />
            ))
          : null}
      </MealContainer>
      <TotalAmount totalAmount={totalAmount} />
      <ButtonsContainer>
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary">Order</Button>
      </ButtonsContainer>
    </Modal>
  );
};

export default BasketView;

const MealContainer = styled("div")`
  max-height: 250px;
  overflow: hidden;
  overflow-y: auto;
`;

const ButtonsContainer = styled("div")`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;
