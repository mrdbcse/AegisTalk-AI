import { useForm } from "react-hook-form";
import { loginSchema, type LoginFormData } from "../../schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { USER_TYPES } from "../../constants/userTypes";
import { inputBase, selectBase } from "../../styles/formStyles";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data: LoginFormData) =>
    console.log("Login Form Data:", data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-xl shadow"
    >
      <input
        {...register("email")}
        placeholder="Email"
        className={`${inputBase} ${
          errors.email ? "border-red-500 focus:ring-red-500" : ""
        }`}
      />
      <input
        {...register("password")}
        placeholder="Password"
        type="password"
        className={inputBase}
      />

      <select {...register("userType")} className={selectBase}>
        <option value="">Select User Type</option>
        {USER_TYPES.map((ut) => (
          <option key={ut} value={ut}>
            {ut}
          </option>
        ))}
      </select>

      <label className="flex items-center gap-2 py-2 text-sm">
        <input type="checkbox" {...register("rememberMe")} />
        Remember Me
      </label>

      <button
        disabled={isSubmitting}
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-800 disabled:opacity-50"
      >
        Sign In
      </button>

      {Object.values(errors).map((e, i) => (
        <p key={i} className="text-sm text-red-600">
          {e.message}
        </p>
      ))}
    </form>
  );
};

export default LoginForm;
