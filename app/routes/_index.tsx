import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import LoansType from "~/components/LoansType";
import WhyUs from "~/components/WhyUs";

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
    </main>
  );
}
