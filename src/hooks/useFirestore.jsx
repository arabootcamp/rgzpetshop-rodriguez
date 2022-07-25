import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";

export const useFirestore = ( config ) => {
  const { collection: collectionParam, method, type, filter }=config;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ status: false, message: "" });

  useEffect(() => {
    setLoading(true);
    const getCollectionDoc = async () => {
      try {
        const docRef = doc(db, collectionParam, filter);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) setData({id: filter,...docSnap.data()});
        else setError({ status: true, message: `El id de producto no existe` });
      }
      catch (err) {
        console.log(err);

        setError({ status: true, message: `Error al consultar un elemento de la coleccion ${collectionParam}` });
      }
      finally {
        setLoading(false);
      }
    }

    const getCollectionDocs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionParam));
        const results = [];
        querySnapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setData(results); 
      }
      catch (err) {
        console.log(err);
        setError({ status: true, message: `Error al consultar coleccion ${collection}` });
      }
      finally {
        setLoading(false); 
      }
    }

    const getCollectionMultipleDocs = async () => {
      try {
        const q = query(collection(db, collectionParam), where("category", "==", filter));
        const querySnapshot = await getDocs(q);
        const results = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          results.push({ id: doc.id, ...doc.data() });
        });
        setData(results);
      }
      catch (err) {
        console.log(err);
        setError({ status: true, message: `Error al consultar los productos asociados a una categoria en la coleccion ${collection}` });
      }
      finally {
        setLoading(false);
      }
    }

    if(method === "get"){
      if (type === "doc") getCollectionDoc();
      else if (type === "docs" && filter === null) getCollectionDocs();
      else if (type === "docs" && filter !== null) getCollectionMultipleDocs();
      else setError({ status: true, message: "config.type no definido" });
    }
    else 
      setError({ status: true, message: "config.method no definido" });

  }, [collectionParam, method, type, filter]);

  return { data, loading, error };
}