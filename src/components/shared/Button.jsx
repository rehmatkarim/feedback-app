import PropTypes from "prop-types";
const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};
Button.propType = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
};
export default Button;