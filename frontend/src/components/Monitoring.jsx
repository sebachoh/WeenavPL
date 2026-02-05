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

