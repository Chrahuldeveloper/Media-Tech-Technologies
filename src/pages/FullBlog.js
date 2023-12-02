import { useLocation } from "react-router-dom";
import { Footer } from "../components";

const FullBlog = () => {
  const Parms = useLocation();

  return (
    <div className="w-screen h-full text-white bg-black">
      <div className="flex flex-col justify-center px-10 py-10 space-y-8 md:px-40">
        <img
          src={Parms.state.image}
          className="mx-auto my-5 rounded-lg"
          alt="pic"
        />
        <h1 className="text-4xl font-bold ">{Parms.state.Blog.head1}</h1>
        <p className="text-sm font-semibold leading-7 font-">
          {Parms.state.Blog.Para1}
        </p>
        <h1 className="text-4xl font-bold">{Parms.state.Blog.head2}</h1>
        <p className="text-sm font-semibold leading-7 font-">
          {Parms.state.Blog.Para2}
        </p>
        <h1 className="text-4xl font-bold">{Parms.state.Blog.head3}</h1>
        <p className="text-sm font-semibold leading-7 font-">
          {Parms.state.Blog.Para3}
        </p>
        <h1 className="text-4xl font-bold">{Parms.state.Blog.head4}</h1>
        <p className="text-sm font-semibold leading-7 font-">
          {Parms.state.Blog.Para4}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default FullBlog;
