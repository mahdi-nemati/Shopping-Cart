import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

const Checkout = () => {
  const auth = useAuth();
  return (
    <>
      {auth ? (
        <div>
          <p>{auth.name}</p>
          <p>{auth.email}</p>
          <p>{auth.phoneNumber}</p>
        </div>
      ) : (
        <Link to="/login">Please Login !</Link>
      )}
    </>
  );
};

export default Checkout;
