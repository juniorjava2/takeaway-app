import Image from 'next/image'
import { Hero, Products} from '@/components'
import { productData, productDataTwo } from "../constants/constants";


export default function Home() {
  const productDataWithUrls = productData.map((product) => ({
    ...product,
    img: product.img.src, // Extract the URL from StaticImageData
  }));

  const productDataTwoWithUrls = productDataTwo.map((product) => ({
    ...product,
    img: product.img.src, // Extract the URL from StaticImageData
  }));

  return (
    <main>
      <Hero/>
      <Products heading="Choose your favourite food!" data={productDataWithUrls} />
      <Products heading="Sweep your Throught!" data={productDataTwoWithUrls} />
    </main>
  )
}
