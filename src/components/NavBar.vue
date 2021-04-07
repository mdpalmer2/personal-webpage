<template>
  <nav class='navbar'>
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
    </nav>
</template>

<script>

export default {
  data() {
    return {
    }
  }
}
</script>

<style>

.navbar > ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width:20%;
  max-width:150px;
  background-color: rgb(0, 66, 128);
  height: 100%; /* Full height */
  position: fixed; /* Make it stick, even on scroll */
  overflow: auto; /* Enable scrolling if the sidenav has too much content */
}

.navbar > ul > li {

}

.navbar > ul > li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
.navbar > ul > li a:hover {
  background-color: rgba(0, 66, 128,0.5);
}
</style>
