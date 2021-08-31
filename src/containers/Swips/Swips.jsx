import React from "react";
import ProductPreview from "../../components/ProductPreview/ProductPreview";
import ProductSelector from "../../components/ProductSelector/ProductSelector";
import { Wrapper } from "./swips.styles";

const Swips = () => {
  return (
    <Wrapper>
      <ProductPreview />
      <ProductSelector />
    </Wrapper>
  );
};

export default Swips;
