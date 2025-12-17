import SEO from "../components/SEO.jsx";

export default function PrivacyPolicy() {
  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <SEO
        title="Privacy Policy – QuotesHub"
        description="Read the privacy policy of QuotesHub."
      />

      <div className="card bg-base-100 shadow-xl p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 md:mb-8 text-center">
          Privacy Policy
        </h1>

        <p className="mb-6 text-base-content/80 text-lg md:text-xl leading-relaxed text-center max-w-prose mx-auto">
          At <strong>QuotesHub</strong>, we respect your privacy. This Privacy Policy explains how
          we collect, use, and protect your information.
        </p>

        <div className="space-y-8 text-base md:text-lg leading-relaxed text-base-content max-w-prose mx-auto">
          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">Information We Collect</h2>
            <p>
              We may collect basic information such as your name and email when you contact us.
              We also use cookies to improve user experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">Google AdSense</h2>
            <p>
              We use Google AdSense to show ads. Google may use cookies (including DoubleClick
              cookies) to serve personalized ads based on your interests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">Third‑Party Services</h2>
            <p>
              Third‑party advertisers may collect data through cookies. We do not control or take
              responsibility for their privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">Your Consent</h2>
            <p>
              By using our website, you agree to our Privacy Policy and the collection of
              information as described here.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">Contact Us</h2>
            <p>
              If you have any questions about this policy, feel free to contact us at:{" "}
              <a
                href="mailto:your-email@example.com"
                className="link link-hover text-primary font-medium"
              >
                your-email@example.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}