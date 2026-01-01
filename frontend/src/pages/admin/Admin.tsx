import PageTitle from "../../components/others/PageTitle";
const options = ["Users", "Roles", "Organizations", "Audit Logs", "API Keys"];

const Admin = () => {
  return (
    <div>
      <PageTitle title="Admin" />
      <div>
        {options.map((option, i) => (
          <li key={i}>{option}</li>
        ))}
      </div>
    </div>
  );
};

export default Admin;
