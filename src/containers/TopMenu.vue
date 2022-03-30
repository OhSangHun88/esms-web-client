<template>
  <header id="header">
    <div class="header_top">
      <h1><img alt="Vue logo" src="../assets/images/logo_ib.png">IB-Care System</h1>
      <div class="util_wrap">
        <div class="user_name">
          <i class="pf_img" style="background-image: url(../assets/images/img_profile.png)"></i>
          <a href="#" class="name"><em>admin</em> 님</a>
        </div>
      </div>
    </div>
    <nav id="gnb">
      <ul>
        <li class="on"><a href="#"><i class="ico-1"></i>모니터링</a></li>
        <li><a href="#"><i class="ico-2"></i>대상자 관리</a></li>
        <li><a href="#"><i class="ico-3"></i>이벤트 리포트</a></li>
        <li><a href="#"><i class="ico-4"></i>관리</a></li>
        <li><a href="#"><i class="ico-5"></i>A/S</a></li>
      </ul>
      <div class="emerg_area">
        <button type="button" class="btn"><i></i>응급상황 수신</button> <!--응급상황일때 on 클래스 추가-->
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TopMenu',
  data: () => ({
      

  }),
  created(){

  },
  methods:{
    goToMonitering(){
        this.$router.push({
                path : `/monitering`
        })
    },
  },


}
</script>
<style scope>
#header{/*position:absolute; top:0; left:0; */width:100%;}
#header .header_top{height:80px;display: flex;background: transparent linear-gradient(270deg, #151A1D 0%, #2A363E 100%) 0% 0% no-repeat padding-box; color: #fff; padding: 0 60px;justify-content: space-between;align-items: center;}
#header .header_top h1{font-size: 0;}
#header .header_top .util_wrap{font-size: 0;}
#header .header_top .user_name{display: inline-block;vertical-align: top;}
#header .header_top .user_name i.pf_img{display: inline-block;vertical-align: middle;margin: 0 10px 0 0;width: 40px;height: 40px;background-repeat: no-repeat;background-position: center;background-size: cover;border-radius: 50%;background-color: #fff;}
#header .header_top .user_name .name{display: inline-block;vertical-align: middle;font-weight: 600;font-size: 16px;}
#header .header_top .user_name .name em{font-weight: 300;}
#gnb{display: flex;align-items: center;justify-content: space-between;height: 80px;background-color: #2A363E;box-shadow: 0px 3px 10px #00000012;padding: 0 60px;}
#gnb ul{margin-left: -60px;}
#gnb ul li{display: inline-block;padding: 0 0 0 60px;}
#gnb ul li a{color: #ADB0BB;font-weight: 500;}
#gnb ul li a i{display: inline-block;width: 24px;height: 24px;background-repeat: no-repeat;background-position: center;background-size: contain;margin: 0 10px 0 0;}
#gnb ul li a i.ico-1{background-image: url(../assets/images/menu_01.png);}
#gnb ul li a i.ico-2{background-image: url(../assets/images/menu_02.png);}
#gnb ul li a i.ico-3{background-image: url(../assets/images/menu_03.png);}
#gnb ul li a i.ico-4{background-image: url(../assets/images/menu_04.png);}
#gnb ul li a i.ico-5{background-image: url(../assets/images/menu_05.png);}
#gnb ul li:hover a{color: #11B787;font-weight: 600;}
#gnb ul li:hover a i.ico-1{background-image: url(../assets/images/menu_01_on.png);}
#gnb ul li:hover a i.ico-2{background-image: url(../assets/images/menu_02_on.png);}
#gnb ul li:hover a i.ico-3{background-image: url(../assets/images/menu_03_on.png);}
#gnb ul li:hover a i.ico-4{background-image: url(../assets/images/menu_04_on.png);}
#gnb ul li:hover a i.ico-5{background-image: url(../assets/images/menu_05_on.png);}
#gnb ul li.on a{color: #11B787;font-weight: 600;}
#gnb ul li.on a i.ico-1{background-image: url(../assets/images/menu_01_on.png);}
#gnb ul li.on a i.ico-2{background-image: url(../assets/images/menu_02_on.png);}
#gnb ul li.on a i.ico-3{background-image: url(../assets/images/menu_03_on.png);}
#gnb ul li.on a i.ico-4{background-image: url(../assets/images/menu_04_on.png);}
#gnb ul li.on a i.ico-5{background-image: url(../assets/images/menu_05_on.png);}
#gnb .emerg_area .btn{display: inline-block;padding: 0 20px;height: 40px;line-height: 40px;font-size: 16px;color: #fff;border-radius: 50px;background-color: #3C4858;}
#gnb .emerg_area .btn.on{background-color: #F61919;}
#gnb .emerg_area .btn i{display: inline-block;vertical-align: top;width: 19px;height: 23px;background-image: url(../assets/images/ico_emerg.png);;background-repeat: no-repeat;background-position: center;margin: 9px 10px 0 0;}

</style>
