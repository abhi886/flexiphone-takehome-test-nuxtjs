<script setup lang="ts">
const { status, data, signOut, signIn } = useAuth()
 function handleSignIn() {
     signIn('github');
}
function handleSignOut() {
    signOut({ callbackUrl: '/' })
}
</script>

<template>
  <div class="w-full max-w-6xl mx-auto bg-white px-5 py-4 rounded-t shadow-sm">
    <div class="flex items-center justify-between space-x-4">
      <div class="flex items-center space-x-4">
        <img
          v-if="status === 'authenticated' && data?.user?.image"
          class="w-12 h-12 rounded-full"
          :src="data.user.image"
          alt="User Avatar"
        >
        <h1 v-if="status === 'authenticated'" class="text-lg">
           {{ data?.user?.name }}!
        </h1>
      </div>
      <button v-if="status === 'authenticated'" class="flex items-center justify-center space-x-2 bg-blue-500 text-white rounded-lg py-2 px-3 text-lg" @click="handleSignOut">
        <span>Logout</span>
      </button>
      <button v-else class="flex items-center justify-center space-x-2 bg-blue-500 text-white rounded-lg py-2 px-3 text-lg" @click="handleSignIn">
        <span>Login</span>
      </button>
    </div>
  </div>
</template>