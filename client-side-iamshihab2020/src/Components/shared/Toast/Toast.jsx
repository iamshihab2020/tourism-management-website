import PropTypes from "prop-types";

const Toast = ({ message, isSuccess }) => {
  return (
    <div className={`toast toast-start toast-top z-[1000]`}>
      <div className={`alert  ${
        isSuccess ? "alert-success" : "alert-error"
      }`}>
        <span className="text-white">{message}</span>
      </div>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string,
  isSuccess: PropTypes.bool.isRequired,
};

export default Toast;
