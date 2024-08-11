import { createContext, useReducer } from "react";

const ACTIONS = {
  ADD_FOOD: "ADD_FOOD",
  REMOVE_FOOD: "REMOVE_FOOD",
};

const basketReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_FOOD:
      const existingFood = state.items.find((food) => food.id === action.payload.id);
      if (existingFood === undefined) {
        return { items: [...state.items, action.payload] };
      } else {
        const updatedItems = state.items.map((food) => {
          if (food.id === action.payload.id) {
            return { ...food, amount: food.amount + action.payload.amount };
          }
          return food;
        });
        return { items: updatedItems };
      }

    case ACTIONS.REMOVE_FOOD:
      const index = state.items.findIndex((food) => food.id === action.payload);
      if (index !== -1) {
        const updatedItems = [...state.items];
        updatedItems[index].amount -= 1;
        if (updatedItems[index].amount === 0) {
          updatedItems.splice(index, 1);
        }
        return { items: updatedItems };
      }
      return state;

    default:
      return state;
  }
};

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(basketReducer, { items: [] });

  const onAddFood = (food) => {
    dispatch({ type: ACTIONS.ADD_FOOD, payload: food });
  };

  const onRemoveFood = (id) => {
    dispatch({ type: ACTIONS.REMOVE_FOOD, payload: id });
  };

  const initialValue = {
    items: state.items,
    onAddFood,
    onRemoveFood,
  };

  return (
    <BasketContext.Provider value={initialValue}>
      {children}
    </BasketContext.Provider>
  );
};
