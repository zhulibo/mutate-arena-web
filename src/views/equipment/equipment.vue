<script setup>
import {ref} from "vue";

let equipments = ref([
  { name: 'MP5', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: '-', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'AK47', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'M4A1', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: '-', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'M870', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: '-', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'M60', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'PKM', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'MAG', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'M249', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: '-', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'GM6 Lynx', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: '-', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'Glock17', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'Desert Eagle', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'M1911', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: '-', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'Kukri', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'Military Shovel', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'Fire axe', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'Kitchen Knife', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'Katana', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: '-', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'Grenade', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'Flashbang', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'Smoke', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'Fire Bottle', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'Shock', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: '-', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'AK47 Cyclone', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'MG42', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'AA12', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
  { name: 'M134', damage: '', fireRate: '', ammo: '', reloadTime: '', moveSpeed: '' },
]);
</script>

<template>
  <div class="wrapper">
    <div class="table-ct">
      <table class="table">
        <thead>
        <tr>
          <th>name</th>
          <th>damage</th>
          <th>fire rate</th>
          <th>ammo</th>
          <th>reload time</th>
          <th>move speed</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="equipment in equipments" :key="equipment.name">
          <td>{{ equipment.name }}</td>
          <td>{{ equipment.damage }}</td>
          <td>{{ equipment.fireRate }}</td>
          <td>{{ equipment.ammo }}</td>
          <td>{{ equipment.reloadTime }}</td>
          <td>{{ equipment.moveSpeed }}</td>
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
