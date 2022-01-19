<template>
    <div class="auth-page">
        <form v-if="!loading" class="form" @submit.prevent>
            <div class="form__wrapper">
                <div class="form__header">
                    <ui-tab-bar v-model="activeTab">
                        <ui-tab>
                            {{ t('tab.SignInText') }}
                        </ui-tab>
                        <ui-tab>
                            {{ t('tab.SignUpText') }}
                        </ui-tab>
                        <!--<ui-tab>
                            {{ t('tab.ResetText') }}
                        </ui-tab>-->
                    </ui-tab-bar>
                </div>
                <ui-textfield
                    v-model="user.email"
                    input-type="email"
                    placeholder="email"
                    required
                    :attrs="{autocomplete: 'username'}"
                    class="form__input">
                </ui-textfield>
                <ui-textfield
                    v-if="signInTab || signUpTab"
                    v-model="user.password"
                    input-type="password"
                    placeholder="password"
                    required
                    :attrs="{autocomplete: 'off'}"
                    class="form__input"
                >
                </ui-textfield>
                <ui-textfield
                    v-if="signUpTab"
                    input-type="password"
                    placeholder="Repeat password"
                    required
                    :attrs="{autocomplete: 'current-password'}"
                    class="form__input"
                >
                </ui-textfield>
                <ui-button
                  outlined
                  class="form__button-submit"
                  @click="action"
                >
                  {{ t('btnSubmitText') }}
                </ui-button>
            </div>
        </form>
        <ui-spinner :active="loading" />
    </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import messages from './locales'
import { useToast } from 'balm-ui'

export default {
  setup () {
    const $toast = useToast()
    const store = useStore()
    const router = useRouter()

    const user = reactive({
      email: '',
      password: null
    })

    const loading = ref(false)
    const activeTab = ref(0)
    const { t } = useI18n({
      messages
    })

    const signInTab = computed(function () {
      return activeTab.value === 0
    })
    const signUpTab = computed(function () {
      return activeTab.value === 1
    })

    const loggedIn = computed(function () {
      return store.state.auth.status.loggedIn
    })

    onMounted(() => {
      if (loggedIn.value) {
        router.push('/profile')
      }
    })

    async function action () {
      loading.value = true

      if (signUpTab.value) {
        store.dispatch('auth/register', user)
          .then((response) => {
            console.log(response)
            loading.value = false
          })
          .catch(error => {
            loading.value = false

            console.log(error)
          })
      }

      if (signInTab.value) {
        store.dispatch('auth/login', user)
          .then(() => {
            router.push('/profile')
          })
          .catch(error => {
            console.log(error)
            loading.value = false
            $toast({
              message: error,
              position: 'top'
            })
          })
      }
    }

    return { action, user, activeTab, signInTab, signUpTab, loading, t }
  }

}
</script>

<style lang="css">
    .auth-page {
        height: 100vh;
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 200px;
        height: 100%;
    }

    .form__wrapper {
        width: 450px;
    }

    .form__header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }

    .form__input {
        margin-bottom: 10px;
        width: 100%;
    }

    .form__button-submit {
        width: 100%;
    }
</style>
