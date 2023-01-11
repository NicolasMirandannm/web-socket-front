<template>
  <div v-if="open">
    <div
      class="container"
      style="
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      "
    >
      <div style="width: 80%; overflow: auto;">
        <table
          style="
            border: 1px solid #ccc;
            border-collapse: collapse;
            margin: 0;
            padding: 0;
            width: 100%;
            table-layout: fixed;
          "
        >
          <thead>
            <tr
              style="
                background-color: #f1f1f1;
                border: 1px solid #ddd;
                padding: 0.35em;
              "
            >
              <th
                scope="col"
                style="padding: 0.625em;
                 text-align: centerfont-size: .85em;
                  letter-spacing: .1em;
                  text-transform: uppercase;"
                v-for="(header, i) in headers"
                :key="i"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              style="
                background-color: #fafafa;
                border: 1px solid #ddd;
                padding: 0.35em;
              "
              v-for="(user, i) in data"
              :key="i"
            >
              <td
                data-label="Account"
                style="padding: 0.625em; text-align: center"
                v-for="(atribute, i) in user"
                :key="i"
              >
                {{ atribute }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "window-portal",
  emits: ["close"],
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      windowRef: null,
      headers: ["id", "nome", "idade", "teste1", "teste2", "teste3", "teste1", "teste2", "teste3"],
      data: [
        {
          id: 1,
          nome: ['teste', 'teste2', 'teste3'],
          idade: 20,
        },
        {
          id: 2,
          nome: "joao",
          idade: 20,
        },
        {
          id: 2,
          nome: "jose",
          idade: 20,
        },
        {
          id: 1,
          nome: "nicolas",
          idade: 20,
        },
        {
          id: 2,
          nome: "joao",
          idade: 20,
        },
        {
          id: 2,
          nome: "jose",
          idade: 20,
        },
        {
          id: 1,
          nome: "nicolas",
          idade: 20,
        },
        {
          id: 2,
          nome: "joao",
          idade: 20,
        },
        {
          id: 2,
          nome: "jose",
          idade: 20,
        },
        {
          id: 1,
          nome: "nicolas",
          idade: 20,
        },
        {
          id: 2,
          nome: "joao",
          idade: 20,
        },
        {
          id: 2,
          nome: "jose",
          idade: 20,
        },
        {
          id: 1,
          nome: "nicolas",
          idade: 20,
        },
        {
          id: 2,
          nome: "joao",
          idade: 20,
        },
        {
          id: 2,
          nome: "jose",
          idade: 20,
        },
        {
          id: 1,
          nome: "nicolas",
          idade: 20,
        },
        {
          id: 2,
          nome: "joao",
          idade: 20,
        },
        {
          id: 2,
          nome: "jose",
          idade: 20,
        },
        {
          id: 1,
          nome: "nicolas",
          idade: 20,
        },
        {
          id: 2,
          nome: "joao",
          idade: 20,
        },
        {
          id: 2,
          nome: "jose",
          idade: 20,
        },
        {
          id: 1,
          nome: "nicolas",
          idade: 20,
        },
        {
          id: 2,
          nome: "joao",
          idade: 20,
        },
        {
          id: 2,
          nome: "jose",
          idade: 20,
        },
        {
          id: 1,
          nome: "nicolas",
          idade: 20,
        },
        {
          id: 2,
          nome: "joao",
          idade: 20,
        },
        {
          id: 2,
          nome: "jose",
          idade: 20,
        },
      ],
    };
  },
  watch: {
    open(newOpen) {
      if (newOpen) {
        this.openPortal();
      } else {
        this.closePortal();
      }
    },
  },
  methods: {
    openPortal() {
      this.windowRef = window.open(
        "",
        "",
        "width=1200,height=800,left=75,top=100"
      );
      this.windowRef.addEventListener("beforeunload", this.closePortal);
      // magic!
      this.windowRef.document.body.appendChild(this.$el);
    },
    closePortal() {
      if (this.windowRef) {
        this.windowRef.close();
        this.windowRef = null;
        this.$emit("close");
      }
    },
  },
  mounted() {
    if (this.open) {
      this.openPortal();
    }
  },
  beforeDestroy() {
    if (this.windowRef) {
      this.closePortal();
    }
  },
};
</script>
