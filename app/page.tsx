import Aurora from "@/components/ui/aurora";
import CardNav from "@/components/nav";
import logo from "@/public/logo.svg";
import Hero from "@/sections/hero";
import Educator from "@/sections/educator";
import Programs from "@/sections/programs";
import Philosophy from "@/sections/philosophy";
import Footer from "@/sections/footer";
import Testimonials from "@/sections/testimonials";
import Contact from "@/sections/contact";

const items = [
  {
    label: "Educator",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "Profile", href: "#educator", ariaLabel: "Educator Profile" }
    ]
  },
  {
    label: "Programs",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "School Students", href: "#programs", ariaLabel: "Programs for School Students" },
      { label: "Engineering", href: "#programs", ariaLabel: "Programs for Engineering Students" },
      { label: "Programming", href: "#programs", ariaLabel: "Programming Programs" },
      { label: "Professionals", href: "#programs", ariaLabel: "Programs for Professionals" }
    ]
  },
  {
    label: "Testimonials",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      { label: "Testimonials", href: "#testimonials", ariaLabel: "Student Testimonials" }
    ]
  }
];

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0 h-[80vh]">
        <Aurora
          colorStops={["#66a1ff","#a3a8f0","#2937ff"]}
          amplitude={0.8}
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
      <Hero />
      <Educator />
      <Philosophy />
      <Programs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
