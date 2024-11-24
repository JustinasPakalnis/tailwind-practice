import Email from "~/public/Email";
import Phone from "~/public/PhoneLogo";

export default function FooterMenu() {
  return (
    <section className="flex justify-center gap-4 bg-custom-gray py-[75px] tracking-wider text-gray-400">
      <div className="flex w-[176px] flex-col">
        <h2 className="text-sm font-semibold">Privatiems</h2>
        <ul className="flex flex-col gap-6 py-7 text-sm font-normal">
          <li>Vartojimo paskola</li>
          <li>Paskola namų remontui</li>
          <li>Refinansavimas</li>
          <li>Paskola automobiliui</li>
          <li>Būsto paskola</li>
          <li>Būsto paskolos refinansavimas</li>
          <li>Paskola NT įsigijimui be įkeitimo</li>
          <li>Paskolos dirbantiems užsienyje</li>
          <li>Kredito kortelė</li>
          <li>Taupomieji indėliai</li>
          <li>Terminuotieji indėliai</li>
          <li>Automobilių lizingas</li>
          <li>Pirkimas išsimokėtinai</li>
          <li>Informacija įmokoms atlikti</li>
          <li>Susidūrėte su sunkumais grąžinant paskolą?</li>
        </ul>
      </div>
      <div className="flex w-[176px] flex-col">
        <h2 className="text-sm font-semibold">Verslui</h2>
        <ul className="flex flex-col gap-6 py-7 text-sm font-normal">
          <li>Verslo paskolos</li>
          <li>Paskola NT vystymui</li>
          <li>Paskola žemės sklypui</li>
          <li>
            Apyvartinių lėšų <br /> paskola
          </li>
          <li>Paskola su NT įkeitimu</li>
          <li>Kredito linija</li>
          <li>Investicinė paskola</li>
          <li>Dalinis palūkanų kompensavimas verslui</li>
          <li>Taupomieji indėliai verslui</li>
          <li>Terminuotieji indėliai verslui</li>
          <li>Automobilių lizingas verslui</li>
          <li>Įrangos ir specialiosios technikos lizingas</li>
        </ul>
      </div>
      <div className="flex w-[176px] flex-col">
        <h2 className="text-sm font-semibold">Informacija klientams</h2>
        <ul className="flex cursor-pointer flex-col gap-6 py-7 text-sm font-normal">
          <li>Apie „Bigbank“</li>
          <li>Investuotojams</li>
          <li>Naudinga informacija</li>
          <li>Sukčiavimo prevencija</li>
          <li>Naujienos ir patarimai</li>
          <li>Karjera</li>
          <li>Saugumas</li>
        </ul>
      </div>
      <div className="flex w-[176px] flex-col">
        <h2 className="text-sm font-semibold">Dokumentai</h2>
        <ul className="flex flex-col gap-6 py-7 text-sm font-normal">
          <li>Tinklalapio naudojimo sąlygos</li>
          <li>Produktų bendrosios sąlygos</li>
          <li>Priklausomi vartojimo kredito tarpininkai</li>
        </ul>
      </div>

      <div className="flex w-[346px] flex-col gap-8">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-custom-gray2">
            <Phone className="h-5" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-fake-black">Skambinkite</p>
            <p className="text-sm text-real-green">
              1388 (privatiems klientams)
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-custom-gray2">
            <Phone className="h-5" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-fake-black">
              Skambinant iš užsienio
            </p>
            <p className="text-sm text-real-green">
              +370 5 205 8788 (privatiems klientams)
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-custom-gray2">
            <Email className="h-[18px]" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-fake-black">Rašykite</p>
            <p className="text-sm text-real-green">
              info@bigbank.lt (privatiems klientams)
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-custom-gray2">
            <Phone className="h-5" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-fake-black">Skambinkite</p>
            <p className="text-sm text-real-green">
              +370 5 207 0700 (verslo klientams)
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-custom-gray2">
            <Email className="h-5" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-fake-black">Rašykite</p>
            <p className="text-sm text-real-green">
              verslas@bigbank.lt (verslo klientams)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
