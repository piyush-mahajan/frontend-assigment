import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({
  className = "",
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propAlignSelf,
  outingScheduleForEveryDeparteme,
  minutesAgo,
  propPadding,
  bipinAngleFill,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propPosition, propTop, propLeft, propWidth, propAlignSelf]);

  const repeatedOutingActionsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.instanceContentParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.instanceContent}>
        <div className={styles.outingScheduleFor}>
          {outingScheduleForEveryDeparteme}
        </div>
        <div className={styles.minutesAgo}>{minutesAgo}</div>
      </div>
      <div
        className={styles.repeatedOutingActions}
        style={repeatedOutingActionsStyle}
      >
        <div className={styles.instanceIcons}>
          <img
            className={styles.bipinAngleFillIcon}
            alt=""
            src={bipinAngleFill}
          />
          <img
            className={styles.bipinAngleFillIcon}
            alt=""
            src="/carbonoverflowmenuhorizontal.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  outingScheduleForEveryDeparteme: PropTypes.string,
  minutesAgo: PropTypes.string,
  bipinAngleFill: PropTypes.string,

  /** Style props */
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
};

export default FrameComponent2;
