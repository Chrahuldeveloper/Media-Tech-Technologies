import React from "react";
import Card from "./Card";
import { db } from "../../Firebase";
import Loader from "../Loader";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";

export default function MarketingBlog() {
  const docref = collection(db, "MARKETINGBLOGS");
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
