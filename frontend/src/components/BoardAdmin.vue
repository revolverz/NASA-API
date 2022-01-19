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
  name: 'Admin',
  setup () {
    const $toast = useToast()
    const content = ref('')

    onMounted(() => {
      UserService.getAdminBoard()
        .then((response) => {
          content.value = response.data
        })
        .catch(error => {
          console.log(error)
          $toast({
            message: error,
            position: 'top'
          })
        })
    })

    return { content }
  }
}
</script>
