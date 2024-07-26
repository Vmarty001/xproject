import './App.css';
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import { Route, Routes } from 'react-router-dom';
import Greeting from "./components/welcome/welcome.jsx";

function App() {
    const { onToggleButton, tg, user } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg]);

    const userName = user?.username || "User"; // Получение имени пользователя из Telegram

    return (
        <div className="App">
            <Routes>
                <Route index element={<Greeting name={userName} />} /> {/* Передача имени пользователя */}
            </Routes>
        </div>
    );
}

export default App;
