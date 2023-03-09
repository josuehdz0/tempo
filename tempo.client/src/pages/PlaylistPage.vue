<template>
  <div class="row justify-content-center">

    <!-- NOTE Playlist Info -->
    <div class="col-10 col-md-5 my-5 bigcardbg">

      <div class="row text-light py-3 px-1">
        <div class="col-6">
          picture
        </div>
        <div class="col-6">
          <h2>
            {{ playlist?.name }}
            Playlist Name
          </h2>
          <div>
            By {{ playlist?.creator.name }} Creator
          </div>
          <div>
            Runtime: (time)
          </div>
          <div>
            Tempo:(BPM)
          </div>
          <div class="text-end">
            <i class="mdi mdi-heart heart"></i>

          </div>
        </div>

      </div>


    </div>

  </div>

  <!-- NOTE Song Card goes here -->
  <div class="row justify-content-center">

    <div class="col-10 col-md-5 mt-4 songcardbg">
      <div class="row text-light py-3 px-1">
        <div class="col-3">
          picture
        </div>
        <div class="col-7">
          <h5>
            Song Name
          </h5>
          <div>
            By Artist
          </div>
        </div>
        <div class="col-2 d-flex justify-content-center align-items-center">
          <i class="mdi mdi-spotify spotify"></i>
        </div>
      </div>
    </div>

  </div>

  <!-- NOTE Comment form will go here -->
  <div class="row  justify-content-center">
    <div class="col-10 col-md-5 m-4 songcardbg">
      <div class="form-floating mt-4 mx-2">
        <textarea required class="form-control" placeholder="Leave a comment here" id="body" style="height: 100px"
          name="body"></textarea>
        <label for="floatingTextarea2" class="ps-4">Comment here!</label>
      </div>
      <div class=" d-flex justify-content-md-end mx-2">
        <button type="submit" class="btn btn-outline-light my-3 ">Post Comment</button>
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
.bigcardbg {
  background-color: #2b4141e1;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.heart {
  color: #F48668;
  font-size: 4vh;
}

.spotify {

  font-size: 7vh;
}

.ourbtn {
  background: #6290C3;
}

.songcardbg {
  background-color: #2b414169;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>