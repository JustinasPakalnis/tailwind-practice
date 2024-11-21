import Left from "~/public/Left";
import Right from "~/public/Right";
import CheckMark from "~/public/CheckMark";
import PriceTag from "~/public/PriceTag";
export default function LoansType() {
  return (
    <section className="flex justify-center bg-custom-gray font-gotham">
      <div className="flex w-[1120px] flex-col">
        <div className="flex items-center gap-16">
          <div className="flex gap-52">
            <div className="flex items-center gap-8 py-16">
              <span className="border-real-green h-32 rounded-lg border-l-4"></span>
              <h1 className="text-letter-blue text-6xl text-[42px] font-extrabold">
                Vartojimo <br />
                paskola
              </h1>
            </div>
            <ul className="text-md flex flex-col justify-center gap-2 text-sm font-light text-gray-700">
              <div className="ml-5 w-72">
                <li className="bg-real-green flex content-center items-center justify-center gap-2 rounded-full py-1 text-white">
                  <PriceTag className="h-4 fill-white" /> Mažos palūkanos iki
                  2024.12.31
                </li>
              </div>
              <li className="flex">
                <CheckMark className="fill-real-green h-6 px-5" /> Jūsų
                didesniems planams įgyvendinti
              </li>
              <li className="flex">
                <CheckMark className="fill-real-green h-6 px-5" /> Paskola iki
                10 metų laikotarpiui
              </li>
              <li className="flex">
                <CheckMark className="fill-real-green h-6 px-5" /> Paskola iki
                30 000 Eur
              </li>
            </ul>
          </div>
          <button className="bg-real-green hover:bg-real-green2 transition-duration-700 cursor-pointer rounded-lg px-24 py-5 font-bold text-white transition-all">
            Plačiau
          </button>
        </div>
        <div className="flex gap-16 py-7 pb-24 font-sans text-gray-400">
          <div className="flex w-48 flex-col gap-6">
            <span className="border-real-green w-full rounded-lg border-[1px]"></span>
            <div className="text-xs font-bold text-gray-700">
              <p>01.</p>
              <p>Vartojimo paskola</p>
            </div>
          </div>
          <div className="flex w-48 flex-col gap-6">
            <span className="w-full rounded-lg border-[1px] border-gray-300"></span>
            <div className="text-xs font-bold">
              <p>02.</p>
              <p>Taupomieji indėliai</p>
            </div>
          </div>
          <div className="flex w-48 flex-col gap-6">
            <span className="w-full rounded-lg border-[1px] border-gray-300"></span>
            <div className="text-xs font-bold">
              <p>03.</p>
              <p>Paskolų refinansavimas</p>
            </div>
          </div>
          <div className="flex w-48 flex-col gap-6">
            <span className="w-full rounded-lg border-[1px] border-gray-300"></span>
            <div className="text-xs font-bold">
              <p>04.</p>
              <p>Terminuotieji indėliai verslui</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex h-10 w-10 cursor-pointer content-center items-center justify-center rounded-full border-[1px] border-gray-500">
              <Left className="h-7 fill-gray-400" />
            </div>
            <div className="flex h-10 w-10 cursor-pointer content-center items-center justify-center rounded-full border-[1px] border-gray-500">
              <Right className="h-7 fill-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
