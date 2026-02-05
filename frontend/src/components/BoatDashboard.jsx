import BoatChart from './graphTest.jsx';

export default function BoatDashboard() {
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
                    <h1 className="text-3xl font-bold text-slate-800 tracking-[-0.04em]">Black Pearl</h1>
                    <p className="text-slate-500 text-sm tracking-[-0.04em]">Kronos | 1992</p>
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
                                    <td className="py-2 px-2 text-xm text-black tracking-[-0.02em]">Sebastian Ruiz</td>
                                </tr>

                                {/* Fila: Email */}
                                <tr className="border-b border-slate-300">
                                    <td className="py-2 px-6 text-xm font-semibold text-black text-center tracking-[-0.02em]">Courriel:</td>
                                    <td className="py-2 px-2 text-xm text-black text-left break-all tracking-[-0.02em]">Miau@gmail.com</td>
                                </tr>

                                {/* Fila: Address */}
                                <tr className="border-b border-slate-300">
                                    <td className="py-2 px-6 text-xm font-semibold text-black text-center tracking-[-0.02em]">Address:</td>
                                    <td className="py-2 px-2 text-xm text-black text-left break-words tracking-[-0.02em]">123 Rue de la Marine, Marseille</td>
                                </tr>

                                {/* Fila: Portable */}
                                <tr className="border-b border-slate-300">
                                    <td className="py-2 px-6 text-xm font-semibold text-black text-center tracking-[-0.02em]">Portable:</td>
                                    <td className="py-2 px-2 text-xm text-black text-left tracking-[-0.02em]">+33 6 12 34 56 78</td>
                                </tr>

                                {/* Fila: Combien de bateaux */}
                                <tr>
                                    <td className="py-2 px-6 text-xm font-semibold text-black text-center tracking-[-0.02em]">#Bateaux:</td>
                                    <td className="py-2 px-2 text-left tracking-[-0.02em]">
                                        <span className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm font-bold">
                                            3
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
                            1992
                        </p>
                    </div>
                    <div className="w-full h-1/2 bg-slate-100 rounded-2xl hover:scale-105 transition-transform active:scale-95">
                        <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            Client depuis
                        </h1>
                        <p className="text-black font-bold text-5xl text-center tracking-[-0.04em]">
                            2022
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
                            25°C
                        </p>
                    </div>
                    <div className="w-full h-full bg-slate-100 rounded-2xl hover:scale-105 transition-transform active:scale-95">
                        <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            Tension
                        </h1>
                        <p className="text-black font-bold text-5xl text-center tracking-[-0.04em]">
                            12V
                        </p>
                    </div>
                    <div className="w-full h-full bg-slate-100 rounded-2xl hover:scale-105 transition-transform active:scale-95">
                        <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            SOC
                        </h1>
                        <p className="text-black font-bold text-5xl text-center tracking-[-0.04em]">
                            98,5%
                        </p>
                    </div>
                    <div className="w-full h-full bg-slate-100 rounded-2xl hover:scale-105 transition-transform active:scale-95">
                        <h1 className="text-slate-500 text-xl font-bold p-5 pt-6 text-center tracking-[-0.02em]">
                            Vitesse
                        </h1>
                        <p className="text-black font-bold text-5xl text-center tracking-[-0.04em]">
                            5,2 nd
                        </p>
                    </div>

                </div>
                <div className="w-1/2 h-full bg-slate-100 rounded-2xl flex flex-col p-6">
                    <h2 className="text-slate-500 text-xl font-bold mb-4 text-center tracking-[-0.02em]">Vitesse du moteur (dernière 24 heures)</h2>
                    <div className="flex-1 w-full min-h-0">
                        <BoatChart />
                    </div>
                    <div className="w-full pt-4 flex justify-center">
                        <button className="bg-black hover:bg-gray-800 text-white p-1.5 rounded-xl transition-all active:scale-90 shadow-sm flex items-center justify-center">Visualiser tous les données</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

