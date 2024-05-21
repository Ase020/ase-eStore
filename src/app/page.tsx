import { CategoryList, ProductList, Slider } from "@/components";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-8 md:mt-12 lg:mt-16 container-padding">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>

      <div className="mt-8 md:mt-12 lg:mt-16">
        <h1 className="text-2xl container-padding">Categories</h1>
        <CategoryList />
      </div>

      <div className="mt-8 md:mt-12 lg:mt-16 container-padding">
        <h1 className="text-2xl">New Products</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
