import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import { categories } from "../data/categories.js";
import { quotesByCategory } from "../data/quotes/index.js";

export default function Home() {
  const sampleQuotes = [
    quotesByCategory.motivational[0],
    quotesByCategory.life[0],
    quotesByCategory.love[0],
    quotesByCategory.success[0],
    quotesByCategory.friendship[0],
  ].filter(Boolean);

  return (
    <div>
      <SEO
        title="QuotesHub – Daily Motivational, Life and Love Quotes"
        description="Read simple and inspiring motivational, life, love, success and friendship quotes every day."
      />

      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="hero-content flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-4">
              Daily Inspirational Quotes
            </h1>
            <p className="mb-6 text-base sm:text-lg md:text-xl text-base-content/80">
              Simple, meaningful lines to motivate your mind, calm your heart,
              and brighten your day.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/categories"
                className="btn btn-primary w-full sm:w-auto"
              >
                Browse Categories
              </Link>
              <Link to="/about" className="btn btn-outline w-full sm:w-auto">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="p-6 md:p-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold text-primary text-center md:text-left">
            Popular Categories
          </h2>
          <Link
            to="/categories"
            className="link link-primary text-base font-medium text-center md:text-right"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/categories/${cat.id}`}
              className="group card bg-base-100 border border-base-200 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                  {cat.name}
                </h3>
                <p className="text-sm text-base-content/70">
                  Explore handpicked {cat.name.toLowerCase()} to inspire your
                  day.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Quotes */}
      <section className="bg-base-200 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Today’s Featured Quotes
          </h2>
          <div className="space-y-6">
            {sampleQuotes.map((q, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-md hover:shadow-lg transition p-6 border border-base-300"
              >
                <p className="text-lg md:text-xl leading-relaxed text-base-content">
                  “{q.text}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
