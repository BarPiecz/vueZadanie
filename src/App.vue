
<template>
  <div id="app">
    <div>
      <SideMenu />
    </div>
    <MainScreen />
  </div>
</template>

<script>
import Menu from "./components/Menu";
import MainScreen from "./components/MainScreen";

export default {
  components: {
    SideMenu: Menu,
    MainScreen: MainScreen
  }
};
</script>
<style>
#app {
  display: flex;
  flex-direction: column;
  align-content: space-between;
}
</style>