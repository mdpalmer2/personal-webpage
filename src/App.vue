<template>
  <div id="app">
    <span>Matthew Palmer's Sweet Website</span>
    <nav class='option-bar'>
      <ul width='100%'>
        <li @click='setShow("Home")' :style='{"background-color": show ==="Home" ? "green" : "gray"}'>Home</li>
        <li @click='setShow("Blog")' :style='{"background-color": show ==="Blog" ? "green" : "gray"}'>Blog</li>
        <li @click='setShow("Resume")' :style='{"background-color": show ==="Resume" ? "green" : "gray"}'>Resume</li>
        <li @click='setShow("About")' :style='{"background-color": show ==="About" ? "green" : "gray"}'>About</li>
      </ul>
    </nav>
    <home v-if='show === "Home"'>This is Home</home>
    <blog v-if='show === "Blog"'>This is Blog</blog>
    <resume v-if='show === "Resume"'>This is Resume</resume>
    <about v-if='show === "About"'></about>
  </div>
</template>

<script>
import About from './components/About.vue'
import Resume from './components/Resume.vue'
import Home from './components/Home.vue'
import Blog from './components/Blog.vue'

export default {
  name: 'App',
  data() {
    return {
      show: 'Home',
    }
  },
  components: {
    'about': About,
    'resume': Resume,
    'home': Home,
    'blog': Blog,
  },
  methods: {
    setShow(name) {
      this.show = name
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* background-color: #d1e0ab; */
  margin-top: 60px;
}
.option-bar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  align: center;
}
.option-bar li {
  display: block;
  display: inline;
  color: black;
  text-align: center;
  padding: 14px 16px;
}
</style>
