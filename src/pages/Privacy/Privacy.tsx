const Privacy = () => {
  return (
    <div className="font-['Poppins'] text-white flex flex-col items-center gap-10 md:gap-20 pb-5 md:pb-10">
      <img src="./assets/images/footer.png" alt="" />

      <p className="text-6xl md:text-8xl text-center font-black">
        Privacy Policy
      </p>

      <div className="mx-16 lg:mx-32 flex flex-col gap-6 md:gap-12 max-w-[1440px]">
        <section>
          <p className="text-2xl md:text-5xl font-black">Introduction</p>
          <br />

          <p className="text-lg md:text-3xl md:leading-[48px]">
            At TheMoonMemes, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy outlines
            how we collect, use, disclose, and safeguard your data when you
            interact with our website, services, and products.
          </p>
        </section>

        <section>
          <p className="text-2xl md:text-5xl font-black">
            Information We Collect
          </p>
          <br />

          <p className="text-xl md:text-2xl font-bold">
            We may collect the following types of information:
          </p>
          <br />

          <div className="text-lg md:text-3xl md:leading-[48px]">
            <ol className="list-decimal ml-5 md:ml-10">
              <li>
                Personal Information: Includes your name, email address, and any
                other information you provide when you register an account or
                contact us.
              </li>
              <li>
                Usage Data: Information about how you use our website and
                services, including your IP address, browser type, access times,
                pages viewed, and the page you visited before navigating to our
                site
              </li>
              <li>
                Cookies and Tracking Technologies: We use cookies and similar
                tracking technologies to track the activity on our service and
                hold certain information.
              </li>
            </ol>
          </div>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            How We Use Your Information
          </p>
          <br />

          <p>We use the information we collect in the following ways:</p>
          <ol className="list-decimal ml-5 md:ml-10">
            <li>
              To Provide and Maintain Our Service: Ensuring that our website and
              services function correctly.
            </li>
            <li>
              To Communicate With You: Responding to your inquiries, providing
              updates, and sending newsletters.
            </li>
            <li>
              To Improve Our Services: Analyzing usage data to enhance the
              performance and user experience of our platform.
            </li>
            <li>
              For Security: Monitoring and analyzing trends, usage, and
              activities to maintain the safety and security of our website and
              services.
            </li>
          </ol>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            Information Sharing and Disclosure
          </p>
          <br />

          <p>We may share your information in the following situations:</p>
          <ol className="list-decimal ml-5 md:ml-10">
            <li>
              With Service Providers: We may share your information with
              third-party service providers who perform services on our behalf,
              such as website hosting, data analysis, and payment processing.
            </li>
            <li>
              For Legal Reasons: If required by law or in response to valid
              requests by public authorities.
            </li>
            <li>
              With Your Consent: We may disclose your personal information for
              any other purpose with your consent.
            </li>
          </ol>
        </section>

        <section className="text-lg md:text-3xl md:leading-[48px]">
          <p className="text-2xl md:text-5xl font-black">
            Security of Your Information
          </p>
          <br />

          <p>
            We use administrative, technical, and physical security measures to
            protect your personal information. Despite these measures, no
            security system is impenetrable, and we cannot guarantee the
            absolute security of your data. Your Data Protection Rights
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>
          <br />

          <ol className="list-decimal ml-5 md:ml-10">
            <li>
              Access: You have the right to request a copy of the information we
              hold about you.
            </li>
            <li>
              Correction: You have the right to request that we correct any
              information you believe is inaccurate.
            </li>
            <li>
              Deletion: You have the right to request that we delete your
              personal information under certain conditions.
            </li>
            <li>
              Restrict Processing: You have the right to request that we
              restrict the processing of your personal information under certain
              conditions.
            </li>
            <li>
              Object to Processing: You have the right to object to our
              processing of your personal information under certain conditions.
            </li>
            <li>
              Data Portability: You have the right to request that we transfer
              the data that we have collected to another organization, or
              directly to you, under certain conditions.
            </li>
          </ol>
          <br />

          <div>
            <p>Changes to This Privacy Policy</p>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any
              changes.
            </p>
            <p>Contact Us</p>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <ul className="list-disc ml-5 md:ml-10">
              <li>Email: privacy@themoonmemes.com</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
