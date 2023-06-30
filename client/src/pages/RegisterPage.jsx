import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const onRegister = handleSubmit(async (values) => {
    signUp(values);
  });

  return (
    <div className="bg-zinc-800 max-w-lg p-8 rounded-lg mt-20 mx-auto">
      {
        registerErrors.map((error, i) => (
          <div className="w-full bg-red-500 text-white p-2 rounded-lg mt-2" key={i}>{error}</div>
        ))
      }
      <form onSubmit={onRegister}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg mt-2"
          placeholder="Username"
        />
        {
          errors.username && <p className="w-full bg-red-500 text-white p-2 rounded-lg mt-2">Username is required</p>
        }
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg mt-2"
          placeholder="Email"
          />
          {
            errors.email && <p className="w-full bg-red-500 text-white p-2 rounded-lg mt-2">Email is required</p>
          }
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg mt-2"
          placeholder="Password"
          />
          {
            errors.password && <p className="w-full bg-red-500 text-white p-2 rounded-lg mt-2">Password is required</p>
          }
        <button
          type="submit"
          className="bg-purple-700 text-white font-bold p-3 rounded-lg mt-2"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
