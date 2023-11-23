import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ButtonSub() {
  const [subscribe, setSubscribe] = useState(false);

  return (
    <>
      <button className="m-20"
        onClick={() => {
          toast(subscribe ? "Ya esta" : "suscribe");
          setSubscribe(!subscribe);
        }}
      >
        {subscribe ? "Ya esta" : "suscribe"}
      </button>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default ButtonSub;
