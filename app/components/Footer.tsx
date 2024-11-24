import Logo from "~/public/BigBankLogo";
import Facebook from "~/public/Facebook";
export default function Footer() {
  return (
    <footer className="flex h-[100px] items-center justify-center gap-[150px]">
      <Logo className="h-[33px] w-[113px] cursor-pointer"></Logo>
      <div className="flex gap-3 text-sm font-medium tracking-wider text-gray-500">
        <p>Tinklalapio naudojimo sąlygos</p>
        <span className="border-[1px]" />
        <p>Slapukų naudojimas</p>
        <span className="border-[1px]" />
        <p>Klientų duomenų tvarkymo principai</p>
      </div>
      <Facebook className="h-6 fill-gray-400" />
    </footer>
  );
}
