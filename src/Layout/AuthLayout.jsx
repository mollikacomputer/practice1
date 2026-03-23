import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className=" rounded-lg shadow-2xl"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
