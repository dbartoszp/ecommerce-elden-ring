import { FormRow } from "@/modules/auth/Forms/FormRow/FormRow";
import { useQueryString } from "@/modules/navigation/hooks/useQueryString/useQueryString";
import { useForm } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";

export const Searchbar = () => {
  const { register, handleSubmit } = useForm();
  const { createQueryString, pushQueryStringRouter } = useQueryString();

  const debounced = useDebouncedCallback((query: string) => {
    pushQueryStringRouter(createQueryString([{ name: "query", value: query }]));
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
