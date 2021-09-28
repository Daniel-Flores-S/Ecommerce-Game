import { createContext, useState, ReactNode } from "react";
import { Game } from "data/@types/Game";

type CartContextType = {
    cart: Game[];
    addToCart: (game: Game) => void;
    removeFromCart: (game: Game) => void;
};

type CartContextProps = {
    children: ReactNode;
};

export const CartContext = createContext({} as CartContextType);

export const CartContextProvider = (props: CartContextProps) => {

    const [cart, setCart] = useState<Game[]>([]);

    function addToCart(game: Game) {
        setCart([...cart, game]);
    }

    function removeFromCart(game: Game) {
        setCart(cart.filter((item) => item.id !== game.id));
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {props.children}
        </CartContext.Provider>
    );
};



/*
type CartContextType = {
    cart: Game[];
    addToCart: (game: Game) => void;
    removeFromCart: (game: Game) => void;
};

export const CartContextProvider = (props:any) => {
    const [cart, setCart] = useState<Game[]>([]);

    function addToCart(game:Game) {
        setCart([...cart, game]);
    }

    function removeFromCart(game:Game) {
        setCart(cart.filter(item => item.id !== game.id));
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {props.children}
        </CartContext.Provider>
    );
};











export const AuthContextProvider: React.FC<Game> = (props) => {
    const [user, setUser] = useState<Game>();

    const valor = "ola mundo";
    return (
        <AuthContext.Provider value={{ user.name, }}>
            {props.children}
        </AuthContext.Provider>
    );
};
 */
