<template>
  <body>
  <div id='#app' >
    <div id='titlebar'>
        <span>Matthew Palmer Webpage</span>
        <span class='right-align' style='font-size:16px'>Toggle Night Mode:</span>
        <rounded-switch ></rounded-switch>

        <!-- <button class='right-align'>Night Mode</button> -->
    </div>
    <div>
      <nav-bar id='#navbar'></nav-bar>
      <!-- <nav class='navbar'>
      <ul>
        <li>
          <router-link to='/'>Home</router-link>
        </li>
        <li>
          <router-link to='/Blog'>Blog</router-link>
        </li>
        <li>
          <router-link to='/Resume'>Resume</router-link>
        </li>
        <li>
          <router-link to='/About'>About</router-link>
        </li>
      </ul>
    </nav> -->
      <router-view id='pagecontainer'></router-view>
    </div>
  </div>
</body>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Switch from './components/Switch.vue';
export default {
  name: 'App',
  data() {
    return {
      show: 'Home',
      nightMode: true,
    }
  },
  computed: {
    basicStyling() {
      if (!this.nightMode) {
        return {'background-color': '#FFFFFF'}
      } else {
        return {'background-color': '#474A5E', 'color': 'white'}
      }

    }
  },
  components: {
    'nav-bar': NavBar,
    'rounded-switch': Switch,
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #FFFFFF;
  margin:0px;
  padding:0px;
}

#titlebar {
  width: 100%;
  height: 40px;
  background-color: rgb(0, 66, 128);
  /* text-align: center; */
  color: white;
  padding: 20px 20px 5px;
}

#titlebar > span {
  font-size: 25px;
  padding: 5px;
}

.right-align {
  margin-left: 55%;
}

#pagecontainer {
  margin-left:20%;
  padding:8px;
}



</style>
