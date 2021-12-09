<template>
  <h1>Who's this Pokemon?</h1>

  <h3 v-if="!pokemon">Waiting...</h3>
  <div v-else>
    <!--TODO: Picture -->
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />

    <!--TODO: Options -->
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />
    <template v-if="showAnswer">
      <h2>{{ messagge }}</h2>

      <button @click="newGame">Try again</button>
    </template>
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
      showAnswer: false,
      messagge: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);

      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(selectedId) {
      //  if (answer === this.pokemon.name) {
      this.showPokemon = true;
      this.showAnswer = true;

      if (selectedId === this.pokemon.id) {
        this.messagge = "Correct!";
      } else {
        this.messagge = "Wrong!";
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>