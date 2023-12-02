import { BsGraphUp, BsGlobe2 } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { SlPeople } from "react-icons/sl";
import { VscGraph } from "react-icons/vsc";
import { CiSaveUp1 } from "react-icons/ci";

const Services = [
  {
    icon: <BsGraphUp size={40} color="#4ef0ed" />,
    Tittle: "SEO",
    Para: "Optimizing your website for search engines, to increase your visibility.",
  },
  {
    icon: <BiPencil size={40} color="#4ef0ed" />,
    Tittle: "Social media marketing",
    Para: "Showcase your brand, products, and services to a wider audience",
  },
  {
    icon: <BsGlobe2 size={40} color="black" />,
    Tittle: "Website Development",
    light: true,
    Para: "Through Website you can establish an online presence and reach a wider audience",
  },
  {
    icon: <VscGraph size={40} color="#4ef0ed" />,
    Tittle: "Google ads",
    Para: "Drive traffic and conversions through online targeted campaigns on Google",
  },
  {
    icon: <SlPeople size={40} color="#4ef0ed" />,
    Tittle: "Content Creation",
    Para: "Creating high-quality content to attract and retain your target audience",
  },
  {
    icon: <CiSaveUp1 size={40} color="#4ef0ed" />,
    Tittle: "Branding your Product",
    Para: "Creating a strong brand for your products to differentiate yourself from competitors",
  },
];

export default Services;
