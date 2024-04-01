import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { ConfigProvider } from "antd";

export default function Home() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Drawer: {
            colorBgElevated: "#B3BFCB",
            size: "default",
          },
        },
      }}
    >
      <main className="min-h-screen">
        <Navbar />
        <Main />
      </main>
    </ConfigProvider>
  );
}
