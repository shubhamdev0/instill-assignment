import React from "react";
import styles from "./CircularProgressBar.module.scss";

interface CircularProgressBarProps {
  progressPercentage: number;
  size?: number;
  strokeColor?: string;
  strokeWidth?: number;
  className?: any;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progressPercentage,
  size = 104,
  strokeColor = "#111111",
  strokeWidth = 8,
  className,
}) => {
  const radius = size / 2 - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const progress = progressPercentage / 100;
  const offset = circumference - progress * circumference;

  return (
    <div className={styles.progressBarContainer}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#DFDFDF"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          fill="none"
        />
      </svg>
      <div className={className}>
        {progressPercentage}
        <span className={styles.percentageText}>%</span>
      </div>
    </div>
  );
};

export default CircularProgressBar;
