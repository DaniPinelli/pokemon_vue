<template>
  <h1>Who's this Pokemon?</h1>

  <h3 v-if="!pokemon">Waiting...</h3>
  <div v-else>
    <!--TODO: Picture -->
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />

    <!--TODO: Options -->
    <div v-show="showOptions">
      <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />
    </div>

    <template v-if="showAnswer"> </template>
    <div v-show="showMssgg">
      <h2>{{ messagge }}</h2>
    </div>

    <button class="try" @click="newGame"><strong>RETRY</strong></button>
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
      showOptions: true,
      showMssgg: false,
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
      this.showOptions = false;
      this.showMssgg = true;
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonArray();
      this.showOptions = true;
      this.showMssgg = false;
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>
<style scoped>
.try {
  background-color: green;
  border: 1px solid #e3e3e3;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 20px;
  padding: 10px;
  text-align: center;
  width: 20%;
}
</style>