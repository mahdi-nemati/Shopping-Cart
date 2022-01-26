import { toast } from "react-toastify";

const MyToast = ({ name, message }) => {
  return toast.error(`${name} ${message}`);
};

export default MyToast;
