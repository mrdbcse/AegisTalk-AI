import { Link } from "react-router-dom";
import type { AuthFooterProps } from "../../interfaces/auth";

const AuthFooter = ({ text, linkText, to }: AuthFooterProps) => {
  return (
    <p className="text-center text-sm text-gray-600 mt-4">
      {text}{" "}
      <Link to={to} className="text-indigo-600 hover:underline font-medium">
        {linkText}
      </Link>
    </p>
  );
};

export default AuthFooter;
