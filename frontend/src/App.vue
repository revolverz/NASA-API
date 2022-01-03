<template>
  <div id="app">
    <nav>
      <div>
        <li>
          <router-link to="/home">
            Home
          </router-link>
        </li>
        <li v-if="showAdminBoard">
          <router-link to="/admin">Admin Board</router-link>
        </li>
        <li v-if="currentUser">
          <router-link  to="/profile">User</router-link>
        </li>
      </div>

      <div v-if="!currentUser">
        <li>
          <router-link to="/login">
            Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser">
        <li>
          <router-link to="/profile">
            {{ currentUser.username }}
          </router-link>
        </li>
        <li>
          <button @click.prevent="logOut">
            LogOut
          </button>
        </li>
      </div>
    </nav>

    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const store = useStore()
    const router = useRouter()

    const currentUser = computed(function () {
      return store.state.auth.user
    })

    const showAdminBoard = computed(function () {
      if (currentUser.value?.roles) {
        return currentUser.value.roles.includes('ROLE_ADMIN')
      }

      return false
    })

    async function logOut () {
      store.dispatch('auth/logout')
      router.push('/login')
    }

    return { logOut, currentUser, showAdminBoard }
  }
}
</script>
