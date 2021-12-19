<template>
    <div class="auth-page">
        <form class="form" @submit.prevent>
            <div class="form__wrapper">
                <div class="form__header">
                    <ui-tab-bar v-model="activeTab">
                        <ui-tab>
                            {{ t('tab.SignInText') }}
                        </ui-tab>
                        <ui-tab>
                            {{ t('tab.SignUpText') }}
                        </ui-tab>
                        <ui-tab>
                            {{ t('tab.ResetText') }}
                        </ui-tab>
                    </ui-tab-bar>
                </div>
                <ui-textfield
                    v-model="emailValue"
                    input-type="email"
                    placeholder="email"
                    required
                    :attrs="{autocomplete: 'username'}"
                    class="form__input">
                </ui-textfield>
                <ui-textfield
                    v-if="signInTab || signUpTab"
                    v-model="passwordValue"
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
                >
                    {{ t('btnSubmitText') }}
                </ui-button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import messages from './locales'

export default {
  setup () {
    const emailValue = ref('')
    const passwordValue = ref('')

    const activeTab = ref(0)

    const signInTab = computed(function () {
      return activeTab.value === 0
    })

    const signUpTab = computed(function () {
      return activeTab.value === 1
    })

    const { t } = useI18n({
      messages
    })

    return { emailValue, passwordValue, activeTab, signInTab, signUpTab, t }
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
        height: 50px;
        width: 100%;
    }
</style>
