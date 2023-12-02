import { lazy, Suspense } from "react";
import { Home } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

export default function App() {
  const Blog = lazy(() => import("./pages/Blog"));
  const FullBlog = lazy(() => import("./pages/FullBlog"));

  return (
    <>
      <Suspense
        fallback={
          <>
            <Loader styles={"w-screen h-screen bg-black"} center={true} />
          </>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/Fullblog" element={<FullBlog />} />
        </Routes>
      </Suspense>
    </>
  );
}
