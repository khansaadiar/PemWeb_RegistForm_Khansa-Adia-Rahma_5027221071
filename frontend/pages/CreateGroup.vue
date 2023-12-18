<template>
  <div class="create-group-container">
    <div class="create-group-popup">
      <h1>Create Group</h1>
      <form @submit.prevent="createGroup">
        <label>
          Group Name:
          <input v-model="groupName" type="text" required />
        </label>
        <button type="submit">Create</button>
      </form>
      <button class="close-button" @click="closeCreateGroupPopup">×</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groupName: '',
    };
  },
  methods: {
    createGroup() {
      // Handle logic for creating the group
      // You can use this.groupName to get user input
      // Implement the logic to create the group, e.g., making an API request
      console.log(`Creating group: ${this.groupName}`);
      
      // After successfully creating, you might want to close the popup or navigate to another page
      this.closeCreateGroupPopup();
    },
    closeCreateGroupPopup() {
      // Close the create group popup
      this.$emit('closeCreateGroupPopup');
    },
  },
};
</script>

<style scoped>
.create-group-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}

.create-group-popup {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.create-group-popup h1 {
  margin-bottom: 20px;
}

.create-group-popup form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.create-group-popup label {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.create-group-popup input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.create-group-popup button {
  background-color: pink;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.create-group-popup button.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
