import { useState, useEffect } from "react";
import { ApiService } from "data/services/Api.Service";
import { Game } from "data/@types/Game";

export default function useIndex() {
    const [games, setGames] = useState([] as Game[]),
        [erro, setErro] = useState("");


        useEffect(() => {
            ApiService.get("/product")
                .then((game) => setGames(game.data))
                .catch((erro) => setErro(erro));
        }, [])

    return { games, setGames};
}








/*
 async function componet() {
        try {
            const { data } = await ApiService.get<{
                games: Game[];
            }>("/product");
            setGames(data.games);
        } catch (error) {
            setErro("CEP não encontrado");
        }
    }

const [games, setGames] = useState([] as Game[]),
        [erro, setErro] = useState("");

    async function componet() {
        try {
            const { data } = await ApiService.get<{
                games: Game[];
            }>("/product");
            setGames(data.games);
        } catch (error) {
            setErro("CEP não encontrado");
        }
    }
    return { games, erro, componet };
*/
