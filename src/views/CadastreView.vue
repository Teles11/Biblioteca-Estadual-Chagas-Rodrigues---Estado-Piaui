<template>
  <div class="cadastre-container">
    <div class="cadastre-box">
      <h2>Cadastro</h2>
      <form @submit.prevent="register">
        <input type="text" v-model="name" placeholder="Nome" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Senha" required />
        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem uma conta? 
        <button class="btn-link" @click="goToLogin">Faça login</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    register() {
      // Simula o cadastro (aqui você pode integrar com sua API)
      this.$router.push('/'); // Redireciona para a página de login após o cadastro
    },
    goToLogin() {
      this.$router.push('/'); // Redireciona para o LoginView
    },
  },
};
</script>

<style scoped>
.cadastre-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  /* Ajusta a altura para 100% da tela */
  width: 100vw;   /* Ajusta a largura para 100% da tela */
  background: url('@/assets/bibli.png') no-repeat center center;
  background-size: cover; /* Garante que a imagem ocupe toda a área de fundo */
  background-attachment: fixed; /* Torna a imagem fixa durante o scroll */
}

.cadastre-box {
  background: rgba(255, 255, 255, 0.9); /* Fundo semi-transparente */
  padding: 30px; /* Ajuste de espaçamento interno */
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

.cadastre-box h2 {
  margin-bottom: 20px;
  color: #333;
}

.cadastre-box form {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Adicionado espaçamento entre os campos */
  margin-bottom: 20px; /* Adicionado espaçamento entre o formulário e o botão/link */
}

.cadastre-box form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box; /* Garante que padding não afete o tamanho */
}

.cadastre-box button {
  width: 100%;
  padding: 10px;
  background: #0078d4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.cadastre-box button:hover {
  background: #005bb5;
}

.cadastre-box .btn-link {
  background: none;
  border: none;
  color: #0078d4;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
  margin-top: 10px;
}

.cadastre-box .btn-link:hover {
  color: #005bb5;
}
</style>
