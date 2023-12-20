<template>
  <div class="container" style="background-color: #fff4db;">
    <h2 class="text-center text-3xl font-bold mt-8">
      <span class="text-pink-500">Pendaftaran Lomba</span>
    </h2>
    <div class="flex justify-center mt-8">
      <router-link to="/daftar" class="btn btn-pink">Formulir Pendaftaran</router-link>
      <router-link to="/status" class="btn btn-blue ml-4">Cek Status Pendaftaran</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'PendaftaranLomba',
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

.text-3xl {
  font-size: 2rem;
}

.font-bold {
  font-weight: bold;
}

.mt-8 {
  margin-top: 2rem;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}

.btn-pink {
  background-color: #ff69b4;
  color: #fff;
}

.btn-blue {
  background-color: #a0c4e7;
  color: #fff;
}

.ml-4 {
  margin-left: 1rem;
}

.text-pink-500 {
  color: #ff69b4;
}
</style>