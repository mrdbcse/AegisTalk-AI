import PageTitle from "../../components/others/PageTitle";
const options = ["Current Plan", "Usage Limits", "Invoices", "Payments"];

const Billing = () => {
  return (
    <div>
      <PageTitle title="Billing" />
      <div>
        {options.map((option, i) => (
          <li key={i}>{option}</li>
        ))}
      </div>
    </div>
  );
};

export default Billing;
