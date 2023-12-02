import Card from "./Card";
import { db } from "../../Firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import Loader from "../Loader";
export default function MainBlog() {
  const docref = collection(db, "MAINBLOG");
  const [values, loading, error] = useCollectionData(docref);
  console.log(error);

  return (
    <>
      {loading ? <Loader /> : null}
      {values?.length === 0 ? (
        <p className="text-3xl text-white">No Blogs for Now :(</p>
      ) : (
        values?.map((item, i) => {
          return (
            <Card
              key={i}
              image={item.image}
              Categeory={item.Categeory}
              Tittle={item.Tittle}
              Para={item.Para}
              Blog={item.Blog}
            />
          );
        })
      )}
    </>
  );
}
