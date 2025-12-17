import SEO from "../components/SEO.jsx";

export default function Contact() {
  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <SEO
        title="Contact Us – QuotesHub"
        description="Get in touch with the QuotesHub team."
      />

      <div className="card bg-base-100 shadow-xl p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-base-content/80 mb-4 text-lg text-center">
          If you have any questions, suggestions, or feedback, feel free to reach out.
        </p>

        <p className="mb-6 text-base-content text-center">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:your-email@example.com"
            className="link link-hover text-primary"
          >
            your-email@example.com
          </a>
        </p>

        <form className="space-y-5">
          <div>
            <label className="label">
              <span className="label-text font-medium">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">Your Message</span>
            </label>
            <textarea
              placeholder="Write your message here..."
              className="textarea textarea-bordered w-full"
              rows="5"
            ></textarea>
          </div>

          <div className="flex justify-center md:justify-start">
            <button type="button" className="btn btn-primary w-full md:w-auto">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}