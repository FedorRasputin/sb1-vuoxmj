<template>
  <div class="bg-white shadow rounded-lg p-6">
    <h2 class="text-xl font-semibold mb-4">RSS Feed</h2>
    <div v-if="loading" class="text-center py-4">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
    </div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <ul v-else class="space-y-4">
      <li v-for="item in feedItems" :key="item.id" class="border-b pb-4">
        <h3 class="text-lg font-medium">{{ item.title }}</h3>
        <p class="text-gray-600 mt-1">{{ item.description }}</p>
        <a :href="item.link" target="_blank" class="text-blue-500 hover:text-blue-700 mt-2 inline-block">Read more</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const feedItems = ref([])
const loading = ref(true)
const error = ref(null)

const fetchRssFeed = async () => {
  const linkId = route.params.id
  // In a real application, you would fetch the URL from your links data
  const rssUrl = 'https://example.com/rss-feed.xml'
  
  try {
    const response = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`)
    feedItems.value = response.data.items
    loading.value = false
  } catch (err) {
    error.value = 'Failed to load RSS feed'
    loading.value = false
  }
}

onMounted(fetchRssFeed)
</script>