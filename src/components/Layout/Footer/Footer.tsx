const Footer = () => {
  return (
    <section className="flex flex-col items-center gap-10 w-full text-white pt-[72px] md:pt-[124px]">
      <p
        className="w-full md:w-auto text-4xl md:text-8xl text-center py-5 lg:py-10 lg:px-32"
        style={{
          background: "url('./assets/images/title-background.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        TheMoonMemes
      </p>
      <div className="flex flex-col items-center gap-10 relative w-full">
        <img
          src="./assets/images/the-moon-memes-3.png"
          className="absolute top-[0px] w-full"
          alt=""
        />

        <div
          style={{
            backgroundImage: "url('./assets/images/the-moon-memes-4.png')",
            backgroundSize: "cover",
          }}
          className="pt-[200px] md:pt-[600px] z-[10] px-2 md:px-20 flex flex-col items-center gap-5 md:gap-10 lg:min-h-[1070px] pb-20 w-full"
        >
          <div className="w-full flex flex-col gap-5 md:gap-10 md:flex-row justify-around">
            <div>
              <img
                src="./assets/images/footer.png"
                className="mt-[-50px] md:mt-[-100px]"
                alt=""
              />
            </div>
            <div className="flex justify-around underline gap-5 md:gap-10">
              <div className="hidden md:block">
                <a href="/#staking">
                  <p>Home</p>
                </a>
                <a href="/#about">
                  <p>About</p>
                </a>
                <a href="/#mission">
                  <p>Mission & Vision</p>
                </a>
                <a href="/#moonomics">
                  <p>Moonomics</p>
                </a>
                <a href="/#roadmap">
                  <p>Roadmap</p>
                </a>
                <a href="/#buy">
                  <p>How to buy</p>
                </a>
              </div>
              <div className="hidden md:block">
                <a href="/privacy">
                  <p>Privacy & Policy</p>
                </a>
                <a href="/terms">
                  <p>Terms & Conditions</p>
                </a>
              </div>
              <div className="block md:hidden">
                <a href="/#staking">
                  <p>Home</p>
                </a>
                <a href="/#about">
                  <p>About</p>
                </a>
                <a href="/#mission">
                  <p>Mission & Vision</p>
                </a>
                <a href="/#moonomics">
                  <p>Moonomics</p>
                </a>
              </div>
              <div className="block md:hidden">
                <a href="/#roadmap">
                  <p>Roadmap</p>
                </a>
                <a href="/#buy">
                  <p>How to buy</p>
                </a>
                <a href="/privacy">
                  <p>Privacy & Policy</p>
                </a>
                <a href="/terms">
                  <p>Terms & Conditions</p>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 md:gap-10 md:flex-row justify-around">
            <p className="text-xs">
              DISCLAIMER: cryptocurrency may be unregulated in your
              jurisdiction.
              <br className="hidden md:block" />
              The value of cryptocurrency may go down as well as up. Profits may
              be
              <br className="hidden md:block" />
              subject to capital gains or other taxes applicable in your
              jurisdiction.
            </p>
            <a
              href="mailto:cs@themoonmemes.space"
              className="text-center md:text-inherit"
            >
              Contact Us: cs@themoonmemes.space
            </a>
          </div>
          <div className="absolute bottom-5 mt-5 md:mt-10 flex justify-center">
            <p className="text-xs text-center">
              Copyrights 2024. The Moon Memes Token. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
