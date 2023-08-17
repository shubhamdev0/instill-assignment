import React from "react";
import ProgressBarCard from "./ProgressBarCard";
import styles from "./EmployeeMetrics.module.scss";

const data = [
  {
    progressPercentage: 25,
    progressChange: 5,
    progressText: "Inclusion",
  },
  {
    progressPercentage: 85,
    progressChange: -10,
    progressText: "Trust",
  },
  {
    progressPercentage: 60,
    progressChange: 15,
    progressText: "Psychological Safety",
  },
  {
    progressPercentage: 72,
    progressChange: 0,
    progressText: "Innovation",
  },
  {
    progressPercentage: 38,
    progressChange: 20,
    progressText: "Burnout",
  },
];

const EmployeeMetricsComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>This month</div>
      <div className={styles.title}>Culture Vital Signs</div>
      <div className={styles.progressBars}>
        {data.map((item, index) => (
          <ProgressBarCard
            key={index}
            progressPercentage={item.progressPercentage}
            progressChange={item.progressChange}
            progressText={item.progressText}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeMetricsComponent;
