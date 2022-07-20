import React, { createContext } from 'react';
import { useFirestore } from '../hooks/useFirestore';

const CategoriesContext = createContext();

const CategoriesProvider = ({children}) =>{ 
  const {data:categories} = useFirestore({collection: "categories", type:"docs", filter: null}); 
  categories.sort( (a, b) => { 
    if(a.name > b.name) return 1;
    if ((a.name < b.name)) return -1;
    return 0;
   })
  const data={categories}; 

  return (
    <CategoriesContext.Provider value={data}>
      {children}
    </CategoriesContext.Provider>
  )
}

export default CategoriesProvider;
export { CategoriesContext };