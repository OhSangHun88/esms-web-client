<template>
    <div class="wrap">
        <!--<HeaderComp></HeaderComp>-->
        <div class="container type-02">
          <div id="" class="popupLayer" v-if="errorpopup1 == true">
                <div class="popup_wrap type-02">
                    <div class="title_wrap">
                        <div class="title">경고</div>
                        <button type="button" class="btn_close" @click="errorpopup1 = false">닫기</button>
                    </div>
                    <div class="popup_cnt">
                        <p class="alert_txt">조회 종료일자가 시작일자보다 빠릅니다<br/>일자를 다시 선택하여 주십시요</p>
                    </div>
                    <div class="popbtn_area type-02">
                        <button type="button" class="btn form2" @click="errorpopup1 = false">확인</button>
                    </div>
                </div>
            </div>
            <div id="" class="popupLayer" v-if="errorpopup2 == true">
                <div class="popup_wrap type-02">
                    <div class="title_wrap">
                        <div class="title">경고</div>
                        <button type="button" class="btn_close" @click="errorpopup2 = false">닫기</button>
                    </div>
                    <div class="popup_cnt">
                        <p class="alert_txt">일주일단위로 조회 가능합니다<br/>일자를 다시 선택하여 주십시요</p>
                   </div>
                    <div class="popbtn_area type-02">
                        <button type="button" class="btn form2" @click="errorpopup2 = false">확인</button>
                    </div>
                </div>
            </div>
            <div id="" class="popupLayer" v-if="uploadpopup === true">
                <div class="popup_wrap">
                    <div class="title_wrap">
                        <div class="title" @click="uploadFirmware()">펌웨어 업로드</div>
                        <button type="button" class="btn_close" @click="uploadpopup = false">닫기</button>
                    </div>
                    <div class="popup_cnt">
                      <div class="input_wrap">
                          <div class="input_area">
                            <p class="input_tit">버전명</p>
                            <input type="text" style="width:200px" v-model="this.file_name3" disabled>
                          </div>
                      </div>
                      <div class="input_wrap type-03">
                          <div class="input_area">
                            <div class="tit_area">
                              <p class="input_tit">버전 내용</p>
                              <p class="file_txt">Add a file: <i class="ico_file"></i><em>{{file_name}}</em></p><!--em태그 안에 업로드한 파일 이름 입력-->
                            </div>
                            <textarea v-model="versionDesc" maxlength="50" @input="handleInputLength(versionDesc, 50)"></textarea>
                          </div>
                      </div>
                    </div>
                    <div class="popbtn_wrap">
                        <div class="popbtn_area">
                          <div class="input_area file">
                            <input type="file" name="FileBtn" id="FileBtn" @change="handleFileChange">
                            <label for="FileBtn" class="btn form">파일 찾기</label>
                            <button type="button" class="btn form2" @click="uploadFirmware()">업로드</button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="" class="popupLayer" v-if="recordpopup === true">
              <div class="popup_wrap">
                <div class="title_wrap">
                  <div class="title" @click="uploadFirmware()">업로드 이력</div>
                  <button type="button" class="btn_close" @click="recordpopup = false">닫기</button>
                </div>
                <div class="popbtn_wrap" style="margin-bottom:20px">
                  <div class="list result" style="margin-left:-20px; width:107%">
                    <table>
                      <colgroup>
                        <col style="width:4%;">
                        <col style="width:8%;">
                        <col style="width:4%;">
                        <col style="width:6%;">
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">버전</th>
                          <th scope="col">내용</th>
                          <th scope="col">등록자 ID</th>
                          <th scope="col">등록일시</th>
                        </tr>
                      </thead>
                    </table>
                    <div class="tbody">
                      <table>
                        <colgroup>
                          <col style="width:4%;">
                          <col style="width:8%;">
                          <col style="width:4%;">
                          <col style="width:6%;">
                        </colgroup>
                        <tbody >    
                          <tr v-for="(item,index) in firmwareRecord" v-bind:key="index">
                            <td>{{item.version}}</td>
                            <td>{{item.versionDesc}}</td>
                            <td>{{item.regId}}</td>
                            <td>{{item.regDtime}}</td>
                          </tr>                                   
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
            <div id="" class="popupLayer" v-if="upgradepopup == true">
              <div class="popup_wrap type-02">
                <div class="title_wrap">
                  <div class="title">경고</div>
                  <button type="button" class="btn_close" @click="upgradepopup = false">닫기</button>
                </div>
                <div class="popup_cnt">
                  <p class="alert_txt">펌웨어 업그레이드를 진행하시겠습니까?</p>
                </div>
                <div class="popbtn_area type-02">
                  <button type="button" class="btn form2" @click="upgradeFirmware2()">확인</button>
                  <button type="button" class="btn form" @click="upgradepopup = false">취소</button>
                </div>
              </div>
            </div>
            <div class="list_title_wrap">
                <span>시스템관리</span>
                <i class="ico_nav"></i>
                <span class="on">펌웨어관리</span>
            </div>
            <div class="box_wrap">
                <!-- 현재 최종 업로드 버전 -->
                <div class="box_search_wrap add_btn box_style fw_info">
                    <div class="table_wrap" style="width:50%">
                        <table >
                            <colgroup>
                                <col style="width:100%;">
                            </colgroup>
                            <thead>
                                <th scope="row">현재 업로드 버전</th>
                            </thead>
                            <tbody>
                                <tr >
                                    <td >
                                      <div class="input_area" style="width:200px">
                                        <select v-model="selectedFirmwareVersion2">
                                          <option v-for="(firmware, index) in firmwareCData" :value="firmware.value" v-bind:key="index">{{firmware.label}}</option>
                                        </select>
                                      </div>
                                        <!-- <select name="" id="" disabled>
                                            <option value="">Ver 1.0.5</option>
                                        </select> -->
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="btn_area" style="width:45%">
                        <button type="button" class="btn" style="width:80px; margin-right:7px; margin-left:11px" @click="uploadReset()">업로드</button>
                        <button type="button" class="btn" style="width:90px" @click="uploadRecord()">업로드 이력</button>
                    </div>
                </div><!-- 현재 최종 업로드 버전 -->
            <div class="box_search_wrap box_style type_fw add_btn" @keypress.enter='manageInquiry'>
                <div class="table_wrap">
                    <table>
                        <colgroup>
                            <col style="width:20%;">
                            <col style="width:20%;">
                            <col style="width:20%">
                            <col style="width:15%;">
                            <col style="width:15%;">
                        </colgroup>
                        <thead>
                            <th scope="row">시/도</th>
                            <th scope="row">시/군/구</th>
                            <th scope="row">관리기관</th>
                            <th scope="row">대상자명</th>
                            <th scope="row">펌웨어버전</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <select v-model="selectedSidoItems" @change="onChangeSgg($event)">
                                        <option v-for="(sido, index) in sidoItems" :value="sido.value" v-bind:key="index">{{sido.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <select v-model="selectedSggItems" @change="onChangeOrg($event)">
                                      <option v-for="(sgg, index) in sggItems" :value="sgg.value" v-bind:key="index">{{sgg.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <select v-model="selectedOrgItems">
                                      <option v-for="(orgm, index) in orgmItems" :value="orgm.value" v-bind:key="index">{{orgm.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" value="" v-model="selectedRecipientNm">
                                </td>
                                <td>
                                  <select v-model="selectedFirmwareVersion">
                                    <option v-for="(firmware, index) in firmwareItmes" :value="firmware.value" v-bind:key="index">{{firmware.label}}</option>
                                  </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="btn_area">
                    <button type="button" class="btn" v-on:click="manageInquiry">조회</button>
                </div>
            </div>
            </div>
            <div class="one_box box_style">
                <div class="result_txt">
                    <p>조회결과 : <strong class = "num">{{!this.NCount? 0 : this.NCount}}</strong>건</p>
                    <div class="btn_area">
                      <button type="button" style="margin-right:10px" class="btn">배포이력</button>
                      <button type="button" style="margin-right:10px; width:120px;" class="btn" @click="upgradeFirmware()">펌웨어 업그레이드</button>
                    </div>
                </div>
                <div class="list result">
                    <table>
                        <colgroup>
                            <col style="width:4%;">
                            <col style="width:4%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:auto;">
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:6%;">
                            <col style="width:5%;">
                            <col style="width:10%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">
                                  <div class="chk_area radio">
                                    <input type="checkbox" id="allCheck" value="all" v-model="allSelected">
                                    <label for="allCheck" class="chk"><i class="ico_chk"></i></label>
                                  </div>
                                </th>
                              
                                <th scope="col">순번</th>
                                <th scope="col">시도</th>
                                <th scope="col">시군구</th>
                                <th scope="col">관리기관</th>
                                <th scope="col">대상자명</th>
                                <th scope="col">주소</th>
                                <th scope="col">시리얼번호</th>
                                <th scope="col">MAC Address</th>
                                <th scope="col">현재적용버전</th>
                                <th scope="col">상태</th>
                                <th scope="col">업데이트일시</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:4%;">
                                <col style="width:4%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:auto;">
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:6%;">
                                <col style="width:5%;">
                                <col style="width:10%;">
                            </colgroup>
                            <tbody >
                              
                                <tr v-for="(item,index) in listData" v-bind:key="index">
                                    <td>
                                      <div class="chk_area radio">
                                        <input type="checkbox" name="chk" :id="`check_${index}`" v-model="saveChangeData2" :value="item" @click="reset(index)">
                                        <label :for="`check_${index}`" class="chk"><i class="ico_chk"></i></label>
                                      </div>
                                    </td>
                                    <td>{{num(index+1)}}</td>
                                    <td></td>
                                    <td></td>
                                    <td>{{item.orgNm}}</td>
                                    <td>{{item.recipientNm}}</td>
                                    <td></td>
                                    <td>{{item.serialNo}}</td>
                                    <td>{{item.macAddr}}</td>
                                    <td>{{item.firmwareVersion}}</td>
                                    <td>{{item.gwStateNm}}</td>
                                    <td>{{item.updDtime}}</td>
                                </tr>                                
                               
                            </tbody>
                  
                        </table>
                    </div>
                </div>
                <div class="pagination mt0">
                <pagination
                :pageSetting="pageDataSetting(total, limit, block, this.page)"
                @paging="pagingMethod"
                />
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
import axios from "axios";
import moment from "moment";
import HeaderComp from "../pages/HeaderComp.vue";
import pagination from "../pages/pagination.vue"

export default {
    name: 'Firmware',
    components :{
      HeaderComp,
      pagination
    },
    data() {
      return{
        orgNm:'',orgId:'', sido:'', sidoCd:'', sgg:'', sggCd:'', s_date: '', e_date: '',
        selectedSidoItems:'', selectedSggItems:'', selectedOrgItems:'',
        sidoItems:[], sggItems:[], orgmItems:[], recipientItems:[],
        orgSido:'', orgSgg:'', orgCode:'',
        cBirthday:'', cAddr: '', NCount: 0,
        selectedSidoItems:'', selectedSggItems:'', selectedOrgItems:'', selectedRecipientNm: '', selectedFirmwareVersion:'', selectedFirmwareVersion2:'',
        errorpopup1: false, errorpopup2: false,
        searchCheck1 : 1, searchCheck2 : 0,
        uploadpopup: false, saveChangeData:'', saveChangeData2:[], saveChangeData3:false, upgradepopup:false, recordpopup:false,
        firmwareItmes:'', firmwareFile:'',file_name: '', file_name2: '', file_name2_1:'', file_name2_2:'', file_name3:'',
        versionDesc:'', firmwarelist:'', firmwareCData:[], file_size:'', firmwareCheck:'', firmwareRecord:[],

        listData: [],
        total: '',
        page: 1,
        limit: 30,
        block: 10,

        selectList: [],
      }
    },
    created() {
    this.firmwareList();
    this.getSidoData();
    this.getSggData();
    this.getOrgmData();
    this.getRecipientData();
    this.s_date=moment().subtract(6, 'days').format('YYYY-MM-DD');
    this.e_date=moment().format('YYYY-MM-DD');
    this.cBirthday=moment().format('YYYY-MM-DD');
    },
    computed: {
      allSelected: {
        get: function() {
          console.log(this.listData.length)
          console.log(this.saveChangeData2.length)
          return this.listData.length === this.saveChangeData2.length;
        },
        set: function(e) {
          this.saveChangeData2 = e ? this.listData : [];
        },
      },
    },

    methods:{
      handleFileChange(e) {
      this.firmwareFile = e.target.files[0]
      this.file_name = e.target.files[0].name;
      this.file_size = e.target.files[0].size
      let checkFileNm = this.file_name.indexOf('V')
      this.file_name2 = this.file_name.substr(checkFileNm, 5)
      this.file_name2_1 = this.file_name2.substr(0, 2)
      this.file_name2_2 = this.file_name2.substr(2)
      this.file_name3 = this.file_name2_1+'.'+this.file_name2_2
    },
    uploadReset(){
      this.file_name = ''
      this.file_name2 = ''
      this.file_name3 = ''
      this.versionDesc = ''
      this.uploadpopup = true
    },
      pagingMethod(page) {
        this.listData = this.recipientItems.slice(
          (page - 1) * this.limit,
          page * this.limit
        )
        console.log(this.listData)
        this.page = page
        this.pageDataSetting(this.total, this.limit, this.block, page)
      },
      pageDataSetting(total, limit, block, page) {
        const totalPage = Math.ceil(total / limit)
        let currentPage = page
        const first =
          currentPage > 1 ? parseInt(currentPage, 10) - parseInt(1, 10) : null
        const end =
          totalPage !== currentPage
            ? parseInt(currentPage, 10) + parseInt(1, 10)
            : null
 
        let startIndex = (Math.ceil(currentPage / block) - 1) * block + 1
        let endIndex =
          startIndex + block > totalPage ? totalPage : startIndex + block - 1
        let list = []
        for (let index = startIndex; index <= endIndex; index++) {
          list.push(index)
        }
        return { first, end, totalPage, list, currentPage }
      },
      num(index){
      if(this.page !== 1){
        for(let i=1; i<this.page; i++){
        index=index+30
        }
      }
      return index
    },
    // 시/도 목록
    getSidoData() {
    axios.get(this.$store.state.serverApi + "/admin/address/sido", {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            
            this.sidoItems=[];
            this.sidoItems.push({label: '전체', value: ''});

            for(let i=0; i<response.data.data.length; i++) {
              this.sidoItems.push({
                label: response.data.data[i].sido,
                value: response.data.data[i].sidoCd
              });
            }  
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });

    },

    // 시/군/구 목록
    getSggData() {
      this.selectedSggItems = ''
      let url =this.$store.state.serverApi + "/admin/address/sgg";
      if(this.sidoCd != ''){
        url += "?sidoCd="+this.sidoCd;
      }else{
        this.selectedSggItems = ''
        this.sggItems=[];
        this.sggItems.push({label: '전체', value: ''});
        return ; 
      }
      axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
        .then(response => {
          const tempArr = [{label: '전체', value: ''}];
          let tmpResult2 = [{label: '전체', value: ''}];
          for(let i=0; i<response.data.data.length; i++) {
            tempArr.push({
              label: response.data.data[i].sgg,
              value: response.data.data[i].sggCd,
              value2: response.data.data[i].sidoCd
            });
          } 
          let tmpResult = tempArr.filter(cd=>{
            return cd.value2 === this.sidoCd
          });
          
          this.sggItems = [...tmpResult2,...tmpResult]
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
    // 관리 기관 목록
    getOrgmData() {
      this.selectedOrgItems = ''
      let sggCode = ''
      let url =this.$store.state.serverApi + "/admin/organizations";
      if(this.sggCd != ''){
        if(this.sggCd.startsWith('0', 4) === true){
          sggCode = this.sggCd.substring(0,4)
        }else{
          sggCode = this.sggCd.substring(0, 5)
        }
        url += "?sggCd="+sggCode;
      }else{
        this.selectedOrgItems = ''
        this.orgmItems=[];
        this.orgmItems.push({label: '전체', value: ''});
        return ; 
      }
      axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
        .then(response => {
          const tmpArr = [{label: '전체', value: ''}];
          let tmpResult2 = [{label: '전체', value: ''}];
          this.orgmItems=[];
          for(let i=0; i<response.data.data.length; i++) {
            tmpArr.push({
              label: response.data.data[i].orgNm,
              value: response.data.data[i].orgId,
            });
          } 
          let tmpResult = tmpArr
          this.orgmItems = [...tmpResult2,...tmpResult]
        this.orgmItems=tmpArr;
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
    async getRecipientData() {
      let addrCd = ''
      let occurStartDate = this.s_date
      let occurEndDate = this.e_date
      if(this.selectedSidoItems != '' && this.selectedSggItems == ''){
        addrCd = this.sidoCd.substring(0,2)
      }else if(this.selectedSggItems != ''){
        if(this.sggCd.startsWith('0', 4) === true){
          addrCd = this.sggCd.substring(0,4)
        }else{
          addrCd = this.sggCd.substring(0,5)
        }
      }else{
        addrCd = ''
      }
      let tmpArr = []
      let tmpArr2 = []
      let count=''
      let uri = ''
      this.recipientItems = []
        uri = this.$store.state.serverApi
        +"/admin//gateways?pageIndex=1&recordCountPerPage=1000"
        +"&addrCd="+addrCd
        +"&orgId="+this.selectedOrgItems
        +"&recipientNm="+this.selectedRecipientNm
      await axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            tmpArr = response.data.data
            for(let i=0; i<tmpArr.length; i++){
              if(tmpArr[i].recipientNm !== null){
                this.recipientItems.push(tmpArr[i])
                console.log(tmpArr[i])
                console.log(tmpArr2)
              }
            }
            
            console.log(this.recipientItems)
            this.NCount = this.recipientItems.length
            this.total = this.recipientItems.length
            this.page = 1
            this.pagingMethod(this.page)

            
        //     if(this.searchCheck1 === 1){
        //     this.searchCheck1 = 0
        // }
        // if(this.recipientItems.length !== 0 && this.searchCheck1 === 0 && this.searchCheck2 === 1){
        //     alert("성공적으로 조회 되었습니다.")
        //     this.searchCheck2 = 0
        // }else if(this.recipientItems.length === 0 && this.searchCheck1 === 0 && this.searchCheck2 === 1){
        //     alert("조회 결과가 존재하지 않습니다.")
        //     this.searchCheck2 = 0
        // }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
          
    },
    async firmwareList(){
        let url  = this.$store.state.serverApi + `/admin/gateways/firmwarelist`
         await axios.get(url,{headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
            .then(res => {
              const tmpArr = [{label: '전체', value: ''}];
              this.firmwareCData = []
              for(let i=0; i<res.data.data.length; i++) {
                this.firmwareRecord = res.data.data
                tmpArr.push({
                  label: res.data.data[i].version,
                  value: res.data.data[i].version,
                });
                this.firmwareCData.push({
                  label: res.data.data[i].version,
                  value: res.data.data[i].version,
                });
              } 
              this.selectedFirmwareVersion2 = this.firmwareCData[0].value
              console.log(this.selectedFirmwareVersion2)
              console.log(this.firmwareCData)
              this.firmwareItmes = tmpArr
              this.firmwarelist = res.data.data
            })
            .catch(error => {
                console.log("fail to load")
                this.errorMessage = error.message;
                console.error("There was an error!", error);
            });
    },
    async uploadFirmware(){
      this.$store.state.userId = sessionStorage.getItem("userId")
      let url = this.$store.state.serverApi+`/admin/gateways/firmware/upload?fileSize=${this.file_size}&versionDesc=${this.versionDesc}`
      let data ={
        fileSize : this.file_size,
        versionDesc : this.versionDesc,
        firmwareVersion : this.file_name3,
        regId : this.$store.state.userId
      }
      console.log(data)
      this.firmwareCheck = this.firmwarelist.filter(cd=>{
        return cd.version === this.file_name3
      })
      console.log(this.firmwareCheck)
      if(!this.file_name3){
        alert("업로드 할 파일을 선택하여 주세요")
        return false
      }
      if(this.firmwareCheck.length !== 0){
        alert("이미 업로드 된 버전입니다.")
        return false
      }
      if(this.versionDesc.length > 100){
        alert("버전 내용은 글자 수 100자리까지 입력 가능합니다.")
        return false
      }
      let form = new FormData
      form.append('firmwareVersion', this.file_name3)
      form.append('regId', this.$store.state.userId)
      form.append('fileName', this.firmwareFile)
      console.log(form)

     await axios.post(url, form, {
       headers: {
           'Content-Type': 'multipart/form-data',
           'Accept':'application/json',
           "Authorization": "Bearer " + sessionStorage.getItem("token")
       }
     })
       .then(response => {
         console.log(response.data.data)
         if(response.data.data === true){
           alert("성공적으로 업로드 되었습니다.")
           this.uploadpopup = false
           this.firmwareList()
         }else{
          alert("업로드에 실패하였습니다.")
          this.uploadpopup = false
         }
       })
       .catch(error => {
         this.errorMessage = error.message;
         console.error("There was an error!", error);
       });
    },    
    uploadRecord(){
      this.recordpopup = true
    },
    upgradeFirmware(){
      if(this.saveChangeData2.length === 0){
        alert("변경하시고자 하는 값을 선택해 주세요"); 
        return;
        }
      this.upgradepopup = true
    },
    upgradeFirmware2(){
      console.log(this.saveChangeData2)
      if(this.saveChangeData2.length === 0){
        alert("변경하시고자 하는 값을 선택해 주세요"); 
        return;
        }
        console.log(this.saveChangeData2)
        console.log(this.firmwareCData)
        console.log(this.recipientItems[this.saveChangeData2])
        console.log(this.$store.state.userId)
        let url  = this.$store.state.serverApi + `/admin/gateways/${this.recipientItems[this.saveChangeData].gwId}/firmware-version`
        let data = {
            firmwareVersion:this.selectedFirmwareVersion,
            recipientId:this.recipientItems[this.saveChangeData].recipientId,
            regId: this.$store.state.userId,
            regNo: this.firmwarelist[0].regNo
        }
            /*axios.patch(url,data ,{headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
            .then(res => {
                let firmware = res.data.data
                if(firmware){
                    alert("성공적으로 업그레이드가 요청되었습니다")
                    this.firmwareUpgradeCheck = false
                }
            })
            .catch(error => {
                console.log("fail to load")
                this.errorMessage = error.message;
                console.error("There was an error!", error);
            });*/

    },
    changeRecipientPhoneno(phone){
      if(phone){
        let changeNumber = phone.replace(/[^0-9]/, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
        return changeNumber
      }else{
        return ''
      }
    },
    handleInputLength(el, max) {
      console.log(el)
      console.log(el.length)
      console.log(max)
      if(el.length > max) {
        console.log("this ok")
        el = el.substr(0, max);
      }
      this.versionDesc = el
    },
    reset(input){
      console.log(input)
      console.log(this.saveChangeData2)
    },
    onChangeSido(event){
      this.getSggData()
      this.orgSido = event.target.value;
    },
    onChangeSgg(event){
      this.sidoCd = event.target.value
      this.getSggData()
      this.sggCd = ''
      this.getOrgmData()
    },
    onChangeOrg(event) {
      this.sggCd = event.target.value
      this.getOrgmData()
    },
    makeAge(birthDay){
      let tmp1 = this.$moment(birthDay).format('YYYY')
      let tmp2 = this.$moment()
      return tmp2.diff(tmp1, 'years');
    },
    manageInquiry() {
      if(this.s_date > this.e_date){
        this.errorpopup1 = true
      }/*else if(this.e_date > moment(this.s_date).add(6, 'days').format('YYYY-MM-DD')){
        this.errorpopup2 = true
      }*/else{
        this.searchCheck2 = 1
        this.getRecipientData();
      }
    },
    },
}
</script>
<style>
</style>