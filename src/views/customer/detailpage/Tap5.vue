<template>
    <div>
        <div class="tabcontent">
            <div class="tablist_wrap">
                <div class="tablist">
                    <div class="list_top">
                        <div class="title_area">
                            <p class="tit">활동 미감지</p>
                        </div>
                        <div class="btn_area">
                            <button type="button" class="btn form2">저장</button>
                        </div>
                    </div>
                    <div class="list">
                        <table>
                            <colgroup>
                                <col style="width:50%;">
                                <col style="width:50%;">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">설정 값(분)</th>
                                    <th scope="col">설정 값(분)</th>
                                </tr>
                            </thead>
                        </table>
                        <div class="tbody">
                            <table>
                                <colgroup>
                                    <col style="width:50%;">
                                    <col style="width:50%;">
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td>30</td>
                                        <td>120</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="tablist">
                    <div class="list_top">
                        <div class="title_area">
                            <p class="tit">활동 미감지</p>
                        </div>
                        <div class="btn_area">
                            <button type="button" class="btn form2">저장</button>
                        </div>
                    </div>
                    <div class="list">
                        <table>
                            <colgroup>
                                <col style="width:50%;">
                                <col style="width:50%;">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">설정 값(분)</th>
                                    <th scope="col">설정 값(분)</th>
                                </tr>
                            </thead>
                        </table>
                        <div class="tbody">
                            <table>
                                <colgroup>
                                    <col style="width:50%;">
                                    <col style="width:50%;">
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td>30</td>
                                        <td>120</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tablist">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">센서 감지 주기 및 전송 주기</p>
                    </div>
                    <div class="btn_area">
                        <button type="button" class="btn form2">저장</button>
                    </div>
                </div>
                <div class="list bd_btm">
                    <table>
                        <colgroup>
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:24%;">
                            <col style="width:24%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">선택</th>
                                <th scope="col">센서종류</th>
                                <th scope="col">설치장소</th>
                                <th scope="col">감지 주기(초)</th>
                                <th scope="col">센서 전송주기(배수)</th>
                                <th scope="col">G/W 전송주기(배수)</th>                                                    
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:24%;">
                                <col style="width:24%;">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="chk_area radio">
                                            <input type="radio" name="radio1" id="radio1_1" checked>
                                            <label for="radio1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td>활동감지기(P)</td>
                                    <td>거실</td>
                                    <td>2</td>
                                    <td>
                                        <span>[200초]</span>
                                        <select name="" id="">
                                            <option value="">30</option>
                                        </select>
                                        배수
                                    </td>
                                    <td>
                                        <span>[200초]</span>
                                        <select name="" id="">
                                            <option value="">30</option>
                                        </select>
                                        배수
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="chk_area radio">
                                            <input type="radio" name="radio1" id="radio1_2">
                                            <label for="radio1_2" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td>활동감지기(P)</td>
                                    <td>거실</td>
                                    <td>2</td>
                                    <td>
                                        <span>[200초]</span>
                                        <select name="" id="">
                                            <option value="">30</option>
                                        </select>
                                        배수
                                    </td>
                                    <td>
                                        <span>[200초]</span>
                                        <select name="" id="">
                                            <option value="">30</option>
                                        </select>
                                        배수
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tablist type-02">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">센서 상태값 전송 주기</p>
                    </div>
                    <div class="btn_area">
                        <button type="button" class="btn form2">저장</button>
                    </div>
                </div>
                <div class="list bd_btm">
                    <table>
                        <colgroup>
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:24%;">
                            <col style="width:24%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">선택</th>
                                <th scope="col">센서종류</th>
                                <th scope="col">설치장소</th>
                                <th scope="col">감지 주기(초)</th>
                                <th scope="col">센서 전송주기(배수)</th>
                                <th scope="col">G/W 전송주기(배수)</th>                                                    
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:24%;">
                                <col style="width:24%;">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="chk_area radio">
                                            <input type="radio" name="radio2" id="radio2_1" checked>
                                            <label for="radio2_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td>활동감지기(P)</td>
                                    <td>거실</td>
                                    <td>2</td>
                                    <td>
                                        <span>[200초]</span>
                                        <select name="" id="">
                                            <option value="">30</option>
                                        </select>
                                        배수
                                    </td>
                                    <td>
                                        <span>[200초]</span>
                                        <select name="" id="">
                                            <option value="">30</option>
                                        </select>
                                        배수
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="chk_area radio">
                                            <input type="radio" name="pdc" id="radio2_2">
                                            <label for="radio2_2" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td>활동감지기(P)</td>
                                    <td>거실</td>
                                    <td>2</td>
                                    <td>
                                        <span>[200초]</span>
                                        <select name="" id="">
                                            <option value="">30</option>
                                        </select>
                                        배수
                                    </td>
                                    <td>
                                        <span>[200초]</span>
                                        <select name="" id="">
                                            <option value="">30</option>
                                        </select>
                                        배수
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
                
            