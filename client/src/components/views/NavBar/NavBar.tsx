import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../_reducers";
function NavBar() {
  const navigate = useNavigate();
  const userData = useSelector(
    (state: RootState) => state.user_reducer.userData
  );
  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      if (response.data.success) navigate("/login");
    });
  };
  return (
    <div className="absolute top-0 w-full left-0 bg-indigo-500 text-white py-5 font-bold">
      <div className="flex items-center w-4/5 m-auto ">
        <Link to="/">
          <div className="flex-[1_1_0] px-20 ">LOGO</div>
        </Link>
        <ul className="flex-[8_1_0] flex space-x-10">
          <li>Category1</li>
          <li>Category2</li>
        </ul>
        <ul className="flex-[1_1_0] flex space-x-10 px-10">
          {!userData.isAuth ? (
            <>
              <Link to="/login">
                <li>Login</li>
              </Link>
              <Link to="/register">
                <li>Register</li>
              </Link>
            </>
          ) : (
            <>
              <Link to="/product/upload">
                <li>Upload</li>
              </Link>
              <Link to="/">
                <li onClick={onClickHandler}>Logout</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
