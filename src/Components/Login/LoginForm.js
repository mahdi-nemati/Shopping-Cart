import Input from "../../common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../services/LoginService";
import { toast } from "react-toastify";
import { useAuthAction } from "../../Providers/AuthProvider";
const LoginForm = () => {
  const setAuth = useAuthAction();
  const navigate = useNavigate();
  // set initail
  const initialValues = {
    email: "",
    password: "",
  };
  // set submit function
  const onSubmit = async (values) => {
    const { email, password } = values;
    const userDate = {
      email,
      password,
    };
    try {
      const { data } = await LoginUser(userDate);
      setAuth(data);
      localStorage.setItem("authState", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(`${error.response.data.message}`);
      }
    }
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
