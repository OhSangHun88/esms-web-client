<template>
    <div class="wrap">

                <div class="result_txt">
                    <p>조회결과 : <strong class="num">{{!this.ENCount? 0 : this.ENCount}}</strong>건</p>
                </div>
                <div class="list result"><!-- 통신로그 선택시 -->
                    <table>
                        <colgroup>
                            <col style="width:auto;">
                            <col style="width:15%;">
                            <col style="width:15%;">
                            <col style="width:15%;">
                            <col style="width:15%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">로그일</th>
                                <th scope="col">출발지</th>
                                <th scope="col">목적지</th>
                                <th scope="col">태블릿아이디</th>
                                <th scope="col">고객아이디</th>
                                <th scope="col">로그</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:auto;">
                                <col style="width:15%;">
                                <col style="width:15%;">
                                <col style="width:15%;">
                                <col style="width:15%;">
                                <col style="width:auto;">
                            </colgroup>
                            <tbody>
                                <tr v-for="(item,index) in comLogItems" v-bind:key="index">
                                    <td>{{item.logDtime}}</td>
                                    <td>{{item.logSource}}</td>
                                    <td>{{item.logTarget}}</td>
                                    <td>{{item.tabletId}}</td>
                                    <td>{{item.recipientId}}</td>
                                    <td>{{item.logDetails}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="pagination mt0">
					<a href="#" class="front">첫 페이지</a>
					<a href="#" class="prev">이전 페이지</a>
					<a href="#" class="on">1</a>
					<a href="#">2</a>
					<a href="#">3</a>
					<a href="#">4</a>
					<a href="#">5</a>
					<a href="#">6</a>
					<a href="#">7</a>
					<a href="#">8</a>
					<a href="#">9</a>
					<a href="#">10</a>
					<a href="#" class="next">다음 페이지</a>
					<a href="#" class="back">마지막 페이지</a>
				</div>
            </div>
</template>
<style lang="scss">
@import '../../../assets/scss/common.css';
@import '../../../assets/scss/sub.css';
</style>

<script>

export default {
    name: 'Log2',

    props:{
        comLogItems: Array,
        s_date: String,
        e_date: String,
        ENCount: Number,
    },
    data(){
      return{
        tabletId: '',recipientId:'',
        isTablet: false, isCustomer: false,
        isComLog: false,
      }
    },
}
</script>
<style>
</style>