import ApiClass from "./../../Api/Api";
// import router from "./../../router/index";
// import Vue from "vue";

const Login = async (formData) => {
  const result = await ApiClass.postRequest("login", false, formData);
  //   if (result.data.status_code == "1") {
  return {
    message: result.data.message,
    email: formData.email,
    userType: result.data.data,
    status_code: result.data.status_code,
  };
  // Vue.prototype.$vs.notification({
  //   position: "top-right",
  //   progress: "auto",
  //   color: "success",
  //   title: "Login Successful",
  //   text: `${result.data.message}`,
  // });
  // return router.push({
  //   name: "VerifyOtp",
  //   params: {
  //     email: formData.email,
  //     type: "login",
  //     userType: result.data.data,
  //   },
  // });
};

export default Login;
