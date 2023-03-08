<template>
  <div class="container-fluid">
    <div class="row justify-content-center mt-4">
      <div class="col-11 cardbg">
        <div class="row">
          <div class="col-5 p-2 d-flex justify-content-center">
            <img src="http://placekitten.com/110/110" alt="" class="profile-img rounded">
          </div>
          <div class="col-7 p-2 d-flex flex-column align-items-center justify-content-center">
            <div>
              <h5>
                Scotty
              </h5>
            </div>
            <div>
              Total Playlists: 0
            </div>
            <div>
              Favorite Genre: Ska
            </div>
            <div>
              Average BPM: 125
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 d-flex justify-content-evenly">
        <div class="btn text-dark">
          Saved Playlists
        </div>
        <div class="btn text-dark">
          My Playlists
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.cardbg {
  background-color: #2b414169;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.profile-img {}
</style>