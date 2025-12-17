import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import { categories } from "../data/categories.js";

export default function Categories() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <SEO
        title="Quote Categories – QuotesHub"
        description="Browse all quote categories including motivational, love, life, success and friendship."
      />

      {/* Header */}
      <div className="text-center mb-10 px-2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
          Explore Categories
        </h1>
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
          Discover quotes by theme — motivation, love, life, success, and more.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/categories/${cat.id}`}
            className="group card bg-base-100 border border-base-200 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                {cat.name}
              </h2>
              <p className="text-sm text-base-content/70">
                Read curated {cat.name.toLowerCase()} to uplift your mood.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}