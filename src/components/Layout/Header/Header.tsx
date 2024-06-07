import MediaQuery from "react-responsive";

import { useAccount } from "wagmi";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import ConnectButton from "@/provider/ConnectButton";

interface HeaderProps {
  showNav: boolean;
  setShowNav: (showNav: boolean) => void;
}

const Header = ({ showNav, setShowNav }: HeaderProps) => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();

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

              <a href="/staking">
                <p className="hover:text-[#528F85]">STAKING</p>
              </a>

              <div className="group relative">
                <p className="cursor-pointer hover:text-[#528F85]">ABOUT</p>
                <div>
                  <div className="absolute hidden group-hover:block">
                    <ul className="bg-black rounded-lg px-4 py-2 mt-12 flex flex-col justify-center gap-2">
                      <li>
                        <a href="/#moonomics">
                          <p className="hover:text-[#528F85]">MOONOMICS</p>
                        </a>
                      </li>
                      <li>
                        <a href="/#roadmap">
                          <p className="hover:text-[#528F85]">ROADMAP</p>
                        </a>
                      </li>
                      <li>
                        <a href="/#staking">
                          <p className="hover:text-[#528F85]">REWARDS</p>
                        </a>
                      </li>
                      <li>
                        <a href="/#FAQs">
                          <p className="hover:text-[#528F85]">FAQs</p>
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
                <p className="hover:text-[#528F85]">WHITEPAPER</p>
              </a>

              <a href="/">
                <p className="hover:text-[#528F85]">AUDIT</p>
              </a>

              <a href="/#buy">
                <p className="hover:text-[#528F85]">HOW TO BUY</p>
              </a>

              {!address ? (
                <a href="/#buynow">
                  <button
                    className="border-[1px] border-[#FFC700] min-w-[200px] min-h-[60px] rounded-2xl"
                    onClick={() => open()}
                  >
                    BUY NOW
                  </button>
                </a>
              ) : (
                <ConnectButton />
              )}

              <div className="w-[120px]"></div>
            </div>

            <div className="flex gap-5 items-center ml-[50px]">
              <a href="https://t.me/TheMoonMemesPortal" target="_blank">
                <img
                  src="./assets/icons/Telegram App.svg"
                  className="min-w-14 h-14 p-2 border-[1px] rounded-full border-[#FFC700]"
                  alt=""
                />
              </a>
              <a href="https://x.com/The_Moon_Memes" target="_blank">
                <img
                  src="./assets/icons/Twitter-X-Icon.png"
                  className="min-w-14 h-14 border-[1px] rounded-full border-[#FFC700]"
                  alt=""
                />
              </a>
            </div>

            <div className="absolute top-10 right-[200px]">
              <div
                className="gtranslate_wrapper_desktop"
                id="desktopGTranslate"
              ></div>
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
            <a href="/#buynow">
              <button
                className="border-[1px] border-[#FFC700] min-w-[160px] min-h-[40px] rounded-2xl"
                onClick={() => {
                  open();
                }}
              >
                BUY NOW
              </button>
            </a>
          </div>
        </MediaQuery>

        <p className="bg-[#FFC700] text-center w-full text-base text-black">
          Buy & Stake $TMM for 48% Annual Rewards!
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
            HOME
          </p>
        </a>
        <a href="/staking">
          <p className="border-b-[1px] border-white px-1 py-1">STAKING</p>
        </a>
        <a href="/#moonomics">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            MOONOMICS
          </p>
        </a>
        <a href="/#roadmap">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            ROADMAP
          </p>
        </a>
        <a href="/#staking">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            REWARDS
          </p>
        </a>
        <a href="/#FAQs">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            FAQs
          </p>
        </a>
        <a
          href="./assets/pdf/THEMOONMEMES.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <p className="border-b-[1px] border-white px-1 py-1">WHITEPAPER</p>
        </a>
        <a href="/">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            AUDIT
          </p>
        </a>
        <a href="/#buy">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            HOW TO BUY
          </p>
        </a>

        <div className="h-[50px]"></div>

        <div className="absolute left-[30px] top-[477px]">
          <div className="gtranslate_wrapper_desktop" id="desktopGTranslate" />
        </div>

        <div className="flex gap-5 items-center">
          <a href="https://t.me/TheMoonMemesPortal" target="_blank">
            <img
              src="./assets/icons/Telegram App.svg"
              className="w-14 h-14 p-2 border-[1px] rounded-full border-[#FFC700]"
              alt=""
            />
          </a>
          <a href="https://x.com/The_Moon_Memes" target="_blank">
            <img
              src="./assets/icons/Twitter-X-Icon.png"
              className="w-14 h-14 p-2 border-[1px] rounded-full border-[#FFC700]"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
