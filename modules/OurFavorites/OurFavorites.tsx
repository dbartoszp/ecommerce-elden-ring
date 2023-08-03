"use client";
import { useState } from "react";
import { FavoritesTab } from "./FavoritesTab/FavoritesTab";
import { Button } from "../ui/Button/Button";
import clsx from "clsx";
import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react";

const tabs = [
  {
    title: "Bleed",
    ids: [219, 220, 221],
  },
  {
    title: "Suffer",
    ids: [222, 223, 224],
  },
  {
    title: "Poisoned",
    ids: [225, 226, 227],
  },
];

const ResizePlugin: KeenSliderPlugin = (slider) => {
  const observer = new ResizeObserver(function () {
    slider.update();
  });
  slider.on("created", () => {
    observer.observe(slider.container);
  });
  slider.on("destroyed", () => {
    observer.unobserve(slider.container);
  });
};

export function OurFavorites() {
  const [tab, setTab] = useState(1);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
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

    [ResizePlugin],
  );

  const handleTabChange = (tabIndex: number) => {
    if (tabIndex !== tab) {
      setTab(tabIndex);
      slider?.current?.update();
    }
    // console.log("current tab:", tabIndex);
  };

  return (
    <div className="mb-20 mt-40 flex flex-col justify-center space-y-4">
      <div className="text-center">
        <h2 className="mx-8 mb-4 bg-light-green p-4 text-3xl font-semibold tracking-wider text-elden-beige md:mx-72">
          Make your enemies...
        </h2>
        <div className="mx-8 flex flex-row justify-between bg-light-green  md:mx-72">
          {tabs.map((item, index) => (
            <div
              className={clsx("flex-grow", { "bg-dark-green": tab === index })}
              key={item.title}
            >
              <Button
                variant="link"
                size="lg"
                onClick={() => handleTabChange(index)}
              >
                {item.title}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="keen-slider" ref={sliderRef}>
          <FavoritesTab weaponIds={tabs[tab].ids} />
        </div>
        {/* 
        <div className={clsx("keen-slider", { "hidden ": tab !== 0 })}>
          <FavoritesTab weaponIds={tabs[0].ids} />
        </div>
        <div className={clsx("keen-slider", { "hidden ": tab !== 1 })}>
          <FavoritesTab weaponIds={tabs[1].ids} />
        </div>
        <div className={clsx("keen-slider", { "hidden ": tab !== 2 })}>
          <FavoritesTab weaponIds={tabs[2].ids} />
        </div> */}
      </div>
    </div>
  );
}
