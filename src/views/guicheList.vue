<template>
  <div class="container">
    <div class="wrapper" v-if="!isIdle">
      <h1 class="title">Guichês em uso</h1>

      <div>{{ isIdle }}</div>

      <div class="table-wrapper">
        <table class="table" >
          <thead>
            <tr>
              <th scope="col">Guichê</th>
              <th scope="col">Colaborador conectado</th>
              <th scope="col">Status de uso</th>
              <th scope="col">Desconectar guichê do usuário</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(guiche, index) in guiches" :key="index">
              <td>{{ guiche.name }}</td>
              <td>{{ guiche.user.name }}</td>
              <td>{{ guiche.useStatus }}</td>
              <td>
                <button class="desconnect-button">Desconectar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else style="font-size: 100px">
      {{ teste }}
    </div>
  </div>
</template>

<script>
export default {
  name: "GuicheList",
  data() {
    return {
      guiches: [
        {
          name: "Guiche-01",
          user: {
            name: "Nicolas Leonardo Miranda Lima",
          },
          useStatus: "Livre",
        },
      ],
      teste: ""
    };
  },
  computed: {
		isIdle() {
			return this.$store.state.idleVue.isIdle;
		}
	},


  watch: {
    isIdle(newVal) {
      if(newVal) {
        this.teste = 'INATIVO'
      }
    }
  }
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #636363;
}

.wrapper {
  height: 500px;
  width: 800px;
  background: white;
  border-radius: 3px;
  box-shadow: 0px 1px 2px 0.5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 25px 5px;
}

.table-wrapper {
  width: 90%;
  height: 90%;
}
.table {
  border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.table thead tr {
    background-color: #007a98;
    color: #ffffff;
    text-align: center;
}

.table th, .table td {
  padding: 12px 15px;
  text-align: center;
}

.table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.table tbody tr:last-of-type {
    border-bottom: 2px solid  #007a98;
}

.table tbody tr.active-row {
    font-weight: bold;
    color: #007a98;
}

</style>
