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

<script setup>
import { ref } from 'vue'

const folders = ref([])
const newFolderName = ref('')

const addFolder = () => {
  if (newFolderName.value) {
    folders.value.push({ id: Date.now(), name: newFolderName.value })
    newFolderName.value = ''
  }
}

const editFolder = (folder) => {
  const newName = prompt('Enter new folder name', folder.name)
  if (newName) {
    folder.name = newName
  }
}

const deleteFolder = (id) => {
  folders.value = folders.value.filter(folder => folder.id !== id)
}
</script>