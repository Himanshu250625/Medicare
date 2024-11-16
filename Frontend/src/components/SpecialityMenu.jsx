import React, { useEffect } from "react";
import { specialityData } from "../assets/assets_frontend/assets.js";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const SpecialityMenu = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
      id="speciality"
      data-aos="fade-up"
    >
      <h1 className="text-3xl font-bold">Find by Speciality </h1>
      <p className="sm:w-1/3 md:text-sm text-center text-[17px] font-medium">
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-8 pt-5 w-full overflow-scroll " data-aos="fade-up" data-aos-delay="200">
        {specialityData.map((item, index) => (
          <Link onClick={() => window.scrollTo(0, 0)} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" key={index} to={`/doctors/${item.speciality}`} >
            <img  className="w-30 sm:w-24 mb-2" src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
