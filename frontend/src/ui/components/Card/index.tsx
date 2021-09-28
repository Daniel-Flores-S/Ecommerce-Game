import { Game } from "data/@types/Game";
import { GameCart } from "data/hooks/gameCart";
import "./style.scss";

export const Card = (game: Game) => {
    const { addToCart, cart } = GameCart();

    return (
        <div className="card-item">
            <img src={game.image} alt="Card image cap" />
            <div className="card_title">
                <span>{game.name}</span>

                <div className="card_text">
                    <p>price: {game.price}</p>
                    <p>score: {game.score}</p>
                </div>
                <button onClick={() => addToCart(game)}>
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    );
};

/*const [game, setGame] = useState([] as Game[]),
        [erro, setErro] = useState("");

    useEffect(() => {
        ApiService.get<{ game: Game[] }>("/product").then((games) => {
            setGame(game);
        });
    }, []);*/
