import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import Frame1 from "../assets/BusinessFrame-1.png";
import MoneyClock from "../assets/money_clock.svg";
import PhoneMessage from "../assets/phone_message.svg";
import ShieldCheck from "../assets/shield_check.svg";
import CircleEmbelishment from "../assets/circle embellishment.svg";
import CircleEmbelishment2 from "../assets/circle embellishment2.png";
import RightPanel from "../assets/business-right-panel.png";
import LogoList from "../assets/logo_list.png";
import { useEffect, useRef } from "react";
import { useLocation } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Taxit | Business" },
    { name: "description", content: "Welcome to Taxit!" },
  ];
};

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  };
};

const section1 = (animationRef, displayRef, showFade1, showFade2) => (
  <div className="flex flex-col pt-[74px] pb-[182px] relative">
    <div
      ref={animationRef}
      className="m-auto absolute left-[90px] top-[180px] transition-all duration-500"
    >
      <div ref={showFade2} className="block">
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
      <div ref={showFade1} className="hidden text-center">
        <div className="mb-[20px] text-center">
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
    <div ref={displayRef} className="opacity-0 m-auto text-center mb-[58px]">
      <div className="mb-[20px]">
        <span className="font-[600] text-[48px] leading-[64px]">
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
    <div className="absolute bottom-0 right-0">
      <img alt="some circle" src={CircleEmbelishment2} />
    </div>
  </div>
);

const section2 = (ref) => (
  <div className="relative">
    <div className="flex justify-center absolute top-[-180px] left-0 right-0 z-[2] ">
      <img
        ref={ref}
        alt="frame pictures"
        src={Frame1}
        className="opacity-0 transition-opacity duration-500"
      />
    </div>
    <div className="bg-white pt-[539px] pb-[150px] text-[#4F4F4F] px-[92px] relative z-[1]">
      <div className="text-center mb-[40px]">
        <span className="block font-[600] text-[38px] leading-[44px]">
          Payments tools designed for you
        </span>
        <span className="block text-[18px] font-normal leading-[28.8px]">
          Explore payment features that provides you with every possible
          solution
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
              <img
                alt="feature icon"
                src={icon}
                className="w-[80px] h-[80px]"
              />
            </div>
            <div>
              <div className="font-[500] leading-[33px] text-[22px] text-[#0F0919]">
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
  </div>
);

const section3 = (
  <div className="relative bg-white w-full flex flex-col">
    <div className="right-[-30px] bottom-0 top-[157px] absolute justify-center">
      <img alt="circle embelishment" src={CircleEmbelishment} />
    </div>
    <div className="flex justify-between items-center pl-[90px] pr-[58px] z-[2]">
      <div className="max-w-[492px]">
        <div className="flex gap-x-[22px]">
          <div className="w-[8px] flex-shrink-0 flex-grow-0 bg-[#DBE2EA]" />
          <div className="flex flex-col gap-y-[8px]">
            <div className="text-[#4F4F4F] font-[600] text-[28px] leading-[44px]">
              Payment
            </div>
            <div className="text-[#4F4F4F] text-[18px] leading-[28.8px]">
              No more checks, no more envelopes and stamps, you can pay your
              employees anytime, anywhere
            </div>
          </div>
        </div>
        <div className="w-[8px] flex-shrink-0 flex-grow-0 bg-[#DBE2EA] h-[40px]" />
        <div className="flex gap-x-[22px]">
          <div className="w-[8px] flex-shrink-0 flex-grow-0 bg-[#DBE2EA]" />
          <div className="flex flex-col gap-y-[8px]">
            <div className="text-[#4F4F4F] font-[600] text-[28px] leading-[44px]">
              Payroll
            </div>
            <div className="text-[#4F4F4F] text-[18px] leading-[28.8px]">
              End-to-end automation of payroll management for organizations,
              complying with Nigerian tax law and tax optimizations for the
              user.
            </div>
          </div>
        </div>
        <div className="w-[8px] flex-shrink-0 flex-grow-0 bg-[#DBE2EA] h-[40px]" />
        <div className="flex gap-x-[22px]">
          <div className="w-[8px] flex-shrink-0 flex-grow-0 bg-[#DBE2EA]" />
          <div className="flex flex-col gap-y-[8px]">
            <div className="text-[#4F4F4F] font-[600] text-[28px] leading-[44px]">
              Payslip
            </div>
            <div className="text-[#4F4F4F] text-[18px] leading-[28.8px]">
              Generates automated TaxiTPaySlip email notifications for each
              employee/user.
            </div>
          </div>
        </div>
        <div className="w-[8px] flex-shrink-0 flex-grow-0 bg-[#DBE2EA] h-[40px]" />
        <div className="flex gap-x-[22px]">
          <div className="w-[8px] flex-shrink-0 flex-grow-0 bg-[#25A75C]" />
          <div className="flex flex-col gap-y-[8px]">
            <div className="text-[#4F4F4F] font-[600] text-[28px] leading-[44px]">
              Reports
            </div>
            <div className="text-[#4F4F4F] text-[18px] leading-[28.8px]">
              Generates relevant reports, such as PAYE Returns for easy
              compliance with filing obligations.
            </div>
          </div>
        </div>
      </div>
      <div>
        <img alt="right panel" src={RightPanel} />
      </div>
    </div>
    <div className="py-[130px] pb-[150px] px-[90px] bg-white">
      <div
        className="rounded-[8px] relative z-[2]"
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
  </div>
);

export default function Business() {
  const fadeInImageRef = useRef();
  const animationRef = useRef();
  const displayRef = useRef();
  const showFade1 = useRef();
  const showFade2 = useRef();

  const location = useLocation();

  useEffect(() => {
    fadeInImageRef.current?.classList.add("opacity-100");
    animationRef.current?.classList.add("translate-x-[57%]");
    animationRef.current?.classList.add("translate-y-[-36%]");

    window.addEventListener("beforeunload", function () {
      fadeInImageRef.current?.classList.add("opacity-0");
    });

    setTimeout(() => {
      showFade1.current?.classList.add("!block");
      showFade2.current?.classList.add("hidden");
    }, 200);

    setTimeout(() => {
      animationRef.current?.classList.add("hidden");
      displayRef.current?.classList.add("!opacity-100");
    }, 500);

    return () => {
      window.removeEventListener("beforeunload", function () {});
    };
  }, []);

  return (
    <div>
      {section1(animationRef, displayRef, showFade1, showFade2)}
      {section2(fadeInImageRef)}
      {section3}
    </div>
  );
}
