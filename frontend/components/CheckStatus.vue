<template>
  <div class="container">
    <form class="form" @submit.prevent="checkStatus">
      <label for="email" class="label">Email:</label>
      <input v-model="email" type="email" id="email" class="input" required />
      <button type="submit" class="submit-btn">Cek Status</button>
    </form>

    <div v-if="registrationStatus" class="registration-info">
      <h2 class="info-title">Status Registrasi:</h2>
      <div class="card">
        <p><strong>Nama:</strong> {{ registrationStatus.nama }}</p>
        <p><strong>Email:</strong> {{ registrationStatus.email }}</p>
        <p><strong>Asal Sekolah:</strong> {{ registrationStatus.asalSekolah }}</p>
        <p><strong>Status:</strong> {{ registrationStatus.status }}</p>
        <p v-if="registrationStatus.tanggalPendaftaran"><strong>Tanggal Pendaftaran:</strong> {{ formatDate(registrationStatus.tanggalPendaftaran) }}</p>
      </div>
    </div>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      registrationStatus: null,
      errorMessage: null,
    };
  },
  methods: {
    checkStatus() {
      this.registrationStatus = null;
      this.errorMessage = null;

      fetch(`http://localhost:8000/api/registration/?email=${this.email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.docs && data.docs.length > 0) {
            const userRegistration = data.docs.find(registration => registration.email && registration.email.toLowerCase() === this.email.toLowerCase());
            if (userRegistration) {
              this.registrationStatus = userRegistration;
            } else {
              this.errorMessage = 'Tidak ditemukan registrasi dengan email yang diberikan.';
            }
          } else {
            this.errorMessage = 'Tidak ditemukan registrasi.';
          }
        })
        .catch(error => {
          console.error(error);
          this.errorMessage = 'Terjadi kesalahan saat mengambil status registrasi.';
        });
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
}

.registration-info {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: auto;
}
.form {
  width: 300px;
  margin-bottom: 20px;
}

.label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 6px;
  color: #ff69b4;
}

.input {
  width: 93%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #a0c4e7;
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-color: #87cefa;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #6ca6cd;
}


.info-title {
  color: #ff69b4;
  font-size: 18px;
  margin-bottom: 10px;
}

.card {
  border: 1px solid #ff69b4;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
  background-color: #fff1c4;
  max-width: 400px;
}

.card p {
  margin: 5px 0;
}

.error-message {
  color: red;
}
</style>