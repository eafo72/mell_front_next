"use client";

import { useRouter } from "next/navigation";

export const CategorySelector = ({ brand_name, category_name, categories }) => {
  const router = useRouter();

  const handleCategoryChange = (e) => {

    const cat = e.target.value
    

    router.push(`/categories/${brand_name.trim().replace(/\s/g,"-")}/${cat.trim().replace(/\s/g,"-")}`);
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
