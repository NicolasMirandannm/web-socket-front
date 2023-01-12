<template>
  <div class="home">
    <div class="panel">
      <h1>service export to excel</h1>
      <button class="button" @click="exportExcel()">Export excel file</button>
    </div>
    <div class="package">
      <h1>package export json excel</h1>

        <download-excel
          class="button"
          :data="jsonFile"
          :fields="json_fields"
          worksheet="My Worksheet"
          name="filename.xlsx"
        >
          Download Excel (you can customize this with html code!)
        </download-excel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8",
          },
        ],
      ],
      json_fields: {
        id: "id",
        nome: "name",
        idade: "age",
      },
      jsonFile: [
        {
          id: 1,
          name: ["nicolas", "teste", "teste2"],
          age: 20,
        },
        {
          id: 2,
          name: ["joao"],
          age: 21,
        },
        {
          id: 3,
          name: ["maria"],
          age: 20,
        },
        {
          id: 4,
          name: ["jose"],
          age: 23,
        },
        {
          id: 5,
          name: ["ana"],
          age: 21,
        },
        {
          id: 6,
          name: ["leticia"],
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.panel {
  height: 45%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(224, 215, 215);
}

.package {
  height: 45%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(224, 215, 215);
}

.button {
  height: 60px;
  width: 180px;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
  background: white;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 2px 1px;
}
</style>
