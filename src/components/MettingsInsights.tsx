import React from "react";
import styles from "./MeetingsInsights.module.scss";
import AppleLogo from "../assets/images/appleLogo.png";
import Warning from "../assets/images/warningIcon.png";

const data = [
  {
    id: 1,
    profileImage: AppleLogo,
    title: "Psychological Safety Alert on Sales Team",
    paragraph: "Share something vulnerable in your next team meeting.",
  },
  {
    id: 2,
    profileImage: AppleLogo,
    title: "You Have a Burnout Alert",
    paragraph:
      "Implement 25 minute meetings for a 5 minute break between calls.",
  },
  {
    id: 3,
    profileImage: AppleLogo,
    title: "Inclusion Scores are Trending Down with New Teammates",
    paragraph: "Ask their opinion in next meeting.",
  },
];

const MeetingsInsightComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.title}>Advance your culture with</span>
        <div className={styles.wrapperTitle}>
          <span className={styles.bigTitle}>Action Steps</span>
          <div className={styles.attentionSign}>
            <img className={styles.icon} src={Warning} alt="warning" />{" "}
            <span className={styles.text}>Needs attention</span>
          </div>
        </div>
      </div>
      <div className={styles.actionSteps}>
        {data &&
          data.map((item, index) => (
            <div className={styles.actionStep} key={index}>
              <div className={styles.wrapper}>
                <div className={styles.profileImage}>
                  <img
                    className={styles.icon}
                    src={item.profileImage}
                    alt="profileImage"
                  />
                </div>
                <div className={styles.heading}>
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.paragraph}>{item.paragraph}</span>
                </div>
              </div>
              <button type="button" className={styles.btn}>
                Take Action
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MeetingsInsightComponent;
