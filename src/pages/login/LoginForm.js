import Input from "../../core/shared/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LoginForm = () => {
  const navigate = useNavigate();
  // set initail
  const initialValues = {
    email: "",
    password: "",
  };
  // set submit function
  const onSubmit = async (values) => {
    // const { email, password } = values;
    // const userDate = {
    //   email,
    //   password,
    // };
    try {
      // FETCHING TO FAKE DATA BASE
      
      // const { data } = await LoginUser(userDate);
      // setAuth(data);
      // localStorage.setItem("authState", JSON.stringify(data));
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
    <main class="flex justify-center  h-auto">
      <section class="flex justify-center text-teal-800 ">
        <div
          class="mt-20 sm:mt-24 md:mt-32 flex 
          justify-center bg-teal-400 w-72 p-7 rounded-md 
           sm:w-96 "
        >
          <form
            onSubmit={formik.handleSubmit}
            class="flex flex-col items-center w-full"
          >
            <p class="text-lg mb-3 sm:text-xl md:text-2xl lg:text-3xl lg:mb-5">
              Welcome Back !
            </p>
            {/* email */}
            <Input formik={formik} name="email" place="Email" />
            {/* password */}
            <Input
              formik={formik}
              name="password"
              type="password"
              place="Password"
            />
            {/* submit button */}
            <button
              className={formik.isValid ? "btn" : ""}
              disabled={!formik.isValid}
              type="submit"
            >
              Login
            </button>
            <Link to="/signup">
              <p class="mt-3 text-sm sm:text-base lg:text-lg">
                Not Signup yet ? let's go{" "}
              </p>
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginForm;
