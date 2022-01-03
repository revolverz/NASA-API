<template>
  <div>
    <header>
      <h3>
        <strong>{{currentUser.username}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import messages from './locales'

export default {
  setup () {
    const { t } = useI18n({
      messages
    })
    const store = useStore()
    const router = useRouter()

    const currentUser = computed(function () {
      return store.state.auth.user
    })

    onMounted(() => {
      if (!currentUser.value) {
        router.push('/login')
      }
    })

    return { currentUser, t }
  }
}
</script>
