<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Top navigation -->
      <nav class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center">
                <h1 class="text-xl font-bold text-gray-800">RSS Tracker</h1>
              </div>
              <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                <router-link v-for="item in navigation" :key="item.name" :to="item.href" class="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent">
                  {{ item.name }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Page content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <router-view></router-view>
        </div>
      </main>
    </div>

    <!-- Right sidebar -->
    <aside class="w-64 bg-white shadow-md">
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-4">Folders</h2>
        <ul class="space-y-2">
          <li v-for="folder in folders" :key="folder.id" class="flex items-center justify-between">
            <span>{{ folder.name }}</span>
            <button @click="watchFeed(folder.id)" class="text-blue-500 hover:text-blue-700">Watch</button>
          </li>
        </ul>
        <div class="mt-4">
          <input v-model="newFolderName" placeholder="New folder name" class="w-full px-2 py-1 border rounded">
          <button @click="addFolder" class="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600">Create Folder</button>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Links', href: '/links' },
]

const folders = ref([
  { id: 1, name: 'Tech News' },
  { id: 2, name: 'Science' },
])

const newFolderName = ref('')

const addFolder = () => {
  if (newFolderName.value) {
    folders.value.push({ id: Date.now(), name: newFolderName.value })
    newFolderName.value = ''
  }
}

const watchFeed = (folderId) => {
  router.push(`/feed/${folderId}`)
}
</script>