<template>
    <HeaderCom/>
    <HeaderCommon/>

</template>

<script>


import HeaderCommon from '@/components/layout/HeaderCommon.vue'
import HeaderCom from '@/components/layout/HeaderCom.vue'

export default {
    component: {
        HeaderCommon,
        HeaderCom
    },
    components: {HeaderCommon, HeaderCom }
}
</script>
