import { useForm } from "react-hook-form";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-zinc-800 max-w-lg p-8 rounded-lg mt-20 mx-auto">
      <form
        onSubmit={handleSubmit((values) => {
          console.log(values);
        })}
      >
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg mt-2"
          placeholder="Username"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg mt-2"
          placeholder="Email"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg mt-2"
          placeholder="Password"
        />
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
