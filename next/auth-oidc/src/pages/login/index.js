import React from "react";
import Link from "next/link";
import { useOnekiRouter, toRelativeUrl, withLayout } from "onekijs";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { FaAmazon } from "react-icons/fa";
import ItsmeIcon from "../../component/icon/ItsmeIcon";

const LoginPage = () => {
  const router = useOnekiRouter();
  if (typeof window !== "undefined") {
    sessionStorage.setItem(
      "onekijs.from",
      toRelativeUrl(router.previousLocation)
    );
  }

  // use react-hook-from to build the form
  // https://react-hook-form.com
  const { register, handleSubmit, errors } = useForm();

  return (
    <form>
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-stretch bg-gray-100 rounded-lg">
          <div className="text-white p-10">
            <p className="text-xl text-gray-700 font-bold">
              <Link href="/">
                <img
                  className="h-8 w-8 cursor-pointer inline-block"
                  src="/logo.svg"
                  alt=""
                />
              </Link>
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
                      className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      ref={register({ required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-600">
                        {" "}
                        This field is required
                      </span>
                    )}
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
                      className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                      ref={register({ required: true })}
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className="px-0 py-5 flex justify-end">
              <SubmitButton
                label="Amplify login"
                loading={false}
                onClick={handleSubmit((data) => {
                  console.log(data);
                })}
              />
              <SubmitButton
                label="Firebase login"
                loading={false}
                onClick={handleSubmit((data) => {
                  console.log(data);
                })}
              />
              <SubmitButton
                label="Basic login"
                loading={false}
                onClick={handleSubmit((data) => {
                  console.log(data);
                })}
              />
            </div>
          </div>
          <div className="content-center border-l-2 border-gray-200 pt-24 p-5">
            <IdpLoginButton
              name="Google"
              href="/login/google"
              className="bg-white"
              Icon={FcGoogle}
            />
            <IdpLoginButton
              name="Cognito"
              href="/login/cognito"
              className="bg-orange-200"
              Icon={FaAmazon}
            />
            <IdpLoginButton
              name="Itsme"
              href="/login/itsme"
              style={{ backgroundColor: '#e3e8e1' }}
              Icon={ItsmeIcon}
            />
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

const IdpLoginButton = ({
  Icon,
  name,
  href = "",
  className = "",
  style = {},
}) => {
  const cls =
    "w-full active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs " +
    className;
  return (
    <div className="mt-5">
      <Link href={href}>
        <button className={cls} style={style} type="button">
          <Icon style={{width: '2em', height: '2em'}}/> <span className="pl-2">Login with {name}</span>
        </button>
      </Link>
    </div>
  );
};

export default LoginPage;
