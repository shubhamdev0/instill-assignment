import React from "react";
import styles from "./SafetySection.module.scss";
import CircularProgressBar from "../commonComponents/CircularProgressBar";
import InstillHelpIcon from "../assets/images/help.png";
import SafeAndSecureIcon from "../assets/images/safeAndSecureIcon.png";

const SafetySectionComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.insightWrapper}>
          <div className={styles.insightIcon}>
            <img
              className={styles.icon}
              src={InstillHelpIcon}
              alt="InstillHelpIcon"
            />
          </div>
          <h4 className={styles.text}>Instill Sense</h4>
        </div>
        <div className={styles.safeAndSecureIcon}>
          <img
            className={styles.icon}
            src={SafeAndSecureIcon}
            alt="SafeAndSecureIcon"
          />
          <span className={styles.text}>Safe and secure</span>
        </div>
      </div>

      <div className={styles.meetingStatus}>
        <div className={styles.meetingDetails}>
          <span className={styles.text}>Upcoming Meetings</span>
          <span className={styles.number}>12</span>
        </div>
        <div className={styles.meetingDetails}>
          <span className={styles.text}>New Summaries</span>
          <span className={styles.number}>03</span>
        </div>
      </div>

      <div className={styles.meetingSentiment}>
        <span className={styles.text}>Meetings Sentiments</span>
        <div className={styles.sentimentWrapper}>
          <div className={styles.sentimentAnalysis}>
            <CircularProgressBar
              progressPercentage={62}
              size={80}
              strokeColor="#FF5733"
              strokeWidth={4}
              className={styles.percentage}
            />
            <span className={styles.sentimentText}>Positive</span>
          </div>
          <div className={styles.sentimentAnalysis}>
            <CircularProgressBar
              progressPercentage={30}
              size={80}
              strokeColor="#FBBF24"
              strokeWidth={4}
              className={styles.percentage}
            />
            <span className={styles.sentimentText}>Neutral</span>
          </div>
          <div className={styles.sentimentAnalysis}>
            <CircularProgressBar
              progressPercentage={8}
              size={80}
              strokeColor="#FF3B6B"
              strokeWidth={4}
              className={styles.percentage}
            />
            <span className={styles.sentimentText}>Negative</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetySectionComponent;
