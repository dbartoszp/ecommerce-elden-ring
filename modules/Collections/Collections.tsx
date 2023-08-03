"use client";

import { useKeenSlider } from "keen-slider/react";
import { CollectionsItem } from "./CollectionsItem/CollectionsItem";
import { useState } from "react";
import { Arrow } from "./CollectionsItem/Arrow/Arrow";
import clsx from "clsx";

const collectionsTest = [
  {
    title: "Samurai",
    image: "/images/collections/samurai.jpg",
    items: [219, 220, 221, 223, 224],
  },
  {
    title: "Tank",
    image: "/images/collections/tank.jpg",
    items: [225, 226, 227, 228, 229],
  },
];

export const Collections = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const handlePrevSlide = (e: any) => {
    e.stopPropagation() || instanceRef.current?.prev();
  };
  const handleNextSlide = (e: any) => {
    e.stopPropagation() || instanceRef.current?.next();
  };

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      breakpoints: {
        "(min-width:640px)": {
          slides: {
            perView: 1,
            spacing: 10,
          },
        },
        "(min-width:768px)": {
          slides: {
            perView: 4,
            spacing: 0,
          },
        },
      },
    },

    [],
  );

  if (!collectionsTest) return null;

  return (
    <div className="relative my-20">
      <h2 className="mb-4 pl-7  text-2xl font-semibold text-dark-green sm:pl-10">
        Handcrafted collections...
      </h2>
      <div className="keen-slider" ref={sliderRef}>
        <div className="keen-slider__slide flex justify-center md:p-8">
          <CollectionsItem collection={collectionsTest[0]} />
        </div>
        <div className="keen-slider__slide flex justify-center  md:p-8">
          <CollectionsItem collection={collectionsTest[1]} />
        </div>
        <div className="keen-slider__slide flex justify-center  md:p-8">
          <CollectionsItem collection={collectionsTest[0]} />
        </div>
        <div className="keen-slider__slide flex justify-center  md:p-8">
          <CollectionsItem collection={collectionsTest[1]} />
        </div>
      </div>
      {loaded && instanceRef.current && (
        <Arrow left onClick={handlePrevSlide} disabled={currentSlide === 0} />
      )}
      {loaded && instanceRef.current && (
        <Arrow
          onClick={handleNextSlide}
          disabled={
            currentSlide === instanceRef.current.track.details.slides.length - 1
          }
        />
      )}
      <div className="absolute left-1/2 -translate-x-1/2 ">
        {loaded && instanceRef.current && (
          <div className="">
            {Array.from(
              Array(instanceRef.current.track.details.slides.length).keys(),
            ).map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={clsx(
                    "mx-2 h-3 w-3 rounded-full border p-1  text-3xl font-semibold focus:outline-none md:invisible",
                    {
                      "bg-dark-green": currentSlide === idx,
                      "bg-light-green-lighter": currentSlide !== idx,
                    },
                  )}
                >
                  {/* &bull; */}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
