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
  name: 'SocilaWorkManage',
  data () {
    return {
      caption: "사회복지사 관리",
      tableItems: [
        {
          name: '홍길동',
          phone: '010-2363-9473',
          regDate: '2021.08.23'
        },
        {
          name: '홍길동',
          phone: '010-2363-9473',
          regDate: '2021.08.23'
        },
        {
          name: '홍길동',
          phone: '010-2363-9473',
          regDate: '2021.08.23'
        },
        {
          name: '홍길동',
          phone: '010-2363-9473',
          regDate: '2021.08.23'
        },
        {
          name: '홍길동',
          phone: '010-2363-9473',
          regDate: '2021.08.23'
        }
      ],
      tableFields: [
        { key: 'name', label: '이름', _classes: 'text-center' },
        { key: 'phone', label: '전화번호', _classes: 'text-center' },
        { key: 'regDate', label: '등록일', _classes: 'text-center' },
      ]
    }
  },
}
</script>

