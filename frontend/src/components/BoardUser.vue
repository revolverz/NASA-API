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
import { useToast } from 'balm-ui'

export default {
  name: 'User',
  setup () {
    const $toast = useToast()
    const content = ref('')

    onMounted(() => {
      UserService.getUserBoard()
        .then((response) => {
          content.value = response.data
        })
        .catch(error => {
          $toast({
            message: error,
            position: 'top'
          })
          console.log(error)
        })
    })

    return { content }
  }
}
</script>
