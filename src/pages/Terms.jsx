import SEO from "../components/SEO.jsx";

export default function Terms() {
  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <SEO
        title="Terms & Conditions – QuotesHub"
        description="Read the terms and conditions of QuotesHub."
      />

      <div className="card bg-base-100 shadow-xl p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 md:mb-8 text-center">
          Terms & Conditions
        </h1>

        <p className="mb-6 text-base-content/80 text-lg md:text-xl leading-relaxed text-center max-w-prose mx-auto">
          By accessing <strong>QuotesHub</strong>, you agree to follow the terms and conditions listed below.
        </p>

        <div className="space-y-8 text-base md:text-lg leading-relaxed text-base-content max-w-prose mx-auto">
          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">Use of Content</h2>
            <p>
              All quotes and content on this website are for personal use only. You may not copy,
              distribute, or republish our content without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">Accuracy</h2>
            <p>
              We strive to provide accurate and up-to-date information, but we do not guarantee
              completeness, reliability, or suitability of the content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">External Links</h2>
            <p>
              Our website may contain links to external websites. We are not responsible for the
              content, privacy practices, or policies of those third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-secondary mb-2">Changes to Terms</h2>
            <p>
              We may update these terms at any time without prior notice. Continued use of the
              website indicates your acceptance of the updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}