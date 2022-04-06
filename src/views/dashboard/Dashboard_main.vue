<template>
    <div class="wrap">
        <HeaderComp></HeaderComp>
        <!-- <HeaderComp2></HeaderComp2> -->
        <div class="container type-02">
            <div class="box_wrap">
                <div class="box_search_wrap box_style type_db">
                    <table>
                        <colgroup>
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:26%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead>
                            <th scope="row">시/도</th>
                            <th scope="row">시/군/구</th>
                            <th scope="row">관리기관</th>
                            <th scope="row"></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <select name="" id="">
                                        <option value="">서울시</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="" id="">
                                        <option value="">동대문구</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="" id="">
                                        <option value="">경기도 용인시 사회복지관 2관</option>
                                    </select>
                                </td>
                                <td>
                                    <div class="date_warp">
                                        <div class="customerBts" style="justify-content: flex-start;">
                                            <input type="date"/>
                                            <span class="tilde">~</span>
                                            <input type="date"/>
                                            <button type="button" class="btn">조회</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="top_info box_style">
                    <i class="ico_info_1"></i>
                    <div class="txt_area">
                        <p class="tit">총 설치 가구수</p>
                        <strong class="num">233,123</strong>
                    </div>
                </div>
                <div class="top_info type-l box_style">
                    <div class="top_half">
                        <i class="ico_info_2"></i>
                        <div class="txt_area">
                            <p class="tit">응급관리요원</p>
                            <strong class="num">1,251</strong>
                        </div>  
                    </div>
                    <div class="top_half">
                        <i class="ico_info_3"></i>
                        <div class="txt_area">
                            <p class="tit">생활관리사</p>
                            <strong class="num">231</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box_wrap">
                <div class="box_col3 box_style">차트 영역</div>
                <div class="box_col3 box_style">차트 영역</div>
                <div class="box_col3 box_style">차트 영역</div>
            </div>
            <div class="box_wrap">
                <div class="box_l chart box_style">
                    차트 영역
                </div>
                <div class="box_style box_r" style="height: 280px;">
                    차트 영역
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import '../../assets/scss/common.css';
@import '../../assets/scss/sub.css';

</style>
<script>
import HeaderComp from "./HeaderComp.vue";
import tap1 from "./Tap1.vue"
import tap2 from "./Tap2.vue"
import tap3 from "./Tap3.vue"
export default {
    name: 'UserDataComponent',
    data() {
    return {
        taptoggle:1,
        }
    },
    components : {
        HeaderComp,
        tap1,
        tap2,
        tap3,
    },
    props: {
    
    },
    methods:{
        tap(value){
            switch (value){
                case 1 : this.taptoggle=1 ;break;
                case 2 : this.taptoggle=2 ;break;
                case 3 : this.taptoggle=3 ;break;

            }
                
        }
    }
}
</script>
<style>

</style>