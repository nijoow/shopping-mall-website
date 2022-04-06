import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../_action/user_action";
import { useNavigate } from "react-router-dom";
import { RootState } from "../_reducers";
export default function (
  SpecificComponent: any,
  option: boolean | null = false,
  adminRoute = null
) {
  function AuthenticationCheck() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector(
      (state: RootState) => state.user_reducer.userData
    );

    useEffect(() => {
      if (!userData.isAuth) {
        if (option) {
          navigate("/login");
        }
      } else {
        if (adminRoute && !userData.isAdmin) {
          navigate("/");
        } else {
          if (!option) {
            navigate("/");
          }
        }
      }
      dispatch(auth());
    }, [userData]);

    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
