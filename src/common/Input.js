const Input = ({ name, type = "text", formik, place }) => {
  return (
    <div class="flex flex-col  w-full items-center ">
      <input
        type={type}
        name={name}
        placeholder={place}
        {...formik.getFieldProps(name)}
        class="border border-teal-300  w-9/12
          text-base sm:text-lg md:text-xl caret-teal-300 rounded-md pl-1 outline-none 
          focus:border-2 focus:border-teal-300 focus:w-11/12 transition-all "
      />
      <div class=" mt-2 mb-2 text-sm text-rose-800
       flex justify-start sm:text-base lg:text-lg">
        {formik.errors[name] && formik.touched[name] && (
          <span>{formik.errors[name]}</span>
        )}
      </div>
    </div>
  );
};

export default Input;
