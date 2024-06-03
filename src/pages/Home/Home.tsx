import Presale from "../../components/Presale/Presale";

function Home() {
  return (
    <>
      <div className="relative">
        <img
          src="./assets/images/home.png"
          className="w-auto lg:w-[calc(100vw-200px)] xl:w-[calc(100vw-100px)] lg:h-[calc(100vh-103px)] mt-[-12px] lg:mt-[-40px]"
          alt=""
        />

        <div className="flex justify-center mt-10 lg:absolute md:top-[100px] md:right-[100px]">
          <Presale />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-2 lg:mx-0">
        <div className="flex flex-col items-center justify-center max-w-[1040px] text-white">
          <section
            className="flex flex-col gap-5 items-center justify-center max-w-[732px] pt-[72px] md:pt-[124px]"
            id="home"
          >
            <p className="text-4xl text-center uppercase">
              Memes on the Rise,
              <br className="block md:hidden" /> to the Moon We Fly
            </p>
            <img src="./assets/images/the-moon-memes-title.png" alt="" />
            <p className="text-2xl text-center uppercase">
              Join the future of meme culture with TheMoonMemes token. Embrace
              decentralized creativity and community. Explore our lunar-inspired
              universe now!
            </p>
            <div className="flex flex-col md:flex-row text-white w-full justify-between pt-10 px-5 uppercase">
              <a
                href="./assets/pdf/THEMOONMEMES.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-center py-2 rounded-lg text-4xl mb-10 min-w-[250px] bg-[#BD00FF] border border-white">
                  Whitepaper
                </p>
              </a>
              <a href="/">
                <p className="text-center py-2 rounded-lg text-4xl mb-10 min-w-[250px] bg-[#FF4747] border border-white cursor-pointer">
                  Audit
                </p>
              </a>
            </div>
            <img src="./assets/images/the-moon-memes-1.png" alt="" />
          </section>

          <section
            className="flex flex-col items-center gap-5 pt-[72px] md:pt-[124px]"
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
              About
            </p>
            <div className="flex flex-col gap-5 md:gap-14">
              <p className="text-xl md:text-3xl text-center">
                At TheMoonMemes, we are more than just a token; we
                <br className="hidden md:block" />
                are a community-driven movement dedicated to
                <br className="hidden md:block" />
                revolutionizing the world of memes on the blockchain.
                <br className="hidden md:block" />
                Our journey began with a simple yet powerful idea: to
                <br className="hidden md:block" />
                bring humor and creativity to the decentralized
                <br className="hidden md:block" />
                universe.
              </p>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 flex flex-col gap-5">
                  <p className="text-3xl md:text-5xl text-center">
                    Our Mission​
                  </p>
                  <p>
                    Our mission is to empower meme creators, enthusiasts, and
                    crypto aficionados alike by merging the world of memes with
                    the limitless potential of blockchain technology. We believe
                    that laughter and creativity should have no bounds, and
                    that's why we're taking memes to the moon and beyond.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img src="./assets/images/our-mission.png" alt="" />
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center gap-5 mt-[-56px] pt-[72px] md:pt-[124px]">
            <p
              className="text-4xl md:text-6xl text-center py-5 md:py-10 md:px-20"
              style={{
                background: "url('./assets/images/title-background.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              Why TheMoonMemes?
            </p>
            <div className="flex flex-col gap-5 md:gap-8">
              <div className="text-black bg-white rounded-lg py-2 pl-2 md:pl-5 pr-2 md:pr-52 flex items-center justify-between gap-5">
                <div className="min-w-4 md:min-w-6 min-h-4 md:min-h-6 rounded-full bg-black"></div>
                <p>
                  Community-Centric: We are proud of our passionate community,
                  where every member has a voice. Together, we shape the future
                  of meme culture.
                </p>
              </div>
              <div className="text-black bg-white rounded-lg py-2 pl-2 md:pl-5 pr-2 md:pr-52 flex items-center justify-between gap-5">
                <div className="min-w-4 md:min-w-6 min-h-4 md:min-h-6 rounded-full bg-black"></div>
                <p>
                  Innovation: We're not just following trends; we're setting
                  them. Our unique features and utility make us stand out in the
                  crypto space.
                </p>
              </div>
              <div className="text-black bg-white rounded-lg py-2 pl-2 md:pl-5 pr-2 md:pr-52 flex items-center justify-between gap-5">
                <div className="min-w-4 md:min-w-6 min-h-4 md:min-h-6 rounded-full bg-black"></div>
                <p>
                  Transparency: Trust is the cornerstone of our project. We
                  operate with complete transparency, ensuring you're always in
                  the know.
                </p>
              </div>
              <div className="text-black bg-white rounded-lg py-2 pl-2 md:pl-5 pr-2 md:pr-52 flex items-center justify-between gap-5">
                <div className="min-w-4 md:min-w-6 min-h-4 md:min-h-6 rounded-full bg-black"></div>
                <p>
                  Lunar Inspiration: The moon has always been a symbol of
                  exploration and discovery. We draw inspiration from its
                  mystique to fuel our creativity.
                </p>
              </div>
            </div>
          </section>

          <section
            className="flex flex-col items-center gap-5 pt-[72px] md:pt-[124px]"
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
              Our Mission and Vision​
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
                      Mission: Empowering Memes, Uniting Communities
                    </p>
                    <p>
                      Our mission is to empower meme culture by creating a
                      cryptocurrency that brings communities together through
                      humor, creativity, and inclusivity.
                    </p>
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
                      Vision: A Memeverse of Possibilities
                    </p>
                    <p>
                      Our vision is to build a Memeverse—a digital universe
                      where memes and crypto coexist harmoniously, fostering
                      innovation, laughter, and positive change.
                    </p>
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
                      Mission: Decentralized Expression and Fun
                    </p>
                    <p>
                      We are committed to enabling decentralized expression and
                      fun, allowing everyone to participate in meme creation,
                      sharing, and crypto adoption.
                    </p>
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
                      Vision: Making Memes Matter
                    </p>
                    <p>
                      Our vision is to make memes matter by promoting social
                      impact initiatives, NFT art, and community-driven
                      projects, creating a lasting legacy in the meme world.
                    </p>
                  </div>
                  <img
                    src="./assets/images/our-mission-and-vision-4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="pt-[72px] md:pt-[124px]" id="staking">
            <div className="border-[3px] border-white rounded-2xl px-2 md:px-10 py-1 md:py-5 flex flex-col items-center gap-5 md:gap-10">
              <p className="uppercase text-3xl md:text-6xl">
                Staking and Rewards
              </p>
              <p className="text-center">
                Stake Your Tokens, Reap the Benefits:
                <br />
                At TheMoonMemes, we offer a robust staking system that allows
                our community members to earn rewards. By staking your tokens,
                you can participate in securing the network and earn additional
                tokens as a reward.
              </p>
              <div className="w-full">
                <p className="text-3xl mb-2">How It Works:</p>
                <li>
                  Stake Your Tokens: Simply deposit your TheMoonMemes tokens
                  into our staking platform.
                </li>
                <li>
                  Earn Rewards: As a staker, you will receive a share of the
                  network’s transaction fees and newly minted tokens.
                </li>
                <li>
                  Community Growth: Your participation helps grow and secure our
                  community, making it stronger and more resilient.
                </li>
              </div>
              <div className="w-full">
                <p className="text-3xl mb-2">Why Stake with TheMoonMemes?</p>
                <li>
                  Passive Income: Earn regular rewards by staking your tokens.
                </li>
                <li>
                  Support the Network: Your staked tokens contribute to the
                  stability and security of our network.
                </li>
                <li>
                  Exclusive Benefits: Stakers get access to exclusive community
                  events, NFT drops, and more.
                </li>
              </div>
              <img src="./assets/images/staking-and-rewards.png" alt="" />
            </div>
          </section>

          <section
            id="moonomics"
            className="flex flex-col gap-2 md:gap-5 items-center justify-center pt-[72px] md:pt-[124px]"
          >
            <p
              className="w-full md:w-auto uppercase text-4xl md:text-6xl text-center mb-5 py-2 md:py-5 md:px-20"
              style={{
                background: "url('./assets/images/title-background.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              Moonomics
            </p>
            <div className="flex flex-col md:flex-row">
              <div className="tet-xs md:text-2xl">
                <p className="mb-5">
                  Themoonmemes tokenomics include smart staking rewards, meaning
                  you can earn right away.
                </p>
                <li>Presale: 15% (15,000,000,000 tokens)</li>
                <li>Marketing: 10% (10,000,000,000 tokens)</li>
                <li>Project Treasury: 25% (25,000,000,000 tokens)</li>
                <li>Staking Rewards: 20% (20,000,000,000 tokens)</li>
                <li>Exchange Liquidity: 15% (15,000,000,000 tokens)</li>
                <li>Reserve/Future Use: 15% (15,000,000,000 tokens)</li>
              </div>
              <div className="min-w-[200px] grid grid-cols-2 md:grid-cols-1">
                <li className="marker:text-[#9BB0FF] text-sm md:text-base">
                  PRESALE <p className="text-2xl ml-5">15%</p>
                </li>
                <li className="marker:text-[#FDD64B] text-sm md:text-base">
                  MARKETING <p className="text-2xl ml-5">10%</p>
                </li>
                <li className="marker:text-[#9E28FA] text-sm md:text-base">
                  TREASURY <p className="text-2xl ml-5">25%</p>
                </li>
                <li className="marker:text-[#8FF929] text-sm md:text-base">
                  STAKING <p className="text-2xl ml-5">20%</p>
                </li>
                <li className="marker:text-[#F8C9FF] text-sm md:text-base">
                  LIQUIDITY <p className="text-2xl ml-5">15%</p>
                </li>
                <li className="marker:text-[#5E3967] text-sm md:text-base">
                  RESERVE/FUTURE USE <p className="text-2xl ml-5">15%</p>
                </li>
              </div>
            </div>
            <img src="./assets/images/moonomics.png" alt="" />
            <p className="text-center">TheMoonMemes Token Address</p>
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
                <img src="./assets/icons/Copy Address.svg" alt="" />
              </button>
            </div>
          </section>

          <section
            className="text-xl w-full flex items-stretch pt-[72px] md:pt-[124px]"
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
                Roadmap
              </p>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-center md:text-left">
                    Phase 1: Conceptualization and Planning
                  </p>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>
                      Define Themoonmeme token's purpose
                      <br className="hidden md:block" /> and utility.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>
                      Establish tokenomics and assemble
                      <br className="hidden md:block" /> team.
                    </p>
                  </div>
                </div>
                <div className="flex md:justify-end">
                  <div>
                    <p className="text-center md:text-left">
                      Phase 2: Token Development
                    </p>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>
                        Create and audit Themoonmeme token
                        <br className="hidden md:block" /> smart contract.
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>
                        Develop user interface for token
                        <br className="hidden md:block" /> transactions.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-center md:text-left">
                    Phase 3: Community Building and Marketing
                  </p>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>Launch website and social channels.</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                    <p>
                      Conduct pre-sale, engage with community,
                      <br className="hidden md:block" /> and execute marketing
                      campaigns.
                    </p>
                  </div>
                </div>
                <div className="flex md:justify-end">
                  <div>
                    <p className="text-center md:text-left">
                      Phase 4: Exchange Listings and Continued
                      <br className="hidden md:block" /> Development
                    </p>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>List on exchanges for liquidity.</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-white mt-3"></p>
                      <p>
                        Gather feedback for improvements and
                        <br className="hidden md:block" /> explore partnerships.
                      </p>
                    </div>
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
            className="flex flex-col items-center gap-5 md:gap-10 pt-[72px] md:pt-[124px]"
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
              How to buy
            </p>
            <div className="flex flex-col gap-5 md:gap-10">
              <div className="flex flex-col md:flex-row items-center bg-white text-black rounded-lg px-5 py-1">
                <p className="text-2xl md:text-3xl min-w-[300px]">
                  1. Get a Wallet:
                </p>
                <p>
                  Start by setting up a secure Ethereum (ETH) wallet, like
                  MetaMask or Trust Wallet, and ensure it's funded with ETH.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center bg-white text-black rounded-lg px-5 py-1">
                <p className="text-2xl md:text-3xl min-w-[300px]">
                  2. Visit a Exchange:​
                </p>
                <p>
                  On the exchange, Go to a reputable cryptocurrency exchange
                  that lists TheMoonMemes token, such as Binance or
                  Coinbase.locate TheMoonMemes token and place a buy order.
                  Specify the amount of ETH you want to spend.  
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center bg-white text-black rounded-lg px-5 py-1">
                <p className="text-2xl md:text-3xl min-w-[300px]">
                  3. Place an Order:​
                </p>
                <p>
                  On the exchange, locate TheMoonMemes token and place a buy
                  order. Specify the amount of ETH you want to spend.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center bg-white text-black rounded-lg px-5 py-1">
                <p className="text-2xl md:text-3xl min-w-[300px]">
                  4. Confirm :​
                </p>
                <p>
                  Once your order is filled, your TheMoonMemes tokens will be in
                  your exchange wallet. For added security, consider
                  transferring them to your private Ethereum wallet.
                </p>
              </div>
            </div>
          </section>

          <section
            className="flex flex-col gap-10 pt-[72px] md:pt-[124px]"
            id="FAQs"
          >
            <p className="text-center text-4xl rounded-lg border-4 py-5">
              Frequently Asked Questions (FAQs)
            </p>
            <div className="md:text-4xl">
              <div className="relative mb-3">
                <h6 className="mb-0">
                  <button
                    className="relative flex items-center justify-between w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group"
                    data-collapse-target="animated-collapse-1"
                  >
                    <span>What is TheMoonMemes token?</span>
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
                  <div className="p-4 leading-normal text-blue-gray-500/80">
                    TheMoonMemes token is a cryptocurrency built on the Ethereum
                    network, often associated with meme culture.
                  </div>
                </div>
              </div>

              <div className="relative mb-3">
                <h6 className="mb-0">
                  <button
                    className="relative flex items-center justify-between w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group"
                    data-collapse-target="animated-collapse-2"
                  >
                    <span>How can I buy TheMoonMemes token?</span>
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
                  <div className="p-4 leading-normal text-blue-gray-500/80">
                    Buy TheMoonMemes token by using Ethereum (ETH) on a
                    supported cryptocurrency exchange.
                  </div>
                </div>
              </div>

              <div className="relative mb-3">
                <h6 className="mb-0">
                  <button
                    className="relative flex items-center justify-between w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group"
                    data-collapse-target="animated-collapse-3"
                  >
                    <span>Is TheMoonMemes token a good investment?</span>
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
                  <div className="p-4 leading-normal text-blue-gray-500/80">
                    Cryptocurrency investments are risky; consider your
                    financial goals and do thorough research before investing.
                  </div>
                </div>
              </div>

              <div className="relative mb-3">
                <h6 className="mb-0">
                  <button
                    className="relative flex items-center justify-between w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 rounded-t-1 group"
                    data-collapse-target="animated-collapse-4"
                  >
                    <span>Where can I store TheMoonMemes tokens?</span>
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
                  <div className="p-4 leading-normal text-blue-gray-500/80">
                    Store your tokens in a secure Ethereum wallet like MetaMask
                    or Trust Wallet for added safety.
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
