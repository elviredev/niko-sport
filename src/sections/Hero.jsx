import Button from "../components/Button.jsx";
import { arrowRight } from "../assets/icons"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import { useState } from "react";
import ShoeCard from "../components/ShoeCard.jsx";

const Hero = () => {

  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
        id="home"
        className="w-full flex flex-col xl:flex-row gap-10 max-container justify-center min-h-screen"
    >
      {/* Partie Gauche - Textes */}
      <div
        className="relative flex flex-col justify-center items-start w-full xl:w-2/5 max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap xl:relative xl:z-10 pr-10">The New Arrival</span>
          <br/>
          <span className="text-coral-red inline-block mt-3">Niko</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Niko arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button
          label="Show now"
          iconURL={arrowRight}
        />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
          ))}
        </div>
      </div>

      {/* Partie Droite - Photo */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImage}
          alt="Shoe collection"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        {/* Partie Droite - 3 Photos */}
        <div className="flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => {setBigShoeImage(shoe)}}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero