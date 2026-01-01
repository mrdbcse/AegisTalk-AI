import PageTitle from "../../components/others/PageTitle";
const options = [
  "CRM Integration",
  "API Connections",
  "Webhooks",
  "Tool Registry",
];

const Integrations = () => {
  return (
    <div>
      <PageTitle title="Integrations" />
      <div>
        {options.map((option, i) => (
          <li key={i}>{option}</li>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
