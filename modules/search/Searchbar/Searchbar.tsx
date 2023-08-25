import { FormRow } from "@/modules/auth/Forms/FormRow/FormRow";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";

export const Searchbar = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const debounced = useDebouncedCallback((query: string) => {
    router.replace(`/search/?page=1&query=${query}`);
  }, 500);

  const onSubmit = handleSubmit(({ input }) => {
    debounced(input);
  });

  return (
    <div className="t-24 mb-6 flex flex-col items-center justify-center pt-16 text-left">
      <form onSubmit={onSubmit} className="flex flex-col">
        <FormRow id="searchResults" label="SEARCH RESULTS">
          <input
            className="rounded-sm px-6 py-3 text-dark-green shadow-md"
            type="text"
            placeholder="Enter search term"
            {...register("input")}
            onChange={(e) => debounced(e.target.value)}
          />
        </FormRow>
      </form>
    </div>
  );
};
