<template>
  <div class="student-dashboard">
    <header class="header">
      <h1>📚 Biblioteca Zumbli</h1>
      <p>Bem-vindo, {{ username }}</p>
    </header>

    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Pesquise por um livro..." />
      <button class="account-button" @click="goToAccount">👤 Conta</button>
    </div>

    <main>
      <section class="book-list">
        <h2>Livros Disponíveis</h2>
        <div class="books">
          <div v-for="book in filteredBooks" :key="book.id" class="book-card">
            <img :src="book.image" :alt="book.title" />
            <h3>{{ book.title }}</h3>
            <p>Autor: {{ book.author }}</p>
            <button @click="reserveBook(book)">Reservar</button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import senhorImg from "@/assets/senhor.png";
import guerraImg from "@/assets/guerra.png";
import dom from "@/assets/dom.png";
import morro from "@/assets/morro.png";
import orgulho from "@/assets/orgulho.png";
import principe from "@/assets/principe.png";
import revolucao from "@/assets/revolucao.png";
import hary from "@/assets/hary.png";
import codigo from "@/assets/codigo.png";
import one from "@/assets/one.png";

export default {
  data() {
    return {
      username: localStorage.getItem("username") || "Aluno",
      searchQuery: "",
      books: [
        { id: 1, title: "1984", author: "George Orwell", image: one },
        { id: 2, title: "Orgulho e Preconceito", author: "Jane Austen", image: orgulho },
        { id: 3, title: "Dom Quixote", author: "Miguel de Cervantes", image: dom },
        { id: 4, title: "A Revolução dos Bichos", author: "George Orwell", image: revolucao },
        { id: 5, title: "O Pequeno Príncipe", author: "Antoine de Saint-Exupéry", image: principe },
        { id: 6, title: "Harry Potter e a Pedra Filosofal", author: "J.K. Rowling", image: hary },
        { id: 7, title: "O Código Da Vinci", author: "Dan Brown", image: codigo },
        { id: 8, title: "A Arte da Guerra", author: "Sun Tzu", image: guerraImg },
        { id: 9, title: "O Morro dos Ventos Uivantes", author: "Emily Brontë", image: morro },
      ],
      reservedBooks: [],
    };
  },
  computed: {
    filteredBooks() {
      if (this.searchQuery.trim() === "") {
        // Retorna todos os livros se a busca estiver vazia
        return this.books;
      }
      return this.books.filter((book) =>
        book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    reserveBook(book) {
      if (this.reservedBooks.some((b) => b.id === book.id)) {
        alert(`Você já reservou "${book.title}"!`);
        return;
      }
      const reservation = { ...book, remainingDays: 15 };
      this.reservedBooks.push(reservation);
      alert(`Livro "${book.title}" reservado com sucesso!`);
    },
    goToAccount() {
      this.$router.push("/account");
    },
  },
};
</script>

<style scoped>
:root {
  --primary-color: #4a90e2;
  --secondary-color: #f5f7fa;
  --accent-color: #e67e22;
  --text-color: #333;
  --background-color: #ffffff;
  --card-shadow: rgba(0, 0, 0, 0.1);
}

body {
  font-family: "Roboto", sans-serif;
  background: var(--secondary-color);
  color: var(--text-color);
}

h1 {
  color: black;
}

p {
  color: black;
}

.student-dashboard {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh; /* Garantir que a altura seja 100% da tela */
}

.header {
  text-align: center;
  background: var(--primary-color);
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px var(--card-shadow);
  margin-bottom: 20px; /* Espaço entre o header e os livros */
}

.header h1 {
  margin: 0;
  font-size: 28px;
}

.header p {
  margin: 0;
  font-size: 18px;
}

.search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-bar input {
  width: 70%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.search-bar .account-button {
  background: var(--accent-color);
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.books {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Quatro colunas */
  gap: 20px;
}

.book-card {
  background: var(--background-color);
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 4px 10px var(--card-shadow);
  transition: transform 0.2s, box-shadow 0.2s;
}

.book-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.book-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 14px var(--card-shadow);
}
</style>
