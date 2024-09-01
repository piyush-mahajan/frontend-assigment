import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ className = "" }) => {
  return (
    <button className={[styles.button, className].join(" ")}>
      <div className={styles.primaryButton}>See All Activity</div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
