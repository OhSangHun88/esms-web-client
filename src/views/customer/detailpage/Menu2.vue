<template>
    <div>
        <div class="tabcontent">
            <div class="tabcnt01">
                <div class="list_top">
                    <div class="btn_area">
                        <button type="button" class="btn form2">추가</button>
                        <button type="button" class="btn form2">저장</button>
                        <button type="button" class="btn form2">수정</button>
                        <button type="button" class="btn form3">삭제</button>
                    </div>
                </div>
                <div class="list">
                    <table>
                        <colgroup>
                            <col style="width:auto;">
                            <col style="width:31.5%;">
                            <col style="width:31.5%;">
                            <col style="width:31.5%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">이름</th>
                                <th scope="col">관계</th>
                                <th scope="col">핸드폰번호</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:auto;">
                                <col style="width:31.5%;">
                                <col style="width:31.5%;">
                                <col style="width:31.5%;">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_1" checked>
                                            <label for="chk1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="홍길동">
                                    </td>
                                    <td>
                                        <select name="" id="">
                                            <option value="">아들</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="010-2222-2222">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk" id="chk1_2">
                                            <label for="chk1_2" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="홍길동">
                                    </td>
                                    <td>
                                        <select name="" id="">
                                            <option value="">아들</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input type="text" name="" id="" value="010-2222-2222">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>          
        </div>
    </div>
</template>