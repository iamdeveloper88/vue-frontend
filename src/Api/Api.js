import axios from "axios";
import router from "./../router/index";

export default class ApiClass {
  //   static baseUrl = "https://status.lbmdemo.com/backend/public/api/";
  // static baseUrl = "http://13.233.5.19/backend/public/api/";
  static baseUrl = "http://192.168.1.14:80/api/";

  //******************************** Post api ********************************************//

  static postRequest(
    apiUrl,
    isToken = true,
    formData = null,
    headers = null,
    params = null
  ) {
    return axios
      .post(
        this.baseUrl + apiUrl,
        formData,
        this.config(isToken, headers, params)
      )
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unAuthenticateRedirect();
        }
      });
  }

  //******************************** Get api ********************************************//

  static getRequest(apiUrl, isToken = true, headers = null, params = null) {
    return axios.get(this.baseUrl + apiUrl, this.config(isToken, headers, params)).then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unAuthenticateRedirect();
        }
      });
  }

  //********************************* Update api *********************************************** */

  //******************** if form data with image ************************* */

  static RealUpdateFormRequest(
    apiUrl,
    isToken = true,
    formData = null,
    headers = null,
    params = null
  ) {
    var baseParam = { _method: "PUT" };
    if (params != null) {
      //   var baseParam = $.extend(params, baseParam);
      //   var baseParam = {params, baseParam};
    //   var baseParam = `${params}, ${baseParam}`;
      baseParam = {...params, ...baseParam};
    }
    return axios
      .post(
        this.baseUrl + apiUrl,
        formData,
        this.config(isToken, headers, baseParam)
      )
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unAuthenticateRedirect();
        }
      });
  }

  static updateFormRequest(
    apiUrl,
    isToken = true,
    formData = null,
    headers = null,
    params = null
  ) {
    return axios
      .post(
        this.baseUrl + apiUrl,
        formData,
        this.config(isToken, headers, params)
      )
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unAuthenticateRedirect();
        }
      });
  }
  //******************** form data in json format ************************* */

  static RealUpdateRequest(
    apiUrl,
    isToken = true,
    formData = null,
    headers = null,
    params = null
  ) {
    return axios
      .put(
        this.baseUrl + apiUrl,
        formData,
        this.config(isToken, headers, params)
      )
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unAuthenticateRedirect();
        }
      });
  }

  static updateRequest(
    apiUrl,
    isToken = true,
    formData = null,
    headers = null,
    params = null
  ) {
    return axios
      .post(
        this.baseUrl + apiUrl,
        formData,
        this.config(isToken, headers, params)
      )
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unAuthenticateRedirect();
        }
      });
  }

  //************************************ Delete api **************************************************** */

  static RealDeleteRequest(
    apiUrl,
    isToken = true,
    headers = null,
    params = null
  ) {
    return axios
      .delete(this.baseUrl + apiUrl, this.config(isToken, headers, params))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unAuthenticateRedirect();
        }
      });
  }

  static deleteRequest(apiUrl, isToken = true, headers = null, params = null) {
    return axios
      .post(this.baseUrl + apiUrl, null, this.config(isToken, headers, params))
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.response.status == 401) {
          this.unAuthenticateRedirect();
        }
      });
  }

  //******************************** Configurations of header and parameters ******************************** */

  static config(isToken = true, headers = null, parameters = null) {
    var merge = {};
    var defaultHeaders = {
      Accept: "application/json",
    };
    if (isToken) {
      var token = { Authorization: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).token };
      //   var merge = $.extend(defaultHeaders, token);
      //   merge = `${defaultHeaders}, ${token}`;
      merge = { ...defaultHeaders, ...headers, ...token };
    } else {
        // var merge = $.extend(defaultHeaders, headers);
        // merge = `${defaultHeaders}, ${headers}`
        merge = { ...defaultHeaders, ...headers };
    }
    return {
      headers: merge,
      params: parameters,
    };
  }

  //********************************** if the unAuthentication Error..... *************************************** */

  static unAuthenticateRedirect() {
    localStorage.clear();
    router.push("/login");
  }
}
