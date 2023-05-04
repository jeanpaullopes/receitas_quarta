import api from "./api";

const servicos = {
  getReceitas() {
    api.get("receitas").then((resposta) => {
      return resposta.data;
    });
  },
  async getAWaitReceitas() {
    let resposta = await api.get("receitas");
    return resposta.data;
  },
  async getReceitasPorNome(nome) {
    let resposta = await api.get("receitas?nome_like=" + nome);
    return resposta.data;
  },
};

export default servicos;
