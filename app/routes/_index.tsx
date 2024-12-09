import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import LoansType from "~/components/LoansType";
import WhyUs from "~/components/WhyUs";
import Services from "~/components/Services";
import Plans from "~/components/Plans";
import NewsLetter from "~/components/NewsLetter";
import Duk from "~/components/Duk";
import ContactUs from "~/components/ContactUs";
import FooterMenu from "~/components/FooterMenu";
import Footer from "~/components/Footer";
export const meta: MetaFunction = () => {
  return [
    { title: "Tailwind practice" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <Header />
      <img src="./pic.jpg" alt="" />
      <LoansType />
      <WhyUs />
      <Services />
      <Plans />
      <NewsLetter />
      <Duk />
      <ContactUs />
      <FooterMenu />
      <Footer />
    </main>
  );
}
