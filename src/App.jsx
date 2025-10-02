import { useState } from "react";
import "./App.css";
import { Sidebar } from "./componentes/Sidebar.jsx";
import { Hero } from "./componentes/Hero.jsx";
import { Countdown } from "./componentes/Countdown.jsx";

function App() {
    return (
        <>
            <div className="flex min-h-screen">
                <Sidebar />
                <main className="flex-1 relative">
                    <Countdown />
                    <Hero />
                </main>
            </div>
        </>
    );
}

export default App;
