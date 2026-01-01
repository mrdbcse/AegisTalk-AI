import PageTitle from "../../components/others/PageTitle";
const options = [
  "New Chat",
  "Conversations",
  "Saved Chats",
  "Voice Chat",
  "Start Voice Chat",
  "Voice Settings",
  "Language Selection",
];

const Chat = () => {
  return (
    <div>
      <PageTitle title="Chat" />
      <div>
        {options.map((option, i) => (
          <li key={i}>{option}</li>
        ))}
      </div>
    </div>
  );
};

export default Chat;
