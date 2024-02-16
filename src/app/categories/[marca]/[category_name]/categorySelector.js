"use client";

import { useRouter } from "next/navigation";

import Select from "react-select";

export const CategorySelector = ({ brand_name, category_name, categories }) => {
  const router = useRouter();

  const handleCategoryChange = (e) => {

    const cat = e.target.value
    

    router.push(`/categories/${brand_name.trim().replace(/\s/g,"-")}/${cat.trim().replace(/\s/g,"-")}`);
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "transparent",
    }),
    singleValue: (base, state) => ({
      ...base,
      color: "rgb(15 23 42 / var(--tw-text-opacity))",
    }),
    multiValueRemove: (base, state) => ({
      ...base,
      color: "red",
    }),
    option: (base, state) => {
      return {
        ...base,
        background: "",
        color: state.isFocused ? "black" : "grey",
      };
    },
  };

  return (
    
    <select onChange={(e) => handleCategoryChange(e)} value={category_name}>
      {categories &&
        categories.map((item, index) => (
          <option key={item._id}>{item.nombre}</option>
        ))}
    </select>
  );
};
