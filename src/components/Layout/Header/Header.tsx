import { useNavigate } from "react-router-dom";

import MediaQuery from "react-responsive";

import { useAccount } from "wagmi";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import ConnectButton from "@/provider/ConnectButton";

import * as data from "@/translation/en.json";

interface HeaderProps {
  showNav: boolean;
  setShowNav: (showNav: boolean) => void;
}

const Header = ({ showNav, setShowNav }: HeaderProps) => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  const navigate = useNavigate();

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <section className="relative flex flex-col text-white w-full bg-black">
      <div className="z-[10000] fixed bg-black w-full text-2xl top-0">
        <MediaQuery minWidth={1024}>
          <div className="hidden lg:flex justify-between items-center py-4 px-10">
            <div className="w-full flex justify-between items-center">
              <a href="/">
                <img
                  src="./assets/images/header.png"
                  className="w-[92px] h-[92px]"
                  alt=""
                />
              </a>

              <p
                className="hover:text-[#528F85] cursor-pointer"
                onClick={() => navigate("/staking")}
              >
                {data.navbar.staking}
              </p>

              <div className="group relative">
                <p className="cursor-pointer hover:text-[#528F85]">
                  {data.navbar.about}
                </p>
                <div>
                  <div className="absolute hidden group-hover:block">
                    <ul className="bg-black rounded-lg px-4 py-2 mt-12 flex flex-col justify-center gap-2 min-w-[180px]">
                      <li>
                        <a href="/#moonomics">
                          <p className="hover:text-[#528F85]">
                            {data.navbar.moonomics}
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="/#roadmap">
                          <p className="hover:text-[#528F85]">
                            {data.navbar.roadmap}
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="/#staking">
                          <p className="hover:text-[#528F85]">
                            {data.navbar.rewards}
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="/#FAQs">
                          <p className="hover:text-[#528F85]">
                            {data.navbar.faqs}
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <p className="hover:text-[#528F85]">
                            {data.navbar.howtobuy}
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <a
                href="./assets/pdf/THEMOONMEMES.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <p className="hover:text-[#528F85]">{data.navbar.whitepaper}</p>
              </a>

              <a href="/">
                <p className="hover:text-[#528F85]">{data.navbar.audit}</p>
              </a>

              {!address ? (
                <a href="/#buynow">
                  <button
                    className="bg-[#FFC700] min-w-[170px] min-h-[45px] rounded-2xl"
                    onClick={() => open()}
                  >
                    {data.navbar.buynow}
                  </button>
                </a>
              ) : (
                <ConnectButton />
              )}

              <div className="flex gap-10 items-center">
                {/* <a href="https://t.me/TheMoonMemesPortal" target="_blank"> */}
                <img
                  src="./assets/icons/Telegram App.svg"
                  className="min-w-14 h-14 p-2 border-[1px] rounded-full border-[#FFC700] cursor-pointer"
                  alt=""
                />
                {/* </a> */}
                <a href="https://x.com/The_Moon_Memes" target="_blank">
                  <img
                    src="./assets/icons/Twitter-X-Icon.png"
                    className="min-w-14 h-14 border-[1px] rounded-full border-[#FFC700]"
                    alt=""
                  />
                </a>
              </div>

              <div className="w-[120px]"></div>
            </div>

            <div className="absolute top-10 left-[calc(100%-180px)]">
              <div className="gtranslate_wrapper"></div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={1024}>
          <div className="flex lg:hidden justify-between items-center px-2 py-4">
            <div className="flex">
              <img
                src="./assets/icons/hamburger.svg"
                id="navToggleIcon"
                onClick={() => handleShowNav()}
                className="w-10 h-10 mr-5 cursor-pointer"
                alt=""
              />
              <a href="/">
                <img
                  src="./assets/images/header.png"
                  className="w-10 h-10"
                  alt=""
                />
              </a>
            </div>
            {!address ? (
              <a href="/#buynow">
                <button
                  className="bg-[#FFC700] min-w-[160px] min-h-[40px] rounded-2xl"
                  onClick={() => {
                    open();
                  }}
                >
                  {data.navbar.buynow}
                </button>
              </a>
            ) : (
              <ConnectButton />
            )}
          </div>
        </MediaQuery>

        <p className="bg-[#FFC700] text-center w-full text-base text-black">
          {data.navbar.alert}
        </p>
      </div>

      <div
        id="navBar"
        className={`z-[10001] flex w-80 pt-[80px] duration-300 flex-col gap-[10px] fixed top-0 -left-full bg-Ivory h-screen bg-black lg:hidden px-10 ${
          showNav ? "!left-0" : ""
        }`}
      >
        <img
          src="./assets/icons/menu-cross.svg"
          id="navToggleIcon"
          onClick={() => handleShowNav()}
          className="w-10 h-10 absolute top-4 right-4 cursor-pointer"
          alt=""
        />
        <a href="/">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            {data.navbar.home}
          </p>
        </a>
        <a href="/staking">
          <p className="border-b-[1px] border-white px-1 py-1">
            {data.navbar.staking}
          </p>
        </a>
        <a href="/#moonomics">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            {data.navbar.moonomics}
          </p>
        </a>
        <a href="/#roadmap">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            {data.navbar.roadmap}
          </p>
        </a>
        <a href="/#staking">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            {data.navbar.rewards}
          </p>
        </a>
        <a href="/#FAQs">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            {data.navbar.faqs}
          </p>
        </a>
        <a
          href="./assets/pdf/THEMOONMEMES.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <p className="border-b-[1px] border-white px-1 py-1">
            {data.navbar.whitepaper}
          </p>
        </a>
        <a href="/">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            {data.navbar.audit}
          </p>
        </a>
        <a href="/#buy">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            {data.navbar.howtobuy}
          </p>
        </a>

        <div className="h-[50px]"></div>

        <div className="absolute left-[30px] top-[477px]">
          <div className="gtranslate_wrapper" />
        </div>

        <div className="flex gap-5 items-center">
          {/* <a href="https://t.me/TheMoonMemesPortal" target="_blank"> */}
          <img
            src="./assets/icons/Telegram App.svg"
            className="w-14 h-14 p-2 border-[1px] rounded-full border-[#FFC700] cursor-pointer"
            alt=""
          />
          {/* </a> */}
          <a href="https://x.com/The_Moon_Memes" target="_blank">
            <img
              src="./assets/icons/Twitter-X-Icon.png"
              className="w-14 h-14 p-2 border-[1px] rounded-full border-[#FFC700]"
              alt=""
            />
          </a>
        </div>

        {!address ? (
          <a href="/#buynow">
            <button
              className="bg-[#FFC700] w-full min-h-[40px] rounded-2xl"
              onClick={() => {
                open();
              }}
            >
              {data.navbar.buynow}
            </button>
          </a>
        ) : (
          <ConnectButton />
        )}
      </div>
    </section>
  );
};

export default Header;
