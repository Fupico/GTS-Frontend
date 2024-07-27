import { RequestManager } from "../../../RequestManager.tsx";
import { NoDataDto, ResponseDto } from "../../../resultModel.tsx";
import { AUTH_LOGIN_POSTURL, Auth_Register_PostUrl } from "../../endpoints.tsx";
import { LoginInput, LoginOutput } from "./models/loginModels";
import { RegisterInput } from "./models/registerModels.tsx";

export const login = async (req: LoginInput) => {
  const requestManager = new RequestManager();

  var res: ResponseDto<LoginOutput> = {
    IsSuccessful: false,
    status: 500,
    data: null,
    errors: null,
  };
  return requestManager
    .post<ResponseDto<LoginOutput>>(AUTH_LOGIN_POSTURL, req)
    .then((response) => {
      ////debugger
      res = response;
      return res;
    })
    .catch((error) => {
      res = error.response.data;
      return res;
    });
};

export const register = async (req: RegisterInput) => {
  const requestManager = new RequestManager();
  ////debugger

  var res: ResponseDto<NoDataDto> = {
    IsSuccessful: false,
    status: 500,
    data: null,
    errors: null,
  };
  return requestManager
    .post<ResponseDto<NoDataDto>>(Auth_Register_PostUrl, req)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      res = error.response.data;
      return res;
    });
};
