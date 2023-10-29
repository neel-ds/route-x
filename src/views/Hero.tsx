import Link from "next/link";
import Image from "next/image";
import { GiDigitalTrace } from "react-icons/gi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import  { FaLocationArrow } from "react-icons/fa"

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: any;
}

const FeatureCard = ({ title, desc, icon }: FeatureCardProps) => {
  return (
    <div className="relative bg-white/30 backdrop-blur-sm bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-30 p-5 shadow-lg border border-violet-200 dark:border-0 rounded-lg">
      <dt className="flex flex-col items-center md:items-start">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#732fff] dark:bg-[#a13bf7] text-white">
          {icon}
        </div>
        <p className="pt-5 text-lg leading-6 font-semibold text-[#732fff] dark:text-[#e99aff]">
          {title}
        </p>
      </dt>
      <dd className="mt-2 text-base text-gray-600 text-center md:text-left dark:text-white">
        {desc}
      </dd>
    </div>
  );
};

export default function Hero() {
  return (
    <main className="px-4 md:px-0 mx-auto max-w-[1080px]">
      <div className="md:text-left h-[calc(100vh-60px)] flex justify-center flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline text-gray-800 dark:text-gray-200">
              Ship authentic.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#732fff] to-[#a75eff] dark:from-[#a13bf7] dark:to-[#7500ff] pb-4">
              RouteX
            </span>
            <span className="block font-semibold text-[#732fff] dark:text-[#65dbff] text-2xl">Provenance with trust</span>
          </h1>
          <p className="mt-3 text-gray-700 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Verify the authenticity of products by unique product ID.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex lg:justify-start md:flex-col lg:flex-row">
            <div>
              <Link
                href="/explore"
                className="w-full md:w-[70%] lg:w-full flex items-center justify-center px-7 py-3 gap-2 border-0 border-transparent text-base font-medium rounded-3xl text-gray-200 bg-gradient-to-r from-[#a13bf7] to-[#7500ff] shadow-lg dark:hover:drop-shadow-[0_3px_5px_#8ce1ff] md:py-2 md:text-lg md:px-8"
              >
                Track <FaLocationArrow size={15} />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:flex hidden my-auto w-[30%] md:w-[60%] ml-10 items-end">
          <Image
            src="/provenance.png"
            width="900"
            height="600"
            className="ml-10"
            alt="Banner"
          />
        </div>
      </div>

      <div className="max-w-7xl pt-5 pb-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="text-4xl mb-10 font-medium title-font text-[#732fff] dark:text-white">
            Features
          </h1>
        </div>
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          <FeatureCard
            icon={<GiDigitalTrace size={25} />}
            title="Traceability"
            desc="The user can track the movement and ownership of a product through its life cycle, creating a transparent record of its history."
          />
          <FeatureCard
            icon={<MdSecurity size={25} />}
            title="Security"
            desc="Everything on-chain! Prevent any forgery and errors while authenticating a product. No one can change provenance except the authorized person."
          />
          <FeatureCard
            icon={<BsFillCheckCircleFill size={25} />}
            title="Verification"
            desc="It also ensures that the right person is adding or updating the product. User can explore the listed products and check the provenance."
          />
        </dl>
      </div>
    </main>
  );
}
