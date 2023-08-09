// "use client";
// import { ReactNode, createContext, useContext, useReducer } from "react";
// import { deleteOneWeapon } from "../../utils/deleteOneWeapon/deleteOneWeapon";
// import { countWeaponsById } from "../../utils/countWeaponsById/countWeaponsById";
// import { useAddToCart } from "../../hooks/useAddToCart/useAddToCart";

// type Action =
//   | { type: "cart/cleared"; payload: Weapon }
//   | { type: "weapon/added"; payload: Weapon }
//   | { type: "weapon/deleted"; payload: Weapon }
//   | { type: "weapon/cleared"; payload: Weapon };
// type Dispatch = (action: Action) => void;
// type State = {
//   weapons: Weapon[];
//   totalPrice: number;
//   itemCount: number;
// };
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

// const CartContext = createContext<
//   { state: State; dispatch: Dispatch } | undefined
// >(undefined);

// const initialState = {
//   weapons: [] as Weapon[],
//   totalPrice: 0,
//   itemCount: 0,
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
//     case "weapon/deleted":
//       return {
//         ...state,
//         totalPrice: state.totalPrice - action.payload.price,
//         itemCount: state.itemCount - 1,
//         weapons: deleteOneWeapon({
//           weapons: state.weapons,
//           weaponIdToDelete: action.payload.id,
//         }),
//       };
//     case "weapon/cleared":
//       return {
//         ...state,
//         totalPrice:
//           state.totalPrice -
//           action.payload.price *
//             countWeaponsById({
//               weapons: state.weapons,
//               weaponId: action.payload.id,
//             }),
//         itemCount:
//           state.itemCount -
//           countWeaponsById({
//             weapons: state.weapons,
//             weaponId: action.payload.id,
//           }),
//         weapons: state.weapons.filter(
//           (weapon) => weapon.id !== action.payload.id,
//         ),
//       };
//     case "cart/cleared":
//       return {
//         ...state,
//         totalPrice: 0,
//         itemCount: 0,
//         weapons: [],
//       };
//     default:
//       throw new Error(`Unhandled action type`);
//   }
// };

// const CartProvider = ({ children }: CartProviderProps) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const addWeapon = useAddToCart();
//   const value = { state, dispatch };

//   const addToCart = (weapon: Weapon) => {
//     addWeapon.mutate({ weapon_id: weapon.id });
//     dispatch({ type: "weapon/added", payload: weapon });
//   };

//   const deleteFromCart = () => {};

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// const useCart = () => {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CountProvider");
//   }
//   return context;
// };

// export { CartProvider, useCart };
