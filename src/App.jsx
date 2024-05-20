import React, { useState } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  let [cart, setCart] = useState(0);
  let cardData = [
    {
      id: 1,
      productImg:
        "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Written-and-Directed-by-chennai.jpg?v=1662807782",
      productName: "Black printed cloths",
      originalPrice: "$200.00",
      price: " $125.00",
    },
    {
      id: 2,
      productImg:
        "https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow_600x.jpg?v=1639657077",
      productName: "Mens RRR yellow",
      originalPrice: "$150.00",
      price: " $99.00",
    },
    {
      id: 3,
      productImg:
        "https://m.media-amazon.com/images/I/61bZVc7J21L._AC_UY1100_.jpg",
      productName: "Red Naruto print tshirt",
      originalPrice: "$250.00",
      price: " $199.00",
    },
    {
      id: 4,
      productImg:
        "https://www.styched.in/cdn/shop/products/vcompany-logo-black.jpg?v=1607942478",
      productName: "Black Round Tshirt",
      originalPrice: "$250.00",
      price: " $150.00",
    },
    {
      id: 5,
      productImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtlo015VgRwMcg-_xTycIyKBfRkivrq-mXg&s",
      productName: "Tom printed cloths",
      originalPrice: "$280.00",
      price: " $180.00",
    },
    {
      id: 6,
      productImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3ioDMLSYRPxM-eIZ9Hk-MeVoN0Ds8220jw&s",
      productName: "Mens Blue cloths",
      originalPrice: "$200.00",
      price: " $159.00",
    },
  ];
  return (
    <>
      <NavBar cart={cart} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {cardData.map((card, i) => {
              return <Card key={i} props={card} setCart={setCart} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
