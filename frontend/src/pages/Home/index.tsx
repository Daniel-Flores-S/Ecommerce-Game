import { Game } from "data/@types/Game";
import useIndex from "data/hooks/useIndex";
import { useEffect, useState } from "react";
import { Card } from "ui/components/Card";

import "./style.scss";

export const Home = () => {
    const { games } = useIndex();
    const [gameList, setGameList] = useState([] as Game[]);

    useEffect(() => {
        if (games) {
            setGameList(games);
        }
    }, [games]);

    const handleOrderAZ = () => {
        let newList = [...gameList];
        newList.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );

        setGameList(newList);
    };

    const handleOrderScore = () => {
        let newList = [...gameList];
        newList.sort((a, b) => (a.score < b.score ? 1 : -1));

        setGameList(newList);
    };

    return (
        <>
            <div className="container">
                <div className="category">
                    <h2>Descubra jogos recomendados </h2>
                    <div className="org_game">
                        <i>Ordenar por </i>

                        <button onClick={() => handleOrderScore()}>
                            popularidade
                        </button>

                        <button onClick={() => handleOrderAZ()}>A-Z</button>
                    </div>
                </div>

                <div className="container-bt">
                    {gameList.map((game) => {
                        return (
                            <Card
                                key={game.id}
                                id={game.id}
                                name={game.name}
                                price={game.price}
                                score={game.score}
                                image={game.image}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};
