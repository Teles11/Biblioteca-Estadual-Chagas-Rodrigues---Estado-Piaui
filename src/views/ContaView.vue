<template>
    <div class="p-6 bg-gray-50 min-h-screen">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Reservas de Livros</h1>
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <table class="table-auto w-full">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Capa</th>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Título</th>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Data de Reserva</th>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">Dias Restantes</th>
              <th class="px-4 py-2 text-center text-sm font-semibold text-gray-600">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(reserva, index) in reservas"
              :key="index"
              class="border-b hover:bg-gray-50"
            >
              <td class="px-4 py-3">
                <img :src="reserva.livro.foto" alt="Capa do livro" class="w-16 h-24 rounded-md" />
              </td>
              <td class="px-4 py-3 text-gray-700 font-medium">
                {{ reserva.livro.titulo }}
              </td>
              <td class="px-4 py-3 text-gray-600 text-sm">
                {{ formatarData(reserva.dataReserva) }}
              </td>
              <td class="px-4 py-3 text-sm">
                <span
                  :class="{
                    'text-red-500 font-bold': diasRestantes(reserva) <= 2,
                    'text-gray-700': diasRestantes(reserva) > 2,
                  }"
                >
                  {{ diasRestantes(reserva) }} dias
                </span>
              </td>
              <td class="px-4 py-3 text-center">
                <button
                  @click="renovarReserva(reserva)"
                  class="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded mr-2"
                >
                  Renovar
                </button>
                <button
                  @click="cancelarReserva(index)"
                  class="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-3 rounded"
                >
                  Cancelar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        reservas: [
          {
            livro: {
              titulo: "O Hobbit",
              foto: "@/assets/senhor.png",
            },
            dataReserva: "2024-11-25",
            dataDevolucao: "2024-12-05",
          },
          {
            livro: {
              titulo: "1984",
              foto: "https://via.placeholder.com/100x150",
            },
            dataReserva: "2024-11-20",
            dataDevolucao: "2024-12-01",
          },
        ],
      };
    },
    methods: {
      formatarData(data) {
        const options = { day: "2-digit", month: "2-digit", year: "numeric" };
        return new Date(data).toLocaleDateString("pt-BR", options);
      },
      diasRestantes(reserva) {
        const hoje = new Date();
        const devolucao = new Date(reserva.dataDevolucao);
        const diffTime = devolucao - hoje;
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      },
      renovarReserva(reserva) {
        alert(`Reserva de "${reserva.livro.titulo}" renovada com sucesso!`);
      },
      cancelarReserva(index) {
        if (confirm("Deseja realmente cancelar esta reserva?")) {
          this.reservas.splice(index, 1);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    background-color: #f9fafb;
  }
  </style>
  