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
  name: 'Home',
  setup () {
    const content = ref('')

    onMounted(() => {
      UserService.getPublicContent()
        .then((response) => {
          console.log(response)
          content.value = response.data
        })
        .catch(error => {
          console.log(error)
        })
    })

    return { content }
  }
}
</script>
