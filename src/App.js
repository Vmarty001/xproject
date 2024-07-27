import './App.css';
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import { Route, Routes } from 'react-router-dom';
import Greeting from "./components/welcome/Greeting";

function App() {
    const { onToggleButton, tg, user } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg]);

    return (
        <div className="App">
            <Routes>
                <Route index element={<Greeting user={user} />} /> {/* Передача user как пропс */}
            </Routes>
        </div>
    );
}

export default App;
