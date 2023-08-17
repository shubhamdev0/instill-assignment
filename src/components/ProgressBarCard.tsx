import React from "react";
import styles from "./ProgressBarCard.module.scss";
import CircularProgressBar from "../commonComponents/CircularProgressBar";

interface ProgressBarCardProps {
  progressPercentage: number;
  progressChange: number;
  progressText: string;
}

const ProgressBarCard: React.FC<ProgressBarCardProps> = ({
  progressPercentage,
  progressChange,
  progressText,
}) => {
  return (
    <div className={styles.progressBarCard}>
      <h4 className={styles.progressText}>{progressText}</h4>
      <CircularProgressBar
        progressPercentage={progressPercentage}
        size={120}
        strokeColor="#111111"
        strokeWidth={10}
        className={styles.percentage}
      />

      <div
        className={
          progressChange > 0
            ? `${styles.progressChange}`
            : `${styles.progressChangeRed}`
        }
      >
        {progressChange > 0 ? "↑" : "↓"} {Math.abs(progressChange)}%
      </div>
    </div>
  );
};

export default ProgressBarCard;
