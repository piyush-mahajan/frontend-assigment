import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./NewEmployees.module.css";

const NewEmployees = ({
  className = "",
  propBackgroundColor,
  availablePosition,
  prop,
  urgentlyNeeded,
  propColor,
}) => {
  const newEmployeesStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const urgentlyNeededStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={[styles.newEmployees, className].join(" ")}
      style={newEmployeesStyle}
    >
      <div className={styles.availablePosition}>{availablePosition}</div>
      <div className={styles.div}>{prop}</div>
      <div className={styles.urgentlyNeeded} style={urgentlyNeededStyle}>
        {urgentlyNeeded}
      </div>
    </div>
  );
};

NewEmployees.propTypes = {
  className: PropTypes.string,
  availablePosition: PropTypes.string,
  prop: PropTypes.string,
  urgentlyNeeded: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propColor: PropTypes.any,
};

export default NewEmployees;
