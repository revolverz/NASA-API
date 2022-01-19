<template>
  <ui-card class="profile">
    <ui-card-content>
      <ui-card-text>
        <header>
          <h3>
            <strong>{{currentUser.username}}</strong> Profile
          </h3>
        </header>
      </ui-card-text>
      <ui-card-text>
        <p>
          <strong>Id:</strong>
          {{currentUser.id}}
        </p>
      </ui-card-text>
      <ui-card-text>
        <p>
          <strong>Email:</strong>
          {{currentUser.email}}
        </p>
      </ui-card-text>
      <ui-card-text>
        <strong>Authorities:</strong>
        <ul>
          <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
        </ul>
      </ui-card-text>
    </ui-card-content>
  </ui-card>
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

<style lang="css">

  .profile {
    margin-top: 100px;
    height: max-content;
    background-color: color.$red-800;;
  }

</style>
