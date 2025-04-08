import Image from "next/image";
import { useRouter } from "next/navigation";


const services = [
  {
    title: "Coworking Zone",
    image: "/zone.jpg", // Replace with actual image paths
    alt: "Coworking space",
    path: '/serives/openspace'
  },
  {
    title: "Meetings Zone",
    image: "/meet2.jpg",
    alt: "Meeting room",
    path: '/services/openspace'

  },
  {
    title: "Private Zone",
    image: "/private2.jpg",
    alt: "Private office",
    path: '/services/openspace'
  },
  {
    title: "Domiciliation",
    image: "/domiciliation.jpg",
    alt: "Domiciliation service",
    path: '/services/openspace'   
  },
 
 
];


export default function ServicesSection() {
  // const router = useRouter();

  
    return (
      <section className="text-center py-12 bg-white">
        <p className="text-gray-800 font-medium">Find the workspace that inspires you.      </p>
        <h2 className="text-4xl font-bold my-4 text-amber-500">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-6 px-6 mt-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden w-70">
              <Image
                src={service.image}
                alt={service.alt}
                width={450}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-2 text-center h-20">
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                <button className="mt-1 bg-blue-950 font-semibold text-sm text-white px-3 py-1.5 rounded-lg hover:bg-amber-500   transition">
                  explorer
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  