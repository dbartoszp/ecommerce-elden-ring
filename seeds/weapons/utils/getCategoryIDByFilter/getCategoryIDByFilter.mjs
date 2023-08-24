import { ApolloClient, InMemoryCache } from "@apollo/client/core/core.cjs";
import supabase from "../../services/supabase.mjs";

const client = new ApolloClient({
  uri: "https://eldenring.fanapis.com/api/graphql",
  cache: new InMemoryCache(),
});

const getCategoryIDByFilter = (filterName) => {
    const {data: filters ,error} = await supabase.from('Filters').select('categoryID').eq()
};

export default getCategoryIDByFilter;
