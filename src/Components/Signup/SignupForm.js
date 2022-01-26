import Input from "../../common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signupUser } from "../../services/SignupService";
import MyToast from "../../common/MyToast";
import { toast } from "react-toastify";
const SignupForm = () => {
  const [error, setError] = useState(null);
  // set initail
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",
  };
  // set submit function
  const onSubmit = async (values) => {
    const userData = {
      name: values.name,
      email: values.email,
      phoneNumber: values.phone,
      password: values.password,
    };
    try {
      const { data } = await signupUser(userData);
      console.log(data);
    } catch (error) {
      if (error.response && error.response.data.message) {
        MyToast( "", error.response.data.message);
        // toast.error(`${error.response.data.message}`)
      }
    }
  };
  // set validate
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("enter your name")
      .min(6, "name must be 6 charackter at least"),
    email: yup.string().email("email is invalid").required("enter your email"),
    password: yup
      .string()
      .required("enter your password")
      .min(8, "password must be 8 charackter at least"),
    phone: yup
      .string()
      .required("enter your phone")
      .matches(/^[0-9]{11}$/, "phone number is invalid"),
    passwordConfirm: yup
      .string()
      .required("confrim your password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  // formik
  const formik = useFormik({
    validateOnMount: true,
    initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* name */}
        <Input formik={formik} name="name" />
        {/* email */}
        <Input formik={formik} name="email" />
        {/* phone */}
        <Input formik={formik} name="phone" type="tel" />
        {/* password */}
        <Input formik={formik} name="password" type="password" />
        {/* passwordConfirm */}
        <Input formik={formik} name="passwordConfirm" type="password" />
        {/* submit button */}
        <button
          className={formik.isValid ? "button" : ""}
          disabled={!formik.isValid}
          type="submit"
        >
          Signup
        </button>
        {error && <p>{error}</p>}
        <Link to="/login">
          <p>Already Login ?</p>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
