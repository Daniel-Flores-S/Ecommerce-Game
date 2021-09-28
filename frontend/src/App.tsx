import { CartContextProvider } from "contexts/CartContexts";
import { Routes } from "Routes/Routes";

function App() {
    return (
        <CartContextProvider>
            <Routes />
        </CartContextProvider>
    );
}

export default App;
