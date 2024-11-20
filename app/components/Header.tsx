import Logo from "~/public/BigBankLogo";
import Phone from "~/public/PhoneLogo";
import Triangle from "~/public/Triangle";
import Lock from "~/public/Lock";
export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-center gap-[107px] bg-white align-middle font-gotham text-base text-gray-500">
      <Logo className="h-[33px] w-[113px] cursor-pointer"></Logo>
      <nav className="flex gap-7 text-[14px]">
        <div className="flex items-center gap-2">
          <a
            className="transform transition-transform duration-300 hover:scale-[1.02] hover:text-emerald-500"
            href="./"
          >
            Privatiems
          </a>
          <Triangle className="h-5 fill-gray-500" />
        </div>
        <div className="flex items-center gap-2">
          <a
            className="transform transition-transform duration-300 hover:scale-[1.02] hover:text-emerald-500"
            href="./"
          >
            Verslui
          </a>
          <Triangle className="h-5 fill-gray-500" />
        </div>
        <div className="flex items-center gap-2">
          <a
            className="transform transition-transform duration-300 hover:scale-[1.02] hover:text-emerald-500"
            href="./"
          >
            Naudinga Informacija
          </a>{" "}
          <Triangle className="h-5 fill-gray-500" />
        </div>

        <a
          className="transform transition-transform duration-300 hover:scale-[1.02] hover:text-emerald-500"
          href="./"
        >
          DUK
        </a>
        <a
          className="transform transition-transform duration-300 hover:scale-[1.02] hover:text-emerald-500"
          href="./"
        >
          Kontaktai
        </a>
      </nav>
      <div className="flex content-center items-center justify-center gap-6 text-sm">
        <Phone className="h-6 cursor-pointer fill-gray-500 hover:fill-emerald-500" />
        <hr className="h-10 w-px bg-gray-300" />
        <div className="flex items-center justify-center gap-2 rounded-md border border-gray-600 px-4 py-1 text-[12px] font-semibold text-gray-500 transition-colors duration-300 hover:bg-gray-100">
          <Lock className="h-[18px] cursor-pointer fill-gray-500" />
          <button>Prisijungti</button>
        </div>
      </div>
    </header>
  );
}
