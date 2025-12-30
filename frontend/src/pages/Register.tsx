import AuthCard from "../components/auth/AuthCard";
import AuthFooter from "../components/auth/AuthFooter";
import AuthHeader from "../components/auth/AuthHeader";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <AuthCard>
      <AuthHeader
        title="Create your account"
        subtitle="Welcome to AegisTalk AI"
      />
      <RegisterForm />
      <AuthFooter
        text="Already have an account?"
        linkText="Sign In"
        to="/login"
      />
    </AuthCard>
  );
};

export default Register;
