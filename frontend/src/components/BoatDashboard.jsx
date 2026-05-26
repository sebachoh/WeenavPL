import BoatChart from './graphTest.jsx';
import { useEffect, useState } from 'react';
import { API_URL } from '../config';

export default function BoatDashboard({ boat, setActiveView }) {

    const [telemetry, setTelemetry] = useState([]);
    const [, setLoading] = useState(true);
    const [owner, setOwner] = useState(null);

    useEffect(() => {
        let isMounted = true; // Para evitar fugas de memoria

        const fetchAllData = async () => {
            if (!boat?.id || !boat?.user_id) return;

            try {
                setLoading(true);

                const resTele = await fetch(`${API_URL}/telemetry/${boat.id}`);
                const dataTele = await resTele.json();

                const resUser = await fetch(`${API_URL}/users/${boat.user_id}`);
                const dataUser = await resUser.json();

                if (isMounted) {
                    setTelemetry(Array.isArray(dataTele) ? dataTele[dataTele.length - 1] : dataTele);

                    const userData = Array.isArray(dataUser) ? dataUser[0] : dataUser;
                    setOwner(userData);

                    setLoading(false);
                }
            } catch (error) {
                console.error("Error en Dashboard:", error);
                if (isMounted) setLoading(false);
            }
        };

        fetchAllData();

        const interval = setInterval(() => {
            fetchAllData();
        }, 10000);

        return () => { isMounted = false; clearInterval(interval); };
    }, [boat.id, boat.user_id]);

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
                    <h1 className="text-3xl font-bold text-slate-800 tracking-[-0.04em]">{boat.name}</h1>
                    <p className="text-slate-500 text-sm tracking-[-0.04em]">{boat.model} | {boat.year}</p>
                </div>
                <div className="w-1/3 h-12 flex items-right justify-center pt-10">
                    <button
                        onClick={() => setActiveView("boatList")}
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

            <div className="w-full h-1/2 flex gap-4">
                {/* cuadro 1 */}
                <div className="w-1/3 h-full bg-slate-100 rounded-2xl hover:scale-105 transition-transform active:scale-95">
                    <div>
                        <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            Proprietaire
                        </h1>
                    </div>
                    <div>
                        <table className="w-full text-left table-fixed">
                            <tbody>
                                {/* Fila: Nombre */}
                                <tr className="border-b border-slate-300">
                                    <td className="py-2 px-6 text-xm font-semibold text-black w-1/3 text-center tracking-[-0.02em]">Nom:</td>
                                    <td className="py-2 px-2 text-xm text-black tracking-[-0.02em]">{owner?.name || "Pas trouvé"}</td>
                                </tr>

                                {/* Fila: Email */}
                                <tr className="border-b border-slate-300">
                                    <td className="py-2 px-6 text-xm font-semibold text-black text-center tracking-[-0.02em]">Courriel:</td>
                                    <td className="py-2 px-2 text-xm text-black text-left break-all tracking-[-0.02em]">{owner?.email || "Pas trouvé"}</td>
                                </tr>

                                {/* Fila: Address */}
                                <tr className="border-b border-slate-300">
                                    <td className="py-2 px-6 text-xm font-semibold text-black text-center tracking-[-0.02em]">Address:</td>
                                    <td className="py-2 px-2 text-xm text-black text-left break-words tracking-[-0.02em]">{owner?.address || "Pas trouvé"}</td>
                                </tr>

                                {/* Fila: Portable */}
                                <tr className="border-b border-slate-300">
                                    <td className="py-2 px-6 text-xm font-semibold text-black text-center tracking-[-0.02em]">Portable:</td>
                                    <td className="py-2 px-2 text-xm text-black text-left tracking-[-0.02em]">{owner?.phone || "Pas trouvé"}</td>
                                </tr>

                                {/* Fila: Combien de bateaux */}
                                <tr>
                                    <td className="py-2 px-6 text-xm font-semibold text-black text-center tracking-[-0.02em]">#Bateaux:</td>
                                    <td className="py-2 px-2 text-left tracking-[-0.02em]">
                                        <span className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm font-bold">
                                            {owner?.boats_count || "En développement ;)"}

                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* cuadro 2 */}
                <div className="w-1/3 h-full bg-slate-100 rounded-2xl hover:scale-105 transition-transform active:scale-95">
                    <div>
                        <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            Fichier technique
                        </h1>
                    </div>
                    <div>
                        <table className="w-full text-left table-fixed">
                            <tbody>
                                {/* Fila: Nombre */}
                                <tr className="border-b border-slate-300">
                                    <td className="py-2 px-6 text-xm font-semibold text-black w-1/3 text-center tracking-[-0.02em]">Marque:</td>
                                    <td className="py-2 px-2 text-xm text-black tracking-[-0.02em]">Yamaha</td>
                                </tr>

                                {/* Fila: Email */}
                                <tr className="border-b border-slate-300">
                                    <td className="py-2 px-6 text-xm font-semibold text-black text-center tracking-[-0.02em]">Modèle:</td>
                                    <td className="py-2 px-2 text-xm text-black text-left break-all tracking-[-0.02em]">Krono 250</td>
                                </tr>

                                {/* Fila: Address */}
                                <tr className="border-b border-slate-300">
                                    <td className="py-2 px-6 text-xm font-semibold text-black text-center tracking-[-0.02em]">Puissance:</td>
                                    <td className="py-2 px-2 text-xm text-black text-left break-words tracking-[-0.02em]">250 HP</td>
                                </tr>

                                {/* Fila: Portable */}
                                <tr className="border-b border-slate-300">
                                    <td className="py-2 px-6 text-xm font-semibold text-black text-center tracking-[-0.02em]">Dernière révision:</td>
                                    <td className="py-2 px-2 text-xm text-black text-left tracking-[-0.02em]">06/02/2026</td>
                                </tr>

                                {/* Fila: Combien de bateaux */}
                                <tr>
                                    <td className="py-2 px-6 text-sm font-semibold text-black text-center tracking-tight">
                                        Date d'achat:
                                    </td>
                                    {/* Agregamos flex, items-center para alinear verticalmente y justify-between para separar */}
                                    <td className="py-2 px-2 flex items-center justify-between tracking-tight">

                                        {/* La fecha se queda a la izquierda */}
                                        <span className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm font-bold">
                                            06/02/2026
                                        </span>

                                        {/* El botón se empuja automáticamente a la derecha */}
                                        <button className="bg-gray-400 hover:bg-gray-500 text-white p-1.5 rounded-full transition-all active:scale-90 shadow-sm flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2.5}
                                                stroke="currentColor"
                                                className="w-3.5 h-3.5"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* cuadro 3 */}
                <div className="w-1/3 h-full  rounded-2xl flex flex-col gap-4">
                    <div className="w-full h-1/2 bg-slate-100 rounded-2xl hover:scale-105 transition-transform active:scale-95">
                        <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            Annee de construction
                        </h1>
                        <p className="text-black font-bold text-5xl text-center tracking-[-0.04em]">
                            {boat.year}
                        </p>
                    </div>
                    <div className="w-full h-1/2 bg-slate-100 rounded-2xl hover:scale-105 transition-transform active:scale-95">
                        <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            Client depuis
                        </h1>
                        <p className="text-black font-bold text-5xl text-center tracking-[-0.04em]">
                            2026
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full h-1/2 rounded-2xl flex gap-4">
                <div className="w-1/2 h-full grid grid-cols-2 gap-4 rounded-2xl">
                    <div className="w-full h-full bg-slate-100 rounded-xl hover:scale-105 transition-transform active:scale-95">
                        <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            Température
                        </h1>
                        <p className="text-black font-bold text-5xl text-center tracking-[-0.04em]">
                            {telemetry.temperature}°C
                        </p>
                    </div>
                    <div className="w-full h-full bg-slate-100 rounded-2xl hover:scale-105 transition-transform active:scale-95">
                        <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            Tension
                        </h1>
                        <p className="text-black font-bold text-5xl text-center tracking-[-0.04em]">
                            {telemetry.voltage}V
                        </p>
                    </div>
                    <div className="w-full h-full bg-slate-100 rounded-2xl hover:scale-105 transition-transform active:scale-95">
                        <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            SOC
                        </h1>
                        <p className="text-black font-bold text-5xl text-center tracking-[-0.04em]">
                            {telemetry.soc}%
                        </p>
                    </div>
                    <div className="w-full h-full bg-slate-100 rounded-2xl hover:scale-105 transition-transform active:scale-95">
                        <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            Vitesse
                        </h1>
                        <p className="text-black font-bold text-5xl text-center tracking-[-0.04em]">
                            {telemetry.speed} nd
                        </p>
                    </div>

                </div>
                <div className="w-1/2 h-full rounded-2xl flex flex-col " style={{ backgroundImage: "url('https://cdn.prod.website-files.com/66961d72b4624f896049e9db/66b1e9e417367a94f27303f7_Imageprototype.2022.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="w-full h-full flex justify-center items-center">
                        <button onClick={() => setActiveView("monitoring")} className="bg-black/50 backdrop-blur-sm h-1/5 w-1/2 text-white text-xm p-1.5 rounded-xl transition-all active:scale-90 shadow-sm flex items-center justify-center hover:scale-105 transition-transform active:scale-95 tracking-[-0.02em]">Visualiser tous les données</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

