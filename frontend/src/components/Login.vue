<template>
    <div class="auth-page">
        <form class="form">
            <div class="form__wrapper">
                <div class="form__header">
                    <ui-tab-bar v-model="activeTab">
                        <ui-tab v-for="(tab, index) in tabs" :key="index"
                        >
                            {{tab.text}}
                        </ui-tab>
                    </ui-tab-bar>
                </div>
                <ui-textfield
                    input-type="email"
                    placeholder="email"
                    required
                    :attrs="{autocomplete: 'username'}"
                    class="form__input">
                </ui-textfield>
                <ui-textfield
                    v-if="authTab"
                    input-type="password"
                    placeholder="password"
                    required
                    :attrs="{autocomplete: 'off'}"
                    class="form__input"
                >
                </ui-textfield>
                <ui-textfield
                    v-if="loginTab"
                    input-type="password"
                    placeholder="Repeat password"
                    required
                    :attrs="{autocomplete: 'off'}"
                    class="form__input"
                >
                </ui-textfield>
            </div>
        </form>
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'

export default {
  setup () {
    const activeTab = ref(0)
    const tabs = ref(
      [{
        text: 'Sign in'
      },
      {
        text: 'Sign up'
      },
      {
        text: 'Reset'
      }]
    )

    const authTab = computed(function () {
      return activeTab.value === 0 || activeTab.value === 1
    })

    const loginTab = computed(function () {
      return activeTab.value === 1
    })

    onMounted(() => {
      console.log(('custom-style-1'))
    })

    return { tabs, activeTab, authTab, loginTab }
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
        width: 350px;
    }

    .form__input:last-of-type {
        margin-bottom: 0;
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
</style>
