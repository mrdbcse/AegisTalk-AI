import PageTitle from "../../components/others/PageTitle";
const options = [
  "Upload Documents",
  "Indexed Files",
  "Chunk Viewer",
  "Source Citations",
];

const KnowledgeBase = () => {
  return (
    <div>
      <PageTitle title="Knowledge Base" />
      <div>
        {options.map((option, i) => (
          <li key={i}>{option}</li>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;
