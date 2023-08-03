import clsx from "clsx";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

type ArrowProps = {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
};

export const Arrow = (props: ArrowProps) => {
  return (
    <button
      onClick={props.onClick}
      className={clsx(
        "absolute top-1/2 cursor-pointer text-light-green md:invisible",
        {
          "text-slate-600/20": props.disabled,
          "left-auto right-0": !props.left,
        },
      )}
    >
      {props.left ? <HiChevronLeft size={40} /> : <HiChevronRight size={40} />}
    </button>
  );
};
