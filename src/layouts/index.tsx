import { Outlet } from "react-router-dom";

const AppLayout:React.FC = () => {
  return (
    <>
      <div>
        {/* Write Side bar & Top Code here. */}
      </div>
      <Outlet />
    </>
  );
};

export default AppLayout;
