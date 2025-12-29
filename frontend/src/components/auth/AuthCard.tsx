import type { AuthCardProps } from "../../interfaces/auth";

const AuthCard = ({ children }: AuthCardProps) => {
  return <div className="bg-white rounded-xl shadow-lg p-6">{children}</div>;
};

export default AuthCard;
