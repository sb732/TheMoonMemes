import * as data from "@/translation/en.json";

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
        {data.footer.title}
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
          className="pt-[200px] md:pt-[600px] z-[10] px-2 md:px-20 flex flex-col items-center gap-5 md:gap-10 lg:min-h-[1070px] w-full"
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
              <div>
                <a href="/#staking">
                  <p>{data.footer.home}</p>
                </a>
                <a href="/#about">
                  <p>{data.footer.about}</p>
                </a>
                <a href="/#mission">
                  <p>{data.footer.mission_vision}</p>
                </a>
                <a href="/#moonomics">
                  <p>{data.footer.moonomics}</p>
                </a>
              </div>
              <div>
                <a href="/#roadmap">
                  <p>{data.footer.roadmap}</p>
                </a>
                <a href="/#buy">
                  <p>{data.footer.howtobuy}</p>
                </a>
                <a href="/privacy">
                  <p>{data.footer.privacy_policy}</p>
                </a>
                <a href="/terms">
                  <p>{data.footer.terms_conditions}</p>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 md:gap-10 md:flex-row justify-around px-2">
            <p className="hidden md:block text-xs max-w-[400px]">
              {data.footer.disclaimer.section1}
              <br className="hidden md:block" />
              {data.footer.disclaimer.section2}
            </p>
            <p className="text-xs">
              {data.footer.contact.title} <br />
              {data.footer.contact.street} <br />
              {data.footer.contact.address} <br />
              <a href="mailto:cs@themoonmemes.space" className="underline">
                {data.footer.contact.email}
              </a>
            </p>
          </div>
          <div className="w-full md:w-auto px-2">
            <p className="text-xs md:my-10">{data.footer.copyright}</p>
          </div>
          <div className="block md:hidden w-full mb-5 px-2">
            <p className="text-xs">
              {data.footer.disclaimer.section1}
              <br className="hidden md:block" />
              {data.footer.disclaimer.section2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
