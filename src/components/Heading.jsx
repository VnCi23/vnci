import PropTypes from "prop-types";

const Heading = (props) => {
  return (
    <div className="heading hero-text">
      <h1>
      </h1>
    </div>
  );
};

Heading.propTypes = {
  firstWord: PropTypes.string.isRequired,
  secondWord: PropTypes.string.isRequired,
};

export default Heading;
