import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "./tailwind.css";
import Logo from "./assets/tpay_logo.svg";
import FacebookIcon from "./assets/facebook-icon.svg";
import InstagramIcon from "./assets/instagram-icon.svg";
import TwitterIcon from "./assets/twitter-icon.svg";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col items-center w-full bg-[#060809]">
        <div className="w-[1440px] flex flex-col text-white m-[40px] overflow-x-hidden">
          <div className="flex justify-between items-center">
            <div className="flex gap-[32px]">
              <div>
                <img
                  src={Logo}
                  alt="company logo"
                  className="w-[163px] h-[64.19px]"
                />
              </div>
              <div className="flex items-center">
                <nav className="inline-flex gap-[20px]">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active p-[10px] relative font-[600] border-b-[#25A75C] border-b-[3px]"
                        : "p-[10px] relative font-[600]"
                    }
                    to="/"
                  >
                    For individuals
                  </NavLink>
                  <NavLink
                    to="/business"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active p-[10px] relative font-[600] border-b-[#25A75C] border-b-[3px]"
                        : "p-[10px] relative font-[600]"
                    }
                  >
                    For Businesses
                  </NavLink>
                </nav>
              </div>
            </div>
            <div>
              <ul className="inline-flex gap-[25px] items-center font-[600]">
                <li className="p-[10px]">About Us</li>
                <li className="p-[10px]">Contact</li>
                <li className="bg-[#ffffff] w-[2px] h-[27px]" />
                <li className="p-[10px]">Login</li>
                <button className="bg-gradient-to-b from-[#5CB23A] to-[#048002] leading-[24px] py-[13px] px-[24px] rounded-[10px]">
                  Create free account
                </button>
              </ul>
            </div>
          </div>
          <Outlet />
          <div className="flex justify-between bg-white px-[90px] py-[60px]">
            <div className="h-[186px] flex flex-col justify-between">
              <div>
                <img
                  src={Logo}
                  alt="company logo"
                  className="w-[163px] h-[64.19px]"
                />
              </div>
              <div className="gap-y-[18px] flex flex-col justify-between">
                <div className="inline-flex w-[132px] justify-between">
                  <img alt="facebook-icon" src={FacebookIcon} />
                  <img alt="instagram-icon" src={InstagramIcon} />
                  <img alt="twitter-icon" src={TwitterIcon} />
                </div>
                <div className="text-[#979797] text-[16px] leading-[24px]">
                  2015-2022 Taxaide Technologies Limited. All rights reserved
                </div>
              </div>
            </div>
            <div className="flex justify-between w-[384px]">
              <div className="flex flex-col gap-y-[20px]">
                <div className="text-[#000E0C] text-[18px] leading-[22px] font-[600]">
                  About us
                </div>
                <div className="flex flex-col gap-y-[14px] font-[500] text-[#979797] leading-[24px]">
                  <div>About</div>
                  <div>Legal & Privacy</div>
                </div>
              </div>
              <div className="flex flex-col gap-y-[20px]">
                <div className="text-[#000E0C] text-[18px] leading-[22px] font-[600]">
                  Products
                </div>
                <div className="flex flex-col gap-y-[14px] font-[500] text-[#979797] leading-[24px]">
                  <div>TBook®</div>
                  <div>TaxiTWithhold®</div>
                  <div>TaxiTPayroll®</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ScrollRestoration /> */}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
