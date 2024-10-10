<template>
  <div class="link-list">
    <h2>RSS Links</h2>
    <ul>
      <li v-for="link in links" :key="link.id">
        {{ link.name }} - {{ link.url }}
        <button @click="editLink(link)">Edit</button>
        <button @click="deleteLink(link.id)">Delete</button>
        <router-link :to="'/feed/' + link.id">View Feed</router-link>
      </li>
    </ul>
    <div>
      <input v-model="newLinkName" placeholder="Link name">
      <input v-model="newLinkUrl" placeholder="RSS URL">
      <button @click="addLink">Add Link</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkList',
  data() {
    return {
      links: [],
      newLinkName: '',
      newLinkUrl: ''
    }
  },
  methods: {
    addLink() {
      if (this.newLinkName && this.newLinkUrl) {
        this.links.push({ id: Date.now(), name: this.newLinkName, url: this.newLinkUrl });
        this.newLinkName = '';
        this.newLinkUrl = '';
      }
    },
    editLink(link) {
      const newName = prompt('Enter new link name', link.name);
      const newUrl = prompt('Enter new RSS URL', link.url);
      if (newName && newUrl) {
        link.name = newName;
        link.url = newUrl;
      }
    },
    deleteLink(id) {
      this.links = this.links.filter(link => link.id !== id);
    }
  }
}
</script>