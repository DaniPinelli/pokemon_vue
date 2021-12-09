<template>
  <h1>Who's this Pokemon?</h1>

  <h3 v-if="!pokemon">Waiting...</h3>
  <div v-else>
    <!--TODO: Picture -->
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="false" />

    <!--TODO: Options -->
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

import getPokemonOptions from "@/helpers/getPokemonOptions";

//getPokemonOptions();

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);

      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(answer) {
      //  if (answer === this.pokemon.name) {
      //  this.showPokemon = true;
      console.log("correct");
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>