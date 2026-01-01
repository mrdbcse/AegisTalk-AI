import PageTitle from "../../components/others/PageTitle";
const options = [
  "Profile",
  "Preferences",
  "Model Settings",
  "Prompt Templates",
  "Security",
];

const Settings = () => {
  return (
    <div>
      <PageTitle title="Settings" />
      <div>
        {options.map((option, i) => (
          <li key={i}>{option}</li>
        ))}
      </div>
    </div>
  );
};

export default Settings;
