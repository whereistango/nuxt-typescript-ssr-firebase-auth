<template>
  <ForgetPasswordForm :send-password-reset-email="handleSendPasswordResetEmail"/>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator';
  import ForgetPasswordForm from "~/components/form/ForgetPasswordForm.vue";
  import { StateNamespace } from "~/types";

  @Component({
    components: { ForgetPasswordForm },
  })
  export default class ForgetPassword extends Vue {

    @StateNamespace.auth.Action sendPasswordResetEmail !: (code: any) => Promise<boolean>;
    @StateNamespace.notification.Action clearMessage !: () => void;

    handleSendPasswordResetEmail(emailAddress: string) {
      this.clearMessage();
      this.sendPasswordResetEmail(emailAddress);
    }
  }
</script>
