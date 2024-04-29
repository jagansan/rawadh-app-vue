<template>
  <div>
    <v-app>
      <v-container>
        <v-tabs :value="tab">
          <v-tabs-slider color="primary-light"></v-tabs-slider>
            <v-tab
              v-for="(item, key) in tabs"
              :key="key"
              @click="tab = key"
            >
              Key: {{ key }}
            </v-tab>
        </v-tabs>
          
        <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="(item, key) in tabs"
              :key="key"
              :value="key"
            >
              Active Tab: {{ item }}
            </v-tab-item>
        </v-tabs-items>
        data.tab = {{ tab }}
      </v-container>
    </v-app>
  </div>
</template>
  
<script>
  import '../assets/style/css/themevariable.scss'
  import '../assets/style/css/style.css'
  export default {
    props: ["id"],
    data() {
      return {
        activeTab: `/user/${this.id}`,
        tabs: [
          { id: 1, name: "Task", route: `/user/${this.id}` },
          { id: 2, name: "Project", route: `/user/${this.id}/cameranametag` }
        ]
      };
    }
  };
</script>
  