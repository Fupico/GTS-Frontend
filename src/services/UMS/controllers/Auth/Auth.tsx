import { RequestManager } from "../../../RequestManager.tsx";
import { Result } from "../../../resultModel.tsx";
import { AUTH_LOGIN_POSTURL } from "../../endpoints.tsx";
import { LoginInput, LoginOutput } from "./models/loginModels";

export const login = async (req: LoginInput) => {
  const requestManager = new RequestManager();

  var res: Result<LoginOutput> = {
    success: false,
    message: "Hata",
    data: null,
  };
  return requestManager
    .post<Result<LoginOutput>>(AUTH_LOGIN_POSTURL, req)
    .then((response) => {
      ////debugger
      res = response;
      return res;
    })
    .catch((error) => {
      res.message = error.message;
      return res;
    });
};
