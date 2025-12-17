import SEO from "../components/SEO.jsx";

export default function About() {
  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <SEO
        title="About Us – QuotesHub"
        description="Learn more about QuotesHub and our purpose."
      />

      <div className="card bg-base-100 shadow-xl p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 text-primary text-center">
          About <span className="text-base-content">QuotesHub</span>
        </h1>

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-base-content">
          <p>
            <strong>QuotesHub</strong> is a simple and clean platform created to share
            meaningful, positive, and inspiring quotes. Our goal is to make your day
            better with short, powerful lines that motivate, encourage, and bring clarity.
          </p>

          <p>
            All quotes on this website are written in simple English so that anyone
            can understand and enjoy them. We focus on categories like{" "}
            <span className="font-medium text-secondary">motivation, love, life, success</span>, and{" "}
            <span className="font-medium text-secondary">friendship</span>.
          </p>

          <p>
            This website is created and managed by an individual developer who loves
            writing and sharing positive thoughts with the world.
          </p>
        </div>
      </div>
    </div>
  );
}