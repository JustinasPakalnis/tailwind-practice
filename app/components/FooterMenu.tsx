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
        <ul className="flex flex-col gap-6 py-7 text-sm font-normal">
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

      <div className="flex w-[346px] flex-col">
        <div className="flex">
          <div>img</div>
          <div className="flex flex-col">
            <p>Skambinkite</p>
            <p>1388 (privatiems klientams)</p>
          </div>
        </div>
        <div className="flex">
          <div>img</div>
          <div className="flex flex-col">
            <p>Skambinant iš užsienio</p>
            <p>+370 5 205 8788 (privatiems klientams)</p>
          </div>
        </div>
        <div className="flex">
          <div>img</div>
          <div className="flex flex-col">
            <p>Rašykite</p>
            <p>info@bigbank.lt (privatiems klientams)</p>
          </div>
        </div>
        <div className="flex">
          <div>img</div>
          <div className="flex flex-col">
            <p>Skambinkite</p>
            <p>+370 5 207 0700 (verslo klientams)</p>
          </div>
        </div>
        <div className="flex">
          <div>img</div>
          <div className="flex flex-col">
            <p>Rašykite</p>
            <p>verslas@bigbank.lt (verslo klientams)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
