export default function WhyUs() {
  return (
    <section className="flex h-[640px] flex-col items-center py-20">
      <div className="flex w-[1120px] items-center gap-8">
        <span className="border-real-green h-32 rounded-lg border-2"></span>
        <div className="flex flex-col gap-5">
          <p className="font-medium text-gray-400">PRIVALUMAI</p>
          <h2 className="text-letter-blue bold font-gotham text-5xl">
            Kodėl verta rinktis „Bigbank“?
          </h2>
        </div>
      </div>
      <div className="flex py-8">
        <div>
          <h2>Paskola neišėjus iš namų</h2>
          <p>
            Sutartį saugiai ir greitai galite pasirašyti internetu, kad ir kur
            bebūtumėte
          </p>
        </div>
        <div>
          <h2>60 d. grąžinimo garantija</h2>
          <p>
            Suprantame, kad situacija šiomis dienomis gali pasikeisti itin
            greitai, todėl paėmus paskolą iš „Bigbank“, ją be jokio pabrangimo
            galite grąžinti per 60 dienų
          </p>
        </div>
        <div>
          <h2>Asmeninė konsultacija</h2>
          <p>
            „Bigbank“ vadybininkai atsakys į visus Jums kylančius klausimus
            telefonu 1388 ar el. paštu info@bigbank.lt
          </p>
        </div>
      </div>
    </section>
  );
}
