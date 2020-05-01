import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

export default ({ type = "edit", user = {}, onSubmit, loading }) => {
  // use react-hook-from to build the form
  // https://react-hook-form.com
  const { register, handleSubmit, errors } = useForm();

  // react-hook-form gives us the data extracted from the form
  // We want add the userId before sending the request
  const submit = useCallback(
    (data) => {
      // user.id is not part of the form. Add it now in case of an edit
      const nextUser = Object.assign({}, user, data);
      onSubmit(nextUser);
    },
    [onSubmit, user]
  );
  /*  <div>
        <div className="pt-6 pb-8 sm:pt-8">
          <p className="text-sm text-gray-700">
            Set your login preferences, help us personalize your experience and
            make big account changes here.
          </p>
          <div className="mt-6">
            <div className="max-w-4xl mx-auto">
              <label className="block">
                <span className="block font-medium text-sm text-gray-900 leading-tight">
                  Email address
                </span>
                <div className="mt-2">
                  <input
                    type="email"
                    className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                    placeholder="johndoe@example.com"
                  />
                </div>
              </label>
              <label className="block mt-5">
                <span className="block font-medium text-sm text-gray-900 leading-tight">
                  Country/region
                </span>
                <div className="mt-2">
                  <input
                    className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                    placeholder="Canada"
                  />
                </div>
              </label>
              <label className="block mt-5">
                <span className="block font-medium text-sm text-gray-900 leading-tight">
                  Language
                </span>
                <div className="mt-2">
                  <input
                    className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                    placeholder="English"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 px-0 py-5 flex justify-end">
          <button
            type="button"
            className="px-4 py-3 leading-none font-semibold rounded-lg bg-gray-300 text-gray-900 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="button"
            className="ml-4 px-6 py-3 leading-none font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
          >
            Save
          </button>
        </div>
      </div>*/

  return (
    <form>
      <div>
        <div className="pt-6 pb-8 sm:pt-8">
          <p className="text-xl text-gray-700">
            {type === "edit" ? "Edit an existing user" : "Create a new user"}
          </p>
          <div className="mt-6">
            <div className="max-w-4xl mx-auto">
              <label className="block">
                <span className="block font-medium text-sm text-gray-900 leading-tight">
                  Name
                </span>
                <div className="mt-2">
                  <input
                    name="name"
                    className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                    defaultValue={user.name}
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
                  First name
                </span>
                <div className="mt-2">
                  <input
                    name="firstname"
                    className="block w-full border border-gray-300 rounded-lg bg-gray-100 px-3 py-2 leading-tight focus:outline-none focus:border-gray-600 focus:bg-white"
                    defaultValue={user.firstname}
                    ref={register}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 px-0 py-5 flex justify-end">
          <SubmitButton
            label="Submit"
            loading={loading}
            onClick={handleSubmit(submit)}
          />
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
      onClick={() => {if (!loading) onClick()}}
    >
      {buttonLabel}
    </button>
  );
};
