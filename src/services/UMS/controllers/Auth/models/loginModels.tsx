export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginOutput {
  claims: string[];
  token: string;
  expiration: Date;
  refreshToken: string;
}
