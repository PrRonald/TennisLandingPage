import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const Footer = () => {
  return (
    <section className="mx-6 xl:my-6">
      <div className="w-full h-auto grid grid-cols-1 grid-rows-[auto_auto_auto]
            gap-11 xl:grid-cols-3 xl:grid-rows-1 ">
        <div className="w-full h-[226px] grid grid-cols-[60%_40%] grid-rows-1
         items-center border-b-[0.3px] border-gray-300 xl:border-r-[0.3px] xl:border-b-0  ">
          <div className=" ">
            <div className="mb-5 ">
              <h1 className="text-xl font-normal">
                Palma de Mallorca
              </h1>
            </div>
            <h1 className="text-lg font-normal">
              SCATTERED CLOUDS
            </h1>
            <h1 className="text-lg font-normal">
              HUMIDITY: 73%
            </h1>
            <h1 className="text-lg font-normal">
              WIND: 6M/S SW
            </h1>
            <h1 className="text-lg font-normal">
              H 21 L 15
            </h1>
          </div>
          <div className="place-self-center  " >
            <h1 className="text-7xl font-semibold text-green-600">
              21°
            </h1>
          </div>
        </div>
            <div className="h-[249px] *:flex *:flex-row flex flex-col
                 gap-6 justify-center border-b-[0.3px] border-gray-300 
                 xl:border-r-[0.3px] xl:border-b-0 ">
              <div className="size-auto flex flex-row items-center">
                <FaLocationDot className="size-6 text-yellow-500  mr-4  "/>
                <h1 className="text-xl font-normal ">
                  54421 Tennessee hwy, Alexandria, VA, USA, 22303
                </h1>
              </div>
              <div className="w">
                <FaEnvelope className="size-6 text-yellow-500  mr-4  "/>
                <h1 className="text-xl font-normal ">
                  info@palmatennis.com
                </h1>
              </div>
              <div className="w">
                <FaPhoneAlt className="size-6 text-yellow-500  mr-4  "/>
                <h1 className="text-xl font-normal ">
                  +34 971 282 0000
                </h1>
              </div>
            </div>
        <div className="size-auto flex flex-row justify-between mb-4 items-center ">
          <div className="size-[60px] rounded-full bg-green-600 flex flex-row justify-center items-center ">
            <FaInstagram className="size-8 text-white " />
          </div>
          <div className="size-[60px] rounded-full bg-green-600 flex flex-row justify-center items-center">
            <FaFacebookF className="size-8 text-white " />
          </div>
          <div className="size-[60px] rounded-full bg-green-600 flex flex-row justify-center items-center">
            <FaTwitter className="size-8 text-white " />
          </div>
          <div className="size-[60px] rounded-full bg-green-600 flex flex-row justify-center items-center">
            <FaWhatsapp className="size-8 text-white " />
          </div>
        </div>
      </div>
    </section>
  );
}
