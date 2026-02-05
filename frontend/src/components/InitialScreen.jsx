import logo from "../assets/img/LogoEntreprise.png";

export default function InitialScreen() {
    return (
        <div className="flex-1 h-[calc(100vh-2rem)] m-4 bg-white flex flex-col items-center justify-center p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 gap-4">
            <div className="flex flex-col h-1/2 items-center justify-center gap-4">
                <h1 className="text-4xl font-bold text-center tracking-[-0.05em]">Bienvenue sur le portail</h1>

                <div className="w-1/2 h-1/2">
                    <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                </div>

                <p className="text-slate-500 text-center tracking-[-0.04em]">Utilisez les boutons a gauche pour accéder aux différentes fonctionnalités</p>

            </div>
            <div className="flex-1 h-1/2">
                <ul className="flex flex-col h-full items-start justify-start gap-4">
                    <li className="text-black text-xl font-bold tracking-[-0.04em] mb-2 hover:scale-105 transition-transform">
                        Dernières actualités
                    </li>

                    <div className="flex flex-col gap-3 w-full">
                        <li className="flex items-start gap-2 text-black-600 text-sm">
                            <span className="mt-1">⚡️</span>
                            <p><a href="https://www.linkedin.com/posts/weenavev_arion-weenav-moteur-in-board-%C3%A9lectrique-activity-7422904024854745089-ZIXF?utm_source=share&utm_medium=member_desktop&rcm=ACoAADI_GkYBrAM474OZcmVvMVYupz6CTWFDUEE" target="_blank" className="hover:text-slate-500 transition-colors underline">De 50 à 500 ch. Avec ARION, Weenav impose une nouvelle référence...</a></p>
                        </li>
                        <li className="flex items-start gap-2 text-black text-sm">
                            <span className="mt-1">⚡️</span>
                            <p><a href="https://www.linkedin.com/posts/weenavev_moteurboat-weenav-moteurboat-activity-7421816988370391040-Sa-y?utm_source=share&utm_medium=member_desktop&rcm=ACoAADI_GkYBrAM474OZcmVvMVYupz6CTWFDUEE" target="_blank" className="hover:text-slate-500 transition-colors underline">Le KRONOS testé et validé par Voile et Moteur...</a></p>
                        </li>
                        <li className="flex items-start gap-2 text-black text-sm">
                            <span className="mt-1">⚡️</span>
                            <p><a href="https://www.linkedin.com/posts/kevincapenduweenav_transportfluvial-logistiqueurbaine-aezlectrification-ugcPost-7417477354291195904-Fs_x?utm_source=share&utm_medium=member_desktop&rcm=ACoAADI_GkYBrAM474OZcmVvMVYupz6CTWFDUEE" target="_blank" className="hover:text-slate-500 transition-colors underline">Une nouvelle étape franchie pour River Connect... et una belle fierté pour Weenav</a></p>
                        </li>
                        <li className="flex items-start gap-2 text-black text-sm">
                            <span className="mt-1">⚡️</span>
                            <p><a href="https://www.linkedin.com/posts/weenavev_voici-un-bel-exemple-de-d%C3%A9carbonatation-dun-activity-7385949016208982016-RJTm?utm_source=share&utm_medium=member_desktop&rcm=ACoAADI_GkYBrAM474OZcmVvMVYupz6CTWFDUEE" target="_blank" className="hover:text-slate-500 transition-colors underline">Cap sur Annecy : le KRONOS fait sensation sur le lac !</a></p>
                        </li>
                    </div>
                </ul>
            </div>

        </div>
    );
}

