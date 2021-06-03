import React, {createContext} from "react";

import { StateTypeUIStudent } from '../types_store';

type FilterContextType = {
  handleDrawerOpen: () => void;
}

const defaultFilterContextValue = {
  handleDrawerOpen: () => console.log('handle drawer open'),
}

export const FilterContext = createContext<FilterContextType>(defaultFilterContextValue);


// UI Context Student

const initialUIContextStateStudent: StateTypeUIStudent = {
	isNavDrawerOpen: false,
	isFilterDrawerOpen: false,
	selectedTutor: null,
};

export const UIContextStudent = createContext<StateTypeUIStudent>(
	initialUIContextStateStudent
);