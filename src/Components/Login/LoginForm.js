import Input from "../../common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
const LoginForm = () => {
  // set initail
  const initialValues = {
    email: "",
    password: "",
  };
  // set submit function
  const onSubmit = (values) => {
    console.log(values);
    // axios.post("http://localhost:3001/users", userInfo);
  };
  // set validate
  const validationSchema = yup.object({
    email: yup.string().email("email is invalid").required("enter your email"),
    password: yup
      .string()
      .required("enter your password")
      .min(8, "password must be 8 charackter at least"),
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
        {/* email */}
        <Input formik={formik} name="email" />
        {/* password */}
        <Input formik={formik} name="password" type="password" />
        {/* submit button */}
        <button
          className={formik.isValid ? "button" : ""}
          disabled={!formik.isValid}
          type="submit"
        >
       Login
        </button>
        <Link to="/signup">
        <p>Not Signup yet ? </p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
