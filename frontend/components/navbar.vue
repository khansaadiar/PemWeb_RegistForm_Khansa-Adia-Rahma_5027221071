<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <h1 class="app-title">ChatApp</h1>
      <div class="online-indicator"></div>
    </div>
    <div class="nav-links">
      <div class="nav-icons">
        <i class="fas fa-comment"></i>
        <i class="fas fa-phone"></i>
        <i class="fas fa-bell"></i>
        <button class="profile-button" @click="viewProfile">
          <img src="public/khansa.jpg" alt="Profile Picture">
        </button>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Search">
        <i class="fas fa-search"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    viewProfile() {
      // Logika untuk menampilkan profil pengguna
      console.log('View profile');
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ff5f9a; /* Warna pink */
  color: #fff;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.app-title {
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}

.online-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #4ca88e;
}

.search-bar {
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: #ff80bf; /* Warna pink */
  border-radius: 20px;
}

.search-bar input {
  border: none;
  background-color: transparent;
  color: #fff;
  padding: 5px;
}

.search-bar i {
  margin-left: 5px;
  color: #fff;
  cursor: pointer;
}

.nav-icons {
  display: flex;
  align-items: center;
}

.nav-icons i {
  margin-right: 10px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}

.profile-button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.profile-button img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>