<template>
  <CCard>
    <CCardHeader>
      <slot name="header">
        <strong>{{caption}}</strong>
      </slot>
    </CCardHeader>
    <CCardBody style="padding: 0.25rem;">
      <CDataTable
          class="mb-0 table-clear thHidden"
          hover
          :items="tableItems"
          :fields="tableFields"
          head-color="light"
          margin-bottom="0rem"
          style="border: 0;"
          sorting
      >
        <td slot="avatar" class="text-center" slot-scope="{item}">
          <div class="c-avatar">
            <img :src="item.avatar.url" class="c-avatar-img" alt="">
            <span
                class="c-avatar-status"
                :class="`bg-${item.avatar.status || 'secondary'}`"
            ></span>
          </div>
        </td>
        <td slot="user" slot-scope="{item}">
          <div>{{item.user.name}}</div>
          <div class="small text-muted">
                  <span>
                    <template v-if="item.user.new">New</template>
                    <template v-else>Recurring</template>
                  </span> | Registered: {{item.user.registered}}
          </div>
        </td>
        <td slot="activity" slot-scope="{item}">
          <strong>{{item.activity}}</strong>
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
      caption: "최근활동이 많은 사회복지사",
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          activity: 'Last week'
        }
      ],
      tableFields: [
        { key: 'avatar', label: '', _classes: 'text-center', display: 'none' },
        { key: 'user', label: '', display: 'none' },
        { key: 'activity', label: '', display: 'none' },
      ]
    }
  },
}
</script>
