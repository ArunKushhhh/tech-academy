import Aurora from "@/components/aurora";
import CardNav from "@/components/nav";
import logo from "@/public/logo.svg";
import Hero from "@/sections/hero";
import Educator from "@/sections/educator";
import Programs from "@/sections/programs";
import Footer from "@/sections/footer";
import Testimonials from "@/sections/testimonials";

const items = [
  {
    label: "About",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "Company", href: "#", ariaLabel: "About Company" },
      { label: "Careers", href: "#", ariaLabel: "About Careers" }
    ]
  },
  {
    label: "Projects",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "Featured", href: "#", ariaLabel: "Featured Projects" },
      { label: "Case Studies", href: "#", ariaLabel: "Project Case Studies" }
    ]
  },
  {
    label: "Contact",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      { label: "Email", href: "#", ariaLabel: "Email us" },
      { label: "Twitter", href: "#", ariaLabel: "Twitter" },
      { label: "LinkedIn", href: "#", ariaLabel: "LinkedIn" }
    ]
  }
];

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0 opacity-80 h-1/2">
        <Aurora
          colorStops={["#1447E6", "#3B82F6", "#1447E6"]}
          amplitude={0.5}
          blend={0.8}
          speed={0.5}
        />
      </div>
      <CardNav
        logo={logo}
        logoAlt="Tech Academy"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      <div className="px-8 md:px-24 w-full min-h-[90vh] flex flex-col justify-end">
        <Hero />
      </div>
      <Educator />
      <Programs />
      <Testimonials />
      <Footer />
    </div>
  );
}
