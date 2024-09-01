import PropTypes from "prop-types";
import styles from "./CheckBox.module.css";

const CheckBox = ({ className = "" }) => {
  return (
    <header className={[styles.checkBox, className].join(" ")}>
      <div className={styles.checkBox1}>
        <a className={styles.search}>Search</a>
        <img
          className={styles.checkBox2}
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
      </div>
      <div className={styles.checkBox3}>
        <img
          className={styles.icroundNotificationsIcon}
          loading="lazy"
          alt=""
          src="/icroundnotifications.svg"
        />
        <div className={styles.icroundNotificationsIcon}>
          <div className={styles.bichatLeftDotsFillChild} />
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group.svg"
          />
        </div>
        <div className={styles.checkBox4}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.checkBox5}>
            <a className={styles.admirraJohn}>Admirra John</a>
            <img className={styles.checkBox6} alt="" src="/check-box.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};

CheckBox.propTypes = {
  className: PropTypes.string,
};

export default CheckBox;
