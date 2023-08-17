import React, { FC } from "react";
import Styles from "./ClientInfo.module.scss";

interface ClientInfoProps {
  companyLogo: string;
  companyName: string;
  clientName: string;
}

const ClientInfoComponent: FC<ClientInfoProps> = ({
  companyLogo,
  companyName,
  clientName,
}) => {
  return (
    <div className={Styles.ClientInfoContainer}>
      <div className={Styles.wrapper}>
        <div className={Styles.CompanyLogo}>
          <img className={Styles.icon} src={companyLogo} alt="companyLogo" />
        </div>
        <div className={Styles.companyName}>{companyName}</div>
      </div>

      <div className={Styles.ClientInfo}>
        <span className={Styles.clientName}>Hi, {clientName}</span>
        <span className={Styles.clientStatus}>CEO, Apple Inc</span>
      </div>
    </div>
  );
};

export default ClientInfoComponent;
