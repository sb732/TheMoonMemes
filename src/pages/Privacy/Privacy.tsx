import * as translation from "@/translation/en.json";

const Privacy = () => {
  return (
    <div className="font-['Poppins'] text-white flex flex-col items-center gap-10 md:gap-20 pb-5 md:pb-10">
      <img src="./assets/images/footer.png" alt="" />

      <p className="text-6xl md:text-8xl text-center font-black">
        {translation.privacy.title}
      </p>

      <div className="mx-16 lg:mx-32 flex flex-col gap-6 md:gap-12 max-w-[1440px]">
        <section>
          <p className="text-2xl md:text-5xl font-black">
            {translation.privacy.introduction.title}
          </p>
          <br />

          <p className="text-lg md:text-3xl md:leading-[48px]">
            {translation.privacy.introduction.content}
          </p>
        </section>

        <section>
          <p className="text-2xl md:text-5xl font-black">
            {translation.privacy.informationwecollect.title}
          </p>
          <br />

          <p className="text-xl md:text-2xl font-bold">
            {translation.privacy.informationwecollect.content}
          </p>
          <br />

          <div className="text-lg md:text-3xl md:leading-[48px]">
            <ol className="list-decimal ml-5 md:ml-10">
              <li>{translation.privacy.informationwecollect.list1}</li>
              <li>{translation.privacy.informationwecollect.list2}</li>
              <li>{translation.privacy.informationwecollect.list3}</li>
            </ol>
          </div>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            {translation.privacy.howtouse.title}
          </p>
          <br />

          <p>{translation.privacy.howtouse.content}</p>
          <ol className="list-decimal ml-5 md:ml-10">
            <li>{translation.privacy.howtouse.list1}</li>
            <li>{translation.privacy.howtouse.list2}</li>
            <li>{translation.privacy.howtouse.list3}</li>
            <li>{translation.privacy.howtouse.list4}</li>
          </ol>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            {translation.privacy.disclosure.title}
          </p>
          <br />

          <p>{translation.privacy.disclosure.content}</p>
          <ol className="list-decimal ml-5 md:ml-10">
            <li>{translation.privacy.disclosure.list1}</li>
            <li>{translation.privacy.disclosure.list2}</li>
            <li>{translation.privacy.disclosure.list3}</li>
          </ol>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            {translation.privacy.security.title}
          </p>
          <br />

          <p>{translation.privacy.security.content}</p>
          <br />

          <ol className="list-decimal ml-5 md:ml-10">
            <li>{translation.privacy.security.list1}</li>
            <li>{translation.privacy.security.list2}</li>
            <li>{translation.privacy.security.list3}</li>
            <li>{translation.privacy.security.list4}</li>
            <li>{translation.privacy.security.list5}</li>
            <li>{translation.privacy.security.list6}</li>
          </ol>
          <br />

          <div>
            <p>{translation.privacy.security.changes.title}</p>
            <p>{translation.privacy.security.changes.content}</p>
            <p>{translation.privacy.security.contactus.title}</p>
            <p>{translation.privacy.security.contactus.content}</p>
            <ul className="list-disc ml-5 md:ml-10">
              <li>{translation.privacy.security.contactus.list1}</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
