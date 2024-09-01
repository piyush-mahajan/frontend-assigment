import { useMemo } from "react";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import styles from "./ItemDetails.module.css";

const ItemDetails = ({
  className = "",
  priority,
  propDisplay,
  propMinWidth,
  thisIsTitle,
  today1130AM,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propFlex,
  propAlignSelf,
  propMinWidth1,
  propFontWeight,
  propHeight,
  propDisplay1,
  propPadding,
}) => {
  const priorityStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={[styles.itemDetails, className].join(" ")}>
      <div className={styles.priority} style={priorityStyle}>
        {priority}
      </div>
      <div className={styles.itemContent}>
        <FrameComponent1
          propPosition={propPosition}
          propTop={propTop}
          propLeft={propLeft}
          propWidth={propWidth}
          propFlex={propFlex}
          propAlignSelf={propAlignSelf}
          propMinWidth={propMinWidth1}
          thisIsTitle={thisIsTitle}
          propFontWeight={propFontWeight}
          today1130AM={today1130AM}
          propHeight={propHeight}
          propDisplay={propDisplay1}
          propPadding={propPadding}
        />
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  className: PropTypes.string,
  priority: PropTypes.string,
  thisIsTitle: PropTypes.string,
  today1130AM: PropTypes.string,
  propPosition: PropTypes.string,
  propTop: PropTypes.string,
  propLeft: PropTypes.string,
  propWidth: PropTypes.string,
  propFlex: PropTypes.string,
  propAlignSelf: PropTypes.string,
  propMinWidth1: PropTypes.string,
  propFontWeight: PropTypes.string,
  propHeight: PropTypes.string,
  propDisplay1: PropTypes.string,
  propPadding: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default ItemDetails;
