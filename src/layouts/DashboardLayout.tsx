import React, { FC } from 'react';
import Styles from './DashboardLayout.module.scss';
import Logo from '../assets/images/instillLogo.png';
import Dashboard from '../assets/images/dashboard.png';
import chart from '../assets/images/chart.png';
import chartPie from '../assets/images/chartPie.png';
import Info from '../assets/images/info.png';
import Help from '../assets/images/help.png';
import Offers from '../assets/images/offers.png';
import People from '../assets/images/people.png';
import Status from '../assets/images/status.png';
import SearchIcon from '../assets/images/searchIcon.png';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className={Styles.dashboardLayout}>
      <aside className={Styles.leftPanel}>
        <div className={Styles.logoIcon}>
            <img src={Logo} alt="Logo" />
        </div>
        <div className={`${Styles.icon} ${Styles.home}`}>
            <img src={Dashboard} alt="Dashboard" />
        </div>
        {/* Other icons */}
        <div className={`${Styles.icon} ${Styles.home}`}>
            <img src={chart} alt="chart" />
        </div>
        <div className={`${Styles.icon} ${Styles.home}`}>
            <img src={chartPie} alt="chartPie" />
        </div>
        <div className={`${Styles.icon} ${Styles.home}`}>
            <img src={Status} alt="Status" />
        </div>
        <div className={`${Styles.icon} ${Styles.home}`}>
            <img src={People} alt="People" />
        </div>
        <div className={`${Styles.icon} ${Styles.home}`}>
            <img src={Offers} alt="Offers" />
        </div>
        <div className={`${Styles.icon} ${Styles.home}`}>
            <img src={Info} alt="Info" />
        </div>
        <div className={`${Styles.icon} ${Styles.home}`}>
            <img src={Help} alt="Help" />
        </div>
      </aside>

      <header className={Styles.topHeader}>
        <div className={Styles.searchBar}>
          <div className={Styles.searchIcon}>
            <img src={SearchIcon} alt="SearchIcon" />
          </div>
          <input className={Styles.searchInput} type="text" placeholder="Search" />
        </div>
        <div className={Styles.profile}>
          <span className={Styles.profileName}>Tim Cook</span>
          <div className={Styles.profileIcon}></div>
        </div>
      </header>

      <main className={Styles.contentArea}>
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
