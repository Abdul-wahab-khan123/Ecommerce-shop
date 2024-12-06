import Image from "next/image";
import { BiLogoApple } from "react-icons/bi";

export default function page() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 container mx-auto">
        <div className="">fff</div>
        <div className="col-span-2">
          <div className="bg-black">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-white">
                <div className="flex items-center gap-6 para-main">
                  <BiLogoApple className="text-5xl" />
                  <p className=" text-base">iPhone 14 Series</p>
                </div>
                <h2 className="text-5xl font-semibold leading-[70px]">
                  Up to 10% off Voucher
                </h2>
                <a href="javascript:;">Shop Now</a>
              </div>
              <div className="">
                <Image
                  src="/mobile.png"
                  alt="A descriptive alt text"
                  width={500}
                  height={352}
                  className=" h-[352px] w-[100%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
