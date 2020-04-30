import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

export default ({ type = "edit", user = {}, onSubmit, loading }) => {
  // use react-hook-from to build the form
  // https://react-hook-form.com
  const { register, handleSubmit, errors } = useForm();

  // react-hook-form gives us the data extracted from the form
  // We want add the userId before sending the request
  const submit = useCallback(
    data => {
      // user.id is not part of the form. Add it now in case of an edit
      const nextUser = Object.assign({}, user, data);
      onSubmit(nextUser);
    },
    [onSubmit, user]
  );

  return (
    <>
      <h2>{type === "edit" ? "Edit" : "Create"} a user</h2>
      <form>
        <div>
          <b>Name: </b>
          <input
            name="name"
            defaultValue={user.name}
            ref={register({ required: true })}
          />
          {errors.name && <span> This field is required</span>}
        </div>

        <div>
          <b>Firstname: </b>
          <input
            name="firstname"
            defaultValue={user.firstname}
            ref={register}
          />
        </div>

        <SubmitButton
          label="Submit"
          loading={loading}
          onClick={handleSubmit(submit)}
        />
      </form>
    </>
  );
};

const SubmitButton = ({ loading, label='Submit', onClick }) => {
  const buttonLabel = loading ? 'Loading ...' : label;
  return (
    <button onClick={onClick}>{buttonLabel}</button>
  )
}
