import PriceTag from "~/public/PriceTag";
export default function Plans() {
  return (
    <section className="flex flex-col items-center">
      <div className="my-10 flex justify-center gap-[510px]">
        <div className="flex gap-5">
          <button className="bg-real-green rounded-full px-10 py-3 text-sm font-bold text-white">
            Paskolos
          </button>
          <button className="text-fake-black rounded-full border border-gray-200 px-10 py-3 text-sm font-bold hover:bg-custom-gray">
            Indėliai
          </button>
          <button className="text-fake-black rounded-full border border-gray-200 px-10 py-3 text-sm font-bold hover:bg-custom-gray">
            Lizingas
          </button>
        </div>
        <div className="group flex content-center items-center">
          <a className="text-real-green group-hover:text-real-green2" href="./">
            Visos paskolos
          </a>
          <svg
            data-v-cc140ee1=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-real-green group-hover:fill-real-green2 h-6"
          >
            <path
              d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              className="svg2046479579__a bb-icon__dynamic-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="relative flex justify-center gap-8 pt-7">
        <div className="shadow-left-right-bottom group relative flex h-[470px] w-[342px] cursor-pointer flex-col items-center gap-7 rounded-xl text-center shadow-lg transition hover:scale-105">
          <div className="relative flex h-[115px] w-full overflow-hidden rounded-br-[60px] rounded-tl-xl rounded-tr-xl">
            <div className="bg-real-green absolute left-0 z-20 flex gap-3 rounded-r-full rounded-tl-lg px-4 py-[4px] text-sm text-white">
              <PriceTag className="h-5 fill-white" /> Mažos palūkanos iki
              2024.12.31
            </div>
            <img className="absolute top-[-52px]" src="./guitar.jpg" alt="#" />
          </div>
          <h2 className="text-fake-black font-bold">Vartojimo paskola</h2>
          <p className="text-sm text-gray-500">
            Įgyvendinkite asmeninius planus ir poreikius
          </p>
          <div>
            <p className="text-md font-light tracking-wider text-gray-400">
              Suma
            </p>
            <p className="text-fake-black text-xl font-medium">
              1 000 - 30 000 Eur
            </p>
          </div>
          <div>
            <p className="text-md font-light text-gray-400">Laikotarpis</p>
            <p className="text-fake-black text-xl font-medium">6 - 120 mėn.</p>
          </div>
          <button className="bg-real-green group-hover:bg-real-green2 transition-duration-700 cursor-pointer rounded-lg px-6 py-2 font-bold text-white transition-all">
            Plačiau
          </button>
        </div>
        <div className="shadow-left-right-bottom group flex h-[470px] w-[342px] cursor-pointer flex-col items-center gap-7 rounded-xl text-center shadow-lg transition hover:scale-105">
          <div className="relative flex h-[115px] w-full overflow-hidden rounded-br-[60px] rounded-tl-xl rounded-tr-xl">
            <img className="absolute top-[-52px]" src="./board.jpg" alt="#" />
          </div>
          <h2 className="text-fake-black font-bold">Paskola namų remontui</h2>
          <p className="text-sm text-gray-500">
            Atsinaujinkite namus su paskola namų remontui
          </p>
          <div>
            <p className="text-md font-light tracking-wider text-gray-400">
              Suma
            </p>
            <p className="text-fake-black text-xl font-medium">
              1 000 - 30 000 Eur
            </p>
          </div>
          <div>
            <p className="text-md font-light text-gray-400">Laikotarpis</p>
            <p className="text-fake-black text-xl font-medium">6 - 120 mėn.</p>
          </div>
          <button className="bg-real-green group-hover:bg-real-green2 hover:bg-real-green2 transition-duration-700 cursor-pointer rounded-lg px-6 py-2 font-bold text-white transition-all">
            Plačiau
          </button>
        </div>
        <div className="shadow-left-right-bottom group flex h-[470px] w-[342px] cursor-pointer flex-col items-center gap-5 rounded-xl text-center shadow-lg transition hover:scale-105">
          <div className="relative flex h-[115px] w-full overflow-hidden rounded-br-[60px] rounded-tl-xl rounded-tr-xl">
            <img className="absolute top-[-52px]" src="./music.jpg" alt="#" />
          </div>
          <h2 className="text-fake-black font-bold">Paskolų refinansavimas</h2>
          <p className="w-[300px] text-sm text-gray-500">
            Perkelkite turimas vartojimo paskolas į „Bigbank“ ir pasinaudokite
            galimybe sumažinti mėnesinę įmoką
          </p>
          <div>
            <p className="text-md font-light tracking-wider text-gray-400">
              Suma
            </p>
            <p className="text-fake-black text-xl font-medium">
              750 - 25 000 Eur
            </p>
          </div>
          <div>
            <p className="text-md font-light text-gray-400">Laikotarpis</p>
            <p className="text-fake-black text-xl font-medium">6 - 120 mėn.</p>
          </div>
          <button className="bg-real-green group-hover:bg-real-green2 transition-duration-700 cursor-pointer rounded-lg px-6 py-2 font-bold text-white transition-all">
            Plačiau
          </button>
        </div>
        <div className="absolute right-[-70px] top-[245px] flex h-10 w-10 cursor-pointer content-center items-center justify-center rounded-full border-[1px] border-gray-500 hover:bg-custom-gray">
          <svg
            data-v-cc140ee1=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 fill-gray-500"
          >
            <path
              d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              className="svg2046479579__a bb-icon__dynamic-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex gap-3 py-10">
        <span className="bg-real-green h-2 w-2 cursor-pointer rounded-full"></span>
        <span className="bg-custom-gray2 hover:bg-real-green h-2 w-2 cursor-pointer rounded-full"></span>
        <span className="bg-custom-gray2 hover:bg-real-green h-2 w-2 cursor-pointer rounded-full"></span>
      </div>
    </section>
  );
}
