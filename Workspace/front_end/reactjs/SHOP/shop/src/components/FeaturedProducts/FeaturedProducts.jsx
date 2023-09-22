import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./FeaturedProducts.css";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          odio impedit eius iste. Alias placeat esse veritatis nemo illum
          architecto similique aliquam accusantium mollitia consequatur vitae,
          voluptas voluptatum, magnam commodi.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
