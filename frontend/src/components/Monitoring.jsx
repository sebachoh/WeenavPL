import BoatChart from './graphTest.jsx';
import { useEffect, useState } from 'react';


export default function Monitoring({ boat, setActiveView }) {

    const [selectedOption, setSelectedOption] = useState("Vitesse");
    const [telemetry, setTelemetry] = useState([]);
    const [, setLoading] = useState(true);

    const [history, setHistory] = useState({ values: [], labels: [] });

    useEffect(() => {
        let isMounted = true;

        const fetchTelemetry = async () => {
            if (!boat?.id) return;

            try {
                const resTele = await fetch(`http://localhost:3000/telemetry/${boat.id}`);
                const dataTele = await resTele.json();

                if (isMounted && Array.isArray(dataTele) && dataTele.length > 0) {
                    // 1. Dictionnaire pour lier tes boutons aux colonnes JSON de l'API
                    const columnMap = {
                        "Tension": "voltage",    // Vérifie si c'est bien 'voltage' dans ta DB
                        "Courant": "current",    // Vérifie si c'est bien 'current'
                        "Temperature": "temperature",   // Vérifie si c'est 'temp' ou 'temperature'
                        "Puissance": "power_kw",
                        "Vitesse": "speed",
                        "Timestamp": "timestamp"
                    };

                    const activeKey = columnMap[selectedOption];

                    // 2. Prendre les 10 derniers enregistrements
                    const last10 = dataTele.slice(-10);

                    // 3. Préparer les données pour la graphique
                    setHistory({
                        values: last10.map(item => item[activeKey]),
                        labels: last10.map(item => {
                            const d = new Date(item.timestamp);
                            return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
                        })
                    });

                    // 4. Mettre à jour le dernier point pour les petits cadres de texte
                    setTelemetry(last10[last10.length - 1]);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error monitoring:", error);
            }
        };

        fetchTelemetry();

        fetchTelemetry();
        const interval = setInterval(fetchTelemetry, 5000);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, [boat?.id, selectedOption]);


    return (
        <div className="flex-1 h-[calc(100vh-2rem)] m-4 bg-white flex flex-col items-center justify-center p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 gap-4">
            <div className="w-full h-24 bg-slate-100 rounded-2xl flex">
                <div className="h-full aspect-video overflow-hidden rounded-xl">
                    <img
                        src="../src/assets/img/Bateau1.png"
                        alt="Bateau 1"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold text-slate-800 tracking-[-0.04em]">{boat?.name || 'Nom pas trouvé'}</h1>
                    <p className="text-slate-500 text-sm tracking-[-0.04em]">{boat?.model || 'Modèle pas trouvé'} | {boat?.year || 'Année pas trouvée'}</p>
                </div>

                <div className="w-1/3 h-12 flex items-right justify-center pt-10">
                    <button
                        onClick={() => setActiveView("boatDashboard")}
                        className="flex items-center gap-2 text-slate-500 hover:text-black transition-colors font-medium text-sm group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:-translate-x-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Retour au tableau
                    </button>
                </div>
            </div>

            {/* PARTE DE LA INFO DEL BATEAU */}

            <div className="w-full h-full flex gap-4">
                {/* cuadro 1 */}
                <div className="w-1/5 h-full bg-slate-100 rounded-2xl px-6">
                    <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                        Options pour la visualisation
                    </h1>
                    {["Vitesse", "Courant", "Temperature", "Puissance", "Tension",].map((option) => (
                        <button
                            key={option}
                            onClick={() => setSelectedOption(option)}
                            className={`w-full p-2 px-6 rounded-2xl transition-all duration-200 tracking-[-0.02em] font-semibold mt-2 mb-2 ${selectedOption === option
                                ? 'bg-slate-800 text-white shadow-md scale-105'
                                : 'bg-gray-200 text-slate-500 hover:bg-slate-300'
                                }`}
                        >
                            {option}
                        </button>
                    ))}

                </div>
                {/* cuadro 2 */}
                <div className="w-4/5 h-full bg-slate-100 rounded-2xl">
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            Graphiques
                        </h1>
                        <span className="text-slate-500 text-xs font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            {selectedOption}
                        </span>
                    </div>
                    <div className="w-full h-[calc(100vh-22rem)]">
                        <BoatChart historyData={history} />
                    </div>
                    <div className="w-full bg-slate-100 rounded-2xl flex">
                        <p className="text-slate-500 text-xs font-bold p-5 pt-6 text-center tracking-[-0.02em]">Dernière mise à jour : {telemetry?.timestamp
                            ? new Date(telemetry.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
                            : '--:--:--'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

