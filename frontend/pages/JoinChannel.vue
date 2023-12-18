<template>
  <div class="join-channel-container">
    <div class="join-channel-popup">
      <h1>Join Channel</h1>
      <form @submit.prevent="joinChannel">
        <label>
          Select Channel:
          <select v-model="selectedChannel" required>
            <option v-for="channel in availableChannels" :key="channel.id" :value="channel.id">
              {{ channel.name }}
            </option>
          </select>
        </label>
        <button type="submit">Join</button>
      </form>
      <button class="close-button" @click="closeJoinChannelPopup">×</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedChannel: null,
    };
  },
  props: {
    availableChannels: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    joinChannel() {
      if (this.selectedChannel !== null) {
        // Handle logic for joining the selected channel
        const selectedChannel = this.availableChannels.find(channel => channel.id === this.selectedChannel);
        console.log(`Joining channel: ${selectedChannel.name}`);
        
        // After successfully joining, you might want to close the popup or navigate to another page
        this.closeJoinChannelPopup();
      }
    },
    closeJoinChannelPopup() {
      // Close the join channel popup
      this.$emit('closeJoinChannelPopup');
    },
  },
};
</script>

<style scoped>
.join-channel-container {
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

.join-channel-popup {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.join-channel-popup h1 {
  margin-bottom: 20px;
}

.join-channel-popup form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.join-channel-popup label {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.join-channel-popup select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.join-channel-popup button {
  background-color: pink;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.join-channel-popup button.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
