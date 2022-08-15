<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />

  <li v-for="teacher in teachers" :key="teacher.id">
    {{ teacher.name }}
  </li>

  <button @click="addTeacher({id: 1, name: 'Chakkrey', age: 23})">Add Teacher</button>
  <button @click="removeTeacher()">Remove Teacher</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      teachers: state => state.teacherModule.teachers
    }),
  },
  methods: {
    addTeacher (newTeacher) {
      this.$store.dispatch('teacherModule/addNewTeacher', newTeacher)
    },
    removeTeacher () {
      this.$store.dispatch('teacherModule/removeTeacher')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
