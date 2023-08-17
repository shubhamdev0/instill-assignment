import React from "react";
import styles from "./SurveyInsights.module.scss";
import HalfCircularProgressBar from "../commonComponents/HalfCircularProgressBar";

const SurveyInsightsComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.title}>This Month</span>
        <span className={styles.bigTitle}>Pulse Survey</span>
      </div>

      <div className={styles.surveyCards}>
        <div className={styles.box}>
          <span className={styles.text}>
            eNPS <br /> Score
          </span>
          <div className={styles.halfProgressBar}>
            <HalfCircularProgressBar
              progressPercentage={54}
              size={120}
              strokeColor="#6ED29C"
              strokeWidth={10}
              className={styles.progressRate}
            />
          </div>
          <span className={styles.scoreType}>
            Score is <b>Excellent</b>{" "}
          </span>
        </div>

        <div className={styles.box}>
          <span className={styles.text}>
            Support from <br /> Manager
          </span>
          <span className={styles.scores}>
            7.5 <span>/10</span>
          </span>
          <span className={styles.scoreType}>
            Score &gt; 7 is a <b>Good one</b>
          </span>
        </div>

        <div className={styles.box}>
          <span className={styles.text}>
            Mission & <br /> Values Alignment
          </span>
          <span className={styles.scores}>
            60<span>%</span>
          </span>
          <span className={styles.scoreType}>
            Score is <b>Average</b>
          </span>
        </div>

        <div
          style={{ backgroundColor: "rgba(255, 110, 110, 0.06)" }}
          className={styles.box}
        >
          <span className={styles.text}>
            Performance <br /> Feedback
          </span>
          <span style={{ color: "#FF3B6B" }} className={styles.scores}>
            4.5 <span style={{ color: "#111111" }}>/10</span>
          </span>
          <span className={styles.scoreType}>
            <b>Need focus</b> on this{" "}
          </span>
        </div>
      </div>

      <div className={styles.results}>
        <ul>
          <li className={styles.noDot}>900 Employees</li>
          <li>675 Responses</li>
          <li>3 days remaining</li>
        </ul>
      </div>
    </div>
  );
};

export default SurveyInsightsComponent;
