import { useEffect, useState } from "react";
import { ProductCategory } from "@self/domain";
import { useRepository } from "../contexts";

export const useProductCategories = () => {
  const repository = useRepository();
  const [productCategories, setProductCategories] = useState<ProductCategory[]>();
  const [isLoadingProductCategories, setIsLoadingProductCategories] = useState<boolean>(false);

  useEffect(() => {
    setIsLoadingProductCategories(true);
    repository.productCategory.findAll()
      .then(productCategories => setProductCategories(productCategories))
      .finally(() => setIsLoadingProductCategories(false));
  }, []);

  return {
    productCategories,
    isLoadingProductCategories
  }
}