<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Bem-vindo!</h2>
      <form>
        <div class="form-group">
          <input type="email" placeholder="Email" v-model="email" />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Senha" v-model="password" />
        </div>
        <div class="actions">
          <button class="login-button" @click.prevent="login">Entrar</button>
        </div>
        <div class="links">
          <a href="#" @click.prevent="forgotPassword">Esqueceu a senha?</a>
          <a href="/cadastre" class="register-link">Cadastre-se</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Simula o login e redireciona para outra página
      alert('Login bem-sucedido!');
      this.$router.push('/aluno'); // Redireciona para o dashboard
    },
    goToRegister() {
      alert('Cadastre-se agora')
      this.$router.push('/cadastre'); // Redireciona para o componente de cadastro
    },
  },
};
</script>

<style scoped>



.login-container { 
   display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  /* Ajusta a altura para 100% da tela */
  width: 100vw;   /* Ajusta a largura para 100% da tela */
  background: url('@/assets/bibli.png') no-repeat center center;
  background-size: cover; /* Garante que a imagem ocupe toda a área de fundo */
  background-attachment: fixed; /* Torna a imagem fixa durante o scroll */
}

.login-box {
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 350px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.actions {
  margin: 20px 0;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}

.links {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 10px;
}

a {
  text-decoration: none;
  color: #007BFF;
  transition: color 0.3s ease;
}

a:hover {
  color: #0056b3;
}

.register-link {
  font-weight: bold;
}
</style>
