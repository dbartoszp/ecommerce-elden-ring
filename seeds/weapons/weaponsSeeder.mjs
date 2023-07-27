import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core/core.cjs";
import { faker } from "@faker-js/faker";
import supabase from "../../services/supabase.mjs";

const GET_WEAPONS = gql`
  query {
    weapon(limit: 30) {
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

    const { data } = await supabase
      .from("Weapons")
      .insert([
        {
          itemId: newWeapon.id,
          name: newWeapon.name,
          image: newWeapon.image,
          description: newWeapon.description,
          category: newWeapon.category,
          weight: newWeapon.weight,
          attack: newWeapon.attack,
          defence: newWeapon.defence,
          scalesWith: newWeapon.scalesWith,
          requiredAttributes: newWeapon.requiredAttributes,
          price: randomNumber,
        },
      ])
      .select();
    console.log(data);
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

seedWeapons();
