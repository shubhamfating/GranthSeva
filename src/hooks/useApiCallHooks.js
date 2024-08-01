import axios from "axios";
import React, { useState } from "react";

const useApiCallHooks = () => {
  const apiLocalUrl = "http://127.0.0.1:8000/api/v1/";
  const [responce, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [statusCode, setStatusCode] = useState("");

   const callAPI = (type, apiName, parms) => {
    setLoading(true);
    setError([]);    
    //let methods = `axios.${type}.`;
    if (type === "get") {
      axios.get(apiLocalUrl + apiName, parms)
          .then((res) => {
            setData(res);
            setLoading(false);
          })
          .catch((error) => {
            setError(error.responce);
            setLoading(false);
          });
    }
    if (type === "post") {
      axios.post(apiLocalUrl + apiName, parms)
          .then((res) => {
            setData(res);
            setLoading(false);
          })
          .catch((error) => {
            setError(error.response.data);
            setStatusCode(error.response.status)
            setLoading(false);
          });
    }
    if (type === "put") {
      axios.put(apiLocalUrl + apiName, parms)
          .then((res) => {
            setData(res.data);
            setLoading(false);
          })
          .catch((error) => {
            
            setError(error.response.data.message);
            setLoading(false);
          });
    }
    if (type === "delete") {
      axios.delete(apiLocalUrl + apiName, parms)
          .then((res) => {
            setData(res.data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error.response.data.message);
            setLoading(false);
          });
    }
  };  
  return [responce, loading, error, callAPI,statusCode];
};
export default useApiCallHooks;
