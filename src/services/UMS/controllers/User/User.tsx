import { RequestManager } from "../../../RequestManager";
import { ResponseDto } from "../../../resultModel";
import { User_GetUserByToken_GetUrl } from "../../endpoints";
import { CurrentUserOutput } from "./models/userModels";

export const getUserByToken = async (token: string) => {
  const requestManager = new RequestManager();

  var res: ResponseDto<CurrentUserOutput> = {
    IsSuccessful: false,
    status: 500,
    data: null,
    errors: null,
  };
  return requestManager
    .get<ResponseDto<CurrentUserOutput>>(User_GetUserByToken_GetUrl)
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
