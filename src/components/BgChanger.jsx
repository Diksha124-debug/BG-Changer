import { useState } from "react"
export const BgChanger = () => {
    let [bg,setbg] = useState("white")
    return (
        <div className={`flex h-screen ${bg}`}>
            <div className="flex flex-wrap gap-4 p-8 duration-800 justify-center h-22.5 m-auto">
                <button className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 cursor-pointer text-white font-bold rounded-lg shadow-lg transition-all active:scale-95" onClick={() => setbg("bg-amber-500")}>
                    <span>🔥</span> Warmth
                </button>

                <button className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transition-all active:scale-95" onClick={() => setbg("bg-blue-600")}>
                    <span>🌊</span> Ocean
                </button>

                <button className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg shadow-lg transition-all active:scale-95" onClick={() => setbg("bg-emerald-600")}>
                    <span>🌿</span> Nature
                </button>

                <button className="flex  cursor-pointer items-center gap-2 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-lg shadow-lg transition-all active:scale-95" onClick={() => setbg("bg-rose-500")}>
                    <span>❤️</span> Passion
                </button>

                <button className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg shadow-lg transition-all active:scale-95" onClick={() => setbg("bg-purple-600")}>
                    <span>🔮</span> Magic
                </button>

                <button className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-lg shadow-lg transition-all active:scale-95" onClick={() => setbg("bg-slate-900")}>
                    <span>🌙</span> Night
                </button>

            </div>
        </div>
        
    )
}