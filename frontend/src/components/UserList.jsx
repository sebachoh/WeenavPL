import { useEffect, useState } from "react";

export default function UserList({ setActiveView }) {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:3000/users");
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="flex-1 h-[calc(100vh-2rem)] m-4 bg-white flex flex-col items-center justify-start p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 gap-4 overflow-y-auto">
            {/* Header */}
            <div className="w-full h-32 bg-slate-100 rounded-2xl flex shrink-0">
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

            {/* Tabla Contenedora */}
            <div className="w-full bg-slate-100 rounded-2xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-200/50">
                            <th className="py-3 px-4 border-b-2 border-slate-200 text-slate-600 font-semibold text-sm">ID</th>
                            <th className="py-3 px-4 border-b-2 border-slate-200 text-slate-600 font-semibold text-sm">Nom du client</th>
                            <th className="py-3 px-4 border-b-2 border-slate-200 text-slate-600 font-semibold text-sm">Email</th>
                            <th className="py-3 px-4 border-b-2 border-slate-200 text-slate-600 font-semibold text-sm">Téléphone</th>
                            <th className="py-3 px-4 text-center border-b-2 border-slate-200 text-slate-600 font-semibold text-sm">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="5" className="text-center py-10 text-slate-500 italic">Chargement des clients...</td>
                            </tr>
                        ) : (
                            // 2. Mapeo de la base de datos
                            users.map((user) => (
                                <tr key={user.id} className="hover:bg-slate-200/40 transition-colors">
                                    <td className="py-4 px-4 font-mono text-sm border-b border-slate-200">{user.id}</td>
                                    <td className="py-4 px-4 font-bold border-b border-slate-200 text-slate-800">{user.name}</td>
                                    <td className="py-4 px-4 border-b border-slate-200 text-slate-600">{user.email}</td>
                                    <td className="py-4 px-4 border-b border-slate-200 text-slate-600">
                                        {user.phone || "N/A"}
                                    </td>
                                    <td className="py-4 px-4 text-center border-b border-slate-200">
                                        <button
                                            onClick={() => setActiveView("boatList")}
                                            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-transform active:scale-95 shadow-md"
                                        >
                                            Bateaux
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                {!loading && users.length === 0 && (
                    <div className="p-10 text-center text-slate-400">Aucun client trouvé.</div>
                )}
            </div>
        </div>
    );
}

