<template>
  <section class="section">
    <div class="container is-fullhd">
      <div class="columns is-centered">

        <div class="column is-half">
          <SocialLogin :title="$t('form.social.title.login')" :providers="providers" :callback="noCallback"
                       :reauthenticate="false"/>
        </div>

        <div class="column is-half">
          <LoginForm :sign-in-with-email="handleSignInWithEmail" :callback="noCallback"/>
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import SocialLogin from "~/components/form/SocialLogin.vue";
  import LoginForm from "~/components/form/LoginForm.vue";
  import { LoginCredentials, ProviderType, StateNamespace, SupportedProviders } from "~/types";

  @Component({
    components: { SocialLogin, LoginForm },
  })
  export default class login extends Vue {

    @StateNamespace.auth.Action signInWithEmail !: (credentials: LoginCredentials) => void;
    @StateNamespace.notification.Action clearMessage !: () => void;

    handleSignInWithEmail(credentials: LoginCredentials) {
      this.clearMessage();
      this.signInWithEmail(credentials);
    }

    get providers() {
      return SupportedProviders.filter(value => value.providerType !== ProviderType.password)
    }

    noCallback() {
    }

  }
</script>
