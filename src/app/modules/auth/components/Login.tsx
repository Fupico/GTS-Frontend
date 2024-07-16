import Empty from "../../../layouts/Empty";
import type { FormProps } from "antd";
import { Button, Form, Input, message, Typography } from "antd";
import axios from "axios";
const { Link } = Typography;

import {
  LoginInput,
} from "../../../../services/UMS/controllers/Auth/models/loginModels";

function Login() {
  const onFinish: FormProps<LoginInput>["onFinish"] = async (values) => {
    try {
      console.log('values', values)
      const response = await axios.post("https://your-api-url.com/login", {
        email: values.email,
        password: values.password,
      });
      // Başarılı yanıt alındığında
      console.log("Response:", response.data);
    
      message.success("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      message.error("Login failed! Please check your credentials.");
    }
  };

  const onFinishFailed: FormProps<LoginInput>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Empty backgroundImage="https://www.technopat.net/sosyal/eklenti/3047001-jpg.673375/">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Sayfanın tam yüksekliğinde
        }}
      >
        <div
          style={{
            maxWidth: "400px",
            width: "100%",
            padding: "24px",
            background: "rgba(255, 255, 255, 0.8)",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>GTS - Giriş</h2>
          <Form name="login" onFinish={onFinish} layout="vertical">
            <Form.Item
              label="E-mail"
              name="email"
              rules={[{ required: true, message: "Lütfen e-mail adresinizi giriniz!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Şifre"
              name="password"
              rules={[
                { required: true, message: "Lütfen şifrenizi giriniz!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Giriş Yap
              </Button>
            </Form.Item>

            <Form.Item style={{ textAlign: "right" }}>
              <Link href="/register">Bir hesabınız yok mu?</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Empty>
  );
}

export default Login;
