import { useEffect, useState } from "react";

export function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 254,
        hours: 14,
        minutes: 33,
        seconds: 40,
    });

    useEffect(() => {
        const targetDate = new Date(
            "2026-04-23T15:00:00"
        ).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(
                        difference / (1000 * 60 * 60 * 24)
                    ),
                    hours: Math.floor(
                        (difference %
                            (1000 * 60 * 60 * 24)) /
                            (1000 * 60 * 60)
                    ),
                    minutes: Math.floor(
                        (difference % (1000 * 60 * 60)) /
                            (1000 * 60)
                    ),
                    seconds: Math.floor(
                        (difference % (1000 * 60)) / 1000
                    ),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-8 right-8 z-40 flex items-center gap-4 bg-background/80 backdrop-blur-sm px-6 py-4 rounded-lg">
            <div className="flex gap-3">
                <div className="text-center">
                    <div className="text-4xl font-sans font-bold text-white">
                        {timeLeft.days}
                    </div>
                    <div className="text-xs uppercase text-white tracking-wider">
                        Días
                    </div>
                </div>
                <div className="text-4xl font-sans font-bold text-white"></div>
                <div className="text-center">
                    <div className="text-4xl font-sans font-bold text-white">
                        {String(timeLeft.hours).padStart(
                            2,
                            "0"
                        )}
                    </div>
                    <div className="text-xs uppercase text-white tracking-wider">
                        Horas
                    </div>
                </div>
                <div className="text-4xl font-sans font-bold text-white">
                    :
                </div>
                <div className="text-center">
                    <div className="text-4xl font-sans font-bold text-white">
                        {String(timeLeft.minutes).padStart(
                            2,
                            "0"
                        )}
                    </div>
                    <div className="text-xs uppercase text-white tracking-wider">
                        Min
                    </div>
                </div>
                <div className="text-4xl font-sans font-bold text-white">
                    :
                </div>
                <div className="text-center">
                    <div className="text-4xl font-sans font-bold text-white">
                        {String(timeLeft.seconds).padStart(
                            2,
                            "0"
                        )}
                    </div>
                    <div className="text-xs uppercase text-white tracking-wider">
                        Seg
                    </div>
                </div>
            </div>
        </div>
    );
}
