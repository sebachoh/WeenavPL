export default function BoatList({ setActiveView }) {
    return (
        <div className="flex-1 h-[calc(100vh-2rem)] m-4 bg-white flex flex-col items-center justify-center p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 gap-4">
            <div className="w-full h-32 bg-slate-100 rounded-2xl flex">
                <div className="h-full aspect-video overflow-hidden rounded-xl">
                    <img
                        src="https://cdn.prod.website-files.com/66961d72b4624f896049e9db/66faed6c3efb34dda9914a13_9ddf7ab2a539187c27ba8ba9dd7eca38_kronos-300.webp"
                        alt="Moteur Kronos"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold text-slate-800 tracking-[-0.04em]">Liste des bateaux</h1>
                    <p className="text-slate-500 text-sm tracking-[-0.04em]">Gestion et monitoring de la flotte</p>
                </div>
            </div>


            <div className="w-full h-6/7 bg-slate-100 rounded-2xl">
                <table className="w-full text-left border-solid border-slate-200">
                    <thead>
                        <tr>
                            <th className="py-3 px-4 border-b-2 border-slate-200">ID</th>
                            <th className="py-3 px-4 border-b-2 border-slate-200">Nom du Bateau</th>
                            <th className="py-3 px-4 border-b-2 border-slate-200">Modèle</th>
                            <th className="py-3 px-4 border-b-2 border-slate-200">ID Propriétaire</th>
                            <th className="py-3 px-4 text-center border-b-2 border-slate-200">Actions</th>
                        </tr>
                    </thead>

                    {/* Parte de la info */}
                    <tbody>
                        <tr>
                            <td className="py-4 px-4 font-mono text-sm border-b-2 border-slate-200">8</td>
                            <td className="py-4 px-4 font-bold border-b-2 border-slate-200">Queen Mary</td>
                            <td className="py-4 px-4 border-b-2 border-slate-200">
                                <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">
                                    KRONOS
                                </span>
                            </td>
                            <td className="py-4 px-4 border-b-2 border-slate-200">👤 19</td>
                            <td className="py-4 px-4 text-center border-b-2 border-slate-200">
                                <button onClick={() => setActiveView("boatDashboard")} className="bg-black hover:bg-black/80 text-white px-4 py-2 rounded-xl text-sm font-medium transition-transform active:scale-95 shadow-md">
                                    Voir Détails
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4 px-4 font-mono text-sm border-b-2 border-slate-200">9</td>
                            <td className="py-4 px-4 font-bold border-b-2 border-slate-200">Black Pearl</td>
                            <td className="py-4 px-4 border-b-2 border-slate-200">
                                <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">
                                    ARION
                                </span>
                            </td>
                            <td className="py-4 px-4 border-b-2 border-slate-200">👤 19</td>
                            <td className="py-4 px-4 text-center border-b-2 border-slate-200">
                                <button onClick={() => setActiveView("boatDashboard")} className="bg-black hover:bg-black/80 text-white px-4 py-2 rounded-xl text-sm font-medium transition-transform active:scale-95 shadow-md">
                                    Voir Détails
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4 px-4 font-mono text-sm border-b-2 border-slate-200">10</td>
                            <td className="py-4 px-4 font-bold border-b-2 border-slate-200">Titanic</td>
                            <td className="py-4 px-4 border-b-2 border-slate-200">
                                <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">
                                    KRONOS
                                </span>
                            </td>
                            <td className="py-4 px-4 border-b-2 border-slate-200">👤 20</td>
                            <td className="py-4 px-4 text-center border-b-2 border-slate-200">
                                <button onClick={() => setActiveView("boatDashboard")} className="bg-black hover:bg-black/80 text-white px-4 py-2 rounded-xl text-sm font-medium transition-transform active:scale-95 shadow-md">
                                    Voir Détails
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4 px-4 font-mono text-sm border-b-2 border-slate-200">11</td>
                            <td className="py-4 px-4 font-bold border-b-2 border-slate-200">Discovery</td>
                            <td className="py-4 px-4 border-b-2 border-slate-200">
                                <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">
                                    ARION
                                </span>
                            </td>
                            <td className="py-4 px-4 border-b-2 border-slate-200">👤 20</td>
                            <td className="py-4 px-4 text-center border-b-2 border-slate-200">
                                <button onClick={() => setActiveView("boatDashboard")} className="bg-black hover:bg-black/80 text-white px-4 py-2 rounded-xl text-sm font-medium transition-transform active:scale-95 shadow-md">
                                    Voir Détails
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>



            {/* <h1 className="text-4xl font-bold text-center">Panel qui est a droite
                <br />

                <br />

                Merci de votre patience
            </h1> */}

        </div>
    );
}

