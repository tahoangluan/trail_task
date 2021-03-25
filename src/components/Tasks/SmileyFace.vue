<template>
  <div class="hello">
    <div>
      <h1 class="d-flex justify-content-between">
        Task 1: Recreate the smiley image only with html and css
        <button class="btn btn-sm btn-secondary float-right mr-2" @click="$router.go(-1)">GO BACK</button>
      </h1>
      <div class="smiley-image" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
        <div class="smiley-eyes-container d-flex justify-content-around" >
          <span class="smiley-eyes"></span>
          <span class="smiley-eyes"></span>
        </div>
        <div class="smiley-mouth-container" id="smiley-mouth-container-id" >
          <span class="smiley-mouth">
            <span class="smiley-tongue"></span>
          </span>
        </div>
        <div class="sad-mouth-container" id="sad-mouth-container-id" style="display: none">
          <span class="sad-mouth">
          </span>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import $ from 'jquery'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      hover: false,
    };
  },
  methods:{
    mouseover(){
      $( ".smiley-mouth-container" ).hide();
      $( ".sad-mouth-container" ).show();
    },
    mouseleave(){
      $( ".smiley-mouth-container" ).show();
      $( ".sad-mouth-container" ).hide();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sad-mouth-container{
    display: flex;
    justify-content: center;
    margin-top: 12%;
  }
  .sad-mouth{
    width: 150px;
    height: 60px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    border: 10px solid #956c04;
  }
  .smiley-tongue{
    display: inline-block;
    background-color: #c49608;
    height: 100px;
    width: 160px;
    margin-top: 14%;
    transform: rotate(
            270deg
    );
    clip-path: ellipse(14% 50%);
  }
  .smiley-eyes-container{
    margin-top:30%;
  }
  .smiley-mouth-container{
    display: flex;
    justify-content: center;
    margin-top: 12%;
  }
  .smiley-mouth{
    height: 100px;
    width: 200px;
    background-color: #956c04;
    border-bottom-left-radius: 100% 200%;
    border-bottom-right-radius: 100% 200%;
  }
  .smiley-eyes{
    height: 35px;
    width: 35px;
    background-color: #956c04;
    border-radius: 50%;
    display: inline-block;
  }
  .smiley-image{
    background-color: #efce3b ;
    border:2px solid;
    margin: 0 auto;
    width: 300px;
    height: 300px;
    border-radius: 100%;
  }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
