import { Link } from "@/modules/ui/Button/Link";
import Skeleton from "react-loading-skeleton";

type FavoritesItemSkeletonProps = {
  items: number;
};

export const FavoritesItemSkeleton = ({
  items,
}: FavoritesItemSkeletonProps) => {
  return Array(items)
    .fill(0)
    .map((_, i) => (
      <div className="keen-slider" key={i}>
        <div className="keen-slider__slide flex justify-center p-5 md:p-8">
          <div className="flex w-11/12 flex-col items-center justify-center space-y-6 border-2 bg-light-olive-lighter font-semibold shadow-md md:h-5/6 md:w-96 md:pb-16">
            <Skeleton
              className="w-full border-b-2 border-b-dark-green bg-light-green"
              width={400}
              height={400}
            />
            <div className="border-b-2 border-b-dark-green text-2xl">
              <h2>
                <Skeleton width={100} height={20} />
              </h2>
            </div>
            <div className="capitalize">
              <Skeleton width={200} height={20} />
            </div>
            <Link href="/" variant="primary" size="lg">
              <Skeleton width={100} height={20} />
            </Link>
          </div>
        </div>
      </div>
    ));
};
