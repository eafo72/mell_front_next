"use client";

import { useRouter } from "next/navigation";

import Select from "react-select";

export const BrandSelector = ({ brand_name, category_name, brands }) => {
  const router = useRouter();

  const handleBrandChange = (e) => {

    const brnd = e.target.value;

    router.push(`/categories/${brnd.trim().replace(/\s/g,"-")}/${category_name.trim().replace(/\s/g,"-")}`);
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
    <select onChange={(e) => handleBrandChange(e)} value={brand_name}>
      <option value="" hidden>
        Seleccione
      </option>
      <option>Todas</option>
      {brands &&
        brands.map((item) => <option key={item._id}>{item.nombre}</option>)}
    </select>
  );
};
