import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl text-green-500 font-extrabold">Registration</h2>
      <fieldset className="fieldset">
        <label className="label">Email</label>
        <input
          type="email"
          {...register("email", {
            required: true,
          })}
          className="input"
          placeholder="Email"
        />
        {errors.email?.type === "required" && (
          <p className="text-red-500">email is required</p>
        )}
        <label className="label">Password</label>
        <input
          type="password"
          {...register("password", {
            required: true,
            maxLength: 20,
            minLength: 6,
          })}
          className="input"
          placeholder="Password"
        />
        {errors.password?.type === "required" && (
          <p className="text-red-500">password is required</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-500">password must be at least 6 character</p>
        )}
        {errors.password?.type === "maxLength" && (
          <p className="text-red-500">
            password is no longer 20 character limit{" "}
          </p>
        )}
        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>
        <button className="btn btn-neutral mt-4">Register</button>
        <p>Have an account</p>
        <span className="text-yellow-900">
          <Link to="/login">Login</Link>
        </span>
      </fieldset>
    </form>
  );
};

export default Register;
