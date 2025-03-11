import { auth, signInWithEmailAndPassword } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage:
            "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1567665.png&f=1&nofb=1&ipt=f7f3696a41a307da41fdd458c7794a490b03ea1901cfa959bae8be827ad8d307&ipo=images')",
        }}
      >
        <div className="bg-gray-200 p-1 rounded-lg shadow-lg w-96 drop-shadow-2xl">
          <div className="flex min-h-full flex-1 flex-col justify-center px-1 py-12 lg:px-5">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
              <img
                alt="Xpenzo logo"
                src="https://images.seeklogo.com/logo-png/45/2/experience-points-xp-logo-png_seeklogo-452660.png"
                className="mx-auto h-12 w-12"
              />
              <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form method="POST" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-blue-500 hover:text-blue-700"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <p className="mt-10 text-center text-sm/6 text-black">
                Not a member?{" "}
                <a
                  href="/newUser"
                  className="font-semibold text-blue-500 hover:text-blue-700"
                >
                  Create an account.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
