import React from "react";
import Subnavbar from "./Subnavbar";
import { Navbar } from "./Navbar";
import { Herosection } from "./Herosection";
import { FooterSection } from "./FooterSection";
const ProductSec = React.lazy(() => import("./ProductSec"));

const AllMainPage = () => {
  return (
    <div>
      <Subnavbar></Subnavbar>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <React.Suspense
        fallback={
          <div>
            {" "}
            Loading...{" "}
          </div>
        }
      >
        <ProductSec></ProductSec>
      </React.Suspense>
      <FooterSection></FooterSection>
    </div>
  );
};

export default AllMainPage;
