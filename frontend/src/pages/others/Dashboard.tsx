import PageTitle from "../../components/others/PageTitle";

const options = [
  "System Status",
  "Usage Summary",
  "Recent Activities",
  "Alerts",
];

const Dashboard = () => {
  return (
    <div>
      <PageTitle title="Dashboard" />
      <div>
        {options.map((option, i) => (
          <li key={i}>{option}</li>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
