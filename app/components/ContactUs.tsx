export default function ContactUs() {
  return (
    <>
      <section className="bg-real-green3 relative flex h-[415px] flex-col items-center">
        <div>
          <div className="flex flex-col items-center gap-2 pt-[73px]">
            <h1 className="text-[43px] font-semibold tracking-wider text-white">
              Susisiekite
            </h1>
            <span className="w-[100px] rounded-lg border-2 border-white"></span>
          </div>
          <div className="flex gap-32 pt-[60px]">
            <div className="flex w-[250px] flex-col items-center tracking-widest text-white">
              <span className="text-[13px] font-light">Skambinkite:</span>
              <p className="text-[24px] font-extralight underline">1388</p>
            </div>
            <div className="flex w-[250px] flex-col items-center tracking-widest text-white">
              <span className="text-[13px] font-light">Rašykite:</span>
              <p className="text-[24px] font-extralight underline">
                info@bigbank.lt
              </p>
            </div>
            <div className="flex w-[250px] flex-col items-center tracking-widest text-white">
              <span className="text-[13px] font-light">Ieškokite atsakymo</span>
              <p className="text-[24px] font-extralight underline">DUK</p>
            </div>
          </div>
        </div>
        <div className="shadow-custom-shadow absolute bottom-[-80px] right-[00px] flex h-[170px] w-[1500px] flex-col justify-center gap-[53px] rounded-l-2xl bg-white p-7 text-sm tracking-wider">
          <div className="flex w-[1000] justify-center">
            <h2 className="w-[1000px] text-fake-black">
              Norite, kad mūsų vadybininkas su Jumis susisiektų? Nurodykite savo
              kontaktus.
            </h2>
          </div>
          <form action="" className="flex items-end gap-8">
            <div className="flex flex-col">
              <label htmlFor="./" className="text-xs text-gray-400">
                Vardas, pavardė
              </label>
              <input
                type="text"
                className="h-[40px] w-[289px] rounded-md border-[1px] border-gray-400 px-[10px] pb-[5px] pt-[4px]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="./ " className="text-xs text-gray-400">
                Telefono numeris
              </label>
              <input
                type="text"
                className="h-[40px] w-[289px] rounded-md border-[1px] border-gray-400 px-[10px] pb-[5px] pt-[4px]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="./" className="text-xs text-gray-400">
                El. paštas
              </label>
              <input
                type="text"
                className="h-[40px] w-[289px] rounded-md border-[1px] border-gray-400 px-[10px] pb-[5px] pt-[4px]"
              />
            </div>
            <button className="h-[40px] w-[100px] rounded-md bg-gray-300 font-bold text-white">
              Siųsti
            </button>
          </form>
        </div>
      </section>
      <div className="relative mt-[87px] flex h-[100px] w-screen items-center justify-center bg-white">
        <div className="w-[1110px] text-[16px] font-light text-fake-black">
          <p className="tracking-wide">
            Įspėjimas: Naudodamiesi finansavimo paslaugomis, Jūs prisiimate
            finansinius įsipareigojimus. Prieš priimdami sprendimą dėl paskolos
            ir jos dydžio, atidžiai įvertinkite savo finansines galimybes.
          </p>
        </div>
      </div>
    </>
  );
}
