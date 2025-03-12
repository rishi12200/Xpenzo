import { auth, createUserWithEmailAndPassword } from "../firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordError = validatePassword(user.password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const validatePassword = (password) => {
    const minLength = /.{6,}/;
    const uppercase = /[A-Z]/;
    const number = /[0-9]/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (!minLength.test(password))
      return "Password must be at least 8 characters long.";
    if (!uppercase.test(password))
      return "Password must include at least one uppercase letter.";
    if (!number.test(password))
      return "Password must include at least one number.";
    if (!specialChar.test(password))
      return "Password must include at least one special character.";

    return null;
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Sign Up
        </h2>
        <p className="mt-5 text-lg/8 text-gray-600">
          Join us for a better tracking experience of your expenses.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid   gap-y-6 sm:grid-cols-1">
          <div>
            <label
              htmlFor="fName"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                value={user.name}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={user.email}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Password
            </label>
            <div className="mt-2.5">
              <input
                id="password"
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
                autoComplete="password"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              <p className="text-sm text-gray-500 mt-1">
                Must be at least 6 characters, include an uppercase letter, a
                number, and a special character.
              </p>
            </div>
          </div>
        </div>
        {error && (
          <p className="text-red-600 text-sm mt-2">
            Email already in use. Try again with a different email.
          </p>
        )}{" "}
        <div className="mt-10 flex flex-row justify-between h-12">
          <Link
            to="/home"
            className="flex justify-center items-center w-40 rounded-md bg-blue-500 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-700 cursor-pointer"
          >
            Back to Home
          </Link>
          <button
            type="submit"
            className="flex justify-center items-center w-40 rounded-md bg-blue-500 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-700 cursor-pointer"
          >
            Here we Go !
          </button>
        </div>
      </form>
    </div>
  );
}

/*



  
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Sign Up
        </h2>
        <p className="mt-5 text-lg text-gray-600">
          Join us for a better tracking experience of your expenses.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid gap-y-6 sm:grid-cols-1">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-900"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                value={user.name}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={user.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-900"
            >
              Password
            </label>
            <div className="mt-2.5">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={user.password}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
              <p className="text-sm text-gray-500 mt-1">
                Must be at least 8 characters, include an uppercase letter, a
                number, and a special character.
              </p>
            </div>
          </div>
        </div>
        {error && (
          <p className="text-red-600 text-sm mt-2">
            Email already in use. Try again with a different email.
          </p>
        )}{" "}

        <div className="mt-10 flex flex-row justify-between h-12">
          <Link
            to="/home"
            className="flex justify-center items-center w-40 rounded-md bg-blue-500 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-700 cursor-pointer"
          >
            Back to Home
          </Link>
          <button
            type="submit"
            className="flex justify-center items-center w-40 rounded-md bg-blue-500 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-700 cursor-pointer"
          >
            Here we Go!
          </button>
        </div>
      </form>
    </div>
  );
}
*/
