export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-8">
            <div className="absolute inset-0 bg-black/40 z-0" />

            <div className="relative z-10 text-center max-w-6xl mx-auto">
                <h1 className="font-sans text-[clamp(4rem,15vw,12rem)] leading-none tracking-tight mb-8">
                    <span className="block text-white text-stroke italic font-bold">
                        TE VEMOS EL
                    </span>
                    <span className="block text-white text-stroke italic font-bold mt-4">
                        23 DE ABRIL DEL
                    </span>
                    <span className="block text-white text-stroke italic font-bold mt-4">
                        2026
                    </span>
                </h1>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-10 flex">
                <button
                    size="lg"
                    className="flex-1 h-24 cursor-pointer rounded-none bg-accent hover:text-3xl text-white text-2xl font-sans tracking-wider uppercase transition-all"
                >
                    Entradas
                </button>
                <button
                    variant="secondary"
                    className="flex-1 h-24 cursor-pointer rounded-none bg-secondary hover:text-3xl text-white text-2xl font-sans tracking-wider uppercase transition-all"
                >
                    Tienda
                </button>
            </div>
        </section>
    );
}
