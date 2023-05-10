import { AboutPage } from "@pages/AboutPage/AboutPage";
import { BlogPage } from "@pages/BlogPage/BlogPage";
import { ContactPage } from "@pages/ContactPage/ContactPage";
import { HomePage } from "@pages/HomePage/HomePage";
import { NotFoundPage } from "@pages/NotFoundPage/NotFoundPage";
import { PostPage } from "@pages/PostPage/PostPage";
import { SearchPage } from "@pages/SearchPage/SearchPage";
import { GlobalStyle, theme } from "@theme/theme.config";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/search/:term" element={<SearchPage />} />
        <Route path="/post/:mode/:id?" element={<PostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
