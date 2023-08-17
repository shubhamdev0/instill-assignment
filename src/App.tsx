import "./App.scss";
import DashboardLayout from "./layouts/DashboardLayout";
import EmployeeMetricsComponent from "./components/EmployeeMetrics";
import ClientInfoComponent from "./components/ClientInfo";
import ClientCompanyLogo from "./assets/images/appleLogo.png";
import SafetySectionComponent from "./components/SafetySection";
import SurveyInsightsComponent from "./components/SurveyInsights";
import MeetingsInsightComponent from "./components/MettingsInsights";

function App() {
  return (
    <div className="App">
      <DashboardLayout>
        <ClientInfoComponent
          companyLogo={ClientCompanyLogo}
          companyName="apple Culture Dashboard"
          clientName="Tim"
        />
        <EmployeeMetricsComponent />
        <div className="aspectRatio">
          <SafetySectionComponent />
          <SurveyInsightsComponent />
        </div>
        <MeetingsInsightComponent />
      </DashboardLayout>
    </div>
  );
}

export default App;
