<script setup>
import {ref} from "vue";

let mutants = ref([
  { name: 'tank', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'ghost', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'smoker', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'cutter', attribute: '', skill: '', CD: '', damage: '', health: '' },
]);
</script>

<template>
  <div class="wrapper">
    <div class="table-ct">
      <table class="table">
        <thead>
        <tr>
          <th>name</th>
          <th>attribute</th>
          <th>skill</th>
          <th>CD</th>
          <th>damage</th>
          <th>health</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="mutant in mutants" :key="mutant.name">
            <td>{{ $t(`mutant.${mutant.name}`) }}</td>
            <td>{{ mutant.attribute }}</td>
            <td>{{ mutant.skill }}</td>
            <td>{{ mutant.CD }}</td>
            <td>{{ mutant.damage }}</td>
            <td>{{ mutant.health }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="pcss">
.wrapper{
  padding: 20px 5px 100px;
}
.table-ct{
  box-sizing: border-box;
  margin-top: 10px;
  padding: 0 10px;
  width: 100%;
  max-width: 1200px;
  overflow-x: auto;
}
.table{
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
  td, th{
    padding: 5px;
    border: 1px solid #ccc;
  }
  thead{
    background-color: rgba(0,0,0,.04);
    th{
      color: #444;
      font-weight: normal;
      text-align: left;
    }
  }
  tbody tr:nth-child(even){
    background-color: rgba(0,0,0,.04);
  }
}
</style>
