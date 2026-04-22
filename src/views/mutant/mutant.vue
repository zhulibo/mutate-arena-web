<script setup>
import {ref} from "vue";

let mutants = ref([
  { name: 'Tank', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'Ghost', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'Smoker', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'Cutter', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'CorpseDriver', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'Cook', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'Echo', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'Generator', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'Venom', attribute: '', skill: '', CD: '', damage: '', health: '' },
]);
</script>

<template>
  <div class="wrapper">
    <div class="table-ct">
      <table class="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Attribute</th>
          <th>Skill</th>
          <th>CD</th>
          <th>Damage</th>
          <th>Health</th>
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
