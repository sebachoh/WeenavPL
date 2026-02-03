import logo from "../assets/img/LogoEntreprise.png";

export default function Sidebar() {
    return (
        <div className="w-1/4 h-[calc(100vh-2rem)] m-4 bg-black flex flex-col justify-between p-6 rounded-3xl shadow-2xl shadow-black/50 border border-white/5">

            <div>
                <div className="mb-10 flex flex-col items-center">
                    <div className="w-56 h-20 bg-white rounded-3xl flex items-center justify-center p-4 shadow-lg overflow-hidden hover:scale-105 transition-transform">
                        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-500 pt-4 text-center tracking-[-0.05em]">
                        W <span className="text-2xl text-white tracking-[-0.05em]">Dashboard</span>
                    </h1>
                    <p className="text-gray-400 text-center tracking-[-0.05em]">Système de monitorage</p>
                </div>

                <nav className="space-y-4 text-white">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Menu</p>
                    <button className="w-full text-left p-2 rounded-2xl hover:bg-slate-800 hover:scale-105 transition-transform">
                        <span className="text-sm font-medium tracking-[-0.05em]">Liste des bateaux 🛥️</span>
                    </button>
                    <button className="w-full text-left p-2 rounded-2xl hover:bg-slate-800 hover:scale-105 transition-transform">
                        <span className="text-sm font-medium tracking-[-0.05em]">Liste des clients 📲</span>
                    </button>
                </nav>
            </div>

            <div className="border-t border-slate-700 pt-4 text-white hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">
                        S
                    </div>
                    <div>
                        <p className="text-sm font-medium tracking-[-0.05em]">Sebastián Ruiz - Stage chez Weenav</p>
                        <p className="text-xs text-slate-500 tracking-[-0.05em]">Admin</p>
                    </div>
                </div>
            </div>

        </div>
    );
}