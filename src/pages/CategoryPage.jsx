import { useParams } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import { categories } from "../data/categories.js";
import { quotesByCategory } from "../data/quotes/index.js";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);
  const quotes = quotesByCategory[categoryId] || [];

  if (!category) {
    return (
      <div className="p-6 md:p-10 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-error mb-4">Category Not Found</h1>
        <p className="text-base-content/70">This category does not exist. Please check the URL or return to the categories page.</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto">
      <SEO
        title={`${category.name} – QuotesHub`}
        description={`Read the best ${category.name.toLowerCase()} to inspire your day.`}
      />

      {/* Header */}
      <div className="text-center mb-10 px-2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
          {category.name}
        </h1>
        <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
          A collection of simple and meaningful {category.name.toLowerCase()} to uplift your mood and mindset.
        </p>
      </div>

      {/* Quotes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((q) => (
          <div
            key={q.id}
            className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition p-6"
          >
            <p className="text-base md:text-lg leading-relaxed text-base-content">
              “{q.text}”
            </p>
          </div>
        ))}
      </div>

      {/* Fallback */}
      {quotes.length === 0 && (
        <div className="text-center text-base-content/70 italic mt-6">
          No quotes available yet. More coming soon.
        </div>
      )}
    </div>
  );
}