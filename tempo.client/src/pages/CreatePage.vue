<template>
  <div class="container-fluid">
    <form>
      <div class="row justify-content-center mt-4">
        <div class="col-10">
          <label for="playlist-name" class="form-label">Playlist Name</label>
          <input type="text" class="form-control" name="playlist-name" id="playlist-name">
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-10">
          <label for="genre" class="form-label">Genre</label>
          <select class="form-select" id="genre" name="genre">
            <option value="rock">Rock</option>
            <option value="country">Country</option>
            <option value="edm">EDM</option>
            <option value="classical">Classical</option>
            <option value="jazz">Jazz</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-10">
          <label for="pace" class="form-label">Pace (per mile)</label>
          <div>
            <input type="range" class="pace-range" min="5" max="30" step="1" list="values">
            <datalist id="values">
              <option value="5" label="5">5</option>
              <option value="10" label="10">10</option>
              <option value="15" label="15">15</option>
              <option value="20" label="20">20</option>
              <option value="25" label="25">25</option>
              <option value="30" label="30">30</option>
            </datalist>
          </div>
        </div>
      </div>
    </form>
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
.pace-range {
  width: 75vw;
}

datalist {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  writing-mode: vertical-lr;
  width: 75vw;
}
</style>