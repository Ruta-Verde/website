<template>
  <div id="app">
    <div>
      <b-navbar toggleable="sm" type="dark" variant="info">
        <b-navbar-brand to="/">Logo</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item><b-link to="/">Home</b-link></b-nav-item>
            <b-nav-item><b-link to="/About">About</b-link></b-nav-item>
            <b-nav-item><b-link to="/Projects">Projects</b-link></b-nav-item>
            <b-nav-item><b-link to="/People">People</b-link></b-nav-item>
            <b-nav-item><b-link to="/Contact">Contact</b-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <b-link class="pr-3 pr-sm-0" to="/Donate">Donate</b-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      </b-navbar>
    </div>
    <div>
      <b-nav>
        <b-nav-item><b-link to="/">Home</b-link></b-nav-item>
        <b-nav-item><b-link to="/About">About</b-link></b-nav-item>
        <b-nav-item><b-link to="/Projects">Projects</b-link></b-nav-item>
        <b-nav-item><b-link to="/People">People</b-link></b-nav-item>
        <b-nav-item><b-link to="/Contact">Contact</b-link></b-nav-item>
        <b-nav-item><b-link to="/Donate">Donate</b-link></b-nav-item>
      </b-nav>
    </div>
    <div id="navigation">
      <!--      <router-link v-for="(page, path) in paths" :to="path"-->
      <!--        >{{ page }}}</router-link>-->
      <router-link to="/">Home</router-link> | |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/people">People</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/donate">Donate</router-link>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/people">People</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/donate">Donate</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// const paths = {
//   Home: "Home",
//   About: "/about",
//   Projects: "/projects",
//   People: "/people",
//   Contact: "/contact",
//   Donate: "/donate"
// };
// // export paths;
// export default {
//   name: "App",
//   data: function() {
//     return {
//       paths: [
//         { name: "Home", path: "/" },
//         { name: "About", path: "/about" },
//         { name: "Projects", path: "/projects" },
//         { name: "People", path: "/people" },
//         { name: "Contact", path: "/contact" },
//         { name: "Donate", path: "/donate" }
//       ]
//     };
//   }
// };
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
