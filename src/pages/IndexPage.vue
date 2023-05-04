<template>
  <q-page class="flex flex-center">
    <input v-model="textoBusca" /><button @click="buscar">buscar</button>
    <ul>
      <li v-for="rec in receitas" v-bind:key="rec.id">
        {{ rec.nome }}<br />
        {{ rec.ingredientes }}<br />
        {{ rec.modo }}
      </li>
    </ul>
    {{ receitas }}
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import servicos from "src/services";
import api from "src/services/api";
export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      textoBusca: "",
      receitas: Array,
    };
  },
  async created() {
    //this.receitas = await servicos.getAWaitReceitas();
  },
  methods: {
    async buscar() {
      this.receitas = await servicos.getReceitasPorNome(this.textoBusca);
    },
  },
});
</script>
