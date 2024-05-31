const Terms = () => {
  return (
    <div className="font-['Poppins'] text-white flex flex-col items-center gap-10 md:gap-20 pb-5 md:pb-10">
      <img src="./assets/images/footer.png" />

      <p className="text-6xl md:text-8xl text-center font-black">
        Terms and Conditions
      </p>

      <div className="mx-16 lg:mx-32 flex flex-col gap-6 md:gap-12 max-w-[1440px]">
        <section>
          <p className="text-2xl md:text-5xl font-black">Introduction</p>
          <br />

          <p className="text-lg md:text-3xl md:leading-[48px]">
            Welcome to TheMoonMemes! These Terms and Conditions ("Terms") govern
            your use of our website, services, and products. By accessing or
            using TheMoonMemes, you agree to comply with and be bound by these
            Terms.
          </p>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">Use of Our Services</p>
          <br />

          <ol className="list-decimal ml-5 md:ml-10">
            <li>
              Eligibility: You must be at least 18 years old to use our
              services.
            </li>
            <li>
              Account Registration: You may need to create an account to access
              certain features of our services. You are responsible for
              maintaining the confidentiality of your account information and
              for all activities that occur under your account.
            </li>
            <li>
              Prohibited Activities: You agree not to engage in any of the
              following prohibited activities:
              <ul className="list-disc ml-5 md:ml-10">
                <li>Using the service for any illegal purpose.</li>
                <li>Violating any applicable laws or regulations.</li>
                <li>
                  Infringing upon or violating our intellectual property rights
                  or the intellectual property rights of others.
                </li>
                <li>
                  Interfering with or disrupting the operation of our services.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            Intellectual Property
          </p>
          <br />

          <p>
            All content on TheMoonMemes, including text, graphics, logos,
            images, and software, is the property of TheMoonMemes or its content
            suppliers and is protected by intellectual property laws. You agree
            not to reproduce, distribute, or create derivative works based on
            our content without our prior written consent.
          </p>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            Limitation of Liability
          </p>
          <br />

          <p>
            To the maximum extent permitted by law, TheMoonMemes shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use, goodwill,
            or other intangible losses resulting from:
          </p>

          <ol className="list-decimal ml-5 md:ml-10">
            <li>Your use or inability to use our services.</li>
            <li>
              Any unauthorized access to or use of our servers and/or any
              personal information stored therein.
            </li>
            <li>
              Any interruption or cessation of transmission to or from our
              services.
            </li>
            <li>
              Any bugs, viruses, trojan horses, or the like that may be
              transmitted to or through our services by any third party.
            </li>
          </ol>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">Indemnification</p>
          <br />

          <p>
            You agree to indemnify and hold harmless TheMoonMemes, its
            affiliates, and their respective officers, directors, employees, and
            agents from any and all claims, liabilities, damages, losses, or
            expenses, including reasonable attorneys' fees and costs, arising
            out of or in any way connected with your access to or use of our
            services.
          </p>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">Governing Law</p>
          <br />

          <p>
            These Terms and any disputes related to these Terms or our services
            will be governed by and construed in accordance with the laws of
            [Jurisdiction], without regard to its conflict of law principles.
          </p>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            Changes to These Terms
          </p>
          <br />

          <p>
            We may update these Terms from time to time. We will notify you of
            any changes by posting the new Terms on this page. Your continued
            use of our services after any changes to these Terms will constitute
            your acceptance of the new Terms.
          </p>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">Contact Us</p>
          <br />

          <p>
            If you have any questions about these Terms, please contact us at
          </p>
          <ul className="list-disc ml-5 md:ml-10">
            <li>Email: support@themoonmemes.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Terms;
