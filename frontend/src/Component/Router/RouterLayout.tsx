import { Outlet } from "react-router";

const RouterLayout = () => {
  return (
    <div>
      <div className="min-h-screen bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default RouterLayout;
