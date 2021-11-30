<template>
  <h1>Who's this Pokemon?</h1>
  <!--TODO: Picture -->
  <PokemonPicture :pokemonId="4" :showPokemon="true" />

  <!--TODO: Options -->
  <PokemonOptions :pokemons="pokemonArr" />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      console.log(this.pokemonArr);
    },
    mounted() {
      this.mixPokemonArray();
    },
  },
};
</script>

<style>
</style>
