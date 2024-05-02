import starlogo from "@assets/svg/star.svg";
import Marquee from "./ui/Marquee";

const ServicesList = () => {
  let duplicateArray = Serviceslist.concat(Serviceslist)
 
  return (

    <Marquee>

        {duplicateArray.map((service,i) => (
          <div key={service+i} className="">
            <p className=" text-purple-90 flex text-nowrap items-center gap-2 w-full">
              <img
                src={starlogo.src}
                className="w-[30px] lg:w-[40px]"
                alt="star"
                />{" "}
              {service}
            </p>
          </div>
        ))}
        </Marquee>
      
  );
};

export default ServicesList;

const Serviceslist = [
  "Event Photography",
  "Comercial Photography",
  "Product Photography",
  "Wedding Photography",
  "Landscape Photography",
  "Branding Photography",
  "Portrait  Photography",
  
];
