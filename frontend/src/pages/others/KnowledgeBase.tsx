// import UploadDocuments from "../../components/knowledge-base/UploadDocuments";
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
      <div>
        {/* <UploadDocuments
          onUpload={async (file) => {
            // Replace with real API
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Uploaded file:", file);
          }}
        /> */}
      </div>
    </div>
  );
};

export default KnowledgeBase;
