import React from "react";
import styles from "./HalfCircularProgressBar.module.scss";

interface HalfCircularProgressBarProps {
  progressPercentage: number;
  size?: number;
  strokeColor?: string;
  strokeWidth?: number;
  className?: any;
}

const HalfCircularProgressBar: React.FC<HalfCircularProgressBarProps> = ({
  progressPercentage,
  size = 104,
  strokeColor = "#6ED29C",
  strokeWidth = 8,
  className,
}) => {
  const radius = size / 2 - strokeWidth;
  const circumference = Math.PI * radius;
  const progress = progressPercentage / 100;
  const offset = circumference - progress * circumference;

  return (
    <div className={styles.container}>
      <svg
        width={size}
        height={size / 2}
        viewBox={`0 0 ${size} ${size / 2}`}
        fill="none"
      >
        <path
          d={`M ${strokeWidth} ${size / 2} A ${radius} ${radius} 0 0 1 ${
            size - strokeWidth
          } ${size / 2}`}
          stroke="#F5F5F5"
          strokeWidth={strokeWidth}
        />
        <path
          d={`M ${strokeWidth} ${size / 2} A ${radius} ${radius} 0 0 1 ${
            size - strokeWidth
          } ${size / 2}`}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="square"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
      </svg>
      <span className={className}> + {progressPercentage}</span>
    </div>
  );
};

export default HalfCircularProgressBar;
