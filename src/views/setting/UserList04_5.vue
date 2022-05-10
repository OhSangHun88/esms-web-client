<template>
    <div class="wrap">
        <!--<HeaderComp></HeaderComp>-->
        <div class="container type-02">
            <div class="list_title_wrap">
                <span>관리</span>
                <i class="ico_nav"></i>
                <span class="on">운영기관 관리</span>
            </div>
            <div class="box_wrap">
                <!-- 현재 최종 업로드 버전 -->
                <div class="box_search_wrap add_btn box_style fw_info">
                    <div class="table_wrap">
                        <table>
                            <colgroup>
                                <col style="width:100%;">
                            </colgroup>
                            <thead>
                                <th scope="row">현재 최종 업로드 버전</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <select name="" id="">
                                            <option value="">Ver 1.0.5</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="btn_area">
                        <button type="button" class="btn">업로드</button>
                    </div>
                </div><!-- 현재 최종 업로드 버전 -->

                <div class="box_search_wrap box_style type_fw add_btn">
                    <div class="table_wrap">
                        <table>
                            <colgroup>
                                <col style="width:22.2%;">
                                <col style="width:22.2%;">
                                <col style="width:22.2%;">
                                <col style="width:auto;">
                                <col style="width:auto;">
                            </colgroup>
                            <thead>
                                <th scope="row">시/도</th>
                                <th scope="row">시/군/구</th>
                                <th scope="row">관리기관</th>
                                <th scope="row">대상자</th>
                                <th scope="row">현재버전</th>
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
                                        <input type="text" value="Ver 1.0.5">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="btn_area">
                        <button type="button" class="btn">조회</button>
                    </div>
                </div>                
            </div>
            <div class="one_box box_style">
                <div class="result_txt add_btn">
                    <p>조회결과 : <strong>235</strong>건</p>
                    <div class="btn_area">
                        <button type="button" class="btn">업그레이드</button>
                    </div>
                </div>
                <div class="list result">
                    <table>
                        <colgroup>
                            <col style="width:5%;">
                            <col style="width:9%;">
                            <col style="width:9%;">
                            <col style="width:9%;">
                            <col style="width:auto;">
                            <col style="width:9%;">
                            <col style="width:9%;">
                            <col style="width:9%;">
                            <col style="width:9%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">시/도</th>
                                <th scope="col">시/군/구</th>
                                <th scope="col">대상자</th>
                                <th scope="col">주소</th>
                                <th scope="col">관리기관</th>
                                <th scope="col">Serial NO</th>
                                <th scope="col">MAC address</th>
                                <th scope="col">현재버전</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                            <col style="width:5%;">
                            <col style="width:9%;">
                            <col style="width:9%;">
                            <col style="width:9%;">
                            <col style="width:auto;">
                            <col style="width:9%;">
                            <col style="width:9%;">
                            <col style="width:9%;">
                            <col style="width:9%;">
                        </colgroup>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">햇빛복지관1</a></td>
                                    <td><a href="#">738299as8</a></td>
                                    <td><a href="#">89983276a98c3</a></td>
                                    <td><a href="#">1.0.5</a></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">햇빛복지관1</a></td>
                                    <td><a href="#">738299as8</a></td>
                                    <td><a href="#">89983276a98c3</a></td>
                                    <td><a href="#">1.0.5</a></td>
                                </tr>                               
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">햇빛복지관1</a></td>
                                    <td><a href="#">738299as8</a></td>
                                    <td><a href="#">89983276a98c3</a></td>
                                    <td><a href="#">1.0.5</a></td>
                                </tr>                               
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">햇빛복지관1</a></td>
                                    <td><a href="#">738299as8</a></td>
                                    <td><a href="#">89983276a98c3</a></td>
                                    <td><a href="#">1.0.5</a></td>
                                </tr>                               
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">햇빛복지관1</a></td>
                                    <td><a href="#">738299as8</a></td>
                                    <td><a href="#">89983276a98c3</a></td>
                                    <td><a href="#">1.0.5</a></td>
                                </tr>                               
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">햇빛복지관1</a></td>
                                    <td><a href="#">738299as8</a></td>
                                    <td><a href="#">89983276a98c3</a></td>
                                    <td><a href="#">1.0.5</a></td>
                                </tr>                               
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">햇빛복지관1</a></td>
                                    <td><a href="#">738299as8</a></td>
                                    <td><a href="#">89983276a98c3</a></td>
                                    <td><a href="#">1.0.5</a></td>
                                </tr>                               
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">햇빛복지관1</a></td>
                                    <td><a href="#">738299as8</a></td>
                                    <td><a href="#">89983276a98c3</a></td>
                                    <td><a href="#">1.0.5</a></td>
                                </tr>                               
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">햇빛복지관1</a></td>
                                    <td><a href="#">738299as8</a></td>
                                    <td><a href="#">89983276a98c3</a></td>
                                    <td><a href="#">1.0.5</a></td>
                                </tr>                               
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">햇빛복지관1</a></td>
                                    <td><a href="#">738299as8</a></td>
                                    <td><a href="#">89983276a98c3</a></td>
                                    <td><a href="#">1.0.5</a></td>
                                </tr>                               
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">햇빛복지관1</a></td>
                                    <td><a href="#">738299as8</a></td>
                                    <td><a href="#">89983276a98c3</a></td>
                                    <td><a href="#">1.0.5</a></td>
                                </tr>                               
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">햇빛복지관1</a></td>
                                    <td><a href="#">738299as8</a></td>
                                    <td><a href="#">89983276a98c3</a></td>
                                    <td><a href="#">1.0.5</a></td>
                                </tr>                               
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">햇빛복지관1</a></td>
                                    <td><a href="#">738299as8</a></td>
                                    <td><a href="#">89983276a98c3</a></td>
                                    <td><a href="#">1.0.5</a></td>
                                </tr>                               
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">햇빛복지관1</a></td>
                                    <td><a href="#">738299as8</a></td>
                                    <td><a href="#">89983276a98c3</a></td>
                                    <td><a href="#">1.0.5</a></td>
                                </tr>                               
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td><a href="#">경기도</a></td>
                                    <td><a href="#">성남시</a></td>
                                    <td><a href="#">홍길동</a></td>
                                    <td><a href="#">경기도 성남시 수정구 11-3</a></td>
                                    <td><a href="#">햇빛복지관1</a></td>
                                    <td><a href="#">738299as8</a></td>
                                    <td><a href="#">89983276a98c3</a></td>
                                    <td><a href="#">1.0.5</a></td>
                                </tr>                           </tbody>
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