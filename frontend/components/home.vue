<template>
   <div>
    <LoginForm @login="handleLogin" />
    <!-- ... (komponen lain) -->
  </div>
  <div class="home">
    <div class="sidebar" :class="{ 'sidebar-closed': !sidebarOpen }">
      <div class="sidebar-header">
        <h2 class="app-title">ChatApp</h2>
        <button class="sidebar-toggle" @click="toggleSidebar">
          <i :class="sidebarOpen ? 'fas fa-chevron-left' : 'fas fa-chevron-right'"></i>
        </button>
        <div class="top-actions">
          <button class="menu-toggle" @click="toggleMenu">
            <i class="fas fa-ellipsis-v"></i>
          </button>
          <div class="menu" v-show="menuOpen" ref="menuRef">
            <button class="menu-item" @click="createChannel">Create Channel</button>
            <button class="menu-item" @click="joinChannel">Join Channel</button>
            <button class="menu-item" @click="logout">Logout</button>
          </div>
        </div>
      </div>
      <div class="sidebar-content">
        <div class="sidebar-actions">
        </div>
        <div class="sidebar-search">
          <input type="text" placeholder="Search" class="search-input">
          <i class="fas fa-search"></i>
        </div>
        <div class="sidebar-contacts">
          <div v-for="contact in contacts" :key="contact.id" class="contact-card" @click="selectContact(contact)">
            <img :src="contact.avatar" :alt="contact.name" class="contact-avatar">
            <div class="contact-info">
              <h3 class="contact-name">{{ contact.name }}</h3>
              <span class="contact-status" :class="[contact.online ? 'online' : 'offline']">
                {{ contact.online ? 'Online' : 'Offline' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chat">
      <div class="chat-header">
        <img :src="selectedContact.avatar" :alt="selectedContact.name" class="contact-avatar">
        <div class="contact-details">
          <h2 class="contact-name">{{ selectedContact.name }}</h2>
          <span class="contact-status" :class="[selectedContact.online ? 'online' : 'offline']">
            {{ selectedContact.online ? 'Online' : 'Offline' }}
          </span>
        </div>
      </div>
      <div class="chat-container-wrapper">
        <div class="chat-container">
          <div v-for="message in messages" :key="message.id" class="bubble" :class="{'mine': message.isMine, 'theirs': !message.isMine}">
            <p>{{ message.text }}</p>
            <span class="message-timestamp">{{ formatDate(message.timestamp) }}</span>
          </div>
        </div>
      </div>
      <div class="chat-input">
        <input type="text" v-model="newMessage" placeholder="Type your message" class="message-input">
        <button @click="sendMessage" class="send-button" :disabled="newMessage.length === 0">Send</button>
         
      </div>
    </div>
    <create-channel-form v-if="creatingChannel" @closeCreateChannelForm="closeCreateChannelForm" />
    <!-- <div class="create-channel-form"> -->
    <!-- <h2>Create Channel</h2> -->
 
    </div>
</template>

<script>
import CreateChannelForm from '@/components/CreateChannel.vue';
import JoinChannel from '@/pages/JoinChannel.vue';
import LoginForm from '~/pages/LoginForm.vue';
import { ref } from 'vue';

export default {
  data() {
    return {
      sidebarOpen: true,
      menuOpen: false,
      creatingChannel: false,
      contacts: [
        {
          id: 1,
          name: "John Doe",
          avatar: "khansa.jpg",
          online: true
        },
        {
          id: 2,
          name: "Jane Smith",
          avatar: "khansa2.png",
          online: false
        }
      ],
      selectedContact: {
        id: 1,
        name: "John Doe",
        avatar: "john-doe-avatar.jpg",
        online: true
      },
      messages: [
        {
          id: 1,
          text: "Hello!",
          isMine: true,
          timestamp: 1638856800000
        },
        {
          id: 2,
          text: "Hi there!",
          isMine: false,
          timestamp: 1638856860000
        }
      ],
      newMessage: ''
    };
  },
  methods: {
    handleLogin(user) {
      // Tangkap data user dari event login
      console.log('User logged in:', user);

      // Navigasikan ke halaman home
      this.$router.push('/home');
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        const menuButton = this.$refs.menuButton.getBoundingClientRect();
        this.menuPosition = {
          top: menuButton.bottom + 'px',
          left: menuButton.left + 'px',
        };
      }
    },

    closeMenu() {
      this.menuOpen = false;
    },

    createChannel() {
      this.creatingChannel = true;
      this.closeMenu();
    },
    closeCreateChannelForm() {
      this.creatingChannel = false;
    },

    joinChannel() {
      this.$router.push('/JoinChannel');
    },

    logout() {
      this.closeMenu();
    },

    setCurrentUser(user) {
      this.currentUser = user;
    },

    selectContact(contact) {
      this.selectedContact = contact;
    },
    sendMessage() {
      const newMessage = {
        id: this.messages.length + 1,
        text: this.newMessage,
        isMine: true,
        timestamp: Date.now()
      };
      this.messages.push(newMessage);
      this.newMessage = '';
    },
    formatDate(timestamp) {
      const date = new Date(timestamp);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    },
  },
  components: {
    'create-channel-form': CreateChannelForm
  }
};
</script>

<style>
.home {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 300px;
  background-color: pink;
  transition: 0.3s;
}

.sidebar-closed {
  width: 0;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
}

.app-title {
  color: pink;
  margin: 0;
}

.sidebar-toggle {
  background-color: transparent;
  border: none;
  color: pink;
  font-size: 20px;
  cursor: pointer;
}

.sidebar-content {
  padding: 20px;
}

.sidebar-search {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.top-actions {
  position: relative;
}

.menu {
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 1;
  min-width: 150px;
  border-radius: 5px;
  overflow: hidden;
  transition: opacity 0.3s, transform 0.3s;
  opacity: 0;
  transform: translateY(-10px);
}

.menu-item {
  cursor: pointer;
}

.create-channel-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.create-channel-form h2 {
  color: pink;
  margin-bottom: 10px;
}

.create-channel-form form {
  display: flex;
  flex-direction: column;
}

.create-channel-form label {
  color: pink;
  margin-bottom: 5px;
}

.create-channel-form input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid pink;
  border-radius: 5px;
}

.create-channel-form button {
  background-color: pink;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.top-actions:hover .menu,
.menu:hover {
  opacity: 1;
  transform: translateY(0);
}

.sidebar-actions {
  margin-top: 0px;
}

.search-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid pink;
  border-radius: 5px;
}

.fa-search {
  color: pink;
  margin-left: 10px;
}

.sidebar-contacts {
  overflow-y: auto;
  max-height: calc(100vh - 200px);
}

.contact-card {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

.contact-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.contact-name {
  margin: 0;
  color: pink;
}

.contact-status {
  font-size: 12px;
}

.online {
  color: green;
}

.offline {
  color: red;
}

.chat {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.chat-header {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: pink;
}

.contact-details {
  margin-left: 20px;
}

.contact-name {
  margin: 0;
  color: #fff;
}

.contact-status {
  font-size: 12px;
  color: #fff;
}

.chat-container-wrapper {
  flex-grow: 1;
  overflow-y: auto;
}

.chat-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.bubble {
  padding: 10px;
  border-radius: 10px;
  background-color: #eee;
}

.theirs {
  background-color: pink;
  align-self: flex-start;
}

.mine {
  background-color: #e91e63;
  align-self: flex-end;
  color: #fff;
}

.bubble p {
  margin: 0;
}

.message-card {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.message-bubble {
  padding: 10px;
  border-radius: 5px;
}

.message-bubble p {
  margin: 0;
}

.message-timestamp {
  font-size: 12px;
  color: gray;
}

.chat-input {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  position: sticky;
  bottom: 0;
}

.message-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid pink;
  border-radius: 5px;
}

.send-button {
  background-color: pink;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}

.send-button:disabled {
  background-color: lightgray;
  cursor: not-allowed;
}
</style>


