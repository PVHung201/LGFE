<template>
  <input
  @change="emitEvent"
  v-if="email2 === 'direct_input'"
    v-model="email3"
    rows="3"
    :placeholder="$t('type you domain email')"
    class="form-control"
  />
</template>

<script type="text/javascript">

export default {
    props: ['email2'],
    data() {
        return {
            email3: null
        }
    },

    methods: {
        emitEvent(){
            this.$emit('updateEmail',this.email3)
        }
    }
}
</script>

