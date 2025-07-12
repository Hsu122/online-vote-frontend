<template>
  <div>
    <nav class="bg-gray-100 p-4">
      <router-link to="/" class="mr-4">投票</router-link>
      <span class="text-gray-500 mx-2">/</span>
      <router-link to="/admin">後台管理</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
