import React from "react";
import { useForm } from "react-hook-form";


function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onLogin = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="bg-zinc-800 max-w-lg p-8 rounded-lg mt-20 mx-auto flex">
      <h1 className="font-bold text-purple-700">LogIn</h1>
      <form onSubmit={onLogin}>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg mt-2"
          placeholder="Email"
        />
        {errors.email && (
          <p className="w-full bg-red-500 text-white p-2 rounded-lg mt-2">
            Email is required
          </p>
        )}
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg mt-2"
          placeholder="Password"
        />
        {errors.password && (
          <p className="w-full bg-red-500 text-white p-2 rounded-lg mt-2">
            Password is required
          </p>
        )}
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

export default LoginPage;
