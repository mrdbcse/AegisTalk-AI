import { useForm, type SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { USER_TYPES } from "../../constants/userTypes";
import { inputBase, selectBase } from "../../styles/formStyles";
import {
  registerSchema,
  type RegisterFormData,
} from "./../../schema/registerSchema";

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormData> = async (
    data: RegisterFormData
  ) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log("Register Form Data: ", data);
      reset();
      navigate("/");
    } catch (error) {
      console.error("Registration failed: ", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-xl shadow"
    >
      <div className="grid grid-cols-2 gap-4">
        <input
          className={`${inputBase} ${
            errors.firstName ? "border-red-500 focus:ring-red-500" : ""
          }`}
          {...register("firstName")}
          placeholder="First Name"
          type="text"
        />
        <input
          className={`${inputBase} ${
            errors.lastName ? "border-red-500 focus:ring-red-500" : ""
          }`}
          {...register("lastName")}
          placeholder="Last Name"
          type="text"
        />
      </div>
      <input
        className={`${inputBase} ${
          errors.email ? "border-red-500 focus:ring-red-500" : ""
        }`}
        {...register("email")}
        placeholder="Email"
        type="text"
      />
      <input
        className={`${inputBase} ${
          errors.organization ? "border-red-500 focus:ring-red-500" : ""
        }`}
        {...register("organization")}
        placeholder="Organization"
        type="text"
      />
      <select className={selectBase} {...register("userType")}>
        <option value="">Select User Type</option>
        {USER_TYPES.map((ut) => (
          <option key={ut} value={ut}>
            {ut}
          </option>
        ))}
      </select>
      <input
        className={`${inputBase} ${
          errors.password ? "border-red-500 focus:ring-red-500" : ""
        }`}
        {...register("password")}
        placeholder="Password"
        type="password"
      />
      <input
        className={`${inputBase} ${
          errors.confirmPassword ? "border-red-500 focus:ring-red-500" : ""
        }`}
        {...register("confirmPassword")}
        placeholder="Confirm Password"
        type="password"
      />
      <button
        disabled={isSubmitting}
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-800 disabled:opacity-50"
      >
        {isSubmitting ? "Creating account..." : "Sign Up"}
      </button>
      {Object.values(errors).map((e, i) => (
        <li className="text-sm text-red-600 mx-5" key={i}>
          {e.message}
        </li>
      ))}
    </form>
  );
};

export default RegisterForm;
