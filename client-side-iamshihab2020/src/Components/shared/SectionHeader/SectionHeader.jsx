import PropTypes from "prop-types";

const SectionHeader = ({prop}) => {
  return (
    <div>
      <h1 className="mt-10 text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 px-2 md:px-20 lg:px-20">{prop}</h1>
    </div>
  );
};

SectionHeader.propTypes = {
  prop: PropTypes.string,
};

export default SectionHeader;
