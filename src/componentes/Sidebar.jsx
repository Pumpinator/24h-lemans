import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    async function fetchData() {
        try {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon/charizard"
            );
            const data = await response.json();
            alert(JSON.stringify(data));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <>
            <aside className="fixed left-0 top-0 h-screen w-28 bg-blue-500 z-50 flex flex-col items-center justify-between py-8">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white hover:bg-sidebar-accent p-3 rounded-lg transition-colors"
                    aria-label="Abrir menú"
                >
                    <Menu size={32} />
                </button>

                <div className="flex-1 flex items-center justify-center">
                    <h1 className="text-white font-sans text-4xl tracking-wider whitespace-nowrap origin-center -rotate-90 translate-y-0">
                        24H LE MANS
                    </h1>
                </div>

                <div className="w-16 h-16 bg-primary-foreground rounded-full flex items-center justify-center">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-10 h-10"
                    />
                </div>
            </aside>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="fixed left-28 top-0 h-screen w-64 bg-white z-50 shadow-lg p-6">
                        <nav className="space-y-4">
                            <a
                                href="#"
                                className="block text-gray-700 hover:text-blue-500 transition-colors"
                            >
                                Inicio
                            </a>
                            <a
                                href="#"
                                className="block text-gray-700 hover:text-blue-500 transition-colors"
                            >
                                Resultados
                            </a>
                            <a
                                href="#"
                                className="block text-gray-700 hover:text-blue-500 transition-colors"
                            >
                                Equipos
                            </a>
                            <button
                                onClick={fetchData}
                                className="block text-gray-700 hover:text-blue-500 transition-colors"
                            >
                                PokeAPI v2
                            </button>
                        </nav>
                    </div>
                </>
            )}

            <div className="w-28 flex-shrink-0" />
        </>
    );
}
