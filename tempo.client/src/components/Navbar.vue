<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 py-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <i class="mdi mdi-metronome"></i>
      <b>
        TEMPO

      </b>
    </router-link>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <div class="row justify-content-between d-md-none">
        <div class="col-3 d-flex align-items-center">
          <ul class="navbar-nav  ">
            <li>
              <router-link :to="{ name: 'About' }" class="btn lighten-30 selectable text-uppercase">
                About
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-6">

          <div class="row">
            <div class="col-8 text-center">
              <button class="btn btn-outline-dark my-2">
                Link to <i class="mdi mdi-spotify"></i>
              </button>
            </div>
            <div class="col-4">
              <!-- LOGIN COMPONENT HERE -->
              <Login />
            </div>
          </div>

        </div>

      </div>
      <div class="d-none d-md-block">

        <button>
          <router-link :to="{ name: 'About' }" class="btn lighten-30 selectable text-uppercase">
            About
          </router-link>
        </button>




        <div class="text-center">
          <button class="btn btn-outline-dark my-2">
            Link to <i class="mdi mdi-spotify"></i>
          </button>
        </div>
        <div class="">
          <!-- LOGIN COMPONENT HERE -->
          <Login />
        </div>



      </div>
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
