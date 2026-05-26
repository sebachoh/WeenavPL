import logo from "../assets/img/LogoEntreprise.png";

export default function Sidebar({ 
    setActiveView, 
    isSimulating, 
    timeLeft, 
    startSimulation, 
    stopSimulation 
}) {
    return (
        <div className="w-1/4 h-[calc(100vh-2rem)] m-4 bg-black flex flex-col justify-between p-6 rounded-3xl shadow-2xl shadow-black/50 border border-white/5">

            <div>
                <div className="mb-10 flex flex-col items-center">
                    <div className="w-56 h-20 bg-white rounded-3xl flex items-center justify-center p-4 shadow-lg overflow-hidden hover:scale-105 transition-transform">
                        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-500 pt-4 text-center tracking-[-0.05em]">
                        W <span className="text-2xl text-white tracking-[-0.05em]"><button onClick={() => setActiveView("home")}>Dashboard</button></span>
                    </h1>
                    <p className="text-gray-400 text-center tracking-[-0.05em]">Système de monitorage</p>
                </div>

                <nav className="space-y-4 text-white">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Menu</p>
                    <button onClick={() => setActiveView("boatList")} className="w-full text-left p-2 rounded-2xl hover:bg-slate-800 hover:scale-105 transition-transform">
                        <span className="text-sm font-medium tracking-[-0.05em]">Liste des bateaux 🛥️</span>
                    </button>
                    <button onClick={() => setActiveView("userList")} className="w-full text-left p-2 rounded-2xl hover:bg-slate-800 hover:scale-105 transition-transform">
                        <span className="text-sm font-medium tracking-[-0.05em]">Liste des clients 📲</span>
                    </button>
                </nav>

                {/* Premium IoT Simulation Controller */}
                <div className="mt-8 bg-slate-900/60 border border-white/10 rounded-2xl p-4 flex flex-col gap-3 relative overflow-hidden backdrop-blur-md">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Simulateur IoT</span>
                        {isSimulating ? (
                            <span className="flex h-2.5 w-2.5 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                        ) : (
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-600"></span>
                        )}
                    </div>

                    {isSimulating ? (
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-emerald-400 tracking-wide animate-pulse">EN COURS...</span>
                                <span className="text-xs font-bold text-white font-mono bg-slate-800 px-2 py-0.5 rounded border border-white/5">
                                    {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                                </span>
                            </div>
                            
                            {/* Premium Progress Bar */}
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                <div 
                                    className="bg-emerald-400 h-full transition-all duration-1000 ease-linear rounded-full" 
                                    style={{ width: `${(timeLeft / 60) * 100}%` }}
                                ></div>
                            </div>

                            <button 
                                onClick={stopSimulation}
                                className="w-full mt-1 py-1.5 bg-rose-600/20 hover:bg-rose-600 border border-rose-500/30 text-rose-200 text-xs font-semibold rounded-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5"
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1v-2a1 1 0 00-1-1H7z" clipRule="evenodd"/>
                                </svg>
                                Arrêter
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <p className="text-xs text-slate-400 leading-relaxed">Simulez la télémétrie des bateaux pendant 1 minute.</p>
                            <button 
                                onClick={startSimulation}
                                className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5 group"
                            >
                                <svg className="w-3.5 h-3.5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                                </svg>
                                Lancer la simulation
                            </button>
                        </div>
                    )}
                </div>
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