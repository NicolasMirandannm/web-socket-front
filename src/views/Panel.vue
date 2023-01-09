<template>
  <div class="home">
    <div class="panel">
      <button @click="exportExcel()">Export excel file</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      hostName: "",
      jsonFile: [
        {
          id: 1,
          name: "nicolas",
          age: 20,
        },
        {
          id: 2,
          name: "joao",
          age: 21,
        },
        {
          id: 3,
          name: "maria",
          age: 20,
        },
        {
          id: 4,
          name: "jose",
          age: 23,
        },
        {
          id: 5,
          name: "ana",
          age: 21,
        },
        {
          id: 6,
          name: "leticia",
          age: 18,
        },
      ],
    };
  },
  methods: {
    exportExcel() {
      import("../services/ExportToExcel").then((excel) => {
        const Obj = this.jsonFile;
        const Header = ["id", "name", "age"];
        const Field = ["id", "name", "age"];
        const Data = this.formatJson(Field, Obj);

        excel.export_json_to_excel({
          header: Header,
          data: Data,
          sheetName: "Name Of Sheets",
          filename: "Report",
          autoWidth: true,
          bookType: "xlsx",
        });
      });
    },
    formatJson(filterData, jsonData) {
      return jsonData.map((json) =>
        filterData.map((j) => {
          return json[j];
        })
      );
    },
  },
};
</script>

<style scoped>
* {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.panel {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(224, 215, 215);
}

button {
  height: 60px;
  width: 180px;
  text-align: center;
  justify-content: center;
  cursor: pointer;
}
</style>
