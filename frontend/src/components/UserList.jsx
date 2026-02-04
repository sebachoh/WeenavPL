export default function UserList() {
    return (
        <div className="flex-1 h-[calc(100vh-2rem)] m-4 bg-white flex flex-col items-center justify-center p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 gap-4">
            <div className="w-full h-32 bg-slate-100 rounded-2xl flex">
                <div className="h-full aspect-video overflow-hidden rounded-xl pr-4 pl-2">
                    <img
                        src="https://cdn.prod.website-files.com/66961d72b4624f896049e9db/66968a4092448072d8334105_Capture_d_e%CC%81cran_2024-06-19_a%CC%80_17.49.44-removebg-preview.webp"
                        alt="Moteur Kronos"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold text-slate-800 tracking-[-0.04em]">Liste des clients</h1>
                    <p className="text-slate-500 text-sm tracking-[-0.04em]">Gestion et monitoring des clients</p>
                </div>
            </div>


            <div className="w-full h-6/7 bg-slate-100 rounded-2xl">
                <table className="w-full text-left border-solid border-slate-200">
                    <thead>
                        <tr>
                            <th className="py-3 px-4 border-b-2 border-slate-200">ID</th>
                            <th className="py-3 px-4 border-b-2 border-slate-200">Nom du client</th>
                            <th className="py-3 px-4 border-b-2 border-slate-200">Email</th>
                            <th className="py-3 px-4 border-b-2 border-slate-200">Téléphone</th>
                            <th className="py-3 px-4 text-center border-b-2 border-slate-200">Actions</th>
                        </tr>
                    </thead>

                    {/* Parte de la info */}
                    <tbody>
                        <tr>
                            <td className="py-4 px-4 font-mono text-sm border-b-2 border-slate-200">19</td>
                            <td className="py-4 px-4 font-bold border-b-2 border-slate-200"> Alice</td>
                            <td className="py-4 px-4 border-b-2 border-slate-200">alice@example.com</td>
                            <td className="py-4 px-4 border-b-2 border-slate-200">06 12 34 56 xx</td>
                            <td className="py-4 px-4 text-center border-b-2 border-slate-200">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-transform active:scale-95 shadow-md">
                                    Bateaux
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-4 px-4 font-mono text-sm border-b-2 border-slate-200">20</td>
                            <td className="py-4 px-4 font-bold border-b-2 border-slate-200"> Bob</td>
                            <td className="py-4 px-4 border-b-2 border-slate-200">bob@example.com</td>
                            <td className="py-4 px-4 border-b-2 border-slate-200">06 12 34 56 xx</td>
                            <td className="py-4 px-4 text-center border-b-2 border-slate-200">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-transform active:scale-95 shadow-md">
                                    Bateaux
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

