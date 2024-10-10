<template>
  <div class="rss-feed">
    <h2>RSS Feed</h2>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="item in feedItems" :key="item.id">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <a :href="item.link" target="_blank">Read more</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RssFeed',
  data() {
    return {
      feedItems: [],
      loading: true,
      error: null
    }
  },
  created() {
    this.fetchRssFeed();
  },
  methods: {
    async fetchRssFeed() {
      const linkId = this.$route.params.id;
      // In a real application, you would fetch the URL from your links data
      const rssUrl = 'https://example.com/rss-feed.xml';
      
      try {
        const response = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
        this.feedItems = response.data.items;
        this.loading = false;
      } catch (error) {
        this.error = 'Failed to load RSS feed';
        this.loading = false;
      }
    }
  }
}
</script>