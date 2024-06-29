import Presale from "../../components/Presale/Presale";
import * as translation from "@/translation/en.json";

function Home() {
  return (
    <>
      <div className="relative">
        <img
          src="./assets/images/home.png"
          className="w-full lg:h-[calc(100vh-111px)] mt-[-12px] lg:mt-[-40px] mb-[-50px] md:mb-0"
          alt=""
        />

        <div
          className="flex justify-center pt-[116px] lg:pt-[168px] lg:absolute top-[-70px] md:right-[30px]"
          id="buynow"
        >
          <Presale />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-2 lg:mx-0">
        <div className="flex flex-col items-center justify-center max-w-[1040px] text-white">
          <section
            className="flex flex-col gap-5 items-center justify-center max-w-[732px] pt-[106px] md:pt-[158px]"
            id="home"
          >
            <p className="text-4xl text-center uppercase">
              {translation.home.home.title1}
              <br />
              {translation.home.home.title2}
            </p>
            <img src="./assets/images/the-moon-memes-title.png" alt="" />
            <p className="text-2xl text-center uppercase">
              {translation.home.home.content}
            </p>
            <div className="flex flex-col md:flex-row text-white w-full justify-between pt-10 px-5 uppercase">
              <a
                href="./assets/pdf/THEMOONMEMES.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-center py-2 rounded-lg text-4xl mb-10 min-w-[250px] bg-[#BD00FF] border border-white">
                  {translation.home.home.whitepaper}
                </p>
              </a>
              <a href="https://coinsult.net/projects/the-moon-memes/" target="_blank">
                <p className="text-center py-2 rounded-lg text-4xl mb-10 min-w-[250px] bg-[#FF4747] border border-white cursor-pointer">
                  {translation.home.home.audit}
                </p>
              </a>
            </div>
            <img src="./assets/images/the-moon-memes-1.png" alt="" />
          </section>

          <section
            className="flex flex-col items-center gap-5 pt-[106px] md:pt-[158px]"
            id="about"
          >
            <p
              className="w-full md:w-auto text-6xl md:text-8xl text-center md:py-5 md:px-[200px]"
              style={{
                background: "url('./assets/images/title-background.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {translation.home.about.title}
            </p>
            <div className="flex flex-col gap-5 md:gap-14">
              <p className="text-xl md:text-3xl text-center">
                {translation.home.about.content}
              </p>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 flex flex-col gap-5 md:mt-20">
                  <p className="text-3xl md:text-5xl text-center">
                    {translation.home.about.mission.title}
                  </p>
                  <p>{translation.home.about.mission.content}</p>
                </div>
                <div className="md:w-1/2">
                  <img src="./assets/images/our-mission.png" alt="" />
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center gap-5 mt-[-56px] pt-[106px] md:pt-[158px]">
            <p
              className="text-4xl md:text-6xl text-center py-5 md:py-10 md:px-20"
              style={{
                background: "url('./assets/images/title-background.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {translation.home.why.title}
            </p>
            <div className="flex flex-col gap-5 md:gap-8">
              <div className="text-black bg-white rounded-lg py-2 pl-2 md:pl-5 pr-2 md:pr-52 flex items-center justify-between gap-5">
                <div className="min-w-4 md:min-w-6 min-h-4 md:min-h-6 rounded-full bg-black"></div>
                <p>{translation.home.why.content1}</p>
              </div>
              <div className="text-black bg-white rounded-lg py-2 pl-2 md:pl-5 pr-2 md:pr-52 flex items-center justify-between gap-5">
                <div className="min-w-4 md:min-w-6 min-h-4 md:min-h-6 rounded-full bg-black"></div>
                <p>{translation.home.why.content2}</p>
              </div>
              <div className="text-black bg-white rounded-lg py-2 pl-2 md:pl-5 pr-2 md:pr-52 flex items-center justify-between gap-5">
                <div className="min-w-4 md:min-w-6 min-h-4 md:min-h-6 rounded-full bg-black"></div>
                <p>{translation.home.why.content3}</p>
              </div>
              <div className="text-black bg-white rounded-lg py-2 pl-2 md:pl-5 pr-2 md:pr-52 flex items-center justify-between gap-5">
                <div className="min-w-4 md:min-w-6 min-h-4 md:min-h-6 rounded-full bg-black"></div>
                <p>{translation.home.why.content4}</p>
              </div>
            </div>
          </section>

          <section
            className="flex flex-col items-center gap-5 pt-[106px] md:pt-[158px]"
            id="mission"
          >
            <p
              className="text-4xl md:text-6xl text-center py-5 md:py-10 md:px-20"
              style={{
                background: "url('./assets/images/title-background.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {translation.home.mission.title}
            </p>
            <div className="flex flex-col items-center gap-5 md:gap-16">
              <img src="./assets/images/our-mission-and-vision.png" alt="" />
              <div className="relative flex flex-col gap-5">
                <span className="hidden md:block h-full w-[7px] bg-[#453377] absolute left-0 md:left-1/2 -translate-x-1/2 ms-[10px] md:ms-0"></span>
                <div className="flex flex-col-reverse md:flex-row items-center justify-around relative">
                  <span className="hidden md:block absolute w-[35%] h-[7px] bg-[#453377] left-[50%]  top-0"></span>
                  <img
                    src="./assets/images/our-mission-and-vision-0.png"
                    className="hidden md:block w-[120px] h-[120px] absolute left-[calc(50% - 60px)] top-[-60px]"
                    alt=""
                  />
                  <img
                    src="./assets/images/our-mission-and-vision-1.png"
                    alt=""
                  />
                  <div className="md:w-2/5">
                    <p className="text-2xl md:text-3xl mb-5">
                      {translation.home.mission.subtitle1}
                    </p>
                    <p>{translation.home.mission.subcontent1}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-around relative">
                  <span className="hidden md:block absolute w-[35%] h-[7px] bg-[#453377] left-[15%]  top-0"></span>
                  <img
                    src="./assets/images/our-mission-and-vision-0.png"
                    className="hidden md:block w-[120px] h-[120px] absolute left-[calc(50% - 60px)] top-[-60px]"
                    alt=""
                  />
                  <div className="md:w-2/5">
                    <p className="text-2xl md:text-3xl mb-5">
                      {translation.home.mission.subtitle2}
                    </p>
                    <p>{translation.home.mission.subcontent2}</p>
                  </div>
                  <img
                    src="./assets/images/our-mission-and-vision-2.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col-reverse md:flex-row items-center justify-around relative">
                  <span className="hidden md:block absolute w-[35%] h-[7px] bg-[#453377] left-[50%]  top-0"></span>
                  <img
                    src="./assets/images/our-mission-and-vision-0.png"
                    className="hidden md:block w-[120px] h-[120px] absolute left-[calc(50% - 60px)] top-[-60px]"
                    alt=""
                  />
                  <img
                    src="./assets/images/our-mission-and-vision-3.png"
                    alt=""
                  />
                  <div className="md:w-2/5">
                    <p className="text-2xl md:text-3xl mb-5">
                      {translation.home.mission.subtitle3}
                    </p>
                    <p>{translation.home.mission.subcontent3}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-around relative">
                  <span className="hidden md:block absolute w-[35%] h-[7px] bg-[#453377] left-[15%]  top-0"></span>
                  <img
                    src="./assets/images/our-mission-and-vision-0.png"
                    className="hidden md:block w-[120px] h-[120px] absolute left-[calc(50% - 60px)] top-[-60px]"
                    alt=""
                  />
                  <div className="md:w-2/5">
                    <p className="text-2xl md:text-3xl mb-5">
                      {translation.home.mission.subtitle4}
                    </p>
                    <p>{translation.home.mission.subcontent4}</p>
                  </div>
                  <img
                    src="./assets/images/our-mission-and-vision-4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="pt-[106px] md:pt-[158px]" id="staking">
            <div className="border-[3px] border-white rounded-2xl px-2 md:px-10 py-1 md:py-5 flex flex-col items-center gap-5 md:gap-10">
              <p className="uppercase text-3xl md:text-6xl">
                {translation.home.staking.title}
              </p>
              <p className="text-center">
                {translation.home.staking.content1}
                <br />
                {translation.home.staking.content2}
              </p>
              <div className="w-full">
                <p className="text-3xl mb-2">
                  {translation.home.staking.howwork.title}
                </p>
                <li>{translation.home.staking.howwork.list1}</li>
                <li>{translation.home.staking.howwork.list2}</li>
                <li>{translation.home.staking.howwork.list3}</li>
              </div>
              <div className="w-full">
                <p className="text-3xl mb-2">
                  {translation.home.staking.whystake.title}
                </p>
                <li>{translation.home.staking.whystake.list1}</li>
                <li>{translation.home.staking.whystake.list2}</li>
                <li>{translation.home.staking.whystake.list3}</li>
              </div>
              <img src="./assets/images/staking-and-rewards.png" alt="" />
            </div>
          </section>

          <section
            id="moonomics"
            className="flex flex-col gap-2 md:gap-5 items-center justify-center pt-[106px] md:pt-[158px]"
          >
            <p
              className="w-full md:w-auto uppercase text-4xl md:text-6xl text-center mb-5 py-2 md:py-5 md:px-20"
              style={{
                background: "url('./assets/images/title-background.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {translation.home.moonomics.title}
            </p>
            <div className="text-xs md:text-2xl flex flex-col items-center uppercase">
              <p className="mb-5 text-center max-w-[300px] md:max-w-[600px]">
                {translation.home.moonomics.content}
              </p>
              <li>{translation.home.moonomics.presale1}</li>
              <li>{translation.home.moonomics.marketing1}</li>
              <li>{translation.home.moonomics.treasury1}</li>
              <li>{translation.home.moonomics.staking1}</li>
              <li>{translation.home.moonomics.liquidity1}</li>
              <li>{translation.home.moonomics.reserve1}</li>
            </div>
            <img
              src="./assets/images/moonomics.png"
              alt=""
              className="my-5 md:my-10"
            />
            <div className="uppercase text-base md:text-2xl border-[1px] border-white rounded-xl px-10 py-2">
              <p className="text-center">
                {translation.home.moonomics.address}
              </p>
              <div className="flex items-center justify-center">
                <a
                  href="https://etherscan.io/token/0x11fBf29e443466dc714362DbDf95694b74727DC2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="hidden md:block">
                    0x11fBf29e443466dc714362DbDf95694b74727DC2
                  </p>
                  <p className="block md:hidden">0x11f.....27DC2</p>
                </a>
                <button>
                  <img
                    src="./assets/icons/Copy Address.svg"
                    alt=""
                    className="ml-2"
                  />
                </button>
              </div>
            </div>
            <div className="min-w-[200px] grid grid-cols-3 md:grid-cols-6 gap-5 bg-[#D9D9D9] px-14 py-2 text-black text-sm md:text-xl rounded-xl">
              <li className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-md bg-[#9BB0FF]"></div>
                {translation.home.moonomics.presale2} <p>15%</p>
              </li>
              <li className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-md bg-[#FDD64B]"></div>
                {translation.home.moonomics.marketing2} <p>10%</p>
              </li>
              <li className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-md bg-[#9E28FA]"></div>
                {translation.home.moonomics.treasury2} <p>25%</p>
              </li>
              <li className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-md bg-[#8FF929]"></div>
                {translation.home.moonomics.staking2} <p>20%</p>
              </li>
              <li className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-md bg-[#F8C9FF]"></div>
                {translation.home.moonomics.liquidity2} <p>15%</p>
              </li>
              <li className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-md bg-[#5E3967]"></div>
                {translation.home.moonomics.reserve2} <p>15%</p>
              </li>
            </div>
          </section>

          <section
            className="text-xl w-full flex items-stretch pt-[106px] md:pt-[158px]"
            id="roadmap"
          >
            <div
              style={{
                backgroundImage: "url('./assets/images/roadmap-vertical.png')",
                backgroundRepeat: "repeat-y",
                backgroundSize: "153px auto",
              }}
              className="min-w-[153px] hidden lg:block"
            ></div>
            <div className="w-full">
              <p
                className="text-6xl md:text-8xl text-center mb-5 md:mb-20 md:py-5 md:px-20"
                style={{
                  background: "url('./assets/images/title-background.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                {translation.home.roadmap.title}
              </p>
              <div className="flex flex-col gap-5">
                <div className="md:max-w-[385px]">
                  <p className="text-center md:text-left">
                    {translation.home.roadmap.phase1.title}
                  </p>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>{translation.home.roadmap.phase1.content1}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>{translation.home.roadmap.phase1.content2}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>{translation.home.roadmap.phase1.content3}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>{translation.home.roadmap.phase1.content4}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>{translation.home.roadmap.phase1.content5}</p>
                  </div>
                </div>
                <div className="flex md:justify-end">
                  <div className="md:max-w-[385px]">
                    <p className="text-center md:text-left">
                      {translation.home.roadmap.phase2.title}
                    </p>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>{translation.home.roadmap.phase2.content1}</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>{translation.home.roadmap.phase2.content2}</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>{translation.home.roadmap.phase2.content3}</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>{translation.home.roadmap.phase2.content4}</p>
                    </div>
                  </div>
                </div>
                <div className="md:max-w-[385px]">
                  <p className="text-center md:text-left">
                    {translation.home.roadmap.phase3.title}
                  </p>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>{translation.home.roadmap.phase3.content1}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>{translation.home.roadmap.phase3.content2}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>{translation.home.roadmap.phase3.content3}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>{translation.home.roadmap.phase3.content4}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>{translation.home.roadmap.phase3.content5}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>{translation.home.roadmap.phase3.content6}</p>
                  </div>
                </div>
                <div className="flex md:justify-end">
                  <div className="md:max-w-[385px]">
                    <p className="text-center md:text-left">
                      {translation.home.roadmap.phase4.title}
                    </p>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>{translation.home.roadmap.phase4.content1}</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>{translation.home.roadmap.phase4.content2}</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>{translation.home.roadmap.phase4.content3}</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>{translation.home.roadmap.phase4.content4}</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>{translation.home.roadmap.phase4.content5}</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>{translation.home.roadmap.phase4.content6}</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>{translation.home.roadmap.phase4.content7}</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>{translation.home.roadmap.phase4.content8}</p>
                    </div>
                  </div>
                </div>
                <div className="md:max-w-[385px]">
                  <p className="text-center md:text-left">
                    {translation.home.roadmap.phase5.title}
                  </p>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>{translation.home.roadmap.phase5.content1}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>{translation.home.roadmap.phase5.content2}</p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    "url('./assets/images/roadmap-horizontal.png')",
                  backgroundRepeat: "repeat-x",
                }}
                className="min-h-[153px] w-full my-20 hidden md:block"
              ></div>
            </div>
            <div
              style={{
                backgroundImage: "url('./assets/images/roadmap-vertical.png')",
                backgroundRepeat: "repeat-y",
                backgroundSize: "153px auto",
              }}
              className="min-w-[153px] hidden lg:block"
            ></div>
          </section>

          <section
            className="flex flex-col items-center gap-5 md:gap-10 pt-[106px] md:pt-[158px]"
            id="buy"
          >
            <p
              className="w-full md:w-auto text-6xl md:text-8xl text-center py-2 md:py-10 md:px-32"
              style={{
                background: "url('./assets/images/title-background.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {translation.home.howtobuy.title}
            </p>
            <div className="flex flex-col gap-5 md:gap-10">
              <div className="flex flex-col md:flex-row items-center bg-white text-black rounded-lg px-5 py-1">
                <p className="text-2xl md:text-3xl min-w-[300px]">
                  {translation.home.howtobuy.step1.title}
                </p>
                <p>{translation.home.howtobuy.step1.content}</p>
              </div>
              <div className="flex flex-col md:flex-row items-center bg-white text-black rounded-lg px-5 py-1">
                <p className="text-2xl md:text-3xl min-w-[300px]">
                  {translation.home.howtobuy.step2.title}
                </p>
                <p>{translation.home.howtobuy.step2.content}</p>
              </div>
              <div className="flex flex-col md:flex-row items-center bg-white text-black rounded-lg px-5 py-1">
                <p className="text-2xl md:text-3xl min-w-[300px]">
                  {translation.home.howtobuy.step3.title}
                </p>
                <p>{translation.home.howtobuy.step3.content}</p>
              </div>
              {/* <div className="flex flex-col md:flex-row items-center bg-white text-black rounded-lg px-5 py-1">
                <p className="text-2xl md:text-3xl min-w-[300px]">
                  {translation.home.howtobuy.step4.title}
                </p>
                <p>{translation.home.howtobuy.step4.content}</p>
              </div> */}
            </div>
          </section>

          <section
            className="flex flex-col gap-10 pt-[106px] md:pt-[158px]"
            id="FAQs"
          >
            <p className="text-center text-4xl rounded-lg border-4 py-5">
              {translation.home.faqs.title}
            </p>
            <div className="md:text-4xl">
              <div className="relative mb-3">
                <h6 className="mb-0">
                  <button
                    className="relative flex items-center justify-between w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group"
                    data-collapse-target="animated-collapse-1"
                  >
                    <span>{translation.home.faqs.section1.title}</span>
                    <img
                      src="./assets/images/down-button.png"
                      className="group-open:rotate-180 transition-transform w-[30px] md:w-[60px]"
                      alt=""
                    />
                  </button>
                </h6>
                <div
                  data-collapse="animated-collapse-1"
                  className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <div className="p-4 leading-normal">
                    {translation.home.faqs.section1.content}
                  </div>
                </div>
              </div>

              <div className="relative mb-3">
                <h6 className="mb-0">
                  <button
                    className="relative flex items-center justify-between w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group"
                    data-collapse-target="animated-collapse-2"
                  >
                    <span>{translation.home.faqs.section2.title}</span>
                    <img
                      src="./assets/images/down-button.png"
                      className="group-open:rotate-180 transition-transform w-[30px] md:w-[60px]"
                      alt=""
                    />
                  </button>
                </h6>
                <div
                  data-collapse="animated-collapse-2"
                  className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <div className="p-4 leading-normal">
                    {translation.home.faqs.section2.content}
                  </div>
                </div>
              </div>

              <div className="relative mb-3">
                <h6 className="mb-0">
                  <button
                    className="relative flex items-center justify-between w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group"
                    data-collapse-target="animated-collapse-3"
                  >
                    <span>{translation.home.faqs.section3.title}</span>
                    <img
                      src="./assets/images/down-button.png"
                      className="group-open:rotate-180 transition-transform w-[30px] md:w-[60px]"
                      alt=""
                    />
                  </button>
                </h6>
                <div
                  data-collapse="animated-collapse-3"
                  className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <div className="p-4 leading-normal">
                    {translation.home.faqs.section3.content}
                  </div>
                </div>
              </div>

              <div className="relative mb-3">
                <h6 className="mb-0">
                  <button
                    className="relative flex items-center justify-between w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group"
                    data-collapse-target="animated-collapse-4"
                  >
                    <span>{translation.home.faqs.section4.title}</span>
                    <img
                      src="./assets/images/down-button.png"
                      className="group-open:rotate-180 transition-transform w-[30px] md:w-[60px]"
                      alt=""
                    />
                  </button>
                </h6>
                <div
                  data-collapse="animated-collapse-4"
                  className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <div className="p-4 leading-normal">
                    {translation.home.faqs.section4.content}
                  </div>
                </div>
              </div>

              <div className="relative mb-3">
                <h6 className="mb-0">
                  <button
                    className="relative flex items-center justify-between w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group"
                    data-collapse-target="animated-collapse-5"
                  >
                    <span>{translation.home.faqs.section5.title}</span>
                    <img
                      src="./assets/images/down-button.png"
                      className="group-open:rotate-180 transition-transform w-[30px] md:w-[60px]"
                      alt=""
                    />
                  </button>
                </h6>
                <div
                  data-collapse="animated-collapse-5"
                  className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <div className="p-4 leading-normal">
                    {translation.home.faqs.section5.content}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
