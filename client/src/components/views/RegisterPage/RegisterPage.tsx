import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../_action/user_action";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../_reducers";
import Auth from "../../../hoc/auth";
function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginSuccess = useSelector(
    (state: RootState) => state.user_reducer.loginSuccess
  );
  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    if (name.length > 50) {
      return alert("이름은 50글자 이하여야 합니다");
    }
    if (password.length < 6) {
      return alert("비밀번호는 6글자 이상이어야 합니다");
    }
    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다");
    }
    dispatch(registerUser({ name: name, email: email, password: password }));
    if (loginSuccess.loginSuccess) {
      navigate("/login");
    } else {
      alert("Error");
    }
  };
  return (
    <div className="min-h-screen  flex items-center justify-center  px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create Your Account
          </h2>
          {/* <p className="mt-2 text-center text-sm text-gray-600">Or</p> */}
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmitHandler}>
          <input type="hidden" name="remember" value="true" />
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="name"
              autoComplete="on"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="sr-only">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-400 group-hover:text-indigo-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth(RegisterPage, false);
