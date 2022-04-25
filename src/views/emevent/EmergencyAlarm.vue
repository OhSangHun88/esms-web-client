<template>
    <div class="wrap">
        <HeaderComp></HeaderComp>
        <div class="container type-02">
            <div class="list_title_wrap">
                <span>이벤트 리포트</span>
                <i class="ico_nav"></i>
                <span class="on">응급 알람</span>
            </div>
            <div class="box_search_wrap add_btn box_style">
                <div class="table_wrap">
                    <table>
                        <colgroup>
                            <col style="width:15.6%;">
                            <col style="width:15.6%;">
                            <col style="width:15.6%">
                            <col style="width:15.6%;">
                            <col style="width:15.6%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead>
                            <th scope="row">시/도</th>
                            <th scope="row">시/군/구</th>
                            <th scope="row">관리기관</th>
                            <th scope="row">대상자명</th>
                            <th scope="row">조치유형</th>
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
                                <td>
                                    <select name="" id="">
                                        <option value="">조치유형</option>
                                    </select>
                                </td>
                                <td>
                                    <div class="date_warp">
                                        <div class="customerBts" style="justify-content: flex-start;">
                                            <input type="date"/>
                                            <span class="tilde">~</span>
                                            <input type="date"/>
                                        </div>
                                    </div>
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
                    <p>조회결과 : <strong>235</strong>건</p>
                </div>
                <div class="list result">
                    <table>
                        <colgroup>
                            <col style="width:6%;">
                            <col style="width:8%;">
                            <col style="width:6%;">
                            <col style="width:auto;">
                            <col style="width:6%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">대상자명</th>
                                <th scope="col">대상자 전화번호</th>
                                <th scope="col">나이</th>
                                <th scope="col">주소</th>
                                <th scope="col">이름</th>
                                <th scope="col">생활관리사 전화번호</th>
                                <th scope="col">종류</th>
                                <th scope="col">발생일시</th>
                                <th scope="col">테스트 모드</th>
                                <th scope="col">조치유형</th>
                                <th scope="col">조치일시</th>
                                <th scope="col">조치내역</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:6%;">
                                <col style="width:8%;">
                                <col style="width:6%;">
                                <col style="width:auto;">
                                <col style="width:6%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">83</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">차홍련</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">119</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">N</a></td>
                                    <td><a href="#">응급해제</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">사용자 실수</a></td>
                                </tr>                                
                                <tr>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">83</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">차홍련</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">119</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">N</a></td>
                                    <td><a href="#">응급해제</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">사용자 실수</a></td>
                                </tr>                                
                                <tr>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">83</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">차홍련</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">119</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">N</a></td>
                                    <td><a href="#">응급해제</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">사용자 실수</a></td>
                                </tr>                                
                                <tr>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">83</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">차홍련</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">119</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">N</a></td>
                                    <td><a href="#">응급해제</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">사용자 실수</a></td>
                                </tr>                                
                                <tr>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">83</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">차홍련</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">119</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">N</a></td>
                                    <td><a href="#">응급해제</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">사용자 실수</a></td>
                                </tr>                                
                                <tr>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">83</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">차홍련</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">119</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">N</a></td>
                                    <td><a href="#">응급해제</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">사용자 실수</a></td>
                                </tr>                                
                                <tr>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">83</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">차홍련</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">119</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">N</a></td>
                                    <td><a href="#">응급해제</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">사용자 실수</a></td>
                                </tr>                                
                                <tr>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">83</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">차홍련</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">119</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">N</a></td>
                                    <td><a href="#">응급해제</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">사용자 실수</a></td>
                                </tr>                                
                                <tr>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">83</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">차홍련</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">119</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">N</a></td>
                                    <td><a href="#">응급해제</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">사용자 실수</a></td>
                                </tr>                                
                                <tr>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">83</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">차홍련</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">119</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">N</a></td>
                                    <td><a href="#">응급해제</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">사용자 실수</a></td>
                                </tr>                                
                                <tr>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">83</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">차홍련</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">119</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">N</a></td>
                                    <td><a href="#">응급해제</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">사용자 실수</a></td>
                                </tr>                                
                                <tr>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">83</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">차홍련</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">119</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">N</a></td>
                                    <td><a href="#">응급해제</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">사용자 실수</a></td>
                                </tr>                                
                                <tr>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">83</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">차홍련</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">119</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">N</a></td>
                                    <td><a href="#">응급해제</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">사용자 실수</a></td>
                                </tr>                                
                                <tr>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">83</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">차홍련</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">119</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">N</a></td>
                                    <td><a href="#">응급해제</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">사용자 실수</a></td>
                                </tr>                                
                                <tr>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">83</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">차홍련</a></td>
                                    <td><a href="#">010-2222-4335</a></td>
                                    <td><a href="#">119</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">N</a></td>
                                    <td><a href="#">응급해제</a></td>
                                    <td><a href="#">2022-12-11 12:59:24</a></td>
                                    <td><a href="#">사용자 실수</a></td>
                                </tr>                            </tbody>
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