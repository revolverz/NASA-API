<template>
  <div id="app">
    <div class="page">
      <div class="menu-drawer" v-if="currentUser">
        <ui-icon-button :toggle="burgerIcon" @click="toggleMenu"></ui-icon-button>
        <ui-drawer v-if="isOpened" :viewportHeight="true">
          <ui-drawer-header>
            <ui-drawer-title>NASA API</ui-drawer-title>
            <ui-drawer-subtitle>Data request service</ui-drawer-subtitle>
          </ui-drawer-header>
          <ui-drawer-content>
            <ui-nav>
              <ui-nav-item active><router-link to="/home">Домой</router-link></ui-nav-item>
              <ui-nav-item v-if="showAdminBoard"><router-link to="/admin">Админ панель</router-link></ui-nav-item>
              <ui-nav-item><router-link  to="/profile">Профиль</router-link></ui-nav-item>
              <ui-nav-item @click.prevent="logOut">Выйти</ui-nav-item>
            </ui-nav>
          </ui-drawer-content>
        </ui-drawer>
      </div>
      <router-view class="content"/>
      </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const store = useStore()
    const router = useRouter()
    const isOpened = ref(false)
    const burgerIcon = { on: 'menu_open', off: 'menu' }

    const currentUser = computed(function () {
      return store.state.auth.user
    })

    const showAdminBoard = computed(function () {
      if (currentUser.value?.roles) {
        return currentUser.value.roles.includes('ROLE_ADMIN')
      }

      return false
    })

    async function toggleMenu () {
      isOpened.value = !isOpened.value
    }

    async function logOut () {
      store.dispatch('auth/logout')
      router.push('/login')
    }

    return { logOut, currentUser, showAdminBoard, isOpened, toggleMenu, burgerIcon }
  }
}
</script>

<style lang="css">
  .page {
    display: flex;
  }

  .menu-drawer {
    display: flex;
    flex-direction: column;
  }

  .menu-drawer-burger {
    width: 30px;
  }

  .content {
    margin: 0 auto;
  }

</style>
