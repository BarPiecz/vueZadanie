<template>
   <div id='container'>
      <router-view :key="$route.path"></router-view>
   </div>
</template>


<style>
#container {
   height: calc(100vh - 56px);
   background-image: url('../assets/starwars.jpg');
   position: relative;
}
</style>
