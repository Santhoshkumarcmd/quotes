import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

export default function SEO({ title, description }) {
  return (
    <Helmet>
      {/* Page Title */}
      <title>{title}</title>

      {/* Meta Description */}
      {description && <meta name="description" content={description} />}
      
      {/* Optional: Mobile-friendly viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

SEO.defaultProps = {
  description: "",
};