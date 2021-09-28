import { CartContext } from "contexts/CartContexts";
import { useContext } from "react";

export function GameCart() {
    const value = useContext(CartContext);

    return value;
}
