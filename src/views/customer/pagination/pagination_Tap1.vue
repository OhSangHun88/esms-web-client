<template>
  <div>
    <div v-if="pageSetting.list.length" >
      <a href="#" 
      class="front"
      
      @click="pageSetting.currentPage !== 1 ? sendPage(1):''"
      >첫 페이지</a>
			    <a href="#" 
            class="prev"
            
            @click="pageSetting.first !== null ? sendPage(pageSetting.first) : ''"
          >이전 페이지</a>
			    <a href="#" 
            :class="{ on: page === pageSetting.currentPage }"
            v-for="page in pageSetting.list"
            :key="page"
            @click="sendPage(page)">
            {{ page }}</a>
			    <a href="#" 
            class="next"
            
            @click="pageSetting.end !== null ? sendPage(pageSetting.end) : ''"
          >다음 페이지</a>
			    <a href="#" class="back"
           @click="pageSetting.totalPage !==null ? sendPage(pageSetting.totalPage):''"
           >마지막 페이지</a>
    </div>
    
  </div>
</template>
 
<script>
  export default {
    props: ["pageSetting"],
    methods: {
      sendPage(page) {
        this.$emit("paging", page)
      }
    }
  }
</script>