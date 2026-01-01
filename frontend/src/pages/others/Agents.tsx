import PageTitle from "../../components/others/PageTitle";

const options = [
  "Active Agents",
  "Agent Workflow",
  "Execution Timeline",
  "Confidence Scores",
];

const Agents = () => {
  return (
    <div>
      <PageTitle title="Agents" />
      <div>
        {options.map((option, i) => (
          <li key={i}>{option}</li>
        ))}
      </div>
    </div>
  );
};

export default Agents;
