import { Game } from "data/@types/Game";
import { GameCart } from "data/hooks/gameCart";
import "./style.scss";
export const ShoppingCart = () => {
    const { cart, removeFromCart } = GameCart();
    let frete: number = cart.length * 10;
    let total: number = 0;

    return (
        <div className="container_shopping">
            <div className="container">
                <h1>Carrinho de compras</h1>

                <div className="shopping-cart">
                    <div className="column-labels">
                        <label className="product-image">Image</label>
                        <label className="product-details">Product</label>
                        <label className="product-price">Price</label>

                        <label className="product-removal">Remove</label>
                    </div>

                    {cart.map((item) => {
                        return (
                            <div className="product">
                                <div className="product-image">
                                    <img src={item.image} />
                                </div>
                                <div className="product-details">
                                    <div className="product-title">
                                        {item.name}
                                    </div>
                                </div>
                                <div className="product-price">
                                    {item.price}
                                </div>

                                <div className="product-removal">
                                    <button
                                        className="remove-product"
                                        onClick={() => removeFromCart(item)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        );
                    })}

                    <div className="totals">
                        <div className="totals-item">
                            <label>Subtotal</label>
                            <div className="totals-value" id="cart-subtotal">
                                {
                                    (total = cart.reduce(
                                        (total, item) =>
                                            total + Number(item.price),
                                        0
                                    ))
                                }
                            </div>
                        </div>
                        <div className="totals-item">
                            <label>Frete</label>
                            <div className="totals-value" id="cart-tax">
                                {total > 250 ? "frete grátis" : frete}
                            </div>
                        </div>

                        <div className="totals-item totals-item-total">
                            <label>Total geral</label>
                            <div className="totals-value" id="cart-total">
                                {total + frete}
                            </div>
                        </div>
                    </div>
                    <button className="checkout">Comprar</button>
                </div>
            </div>
        </div>
    );
};
