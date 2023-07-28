"use client";
import { FavoritesItem } from "../FavoritesItem.tsx/FavoritesItem";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export function FavoritesTab() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(min-width:640px)": {
          slides: {
            perView: 2,
            spacing: 15,
          },
        },
        "(min-width:768px)": {
          slides: {
            perView: 3,
            spacing: 0,
          },
        },
      },
    },
    [],
  );

  return (
    <div className="keen-slider" ref={sliderRef}>
      <FavoritesItem weaponId={219} />
      <FavoritesItem weaponId={219} />
      <FavoritesItem weaponId={219} />
    </div>
  );
}
