import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core/core.cjs";
import { faker } from "@faker-js/faker";
import supabase from "../../services/supabase.mjs";

// const { ApolloClient, InMemoryCache, gql } = require("@apollo/client/core");
// const faker = require("@faker-js/faker");
// const supabase = require("../../services/supabase.js");

// Now you can use ApolloClient, InMemoryCache, gql, faker, and supabase in your code.

const GET_WEAPONS = gql`
  query {
    weapon(limit: 10) {
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
    // console.log(data);
    for await (const weapon of data.weapon) {
      try {
        // console.log(`adding ${weapon.name}`);
        await addWeapon(weapon);
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const clearWeapons = async () => {
  const { error } = await supabase.from("Weapons").delete().neq("id", 2137);
};
// Napisanie skryptu, który pobierze z GraphQL elden ring api 30 przedmiotów(bronii), następnie
// dodasz per przedmiot losowo wygenerowaną cene(faker-js chyba ma taka opcje) zapisaną w
// groszach i w tabeli Supabase utworzysz nową wartość weapons gdzie będziesz miał id, itemId,
// reszte pól oraz pole z groszami

seedWeapons();
// clearWeapons();
