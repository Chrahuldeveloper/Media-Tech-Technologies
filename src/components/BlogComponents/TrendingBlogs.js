import BlogBanner from "./BlogBanner";
import MainBlog from "./MainBlog";
import MarketingBlog from "./MarketingBlog";
import TechBlog from "./TechBlog";

export default function TrendingBlogs() {
  return (
    <div className="py-8 space-y-8">
      <div>
        <BlogBanner Tittle={"Trending Blogs"} />
        <div className="flex flex-col items-center justify-center px-5 py-10 text-white md:flex-row gap-7">
          <MainBlog />
        </div>
      </div>
      <div>
        <BlogBanner Tittle={"Technology"} />
        <div className="flex flex-col items-center justify-center px-5 py-10 text-white md:flex-row gap-7">
          <TechBlog />
        </div>
      </div>
      <div>
        <BlogBanner Tittle={"Marketing"} />
        <div className="flex flex-col items-center justify-center px-5 py-10 text-white md:flex-row gap-7">
          <MarketingBlog />
        </div>
      </div>
    </div>
  );
}
