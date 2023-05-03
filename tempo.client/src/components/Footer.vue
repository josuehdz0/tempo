<template>
  <div class="bdy">
    <div class="navigation myrounded">
      <ul>
        <li ref="listItem1" :class="{ list: true, active: activeLink === 'home' }" @click="activateLink('home')">
          <a href="#">
            <span class="icon">
              <router-link :to="{ name: 'Home' }">
                <i class="mdi mdi-home fs-1 text-dark"></i>
              </router-link>
            </span>
            <span class="text">Home</span>
          </a>
        </li>
        <li ref="listItem2" :class="{ list: true, active: activeLink === 'profile' }" @click="activateLink('profile')">
          <a v-if="account.id">
            <span class="icon">
              <i class="mdi mdi-account fs-1 text-dark" @click="getMyProfile()"></i>
            </span>
            <span class="text">Profile</span>
          </a>
          <a v-else>
            <span class="icon">
              <i class="mdi mdi-login fs-1 text-dark" @click="login()">
              </i>
            </span>
            <span class="text">Login

            </span>
          </a>
        </li>
        <li ref="listItem3" :class="{ list: true, active: activeLink === 'create' }" @click="activateLink('create')">
          <a href="#">
            <span class="icon">
              <router-link :to="{ name: 'CreatePlaylist' }">
                <i class="mdi mdi-plus-circle fs-1 text-dark"></i>
              </router-link>
            </span>
            <span class="text">Create</span>
          </a>
        </li>

        <div class="indicator"></div>
        <div class="indicatorshadow"></div>
      </ul>
    </div>
  </div>



  <!-- <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
    <div>
      <b>
        <h3 class="mdi mdi-home" title="home"></h3>
      </b>
    </div>
  </router-link>


  <div v-if="account.id" @click="getMyProfile()">
    <b>

      <h3 class="mdi mdi-account" title="profile"></h3>
    </b>
  </div>
  <div v-else>
    <Login />
  </div>



  <router-link class="navbar-brand d-flex" :to="{ name: 'CreatePlaylist' }">
    <div>
      <b>
        <h3 class="mdi mdi-plus-circle" title="create"></h3>

      </b>
    </div>
  </router-link> -->
</template>


<script>
import { computed } from 'vue'
import { router } from '../router.js'
import { AppState } from '../AppState.js'
import Login from "./Login.vue"
import { AuthService } from "../services/AuthService.js"


export default {
  setup() {
    return {
      activeLink: "home",
      appState: computed(() => AppState),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithRedirect()
      },
      getMyProfile() {
        const account = AppState.account;
        router.push({ name: "Profile", params: { profileId: account.id } });
      }
    };
  },
  methods: {
    activateLink(link) {
      const list = this.$refs;
      Object.values(list).forEach((item) => {
        item.classList.remove("active");
      });
      this.activeLink = link;
      this.$refs[`listItem${link === "home" ? 1 : link === "profile" ? 2 : 3}`].classList.add("active");
    },
  },
  components: { Login }
}
</script>


<style lang="scss" scoped>
* {
  // margin: 0;
  padding: 0;
  // box-sizing: border-box;
}

.bdy {
  display: flex;
  justify-content: center;
  align-items: center;
  // min-height: 100vh;
  // background: #222327;
}

.navigation {
  position: relative;
  width: 400px;
  height: 70px;
  background: #e9ecef;
  display: flex;
  justify-content: center;
  align-items: center;
  // border-radius: 10px;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.202);

}

.navigation ul {
  display: flex;
  justify-content: center;
  // padding: 0;
  // width: 350px;

}

.navigation ul li {
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;
}

.navigation ul li a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
}

.navigation ul li a .icon {
  position: relative;
  display: block;
  line-height: 75px;
  font-size: 1.5em;
  text-align: center;
  transition: 0.5s;
  color: black;
}

.navigation ul li.active a .icon {
  transform: translateY(-34px);
}

.navigation ul li a .text {
  position: absolute;
  color: black;
  font-weight: 400;
  font-size: 0.75em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
}

.navigation ul li.active a .text {
  opacity: 1;
  transform: translateY(10px);
  font-size: 500;
}

.indicator {
  position: absolute;
  top: -55%;
  width: 70px;
  height: 70px;
  background-color: rgb(161, 173, 142);
  border-radius: 50%;
  border: 6px solid #e9ecef;
  // box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.409);
}

.indicatorshadow {
  position: absolute;
  top: -55%;
  width: 70px;
  height: 70px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.202);

  z-index: -1;
}

.indicator::before {
  content: '';
  position: absolute;
  top: 31%;
  left: -20px;
  width: 15px;
  height: 15px;
  // background: black;
  border-bottom-right-radius: 10px;
  box-shadow: 5px 5px 0px 0px #e9ecef;
}

.indicator::after {
  content: '';
  position: absolute;
  top: 31%;
  right: -20px;
  width: 15px;
  height: 15px;
  background: transparent;
  border-bottom-left-radius: 10px;
  box-shadow: -5px 5px 0px 0px #e9ecef;
}

.navigation ul li:nth-child(1).active~.indicator {
  transform: translateX(calc(70px*-1));
  transition: 0.5s;
}

.navigation ul li:nth-child(1).active~.indicatorshadow {
  transform: translateX(calc(70px*-1));
  transition: 0.5s;
}

.navigation ul li:nth-child(2).active~.indicator {
  transform: translateX(calc(70px*0));
  transition: 0.5s;
}

.navigation ul li:nth-child(2).active~.indicatorshadow {
  transform: translateX(calc(70px*0));
  transition: 0.5s;
}

.navigation ul li:nth-child(3).active~.indicator {
  transform: translateX(calc(70px*1));
  transition: 0.5s;
}

.navigation ul li:nth-child(3).active~.indicatorshadow {
  transform: translateX(calc(70px*1));
  transition: 0.5s;
}

.myrounded {
  border-radius: 10px 10px 0px 0px;
}

@media only screen and (max-width: 425px) {
  .myrounded {
    border-radius: 0px;
  }

  .navigation {
    position: relative;
    // box-sizing: border-box;
    width: 100vw;
    height: 70px;
    background: #e9ecef;
    display: flex;
    justify-content: center;
    align-items: center;
    // border-radius: 10px;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.202);


  }
}
</style>