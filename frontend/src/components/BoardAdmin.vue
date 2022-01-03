<template>
  <div>
    <header>
      <h3>{{ content }}</h3>
    </header>
  </div>
</template>

<script>
import UserService from '../services/user.service'
import { ref, onMounted } from 'vue'

export default {
  name: 'Admin',
  setup () {
    const content = ref('')

    onMounted(() => {
      UserService.getAdminBoard()
        .then((response) => {
          this.content = response.data
        })
        .catch(error => {
          this.loading = false

          console.log(error)
        })
    })

    return { content }
  }
}
</script>
