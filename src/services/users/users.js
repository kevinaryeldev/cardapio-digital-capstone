import instance from "../index";

export async function loginUser(data) {
  const response = await instance
    .post("/login", data)
    .then((response) => {
      window.localStorage.setItem(
        "@SmartMenu:token",
        JSON.stringify(response.data.accessToken)
      );
      window.localStorage.setItem(
        "@SmartMenu:id",
        JSON.stringify(response.data.user.id)
      );

      return true;
    })
    .catch((error) => {
      return false;
    });

  return response;
}

export async function signUpUser(data) {
  const response = await instance
    .post("/register", data)
    .then((response) => {
      window.localStorage.setItem(
        "@SmartMenu:token",
        JSON.stringify(response.data.accessToken)
      );
      window.localStorage.setItem(
        "@SmartMenu:id",
        JSON.stringify(response.data.user.id)
      );

      return true;
    })
    .catch((error) => {
      return false;
    });

  return response;
}
