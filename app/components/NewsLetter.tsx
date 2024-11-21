import Clock from "~/public/Clock";
export default function NewsLetter() {
  return (
    <section className="flex flex-col">
      <div className="flex justify-center pt-20">
        <div className="flex w-[1010px] items-center gap-8">
          <span className="border-real-green h-24 rounded-lg border-2"></span>
          <div className="flex flex-col gap-3">
            <h2 className="text-letter-blue bold font-gotham text-[43px]">
              „Bigbank“ naujienos
            </h2>
          </div>
        </div>
        <div className="group mb-3 flex items-end">
          <a className="text-real-green group-hover:text-real-green2" href="./">
            Rodyti viską
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
      <div className="flex justify-center gap-6 py-10">
        <div
          style={{
            boxShadow: "inset 0 -200px 150px -50px rgba(100, 89, 99, 0.91)",
          }}
          className="z-10 flex h-[485px] w-[388px] cursor-pointer overflow-hidden rounded-lg bg-[url('/mister.jpg')] bg-cover bg-center"
        >
          <div className="flex translate-y-20 flex-col justify-end gap-5 p-8 transition duration-300 hover:translate-y-0">
            <h2 className="text-4xl text-white">
              Raul Eamets. Europos konkurencingumas: šviesa tunelio <br /> gale?
            </h2>
            <div className="flex justify-between">
              <p className="text-real-green2">Rinkos įžvalgos</p>
              <div className="flex items-center gap-3">
                <Clock className="h-5 fill-white" />
                <p className="text-white">4 min</p>
              </div>
            </div>
            <p className="text-real-green2 flex items-center gap-4 pt-10 text-xl font-semibold">
              Plačiau
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-real-green2 h-6"
              >
                <path
                  d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                  className="svg3881977225__a bb-icon__dynamic-fill"
                ></path>
              </svg>
            </p>
          </div>
        </div>
        <div
          className="z-10 flex h-[485px] w-[312px] cursor-pointer overflow-hidden rounded-lg bg-[url('/lady.jpg')] bg-cover bg-center"
          style={{
            boxShadow: "inset 0 -200px 150px -50px rgba(100, 89, 99, 0.91)",
          }}
        >
          <div className="flex translate-y-20 flex-col justify-end gap-5 p-8 transition duration-300 hover:translate-y-0">
            <h2 className="text-4xl text-white">
              Būsto paskola dirbant savarankiškai: kas keičiasi?
            </h2>
            <div className="flex justify-between">
              <p className="text-real-green2">Rinkos įžvalgos</p>
              <div className="flex items-center gap-3">
                <Clock className="h-5 fill-white" />
                <p className="text-white">2 min</p>
              </div>
            </div>
            <p className="text-real-green2 flex items-center gap-4 pt-10 text-xl font-semibold">
              Plačiau
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-real-green2 h-6"
              >
                <path
                  d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                  className="svg3881977225__a bb-icon__dynamic-fill"
                ></path>
              </svg>
            </p>
          </div>
        </div>
        <div className="flex h-[485px] w-[365px] flex-col rounded-lg">
          <div className="flex flex-col gap-1 px-3 pb-3">
            <div className="flex gap-4 text-sm">
              <p className="text-real-green">Patarimai</p>
              <p className="font-thin">-</p>
              <p className="text-gray-500">3 min</p>
            </div>
            <h2 className="text-fake-black text-[28px] leading-none tracking-wider">
              Kaip paruošti automobilį žiemai? (+ ATMINTINĖ)
            </h2>
            <p className="text-gray-500">2024 m. spalio 28 d.</p>
          </div>
          <div className="flex flex-col gap-3 p-3">
            <div className="flex gap-4 text-sm">
              <p className="text-real-green">Rinkos įžvalgos</p>
              <p className="font-thin">-</p>
              <p className="text-gray-500">2 min</p>
            </div>
            <h2 className="text-fake-black text-[28px] leading-none tracking-wider">
              Lietuvių automobilių parkas ir toliau sensta, o elektromobiliai –
              niekaip neprigyja rinkoje
            </h2>
            <p className="text-gray-500">2024 m. spalio 25 d.</p>
          </div>
          <div className="flex flex-col gap-3 p-3">
            <div className="flex gap-4 text-sm">
              <p className="text-real-green">Patarimai</p>
              <p className="font-thin">-</p>
              <p className="text-gray-500">2 min</p>
            </div>
            <h2 className="text-fake-black text-[28px] leading-none tracking-wider">
              Bendrabutis, buto nuoma ar buto pirkimas – ką rinktis studentui?
            </h2>
            <p className="text-gray-500">2024 m. spalio 23 d.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Patarimai
// 3 min
// Kaip paruošti automobilį žiemai? (+ ATMINTINĖ)
// 2024 m. spalio 28 d.
// Rinkos įžvalgos
// 2 min
// Lietuvių automobilių parkas ir toliau sensta, o elektromobiliai – niekaip neprigyja rinkoje
// 2024 m. spalio 25 d.
// Patarimai
// 2 min
// Bendrabutis, buto nuoma ar buto pirkimas – ką rinktis studentui?
// 2024 m. spalio 23 d.
