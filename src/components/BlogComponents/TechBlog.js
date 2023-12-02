import Card from "./Card";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "../Loader";
import { db } from "../../Firebase";

export default function TechBlog() {
  const docref = collection(db, "TECHBLOGS");
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
