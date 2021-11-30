<template>
  <h1>Who's this Pokemon?</h1>
  <!--TODO: Picture -->
  <PokemonPicture :pokemonId="4" :showPokemon="true" />

  <!--TODO: Options -->
  <PokemonOptions />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

import getPokemonOptions from "@/helpers/getPokemonOptions";

console.log(getPokemonOptions());

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
};
</script>

<style>
</style>
