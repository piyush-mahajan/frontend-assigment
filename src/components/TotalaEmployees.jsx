import PropTypes from "prop-types";
import styles from "./TotalaEmployees.module.css";

const TotalaEmployees = ({ className = "" }) => {
  return (
    <div className={[styles.totalaEmployees, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.totalEmployeesParent}>
          <div className={styles.totalEmployees}>Talent Request</div>
          <div className={styles.div}>16</div>
        </div>
        <div className={styles.menParent}>
          <div className={styles.men}>6 Men</div>
          <div className={styles.men}>10 Women</div>
        </div>
      </div>
      <div className={styles.totalaEmployeesInner}>
        <div className={styles.frameGroup}>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/vector-2.svg" />
            <img className={styles.frameItem} alt="" src="/vector-3-1.svg" />
            <div className={styles.chartPlaceholder}>+5%</div>
            <img className={styles.chartLabelIcon} alt="" src="/frame-20.svg" />
          </div>
          <div className={styles.pastMonthWrapper}>
            <div className={styles.pastMonth}>+5% Past month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

TotalaEmployees.propTypes = {
  className: PropTypes.string,
};

export default TotalaEmployees;
