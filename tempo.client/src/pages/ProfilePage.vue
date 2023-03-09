<template>
  <div class="container-fluid">
    <div class="row justify-content-center mt-4">
      <div class="col-10 bigcardbg">
        <div class="row">
          <div class="col-6 p-1 d-flex justify-content-center p-4">
            <img :src="account.picture" :alt="account.name" class="profile-img ">
          </div>
          <div class="col-6 p-2  align-items-center text-light">
            <div>
              <h5 class="text-center">
                Scotty
              </h5>
            </div>
            <div>
              <b>
                Total Playlists: 0

              </b>
            </div>
            <div>
              <b>

                Favorite Genre: Ska
              </b>
            </div>
            <div>
              <b>

                Average BPM: 125
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 d-flex justify-content-evenly text-light">
        <div class="btn text-light filter-btn">
          <h3>

            Saved Playlists
          </h3>
        </div>
        <div class="btn text-light filter-btn">
          <h3>
            My Playlists

          </h3>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 cardbg">
        <PlaylistCard />
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import PlaylistCard from "../components/PlaylistCard.vue";

export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
  components: { PlaylistCard }
}
</script>


<style lang="scss" scoped>
.cardbg {
  background-color: #2b414169;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.bigcardbg {
  background-color: #2b4141d4;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.filter-btn {
  font-size: 15pt;
}

.profile-img {
  border-radius: 10px;
}
</style>