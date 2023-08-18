import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core/core.cjs";
import { faker } from "@faker-js/faker";
import supabase from "../../services/supabase.mjs";
import { omitTypenameArray } from "./utils/OmitTypeNameArray/OmitTypenameArray.js";

const GET_WEAPONS = gql`
  query {
    weapon(limit: 60) {
      id
      name
      image
      description
      category
      weight
      attack {
        name
        amount
      }
      defence {
        name
        amount
      }
      scalesWith {
        name
        scaling
      }
      requiredAttributes {
        name
        amount
      }
    }
  }
`;

const client = new ApolloClient({
  uri: "https://eldenring.fanapis.com/api/graphql",
  cache: new InMemoryCache(),
});

const addWeapon = async (newWeapon) => {
  try {
    const randomNumber = faker.number.int({ min: 10000, max: 100000 });
    const { error } = await supabase
      .from("Weapons")
      .insert([
        {
          itemId: newWeapon.id,
          name: newWeapon.name,
          image: newWeapon.image,
          description: newWeapon.description,
          category: newWeapon.category,
          weight: newWeapon.weight,
          attack: omitTypenameArray(newWeapon.attack),
          defence: omitTypenameArray(newWeapon.defence),
          scalesWith: omitTypenameArray(newWeapon.scalesWith),
          requiredAttributes: omitTypenameArray(newWeapon.requiredAttributes),
          price: randomNumber,
        },
      ])
      .select();
    console.log(error);
  } catch (err) {
    console.log(err);
  }
};

const seedWeapons = async () => {
  try {
    const res = await client.query({ query: GET_WEAPONS });
    const data = res.data;
    for await (const weapon of data.weapon) {
      try {
        await addWeapon(weapon);
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

await seedWeapons();
