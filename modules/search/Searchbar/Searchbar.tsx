"use client";
import { FormRow } from "@/modules/auth/Forms/FormRow/FormRow";
import { Button } from "@/modules/ui/Button/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const Searchbar = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const searchParams = useSearchParams();

  const onSubmit = handleSubmit(({ input }) => {
    router.push(`/search/?query=${input}`);
  });

  return (
    <div className="mb-12 mt-24 flex flex-col items-center justify-center text-left">
      <form onSubmit={onSubmit} className="flex flex-col">
        <FormRow id="searchResults" label="SEARCH RESULTS">
          <input
            className="rounded-sm px-6 py-3 text-dark-green shadow-md"
            type="text"
            placeholder="Enter search term"
            {...register("input")}
          />
        </FormRow>
        {/* <div className="flex items-center justify-center">
          <Button onClick={onSubmit} size="sm" variant="secondary">
            <HiMagnifyingGlass size={30} />
          </Button>
        </div> */}
      </form>
      <span>
        solo bolo we testing /search?query={searchParams.get("query")}
      </span>
    </div>
  );
};
