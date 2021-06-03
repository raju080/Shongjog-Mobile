import React, {createContext} from "react";

type FilterContextType = {
  handleDrawerOpen: () => void;
}

const defaultFilterContextValue = {
  handleDrawerOpen: () => console.log('handle drawer open'),
}

export const FilterContext = createContext<FilterContextType>(defaultFilterContextValue);
