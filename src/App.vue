<template>
  <div id="app">
    <!--SmileyFace msg="Welcome to my solution"/>
    <userDisplay class="mt-5" msg="Task 2: Query datasets from url and display it graphically"/>
    <resulsts-of-function class="mt-5" msg= "Task 3: File results and print it to the browser or browser console"></resulsts-of-function-->
    <!--add-functionalities class="mt-5" msg="Task 4: Add some functionalities to the given HTML"></add-functionalities-->
   <div class="w-75 m-auto main-div">
       <the-header></the-header>
       <router-view
               :key="$route.fullPath"
               class="content-wrapper"
       />
       <the-footer></the-footer>
   </div>

  </div>
</template>

<script>
  /* eslint-disable */

  import SmileyFace from './components/Tasks/SmileyFace.vue'
import UsersDisplay from './components/Tasks/UsersDisplay.vue'
import ResulstsOfFunction from "@/components/Tasks/ResulstsOfFunction";
import AddFunctionalities from "@/components/Tasks/AddFunctionalities";
  import TheHeader from "@/components/TheHeader";
  import TheFooter from "@/components/TheFooter";

export default {
  name: 'App',
  components: {
      TheFooter,
    TheHeader,
    AddFunctionalities,
    ResulstsOfFunction,
    SmileyFace,
    userDisplay:UsersDisplay
  },

}
</script>

<style>
    .main-div{
        background-color: #d9dee3;
        border-radius: 10px;
    }
#app {
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
}
.content-wrapper {
    position: relative;
    max-width: 1340px;
    margin-left: auto;
    margin-right: auto;
}
</style>
