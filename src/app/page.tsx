import { ProductList, Slider } from "@/components";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-8 md:mt-12 lg:mt-16 container-padding border-red">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
