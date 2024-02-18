import Nav from "./comonents/Nav.jsx";
import CustomerReviews from "./sections/CustomerReviews.jsx";
import Footer from "./sections/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import PopularProducts from "./sections/PopularProducts.jsx";
import Services from "./sections/Services.jsx";
import SpecialOffers from "./sections/SpecialOffers.jsx";
import Subscribe from "./sections/Subscribe.jsx";
import SuperQuality from "./sections/SuperqualityProducts.jsx";

const App = () => {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffers />
        </section>
        <section className="padding bg-pale-blue">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-10 py-16 w-full">
          <Subscribe />
        </section>
        <section className="padding-x bg-black padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
