<template>
  <CCard>
    <CCardHeader>
      <slot name="header">
        <strong>{{caption}}</strong>
      </slot>
    </CCardHeader>
    <CCardBody>
      <CDataTable
          class="mb-0 table-clear thBorder"
          hover
          :items="tableItems"
          :fields="tableFields"
          head-color="light"
          sorting
      >
        <td slot="avatar" class="text-center" slot-scope="{item}">
          <div>{{item.name}}</div>
        </td>
        <td slot="user" slot-scope="{item}">
          <div>{{item.phone}}</div>
        </td>
        <td slot="activity" slot-scope="{item}">
          <div>{{item.regDate}}</div>
        </td>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  name: 'CustomerManage',
  data () {
    return {
      caption: "고객 관리",
      tableItems: [
        {
          name: '홍길동',
          phone: '010-2363-9473',
          age: '23',
          signal: '화재감지',
          useDate: '2021.08.23'
        },
        {
          name: '홍길동',
          phone: '010-2363-9473',
          age: '23',
          signal: '화재감지',
          useDate: '2021.08.23'
        },
        {
          name: '홍길동',
          phone: '010-2363-9473',
          age: '23',
          signal: '화재감지',
          useDate: '2021.08.23'
        },
        {
          name: '홍길동',
          phone: '010-2363-9473',
          age: '23',
          signal: '화재감지',
          useDate: '2021.08.23'
        },
        {
          name: '홍길동',
          phone: '010-2363-9473',
          age: '23',
          signal: '화재감지',
          useDate: '2021.08.23'
        }
      ],
      tableFields: [
        { key: 'name', label: '고객명', _classes: 'text-center' },
        { key: 'phone', label: '전화번호', _classes: 'text-center' },
        { key: 'age', label: '나이', _classes: 'text-center' },
        { key: 'signal', label: '응급신호', _classes: 'text-center' },
        { key: 'useDate', label: '서비스이용일', _classes: 'text-center' }
      ]
    }
  },
}
</script>