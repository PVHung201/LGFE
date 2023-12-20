<template>
  <div class="row">
    <div class="col-sm-12 col-md-5 ">
      <div class="dataTables_info" id="dataTableHover_info" role="status" aria-live="polite">
        {{$t('Total of member')}}: {{ page }}</div>
    </div>
    <div class="col-sm-12 col-md-7">
      <div class="dataTables_paginate paging_simple_numbers" id="dataTableHover_paginate">
        <ul class="pagination" id="paginate">

              <li class="page-item"><a class="page-link" href="#">{{ $t('Previous') }}</a></li>
              <li v-for="n in NumberOfPage " :key="n" class="page-item">

                <a class="page-link" href="#" @click="$emit('changePage', n-1)">{{ n }}</a>
              </li>


              <li class="page-item"><a class="page-link" href="#">{{ $t('Next') }}</a></li>

        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped type="text/css">

#paginate {
  justify-content: flex-end;
}
</style>


<script type="text/javascript">


export default {

  props: ['page'],

  setup(props) {
    console.log(props.page)
  },
  watch: {
  page(){
    this.NumberOfPage = this.page % 5 == 0 ? this.page / 5 : Math.floor(this.page / 5) + 1
  }
  },
  data() {
    return {
      pageNo: this.page,
      NumberOfPage: this.page % 5 == 0 ? this.page / 5 : Math.floor(this.page / 5) + 1
    }
  },


}

</script>
