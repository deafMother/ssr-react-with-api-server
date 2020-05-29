// this is making of the axios instance

export const FET_USERS = "fetch_users";
export const CHECK_USERS_LOGIN = "check_user_login";

export const fetchUsers = () => async (dispatch, getSate, api) => {
  const res = await api.get("/users");

  dispatch({
    type: FET_USERS,
    payload: res,
  });
};

export const checkLoginStatus = () => async (dispatch, getSate, api) => {
  try {
    const res = await api.get("/user/login");
    // console.log(res);
    dispatch({
      type: CHECK_USERS_LOGIN,
      payload: true,
    });
  } catch (error) {
    // console.log(error.response.data.message);
    dispatch({
      type: CHECK_USERS_LOGIN,
      payload: false,
    });
  }
};

export const login = (formData) => async (dispatch, getSate, api) => {
  try {
    const res = await api.post("/user/login", formData);
    // console.log(res);
    dispatch({
      type: CHECK_USERS_LOGIN,
      payload: true,
    });
  } catch (error) {
    // console.log(error.response.data.message);
    dispatch({
      type: CHECK_USERS_LOGIN,
      payload: false,
    });
  }
};

export const logout = () => async (dispatch, getSate, api) => {
  try {
    const res = await api.get("user/logout");
    console.log(res);
    dispatch({
      type: CHECK_USERS_LOGIN,
      payload: false,
    });
  } catch (error) {
    // console.log(error.response.data.message);
    dispatch({
      type: CHECK_USERS_LOGIN,
      payload: true,
    });
  }
};
