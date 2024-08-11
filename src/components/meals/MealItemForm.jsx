import { PlusIcon } from "../../assets/icon-collection";
import { Button } from "../UI/Button";
import styled from "styled-components";

const MealItemForm = ({ onChangeAmount, onSubmit }) => {
  return (
    <AddAmount onSubmit={onSubmit}>
      <div>
        <AmountLabel>Amount</AmountLabel>
        <AmountsInput
          type="number"
          min={"1"}
          max={"5"}
          defaultValue={1}
          onChange={onChangeAmount}
        />
      </div>

      <StyledButton
        type="submit"
        variant="primary"
        icon={<PlusIcon stroke="white" />}
      >
        ADD
      </StyledButton>
    </AddAmount>
  );
};

export default MealItemForm;

const AddAmount = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const AmountLabel = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin-right: 20px;
`;
const AmountsInput = styled.input`
  width: 60px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #d6d6d6d6 !important;
  outline: none;
  padding: 4px 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  margin-bottom: 12px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;
