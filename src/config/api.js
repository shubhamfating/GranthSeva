import axios from "axios";
const apiLocalUrl = "https://jsonplaceholder.typicode.com/";

export const  apiCall = (method, apiName, parms) => {
  let responseType = "",
    responce = "";
  if (method === "get") {
    axios
      .get(apiLocalUrl + apiName, parms)
      .then((res) => {
        //console.log(res.data);
        responseType = "success";
        responce = res.data;
      })
      .catch((error) => {
        responseType = "success";
        responce = error.responce;
      });
  }
  //   console.log("API Call");
  console.log({ type: responseType, res: responce });
};
