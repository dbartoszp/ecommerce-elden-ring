// "use client";
// import { ReactNode, createContext, useReducer } from "react";
// type Dispatch = (action: Action) => void;

// const CartContext = createContext<
//   { state: State; dispatch: Dispatch } | undefined
// >(undefined);

// type CartProviderProps = {
//   children: ReactNode;
// };

// type Weapon = {
//   id: number;
//   weight: number;
//   name: string;
//   price: number;
//   image: string;
// };

// type State = {
//   weapons: Weapon[];
//   totalPrice: number;
//   itemCount: number;
// };

// type Action =
//   | { type: "weapon/added"; payload: Weapon }
//   | { type: "weapon/deleted"; payload: Weapon };

// const initialState = {
//   weapons: [],
//   totalPrice: 0,
//   itemCount: 0,
// };

// type ReducerProps = {
//   state: State;
//   action: Action;
// };

// const reducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case "weapon/added":
//       return {
//         ...state,
//         totalPrice: state.totalPrice + action.payload.price,
//         itemCount: state.itemCount + 1,
//         weapons: [...state.weapons, action.payload],
//       };
//     default:
//       throw new Error("Unknown action type");
//   }
// };

// const CartProvider = ({ children }: CartProviderProps) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const value = { state, dispatch };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
// export { CartProvider };
