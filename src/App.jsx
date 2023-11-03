import { useEffect, useState } from "react";
import Input from "./components/Input";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout style="w-[100vw] h-[100vh] flex flex-col">
      <Input />
    </Layout>
  );
};

export default App;
