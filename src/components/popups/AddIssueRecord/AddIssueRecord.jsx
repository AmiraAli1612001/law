import React from "react";

const AddIssueRecord = () => {
  const signUpForm = useForm();
  const {
    register,
    handleSubmit,
    control,
    formState,
    setError,
    reset,
    trigger,
  } = signUpForm;
  let { errors, isSubmitted } = formState;
  async function handleSubmitSignUp(formData, e) {
    setGeneralError("");
    dispatch(openLoader("جاري التسجيل"));

    console.log(formData);
    const result = await fetchRegisterUser({
      ...formData,
      email: formData.signUpEmail,
      password: formData.signUpPassword,
      confirmPassword: formData.signUpConfirmPassword,
      // nationality: JSON.parse(formData.nationality.nationality_ar)
      // .nationality_ar,
    });
    console.log(result);
    if (result.errors) {
      scrollToTop(signUpContainer.current);
      console.log("errrrr");
      console.log(Object.entries(result.errors));
      Object.entries(result.errors).forEach(([key, value]) => {
        if (key == "$.birthDate") {
          setError("birthDate", { type: "manual", message: [...value] });
        } else if (key == "Password") {
          setError("signUpPassword", { type: "manual", message: [...value] });
        } else if (key == "Idnumber") {
          setError("idNumber", { type: "manual", message: [...value] });
        } else if (key == "ConfirmPassword") {
          setError("confirmPassword", { type: "manual", message: [...value] });
        } else {
          setError(`${key}`, { type: "manual", message: [...value] });
        }
      });
    } else if (result.message) {
      console.log(result);
      const signInResult = await fetchSignIn({
        email: formData.signUpEmail,
        password: formData.signUpPassword,
      });
      console.log(signInResult);
      dispatch(toggleUpdateInfo(signInResult));
      dispatch(toggleSignedIn({ userData: result, days: 30 }));
      toast(result.message);
      dispatch(reserNavList());
      // dispatch(toggleSignIn());
    } else {
      if (result.error) {
        setGeneralError(result.error);
      } else {
        console.log(result);
        // setGeneralError(result);
      }
    }
    console.log(errors);
    console.log(result);
    dispatch(closeLoader());
  }
  return (
    <div className="">
      <form
        method="POST"
        onSubmit={handleSubmit(handleSubmitSignUp)}
        action=""
        noValidate
        id="signUpForm"
      >
        {/* name arabic ! arabicName*/}
        <div className="input">
          <label htmlFor="">الاسم الرباعي بالعربي*</label>
          <input
            type="text"
            name=""
            id="arabicName"
            {...register("arabicName", {
              required: "يجب كتابة الاسم الرباعي بالعربي",
            })}
            placeholder="اكتب اسمك رباعي"
          />
          <p className="input-error">{errors.arabicName?.message}</p>
        </div>
      </form>
    </div>
  );
};

export default AddIssueRecord;
