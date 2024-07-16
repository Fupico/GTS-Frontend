import React, { ReactNode } from "react";
import { Layout } from "antd";

const { Content } = Layout;

interface EmptyProps {
    children: ReactNode;
    backgroundImage?: string; // Arka plan resmi için opsiyonel prop
  }

  const Empty: React.FC<EmptyProps> = ({ children, backgroundImage }) => {
    return (
      <Layout
        style={{
          minHeight: '100vh',
          backgroundImage: `url(${backgroundImage})`, // Dışarıdan gelen URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Content>
          <div>
            {children}
          </div>
        </Content>
      </Layout>
    );
  };

export default Empty;
