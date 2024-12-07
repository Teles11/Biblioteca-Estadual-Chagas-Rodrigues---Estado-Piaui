<template>
    <div>
      <h2>Notificações de Reservas</h2>
      <ul>
        <li v-for="notification in notifications" :key="notification.id">
          Livro "{{ notification.book.title }}" reservado por {{ notification.reservedBy }}
          - {{ notification.remainingDays }} dias restantes
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        notifications: [
          {
            id: 1,
            book: { title: "Livro A" },
            reservedBy: "João",
            remainingDays: 15,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  h2 {
    text-align: center;
  }
  </style>
  