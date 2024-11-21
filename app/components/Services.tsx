export default function Services() {
  return (
    <section className="relative flex h-[258px] justify-center border-b border-gray-300 bg-custom-gray">
      <div className="flex w-[1120px] items-center gap-8">
        <span className="border-real-green h-24 rounded-lg border-2"></span>
        <div className="flex flex-col gap-3">
          <h2 className="text-letter-blue bold font-gotham text-[43px]">
            „Bigbank“ teikiamos paskolos
          </h2>
        </div>
      </div>
      <button className="text-real-green absolute bottom-[-1px] left-[185px] h-[41px] w-[250px] rounded-tl-2xl border-l border-r border-t border-gray-300 bg-white text-xs font-bold">
        PRIVATIEMS KLIENTAMS
      </button>
      <button className="bg-custom-gray2 hover:bg-custom-gray3 absolute bottom-[0] left-[435px] h-[40px] w-[250px] rounded-tr-2xl border-r border-t border-gray-300 text-xs font-bold">
        VERSLO KLIENTAMS
      </button>
    </section>
  );
}
