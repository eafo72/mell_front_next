"use client";

import { useRouter } from "next/navigation";

export const BrandSelector = ({ brand_name, category_name, brands }) => {
  const router = useRouter();

  const handleBrandChange = (e) => {

    const brnd = e.target.value;

    router.push(`/categories/${brnd.trim().replace(/\s/g,"-")}/${category_name.trim().replace(/\s/g,"-")}`);
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
