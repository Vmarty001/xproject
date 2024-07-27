import './App.css';
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import { Route, Routes } from 'react-router-dom';
import Welcome from "./components/welcome/welcome.jsx"; // Импорт Welcome
import Points from "./components/Points/Points.jsx"; // Импорт Points

function App() {
    const { tg } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg]);

    return (
        <div className="App">
            <Routes>
                <Route index element={<Welcome />} />
                <Route path="/points" element={<Points />} />
            </Routes>
        </div>
    );
}

export default App;
