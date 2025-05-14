import React from "react";
import Layout from "./layout";
import HomePage from "./pages/Homepage";
import BlogPage from "./pages/BlogPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
