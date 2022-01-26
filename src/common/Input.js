const Input = ({ name, type = "text", formik }) => {
    return (
      <div>
        <input
          type={type}
          name={name}
          placeholder={name}
          {...formik.getFieldProps(name)}
        />
        {formik.errors[name] && formik.touched[name] && (
          <span className="error">{formik.errors[name]}</span>
        )}
      </div>
    );
  };
  
  export default Input;
  