import BoatChart from './graphTest.jsx';
import { useEffect, useState } from 'react';


export default function Monitoring({ boat, setActiveView }) {

    const [, setTelemetry] = useState([]);
    const [, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchTelemetry = async () => {
            if (!boat?.id) return;

            try {
                setLoading(true);

                const resTele = await fetch(`http://localhost:3000/telemetry/${boat.id}`);
                const dataTele = await resTele.json();

                if (isMounted) {
                    const latest = Array.isArray(dataTele) ? dataTele[dataTele.length - 1] : dataTele;
                    setTelemetry(latest);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error en Monitoring:", error);
                if (isMounted) setLoading(false);
            }
        };

        fetchTelemetry();

        const interval = setInterval(fetchTelemetry, 5000);
        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, [boat?.id]);


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
                    <div>
                        <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            Options pour la visualisation
                        </h1>
                    </div>
                    <div>
                        <button className='w-full bg-gray-200 mb-2 p-2 px-6 rounded-2xl hover:bg-slate-800 hover:scale-105 hover:text-white transition-transform active:scale-95 tracking-[-0.02em]'>Tension</button>
                    </div>
                    <div>
                        <button className='w-full bg-gray-200 mb-2 p-2 px-6 rounded-2xl hover:bg-slate-800 hover:scale-105 hover:text-white transition-transform active:scale-95 tracking-[-0.02em]'>Courant</button>
                    </div>
                    <div>
                        <button className='w-full bg-gray-200 mb-2 p-2 px-6 rounded-2xl hover:bg-slate-800 hover:scale-105 hover:text-white transition-transform active:scale-95 tracking-[-0.02em]'>Temperature</button>
                    </div>
                    <div>
                        <button className='w-full bg-gray-200 mb-2 p-2 px-6 rounded-2xl hover:bg-slate-800 hover:scale-105 hover:text-white transition-transform active:scale-95 tracking-[-0.02em]'>Puissance</button>
                    </div>
                    <div>
                        <button className='w-full bg-gray-200 mb-2 p-2 px-6 rounded-2xl hover:bg-slate-800 hover:scale-105 hover:text-white transition-transform active:scale-95 tracking-[-0.02em]'>Vitesse</button>
                    </div>
                </div>
                {/* cuadro 2 */}
                <div className="w-4/5 h-full bg-slate-100 rounded-2xl">
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            Graphiques
                        </h1>
                        <span className="text-slate-500 text-xs font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            Vitesse
                        </span>
                    </div>
                    <div className="w-full h-[calc(100vh-20rem)]">
                        <BoatChart />
                    </div>
                </div>
            </div>
        </div>
    );
}

