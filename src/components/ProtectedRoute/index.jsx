import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoginState } from "../../recoil/auth";

function ProtectedRoute() {
  const isLogin = useRecoilValue(isLoginState);

  if (!isLogin) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
