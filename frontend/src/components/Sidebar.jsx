import logo from "../assets/img/LogoEntreprise.png";

export default function Sidebar() {
    return (
        <div className="w-1/4 h-[calc(100vh-2rem)] m-4 bg-black flex flex-col justify-between p-6 rounded-3xl border-r border-gray-400">

            <div>
                <div className="mb-10 flex flex-col items-center">
                    <div className="w-56 h-20 bg-white rounded-3xl flex items-center justify-center p-4 shadow-lg overflow-hidden">
                        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <h1 className="text-2xl font-bold text-white pt-4 text-center">
                        W <span className="text-white-500">Dashboard</span>
                    </h1>
                    <p className="text-gray-400 text-center">Gestion de flotte</p>
                </div>

                <nav className="space-y-4 text-white">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Menu</p>
                    <button className="w-full text-left p-2 rounded hover:bg-slate-800 transition-colors">
                        <span>Boton sample :D</span>
                    </button>
                </nav>
            </div>

            <div className="border-t border-slate-700 pt-4 text-white">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">
                        Photo de profil
                    </div>
                    <div>
                        <p className="text-sm font-medium">Sebastian Ruiz</p>
                        <p className="text-xs text-slate-500">Admin</p>
                    </div>
                </div>
            </div>

        </div>
    );
}