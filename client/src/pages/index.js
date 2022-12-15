import { Hero } from "../components/Hero/Hero";
import { Products } from "../components/Products/Products";
import { GlobalStyle } from "../styles/globals";
import { productData, productDataTwo } from "../constants/constants";
import { Feature } from "../components/Feature/Feature";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favourite food!" data={productData} />
      <Feature />
      <Products heading="Sweep your Throught!" data={productDataTwo} />
      <Footer />
    </div>
  );
};

export default Home;
