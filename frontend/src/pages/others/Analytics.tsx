import PageTitle from "../../components/others/PageTitle";
const options = [
  "Token Usage",
  "Cost Analysis",
  "Latency",
  "Accuracy",
  "Error Logs",
];
const Analytics = () => {
  return (
    <div>
      <PageTitle title="Analytics" />
      <div>
        {options.map((option, i) => (
          <li key={i}>{option}</li>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
