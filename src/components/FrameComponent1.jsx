import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  className = "",
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propFlex,
  propAlignSelf,
  propMinWidth,
  thisIsTitle,
  propFontWeight,
  today1130AM,
  propHeight,
  propDisplay,
  propPadding,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propPosition, propTop, propLeft, propWidth, propFlex, propAlignSelf]);

  const instanceContentDuplicateStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const thisIsTitleStyle = useMemo(() => {
    return {
      fontWeight: propFontWeight,
    };
  }, [propFontWeight]);

  const today1130Style = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const instanceActionsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.instanceContentDuplicateParent, className].join(" ")}
      style={frameDiv1Style}
    >
      <div
        className={styles.instanceContentDuplicate}
        style={instanceContentDuplicateStyle}
      >
        <div className={styles.thisIsTitle} style={thisIsTitleStyle}>
          {thisIsTitle}
        </div>
        <div className={styles.today1130} style={today1130Style}>
          {today1130AM}
        </div>
      </div>
      <div className={styles.instanceActions} style={instanceActionsStyle}>
        <div className={styles.instanceActionIconsDuplicat}>
          <img
            className={styles.icNotificationsIcon}
            alt=""
            src="/icnotifications.svg"
          />
          <img
            className={styles.icNotificationsIcon}
            alt=""
            src="/carbonoverflowmenuhorizontal.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  thisIsTitle: PropTypes.string,
  today1130AM: PropTypes.string,

  /** Style props */
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFontWeight: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propPadding: PropTypes.any,
};

export default FrameComponent1;
