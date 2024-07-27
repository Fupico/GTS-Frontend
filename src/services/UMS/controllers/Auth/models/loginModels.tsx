export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginOutput {
  //claims: string[];
  accessToken: string;
  accessTokenExpiration: Date;
  refreshToken: string;
  refreshTokenExpiration: Date;
}
