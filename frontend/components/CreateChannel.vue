<template>
    <div class="create-channel-form">
      <h2>Create a New Channel</h2>
      <form @submit.prevent="createChannel">
        <label for="channelName">Channel Name:</label>
        <input v-model="channelName" type="text" id="channelName" required>
        <button type="submit">Create Channel</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        channelName: ''
      };
    },
    methods: {
      createChannel() {
        // You can implement the logic to create a channel here
        console.log('Creating channel:', this.channelName);
  
        // Close the create channel form
        this.$emit('closeCreateChannelForm');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styling for the create channel form */
  </style>
  