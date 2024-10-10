<template>
  <div class="bg-white shadow rounded-lg p-6">
    <h2 class="text-xl font-semibold mb-4">RSS Links</h2>
    <ul class="space-y-4">
      <li v-for="link in links" :key="link.id" class="flex items-center justify-between border-b pb-2">
        <div>
          <span class="font-medium">{{ link.name }}</span>
          <span class="text-gray-500 ml-2">{{ link.url }}</span>
        </div>
        <div>
          <button @click="editLink(link)" class="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
          <button @click="deleteLink(link.id)" class="text-red-500 hover:text-red-700 mr-2">Delete</button>
          <router-link :to="'/feed/' + link.id" class="text-green-500 hover:text-green-700">View Feed</router-link>
        </div>
      </li>
    </ul>
    <div class="mt-4">
      <input v-model="newLinkName" placeholder="Link name" class="w-full px-2 py-1 border rounded mb-2">
      <input v-model="newLinkUrl" placeholder="RSS URL" class="w-full px-2 py-1 border rounded mb-2">
      <button @click="addLink" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Add Link</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const links = ref([])
const newLinkName = ref('')
const newLinkUrl = ref('')

const addLink = () => {
  if (newLinkName.value && newLinkUrl.value) {
    links.value.push({ id: Date.now(), name: newLinkName.value, url: newLinkUrl.value })
    newLinkName.value = ''
    newLinkUrl.value = ''
  }
}

const editLink = (link) => {
  const newName = prompt('Enter new link name', link.name)
  const newUrl = prompt('Enter new RSS URL', link.url)
  if (newName && newUrl) {
    link.name = newName
    link.url = newUrl
  }
}

const deleteLink = (id) => {
  links.value = links.value.filter(link => link.id !== id)
}
</script>