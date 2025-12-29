import AuthCard from "../components/auth/AuthCard";
import AuthFooter from "../components/auth/AuthFooter";
import AuthHeader from "../components/auth/AuthHeader";
import LoginForm from "./../components/auth/LoginForm";

const Login = () => {
  return (
    <AuthCard>
      <AuthHeader title="Sign in to your account" subtitle="Welcome back!" />
      <LoginForm />
      <AuthFooter
        text="Don't have an account?"
        linkText="Sign up"
        to="/register"
      />
    </AuthCard>
  );
};

export default Login;
