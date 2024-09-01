import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-2770.svg"
          />
          <div className={styles.frameContainer}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-2771.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.mainMenuParent}>
        <div className={styles.mainMenu}>MAIN MENU</div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.icdashboardParent}>
              <img
                className={styles.icdashboardIcon}
                loading="lazy"
                alt=""
                src="/icdashboard.svg"
              />
              <a className={styles.dashboard}>Dashboard</a>
            </div>
            <div className={styles.iconLabelPair}>
              <img
                className={styles.icrecruitmentIcon}
                loading="lazy"
                alt=""
                src="/icrecruitment@2x.png"
              />
              <div className={styles.recruitment}>Recruitment</div>
            </div>
          </div>
          <div className={styles.iconLabelPair1}>
            <div className={styles.icdashboardParent}>
              <img
                className={styles.icdashboardIcon}
                loading="lazy"
                alt=""
                src="/iccalendar.svg"
              />
              <a className={styles.schedule}>Schedule</a>
            </div>
            <div className={styles.icdashboardParent}>
              <div className={styles.icemployeeWrapper}>
                <img
                  className={styles.icemployeeIcon}
                  loading="lazy"
                  alt=""
                  src="/icemployee.svg"
                />
              </div>
              <a className={styles.schedule}>Employee</a>
            </div>
          </div>
          <div className={styles.icdashboardParent}>
            <img
              className={styles.icdashboardIcon}
              loading="lazy"
              alt=""
              src="/icdepartment.svg"
            />
            <div className={styles.recruitment}>Department</div>
          </div>
        </div>
      </div>
      <div className={styles.mainMenuParent}>
        <div className={styles.mainMenu}>OTHER</div>
        <div className={styles.frameDiv}>
          <div className={styles.icdashboardParent}>
            <img
              className={styles.icdashboardIcon}
              loading="lazy"
              alt=""
              src="/icsupport.svg"
            />
            <a className={styles.schedule}>Support</a>
          </div>
          <div className={styles.icdashboardParent}>
            <img
              className={styles.icdashboardIcon}
              loading="lazy"
              alt=""
              src="/icsettings.svg"
            />
            <a className={styles.schedule}>Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
