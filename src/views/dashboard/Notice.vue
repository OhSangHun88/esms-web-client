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
        <td slot="avatar" slot-scope="{item}">
          <div>{{item.contents}}</div>
        </td>
        <td slot="activity" slot-scope="{item}">
          <strong>{{item.regDate}}</strong>
        </td>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  name: 'RecentSocialWorker',
  data () {
    return {
      caption: "공지사항",
      tableItems: [
        {
          contents: '코러나 19 예방접종 대상 안내',
          regDate: '2021.10.02'
        },
        {
          contents: '코러나 19 예방접종 대상 안내',
          regDate: '2021.10.02'
        },
        {
          contents: '코러나 19 예방접종 대상 안내',
          regDate: '2021.10.02'
        },
        {
          contents: '코러나 19 예방접종 대상 안내',
          regDate: '2021.10.02'
        },
        {
          contents: '코러나 19 예방접종 대상 안내',
          regDate: '2021.10.02'
        }
      ],
      tableFields: [
        { key: 'contents', label: '내용' },
        { key: 'regDate', label: '게시일', _classes: 'text-center' }
      ]
    }
  },
}
</script>
