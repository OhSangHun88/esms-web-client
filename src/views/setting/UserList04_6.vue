<template>
    <div class="wrap">
        <!--<HeaderComp></HeaderComp>-->
        <div class="container type-02">
            <div class="list_title_wrap">
                <span>관리</span>
                <i class="ico_nav"></i>
                <span class="on">관리자 목록</span>
            </div>
            <div class="box_search_wrap add_btn box_style">
                <div class="table_wrap">
                    <table>
                        <colgroup>
                            <col style="width:25%;">
                            <col style="width:25%;">
                            <col style="width:25%;">
                            <col style="width:25%;">
                        </colgroup>
                        <thead>
                            <th scope="row">시/도</th>
                            <th scope="row">시/군/구</th>
                            <th scope="row">관리기관</th>
                            <th scope="row">관리자</th>
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
                                    <input type="text" value="홍길동">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="btn_area">
                    <button type="button" class="btn">조회</button>
                </div>
            </div>
            <div class="one_box box_style">
                <div class="result_txt">
                    <p>관리기관 정보</p>
                </div>
                <div class="list result">
                    <table>
                        <colgroup>
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">시/도</th>
                                <th scope="col">시/군/구</th>
                                <th scope="col">관리기관명</th>
                                <th scope="col">대표 전화번호</th>
                                <th scope="col">담당지역</th>
                                <th scope="col">주소</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:auto;">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">용인시 사회복지관2관</a></td>
                                    <td><a href="#">031-223-4567</a></td>
                                    <td><a href="#">용인시 남구</a></td>
                                    <td><a href="#">경기도 용인시 처인구 344-1</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">용인시 사회복지관2관</a></td>
                                    <td><a href="#">031-223-4567</a></td>
                                    <td><a href="#">용인시 남구</a></td>
                                    <td><a href="#">경기도 용인시 처인구 344-1</a></td>
                                </tr>                               
                                <tr>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">용인시 사회복지관2관</a></td>
                                    <td><a href="#">031-223-4567</a></td>
                                    <td><a href="#">용인시 남구</a></td>
                                    <td><a href="#">경기도 용인시 처인구 344-1</a></td>
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
            <div class="one_box box_style mt30">
                <div class="result_txt">
                    <p>관리자 정보</p>
                </div>
                <div class="list result">
                    <table>
                        <colgroup>
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">시/도</th>
                                <th scope="col">시/군/구</th>
                                <th scope="col">관리기관명</th>
                                <th scope="col">관리자 구분</th>
                                <th scope="col">이름</th>
                                <th scope="col">전화번호</th>
                                <th scope="col">담당지역</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:auto;">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">용인시 사회복지관2관</a></td>
                                    <td><a href="#">응급요원</a></td>
                                    <td><a href="#">김철수</a></td>
                                    <td><a href="#">031-223-4567</a></td>
                                    <td><a href="#">용인시 남구</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">용인시 사회복지관2관</a></td>
                                    <td><a href="#">응급요원</a></td>
                                    <td><a href="#">김철수</a></td>
                                    <td><a href="#">031-223-4567</a></td>
                                    <td><a href="#">용인시 남구</a></td>
                                </tr>                               
                                <tr>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">용인시 사회복지관2관</a></td>
                                    <td><a href="#">응급요원</a></td>
                                    <td><a href="#">김철수</a></td>
                                    <td><a href="#">031-223-4567</a></td>
                                    <td><a href="#">용인시 남구</a></td>
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
        </div>
    </div>
</template>
<style lang="scss">
@import '../../assets/scss/common.css';
@import '../../assets/scss/sub.css';
</style>
<script>
import HeaderComp from "./HeaderComp.vue";
export default {
    name: 'UserListComponent',
    components : {
        HeaderComp
    },
    props: {
    
    }
}
</script>
<style>
</style>