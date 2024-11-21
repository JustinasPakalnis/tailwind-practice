import Phone from "~/public/PhoneLogo";
import Map from "~/public/Map";
import Clock from "~/public/Clock";
export default function WhyUs() {
  return (
    <section className="flex h-[640px] flex-col items-center py-20">
      <div className="flex w-[1120px] items-center gap-8">
        <span className="border-real-green h-32 rounded-lg border-2"></span>
        <div className="flex flex-col gap-3">
          <p className="font-medium text-gray-400">PRIVALUMAI</p>
          <h2 className="text-letter-blue bold font-gotham text-[44px]">
            Kodėl verta rinktis „Bigbank“?
          </h2>
        </div>
      </div>
      <div className="flex gap-12 py-[70px]">
        <div className="flex w-[330px] flex-col content-center items-center gap-3.5 text-center">
          <span className="bg-real-green flex h-10 w-10 content-center items-center justify-center rounded-full">
            <Map className="h-6 fill-white" />
          </span>
          <h2 className="text-fake-black text-2xl font-bold tracking-wider">
            Paskola neišėjus iš namų
          </h2>
          <p className="w-[300px] text-base font-normal tracking-wider text-gray-700">
            Sutartį saugiai ir greitai galite pasirašyti internetu, kad ir kur
            bebūtumėte
          </p>
        </div>
        <div className="flex w-[330px] flex-col content-center items-center gap-3.5 text-center">
          <span className="bg-real-green flex h-10 w-10 content-center items-center justify-center rounded-full">
            <Clock className="h-6 fill-white" />
          </span>
          <h2 className="text-fake-black w-[280px] text-2xl font-bold tracking-wider">
            60 d. grąžinimo garantija
          </h2>
          <p className="w-[300px] text-base font-normal tracking-wider text-gray-700">
            Suprantame, kad situacija šiomis dienomis gali pasikeisti itin
            greitai, todėl paėmus paskolą iš „Bigbank“, ją be jokio pabrangimo
            galite grąžinti per 60 dienų
          </p>
        </div>
        <div className="flex w-[330px] flex-col content-center items-center gap-3.5 text-center">
          <span className="bg-real-green flex h-10 w-10 content-center items-center justify-center rounded-full">
            <Phone className="h-6 fill-white" />
          </span>
          <h2 className="text-fake-black text-2xl font-bold tracking-wider">
            Asmeninė konsultacija
          </h2>
          <p className="w-[310px] text-base font-normal tracking-wider text-gray-600">
            „Bigbank“ vadybininkai atsakys į visus Jums kylančius klausimus
            telefonu 1388 ar el. paštu info@bigbank.lt
          </p>
        </div>
      </div>
    </section>
  );
}
