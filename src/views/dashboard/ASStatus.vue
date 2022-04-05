<template>

  <div class="box_col3 box_style">
    <div>
      <colgroup>
        <col style="width:2%; margin-left:15px;" >
        <col style="width:1.5%;">
        <col style="width:1.5%;">
        <col style="width:1%;">
      </colgroup>
      <thead>
      <tr>
        <th>구분</th>
        <th>A/S 요청</th>
        <th>A/S 접수</th>
        <th>A/S 완료</th>
      </tr>
      <br>
      </thead>
      <div class="tbody">
        <colgroup>
         <col style="width:2%;" >
         <col style="width:1.5%;">
         <col style="width:1.5%;">
         <col style="width:1%;">
        </colgroup>
        <tbody>
          <tr>
            <th scope="col">게이트웨이</th>
            <th scope="col">1</th>
            <th scope="col">1</th>
            <th scope="col">1</th>
          </tr>
          <br>
          <tr>
            <th scope="col">응급호출기</th>
            <th scope="col">0</th>
            <th scope="col">0</th>
            <th scope="col">0</th>
          </tr>
          <br>
          <tr>
            <th scope="col">화재감지기</th>
            <th scope="col">10</th>
            <th scope="col">5</th>
            <th scope="col">15</th>
          </tr>
          <br>
          <tr>
            <th scope="col">활동감지기</th>
            <th scope="col">20</th>
            <th scope="col">30</th>
            <th scope="col">10</th>
          </tr>
          <br>
          <tr>
            <th scope="col">출입문센서</th>
            <th scope="col">7</th>
            <th scope="col">4</th>
            <th scope="col">5</th>
          </tr>
          <br>
          <tr>
            <th scope="col">생활정보센서</th>
            <th scope="col">0</th>
            <th scope="col">0</th>
            <th scope="col">0</th>
          </tr>
        </tbody>
        </div>
    </div>
    <div>
      <canvas width="470" height="1">
      </canvas>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>