import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import Frame1 from "../assets/frame-1.png";
import MoneyClock from "../assets/money_clock.svg";
import PhoneMessage from "../assets/phone_message.svg";
import ShieldCheck from "../assets/shield_check.svg";
import CircleEmbelishment from "../assets/circle embellishment.svg";
import RightPanel from "../assets/right panel.png";
import LeftPanel from "../assets/left panel.png";
import AppStore from "../assets/appstore.svg";
import GooglePlay from "../assets/googleplay.svg";
import LogoList from "../assets/logo_list.png";
import { useEffect, useRef } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Taxit | Home" },
    { name: "description", content: "Welcome to Taxit!" },
  ];
};

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  };
};

const section1 = (ref, displayRef, imageRef, showFade1, showFade2) => (
  <div className="flex pt-[74px] pb-[22px] px-[90px]">
    <div
      ref={ref}
      className="m-auto absolute right-[20%] top-[180px] transition-all duration-500"
    >
      <div ref={showFade1} className="hidden">
        <div className="mb-[20px] w-[543px]">
          <span className="font-[600] text-[48px] leading-[64px]">
            Secure & seamless online transactions
          </span>
        </div>
        <div className="mb-[32px]">
          <span className="text-[18px] leading-[28.8px]">
            Providing you with the best online payment experience
          </span>
        </div>
        <button className="bg-gradient-to-b from-[#5CB23A] to-[#048002] text-[16px] leading-[24px] py-[16px] px-[24px] rounded-[10px] font-[600]">
          Create free account
        </button>
      </div>
      <div ref={showFade2} className="block">
        <div className="mb-[20px]">
          <span className="font-[600] !text-center text-[48px] leading-[64px]">
            Manage payroll, compliance <br />& HR in real time
          </span>
        </div>
        <div className="mb-[32px]">
          <p className="font-normal text-[18px] leading-[28.8px]">
            Make income tax remittances to the state internal revenue <br />
            service for your employees.
          </p>
        </div>
        <button className="bg-gradient-to-b from-[#5CB23A] to-[#048002] text-[16px] leading-[24px] py-[16px] px-[24px] rounded-[10px] font-[600]">
          Create free account
        </button>
      </div>
    </div>
    <div ref={displayRef} className="m-auto hidden">
      <div className="mb-[20px] w-[543px]">
        <span className="font-[600] text-[48px] leading-[64px]">
          Secure & seamless online transactions
        </span>
      </div>
      <div className="mb-[32px]">
        <span className="text-[18px] leading-[28.8px]">
          Providing you with the best online payment experience
        </span>
      </div>
      <button className="bg-gradient-to-b from-[#5CB23A] to-[#048002] text-[16px] leading-[24px] py-[16px] px-[24px] rounded-[10px] font-[600]">
        Create free account
      </button>
    </div>
    <div ref={imageRef} className="opacity-0 transition-opacity duration-500">
      <img alt="frame pictures" src={Frame1} />
    </div>
  </div>
);

const section2 = (
  <div className="bg-white pt-[100px] pb-[150px] text-[#4F4F4F] px-[92px]">
    <div className="text-center mb-[40px]">
      <span className="block font-[600] text-[38px] leading-[44px]">
        Payments tools designed for you
      </span>
      <span className="block text-[18px] font-normal leading-[28.8px]">
        Explore payment features that provides you with every possible solution
      </span>
    </div>
    <div className="flex gap-[24px] justify-evenly">
      {[
        {
          title: "User Friendly",
          description: "Highly responsive and easy to navigate",
          icon: PhoneMessage,
        },
        {
          title: "Secure",
          description:
            "Your data is secure. It is continuously monitored, audited, and stored in an encrypted form.",
          icon: ShieldCheck,
        },
        {
          title: "Fast",
          description:
            "Transacting takes only a few seconds - it's convenient and safe.",
          icon: MoneyClock,
        },
      ].map(({ title, icon, description }, index) => (
        <div
          key={`feature${index}`}
          className="px-[40px] py-[30px] h-[388px] flex gap-[20px] flex-col rounded-[8px] self-stretch flex-1 border border-[rgba(92, 178, 58, 0.27)] justify-center"
        >
          <div>
            <img alt="feature icon" src={icon} className="w-[80px] h-[80px]" />
          </div>
          <div>
            <div className="font-[500] leading-[33px] text-[22px] text-[rgba(15, 9, 25, 0.80)]">
              {title}
            </div>
            <div
              style={{ fontFeatureSettings: "'salt' on, 'liga' off" }}
              className="font-normal text-[18px] leading-[29px] tracking-[2%] text-[#555555]"
            >
              {description}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const section3 = (
  <div className="relative bg-white w-full flex flex-col">
    <div className="right-0 bottom-0 top-[170px] absolute justify-center z-[1]">
      <img alt="circle embelishment" src={CircleEmbelishment} />
    </div>
    <div className="flex justify-between items-center pl-[90px] pr-[58px] z-[2]">
      <div>
        <div className="flex gap-x-[22px]">
          <div className="w-[8px] bg-[#25A75C]" />
          <div className="flex flex-col gap-y-[8px]">
            <div className="text-[#4F4F4F] font-[600] text-[28px] leading-[44px]">
              Pay bills
            </div>
            <div className="text-[#4F4F4F] text-[18px] leading-[28.8px] pr-[40px]">
              Paying your bills has never been so easy.
            </div>
          </div>
        </div>
        <div className="w-[8px] bg-[#DBE2EA] h-[40px]" />
        <div className="flex gap-x-[22px]">
          <div className="w-[8px] bg-[#DBE2EA]" />
          <div className="flex flex-col gap-y-[8px]">
            <div className="text-[#4F4F4F] font-[600] text-[28px] leading-[44px]">
              Buy Airtime & Data
            </div>
            <div className="text-[#4F4F4F] text-[18px] leading-[28.8px] pr-[40px]">
              Never get caught with low airtime and data again!
            </div>
          </div>
        </div>
        <div className="w-[8px] bg-[#DBE2EA] h-[40px]" />
        <div className="flex gap-x-[22px]">
          <div className="w-[8px] bg-[#DBE2EA]" />
          <div className="flex flex-col gap-y-[8px]">
            <div className="text-[#4F4F4F] font-[600] text-[28px] leading-[44px]">
              Money Transfer
            </div>
            <div className="text-[#4F4F4F] text-[18px] leading-[28.8px] pr-[40px]">
              Transferring money is now hassle-free.
            </div>
          </div>
        </div>
        <div className="w-[8px] bg-[#DBE2EA] h-[40px]" />
        <div className="flex gap-x-[22px]">
          <div className="w-[8px] bg-[#DBE2EA]" />
          <div className="flex flex-col gap-y-[8px]">
            <div className="text-[#4F4F4F] font-[600] text-[28px] leading-[44px]">
              Pay Toll Fee
            </div>
            <div className="text-[#4F4F4F] text-[18px] leading-[28.8px] pr-[40px]">
              Never worry about getting a toll ticket again.
            </div>
          </div>
        </div>
      </div>
      <div>
        <img alt="right panel" src={RightPanel} />
      </div>
    </div>
    <div className="flex justify-between items-center px-[90px] pt-[130px] z-[2]">
      <div>
        <img alt="right panel" src={LeftPanel} className="max-w-[600px]" />
      </div>
      <div className="flex flex-col gap-y-[39px] w-[534px]">
        <div className="flex flex-col gap-y-[8px]">
          <div className="text-[#4F4F4F] text-[36px] leading-[44px] font-[600]">
            Transact on the go
          </div>
          <div className="text-[18px] text-[#4F4F4F]">
            Stay on top of your business with our easy-to-use app
          </div>
        </div>
        <div>
          <button className="bg-gradient-to-b from-[#5CB23A] to-[#048002] text-[16px] leading-[24px] py-[16px] px-[24px] rounded-[10px] font-[600]">
            Get Started
          </button>
        </div>
        <div className="inline-flex gap-x-[24px]">
          <img alt="app store" src={AppStore} className="cursor-pointer" />
          <img alt="google play" src={GooglePlay} className="cursor-pointer" />
        </div>
      </div>
    </div>
    <div></div>
  </div>
);

const section4 = (
  <div className="py-[150px] px-[90px] bg-white">
    <div
      className="rounded-[8px] relative"
      style={{
        background:
          "linear-gradient(166deg, rgba(92, 178, 58, 0.80) 30.42%, rgba(4, 128, 2, 0.80) 116.94%)",
      }}
    >
      <img alt="apps" src={LogoList} className="object-cover w-full" />
      <div className="absolute top-0 bottom-0 pl-[52px] flex flex-col justify-center gap-y-[24px]">
        <div>
          <div className="font-[600] text-[36px] leading-[54px]">
            Send funds
          </div>
          <div className="text-[36px] leading-[54px]">Remit taxes</div>
          <div className="text-[36px] leading-[54px]">Buy utilities</div>
        </div>
        <div>
          <button className="bg-[#ffffff] text-[16px] leading-[24px] py-[16px] px-[24px] rounded-[10px] font-[600] text-[#25A75C]">
            Get started
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function Index() {
  const animationRef = useRef();
  const imageRef = useRef();
  const displayRef = useRef();
  const showFade1 = useRef();
  const showFade2 = useRef();

  useEffect(() => {
    animationRef.current?.classList.add("translate-x-[-95%]");
    animationRef.current?.classList.add("translate-y-[15%]");

    setTimeout(() => {
      showFade1.current?.classList.add("!block");
      showFade2.current?.classList.add("hidden");
    }, 200);

    setTimeout(() => {
      imageRef.current?.classList.add("opacity-100");
      animationRef.current?.classList.add("hidden");
      displayRef.current?.classList.remove("hidden");
    }, 500);
  }, []);

  return (
    <div className="relative">
      {section1(animationRef, displayRef, imageRef, showFade1, showFade2)}
      {section2}
      {section3}
      {section4}
    </div>
  );
}
