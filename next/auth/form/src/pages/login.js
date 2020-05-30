import { useLoginError, useOnekiRouter, useLoginService } from "onekijs";
import React from "react";
import ErrorNotification from "../component/notification/ErrorNotification";
import { useForm } from "react-hook-form";
import Link from "next/link";

const LoginPage = () => {
  const router = useOnekiRouter();
  const [error, loading, submit] = useLoginService();

  // use react-hook-from to build the form (https://react-hook-form.com)
  const { register, handleSubmit, errors } = useForm();

  return (
    <form>
      <div className="flex items-center justify-center h-screen flex-col">
        {error && <ErrorNotification error={error} />}

        <div className="flex items-stretch bg-gray-100 rounded-lg w-2/4">
          <div className="text-white p-10 w-full">
            <p className="text-xl text-gray-700 font-bold">
              <img
                className="h-8 w-8 cursor-pointer inline-block"
                src="/logo.svg"
                alt=""
              />
              <span className="ml-4">Login</span>
            </p>
            <p className="text-base text-gray-500 mt-4">
              Basic username / password login
            </p>
            <div className="mt-6">
              <div className="max-w-4xl mx-auto">
                <label className="block">
                  <span className="block font-medium text-sm text-gray-900 leading-tight">
                    Username
                  </span>
                  <div className="mt-2">
                    <input
                      name="username"
                      className="text-black block w-full border border-gray-300 rounded-lg px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      ref={register}
                    />
                  </div>
                </label>
                <label className="block mt-5">
                  <span className="block font-medium text-sm text-gray-900 leading-tight">
                    Password
                  </span>
                  <div className="mt-2">
                    <input
                      name="password"
                      type="password"
                      className="text-black block w-full border border-gray-300 rounded-lg px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      ref={register}
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className="px-0 py-5 flex justify-end">
              <Link href="/">
                <a className="text-black mt-2">Cancel</a>
              </Link>
              <SubmitButton
                label="Submit"
                loading={false}
                onClick={handleSubmit(submit)}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const SubmitButton = ({ loading, label = "Submit", onClick }) => {
  const buttonLabel = loading ? "Loading ..." : label;
  return (
    <button
      type="button"
      className="ml-4 px-6 py-3 leading-none font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
      onClick={() => {
        if (!loading) onClick();
      }}
    >
      {buttonLabel}
    </button>
  );
};

export default LoginPage;
