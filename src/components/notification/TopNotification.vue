<template>
  <section class="section">
    <div class="container is-fullhd">
      <b-notification :active.sync="active"
                      :type="notificationMessage.type"
                      :has-icon="notificationMessage.hasIcon"
                      aria-close-label="Close message"
                      role="alert"
      >
        {{notificationMessage.message}}
      </b-notification>
    </div>
  </section>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator';
  import { NotificationMessage } from "~/types";

  @Component({
    components: {}
  })
  export default class TopNotification extends Vue {

    active = true

    @Prop({ required: true }) notificationMessage !: NotificationMessage;
    @Prop({ type: Function, required: true }) closed !: () => void;

    @Watch('active')
    onActiveChanged(value: boolean, oldValue: boolean) {
      if (!value) {
        this.closed()
      }
    }
  }
</script>
