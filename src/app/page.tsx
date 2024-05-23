import { CategoryList, ProductList, Skeleton, Slider } from "@/components";
import { Suspense } from "react";

async function HomePage() {
  return (
    <div className="">
      <Slider />
      <div className="mt-8 md:mt-12 lg:mt-16 container-padding">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.WIX_FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>

      <div className="mt-8 md:mt-12 lg:mt-16">
        <h1 className="text-2xl container-padding">Categories</h1>
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>

      <div className="mt-8 md:mt-12 lg:mt-16 container-padding">
        <h1 className="text-2xl">New Products</h1>

        <Suspense fallback={<Skeleton />}>
          <ProductList categoryId="0d2fc409-2f29-433e-82c4-044191d62561" />
        </Suspense>
      </div>
    </div>
  );
}

export default HomePage;
