import { useEffect, useState } from "react";

export default function BoatList({ setActiveView, setSelectedBoat }) {

    // la partie pour definir les bateaux de la base de données
    const [boats, setBoats] = useState([]);
    const [loading, setLoading] = useState(true);

    // demandes les données de la base de données
    useEffect(() => {
        const fetchBoats = async () => {
            try {
                const response = await fetch("http://localhost:3000/boats");
                const data = await response.json();
                setBoats(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching boats:", error);
                setLoading(false);
            }
        };
        fetchBoats();
    }, []);


    return (
        <div className="flex-1 h-[calc(100vh-2rem)] m-4 bg-white flex flex-col items-center justify-start p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 gap-4 overflow-y-auto">
            {/* Header del componente (Igual al tuyo) */}
            <div className="w-full h-32 bg-slate-100 rounded-2xl flex shrink-0">
                <div className="h-full aspect-video overflow-hidden rounded-xl p-2">
                    <img
                        src="https://cdn.prod.website-files.com/66961d72b4624f896049e9db/66faed6c3efb34dda9914a13_9ddf7ab2a539187c27ba8ba9dd7eca38_kronos-300.webp"
                        alt="Moteur Kronos"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="flex flex-col items-start justify-center ml-4">
                    <h1 className="text-3xl font-bold text-slate-800 tracking-[-0.04em]">Liste des bateaux</h1>
                    <p className="text-slate-500 text-sm tracking-[-0.04em]">Gestion et monitoring de la flotte</p>
                </div>
            </div>

            {/* Contenedor de la Tabla */}
            <div className="w-full bg-slate-100 rounded-2xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-200/50">
                            <th className="py-3 px-4 text-slate-600 font-semibold border-b border-slate-200">ID</th>
                            <th className="py-3 px-4 text-slate-600 font-semibold border-b border-slate-200">Nom du Bateau</th>
                            <th className="py-3 px-4 text-slate-600 font-semibold border-b border-slate-200">Modèle</th>
                            <th className="py-3 px-4 text-slate-600 font-semibold border-b border-slate-200">ID Propriétaire</th>
                            <th className="py-3 px-4 text-center text-slate-600 font-semibold border-b border-slate-200">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="5" className="text-center py-10 text-slate-500">Chargement de la flotte...</td>
                            </tr>
                        ) : (
                            // 3. MAP: Aquí ocurre la magia. Crea una fila por cada objeto en 'boats'
                            boats.map((boat) => (
                                <tr key={boat.id} className="hover:bg-slate-200/40 transition-colors">
                                    <td className="py-4 px-4 font-mono text-sm border-b border-slate-200">{boat.id}</td>
                                    <td className="py-4 px-4 font-bold border-b border-slate-200 text-slate-800">{boat.name}</td>
                                    <td className="py-4 px-4 border-b border-slate-200">
                                        <span className="bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
                                            {boat.model}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 border-b border-slate-200 text-slate-600 font-medium">👤 {boat.user_id}</td>
                                    <td className="py-4 px-4 text-center border-b border-slate-200">
                                        <button
                                            onClick={() => { setSelectedBoat(boat); setActiveView("boatDashboard"); }}
                                            className="bg-black hover:bg-slate-800 text-white px-5 py-2 rounded-xl text-sm font-medium transition-all active:scale-95 shadow-md"
                                        >
                                            Voir Détails
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                {!loading && boats.length === 0 && (
                    <div className="p-10 text-center text-slate-400">Aucun bateau trouvé.</div>
                )}
            </div>
        </div>
    );
}

