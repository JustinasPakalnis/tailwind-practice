export default function ContactUs() {
  return (
    <section className="bg-real-green3 flex h-[415px] flex-col items-center">
      <div>
        <div className="flex flex-col items-center gap-2 pt-[73px]">
          <h1 className="text-[43px] font-semibold tracking-wider text-white">
            Susisiekite
          </h1>
          <span className="w-[100px] rounded-lg border-2 border-white"></span>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center text-white">
            <span className="text-sm">Skambinkite:</span>
            <p className="text-2xl underline">1388</p>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="text-sm">Rašykite:</span>
            <p className="text-2xl underline">info@bigbank.lt</p>
          </div>
          <div className="flex flex-col items-center text-white">
            <span className="text-sm">Ieškokite atsakymo</span>
            <p className="text-2xl underline">DUK</p>
          </div>
        </div>
      </div>
    </section>
  );
}
