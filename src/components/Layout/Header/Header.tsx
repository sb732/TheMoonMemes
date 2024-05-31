import { useState } from "react";

interface HeaderProps {
  showNav: boolean;
  setShowNav: (showNav: boolean) => void;
}

const Header = ({ showNav, setShowNav }: HeaderProps) => {
  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <section className="relative flex flex-col text-white w-full bg-black">
      <div className="z-[10000] fixed bg-black w-full hidden md:flex md:flex-row justify-around items-center text-2xl py-4">
        <a href="/">
          <img
            src="./assets/images/header.png"
            className="cursor-pointer"
            alt=""
          />
        </a>
        <a href="/#staking">
          <p>Home</p>
        </a>
        <a href="/staking">
          <p>Staking</p>
        </a>
        <a href="/#about">
          <p>About</p>
        </a>
        <a href="/#moonomics">
          <p>Moonomics</p>
        </a>
        <a href="/#roadmap">
          <p>Roadmap</p>
        </a>
        <a href="/#buy">
          <p>Buy</p>
        </a>
        <button
          className="border px-6 py-4 rounded-2xl"
          id="desktopConnectButton"
        >
          Connect Wallet
        </button>
        <div className="flex gap-5 items-center">
          <img
            src="./assets/icons/Telegram App.svg"
            className="w-8 h-8 cursor-pointer"
            alt=""
          />
          <img
            src="./assets/icons/Twitter-X-Icon.svg"
            className="w-14 h-14 cursor-pointer"
            alt=""
          />
        </div>
      </div>
      <div className="z-[10000] fixed bg-black w-full flex md:hidden md:flex-row justify-between items-center text-2xl px-2 py-4">
        <div className="flex">
          <img
            src="./assets/icons/hamburger.svg"
            id="navToggleIcon"
            onClick={() => handleShowNav()}
            className="w-10 h-10 mr-5"
            alt=""
          />
          <a href="/">
            <img
              src="./assets/images/header.png"
              className="w-[40px] h-[40px]"
              alt=""
            />
          </a>
        </div>
        <button
          className="text-sm border px-3 py-2 rounded-lg"
          id="mobileConnectButton"
        >
          Connect Wallet
        </button>
      </div>

      <div
        id="navBar"
        className={`z-[10001] flex w-80 justify-center duration-300 flex-col gap-[30px] fixed top-0 -left-full bg-Ivory h-screen bg-black md:hidden px-10 ${
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
        <a href="/#staking">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            Home
          </p>
        </a>
        <a href="/staking">
          <p className="border-b-[1px] border-white px-1 py-1">Staking</p>
        </a>
        <a href="/#about">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            About
          </p>
        </a>
        <a href="/#moonomics">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            Moonomics
          </p>
        </a>
        <a href="/#roadmap">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            Roadmap
          </p>
        </a>
        <a href="/#buy">
          <p
            onClick={() => handleShowNav()}
            className="border-b-[1px] border-white px-1 py-1"
          >
            Buy
          </p>
        </a>

        <p></p>

        <div className="flex gap-5 items-center">
          <img
            src="./assets/icons/Telegram App.svg"
            className="w-8 h-8 cursor-pointer"
            onClick={() => handleShowNav()}
            alt=""
          />
          <img
            src="./assets/icons/Twitter-X-Icon.svg"
            className="w-14 h-14 cursor-pointer"
            onClick={() => handleShowNav()}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
