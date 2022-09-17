import "./styles/main.css";
import logoimage from "./assets/logo-nlw-esports.svg";
import { MagnifyingGlassPlus } from "phosphor-react";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoimage} />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-clip-text bg-nlw-gradient">
          duo
        </span>{" "}
        esta aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold block text-white">
              Nome do Jogo{" "}
            </strong>
            <span className="text-zinc-300 text-sm block ">Anucions 5</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/game-2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold block text-white">
              Nome do Jogo{" "}
            </strong>
            <span className="text-zinc-300 text-sm block ">Anucions 5</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/game-3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold block text-white">
              Nome do Jogo{" "}
            </strong>
            <span className="text-zinc-300 text-sm block ">Anucions 5</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/game-4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold block text-white">
              Nome do Jogo{" "}
            </strong>
            <span className="text-zinc-300 text-sm block ">Anucions 5</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/game-5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold block text-white">
              Nome do Jogo{" "}
            </strong>
            <span className="text-zinc-300 text-sm block ">Anucions 5</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/game-6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold block text-white">
              Nome do Jogo{" "}
            </strong>
            <span className="text-zinc-300 text-sm block ">Anucions 5</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <div className="flex justify-between items-center bg-[#2A2634] px-8 py-6 self-stretch rounded-lg ">
          <div>
            <strong className="text-2xl text-white font-black block">
              Nao encontrou seu duo
            </strong>
            <span className="text-zinc-400 block">
              Publique um anuncio para encontrar novos players
            </span>
          </div>

          <button className="flex items-center gap-3 py-3 px-4 bg-violet-500 rounded hover:bg-violet-600 text-white">
            <MagnifyingGlassPlus size={24} />
            Publique seu anuncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
