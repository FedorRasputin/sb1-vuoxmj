<template>
  <div class="folder-list">
    <h2>Folders</h2>
    <ul>
      <li v-for="folder in folders" :key="folder.id">
        {{ folder.name }}
        <button @click="editFolder(folder)">Edit</button>
        <button @click="deleteFolder(folder.id)">Delete</button>
      </li>
    </ul>
    <div>
      <input v-model="newFolderName" placeholder="New folder name">
      <button @click="addFolder">Add Folder</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FolderList',
  data() {
    return {
      folders: [],
      newFolderName: ''
    }
  },
  methods: {
    addFolder() {
      if (this.newFolderName) {
        this.folders.push({ id: Date.now(), name: this.newFolderName });
        this.newFolderName = '';
      }
    },
    editFolder(folder) {
      const newName = prompt('Enter new folder name', folder.name);
      if (newName) {
        folder.name = newName;
      }
    },
    deleteFolder(id) {
      this.folders = this.folders.filter(folder => folder.id !== id);
    }
  }
}
</script>