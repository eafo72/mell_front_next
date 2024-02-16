"use client";

import { useRouter } from "next/navigation";

import Select from "react-select";

export const BrandSelector = ({ brand_name, category_name, allBrands }) => {
  const router = useRouter();

  const actualValue = {"value": brand_name, "label": brand_name}

  const handleBrandChange = (selectedOption) => {
    const brnd = selectedOption.value;
    router.push(`/categories/${brnd.trim().replace(/\s/g,"-")}/${category_name.trim().replace(/\s/g,"-")}`);
  };


  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "white",
      textTransform:"none",
      paddingLeft:"10px",
      borderColor: state.isFocused ? "#c25885":"#cccccc",
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
        background: state.isSelected ? "#c25885" : state.isFocused ? "#c2588550": "transparent",
        color: state.isSelected ? "white" : "grey",
      };
    },
  };
  
  return (

    <Select
    instanceId={'marcas'}
    styles={customStyles}
    placeholder="Seleccione"
    options={allBrands}
    value={actualValue}
    onChange={handleBrandChange}
    isSearchable={true}
   ></Select>

    
  );
};
