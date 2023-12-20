<template>
  <div>
    <form class="form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="nama" class="label">Nama:</label>
        <input v-model="formData.nama" type="text" id="nama" class="input" required />
      </div>

      <div class="form-group">
        <label for="email" class="label">Email:</label>
        <input v-model="formData.email" type="email" id="email" class="input" required />
      </div>

      <div class="form-group">
        <label for="asalSekolah" class="label">Asal Sekolah:</label>
        <input v-model="formData.asalSekolah" type="text" id="asalSekolah" class="input" required />
      </div>

      <button type="submit" class="submit-btn">Regist Now</button>
    </form>

    <div v-if="successMessage" class="success-message-container">
      <p class="success-message">{{ successMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nama: "",
        email: "",
        asalSekolah: "",
      },
      successMessage: "",
    };
  },
  methods: {
    submitForm() {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString();

      // Data yang dikirim ke API
      const data = {
        nama: this.formData.nama,
        email: this.formData.email,
        asalSekolah: this.formData.asalSekolah,
        tanggalPendaftaran: formattedDate,
      };

      fetch("http://localhost:8000/api/registration/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.formData.nama = "";
          this.formData.email = "";
          this.formData.asalSekolah = "";
          this.successMessage = "Registration successful! You are registered.";
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff1c4;
  border-radius: 8px;
  border: 1px solid #f4d27e;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  width: 100%;
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
  width: 95%;
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
.success-message-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.success-message {
  color: green;
  margin-top: 10px;
}
</style>