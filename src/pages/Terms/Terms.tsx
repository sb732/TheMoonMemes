import * as translation from "@/translation/en.json";

const Terms = () => {
  return (
    <div className="font-['Poppins'] text-white flex flex-col items-center gap-10 md:gap-20 pb-5 md:pb-10">
      <img src="./assets/images/footer.png" alt="" />

      <p className="text-6xl md:text-8xl text-center font-black">
        {translation.terms.title}
      </p>

      <div className="mx-16 lg:mx-32 flex flex-col gap-6 md:gap-12 max-w-[1440px]">
        <section>
          <p className="text-2xl md:text-5xl font-black">
            {translation.terms.introduction.title}
          </p>
          <br />

          <p className="text-lg md:text-3xl md:leading-[48px]">
            {translation.terms.introduction.content}
          </p>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            {translation.terms.useservice.title}
          </p>
          <br />

          <ol className="list-decimal ml-5 md:ml-10">
            <li>{translation.terms.useservice.list1}</li>
            <li>{translation.terms.useservice.list2}</li>
            <li>
              {translation.terms.useservice.list3.title}
              <ul className="list-disc ml-5 md:ml-10">
                <li>{translation.terms.useservice.list3.list1}</li>
                <li>{translation.terms.useservice.list3.list2}</li>
                <li>{translation.terms.useservice.list3.list3}</li>
                <li>{translation.terms.useservice.list3.list4}</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            {translation.terms.intellectual.title}
          </p>
          <br />

          <p>{translation.terms.intellectual.content}</p>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            {translation.terms.limitation.title}
          </p>
          <br />

          <p>{translation.terms.limitation.content}</p>

          <ol className="list-decimal ml-5 md:ml-10">
            <li>{translation.terms.limitation.list1}</li>
            <li>{translation.terms.limitation.list2}</li>
            <li>{translation.terms.limitation.list3}</li>
            <li>{translation.terms.limitation.list4}</li>
          </ol>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            {translation.terms.indemnification.title}
          </p>
          <br />

          <p>{translation.terms.indemnification.content}</p>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            {translation.terms.governing.title}
          </p>
          <br />

          <p>{translation.terms.governing.content}</p>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            {translation.terms.change.title}
          </p>
          <br />

          <p>{translation.terms.change.content}</p>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            {translation.terms.contact.title}
          </p>
          <br />

          <p>{translation.terms.contact.content}</p>
          <ul className="list-disc ml-5 md:ml-10">
            <li>{translation.terms.contact.email}</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Terms;
