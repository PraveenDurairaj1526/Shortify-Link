
import GSTBanner from "@/components/Gst/GSTBanner";
import GSTForm from "@/components/Gst/GSTForm";
import AboutGST from "@/components/Gst/AboutGST";
import Benefits from "@/components/Gst/Benefits";
import GSTComponents from "@/components/Gst/GSTComponents";
import HowGSTCalculatorWorks from "@/components/Gst/HowGSTCalculatorWorks";

export const metadata = {
  title: "GST Calculator India – Free Online GST Calculator",
  description:
    "Use our free GST Calculator India to calculate GST online instantly. Easily compute GST inclusive, exclusive, and reverse GST with accurate CGST, SGST, and IGST breakup.",
  keywords: [
    "gst calculator india",
    "gst calculator online",
    "how to calculate gst",
    "gst inclusive calculator",
    "reverse gst calculator",
    "gst interest calculator",
    "cgst sgst igst calculator",
    "gst tax calculator india",
    "free gst calculator",
    "online gst calculator"
  ],
  openGraph: {
    title: "GST Calculator India – Calculate GST Online Instantly",
    description:
      "Calculate GST online with our free GST Calculator India. Get instant GST breakup including CGST, SGST, and IGST for inclusive and exclusive prices.",
    url: "https://www.shortifylink.in/gst-calculator",
    siteName: "Shortify Link",
    locale: "en_IN",
    type: "website",
  },
};


export default function GSTCalculatorPage() {
 
    return (
        <div className="bg-[linear-gradient(342deg,#156ded,transparent)]">
            <GSTBanner />
            <section className="max-w-6xl mx-auto px-4 pb-14">
                <GSTForm/>
            </section>
            <AboutGST/>
            <Benefits/>
            <HowGSTCalculatorWorks/>
            <GSTComponents/>
        </div>
    );
}
