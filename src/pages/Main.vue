<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }" class="header">
      <div class="header__logo">
        <img src="~assets/logo.png" alt />
      </div>
      <h1 class="header__title">
        <span>노마드코더 2020 해커톤 참가 팀 목록</span>
        <a-button @click="showModal">팀 등록</a-button>
      </h1>
    </a-layout-header>
    <a-layout-content
      :style="{
        margin: '84px 16px 24px',
        padding: '24px',
        background: '#fff',
        minHeight: '280px'
      }"
      :class="
        !loading && teamCards.length == 0
          ? 'empty'
          : loading
          ? 'overflow-hidden'
          : ''
      "
    >
      <a-card
        hoverable
        class="profile-card"
        v-for="(item, index) in teamCards"
        :key="index"
        v-show="!loading"
        @click="alertMsg"
      >
        <a-tag color="blue" slot="cover">{{item.teamType=='alone'?'개인':'팀'}}</a-tag>
        <img
          alt="example"
          v-if="item.mainImage&&item.mainImage!=''"
          :src="item.mainImage"
          slot="cover"
        />
        <div class="main-image-text" v-if="!item.mainImage||item.mainImage==''" slot="cover">
          <div>{{item.firstPeopleName}}</div>
          <div v-if="item.teamType == 'team'">{{item.secondPeopleName}}</div>
        </div>
        <div class="avatar">
          <a-avatar size="large" icon="user" v-if="item.firstPeopleImage==''" />
          <img
            alt="example"
            v-if="item.firstPeopleImage!=''"
            :src="item.firstPeopleImage"
            class="ant-avatar ant-avatar-lg ant-avatar-circle ant-avatar-icon"
          />
          <a-avatar
            size="large"
            icon="user"
            v-if="item.teamType == 'team'&&item.secondPeopleImage==''"
          />
          <img
            alt="example"
            v-if="item.teamType == 'team'&&item.secondPeopleImage!=''"
            :src="item.secondPeopleImage"
            class="ant-avatar ant-avatar-lg ant-avatar-circle ant-avatar-icon"
          />
        </div>
        <a-card-meta :title="item.peopleName">
          <template slot="description">{{ item.comment }}</template>
        </a-card-meta>
      </a-card>
      <a-skeleton
        :loading="loading"
        active
        avatar
        class="card-skeleton ant-card profile-card ant-card-bordered"
        v-for="(item, index) in skeletonArr"
        :key="index"
      ></a-skeleton>

      <add-team></add-team>
      <a-empty v-show="!loading && teamCards.length == 0" />
    </a-layout-content>
  </a-layout>
</template>
<script>
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";

import AddTeam from "../components/AddTeam.vue";
export default {
  components: {
    AddTeam
  },
  data() {
    return {
      loading: true,
      skeletonArr: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    };
  },
  computed: {
    ...mapGetters({
      teamCards: "getTeamCards"
    })
  },
  watch: {
    teamCards(cards) {
      if (cards.length > 0) {
        this.loading = false;
      } else {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.getCards();
  },
  methods: {
    showModal() {
      this.$store.dispatch(T.CHANGE_MODAL_VISIBLE);
    },
    getCards() {
      this.$store.dispatch(T.GET_TEAM_CARDS);
    },
    alertMsg() {
      this.$message.info("수정기능 개발중");
    }
  }
};
</script>
<style lang="scss">
.ant-layout-header {
  padding: 0 20px;
}
.ant-layout {
  height: 100%;
}
#components-layout-demo-fixed {
  .ant-tag {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    display: flex;
    justify-content: center;
    flex: none;
  }
  .ant-card-body {
    position: relative;
  }
  .avatar {
    position: absolute;
    top: -25px;
    right: 5px;
    .ant-avatar {
      &:first-child {
        margin-right: 5px;
      }
    }
  }
  .ant-layout-content {
    height: calc(100% - 104px);
    padding-top: 50px;
    display: flex;
    flex: none;
    flex-wrap: wrap;
    overflow: auto;
    &.overflow-hidden {
      overflow: hidden;
    }
    &.empty {
      align-items: center;
      justify-content: center;
    }
  }
  .header {
    display: flex;
    &__logo {
      img {
        width: auto;
        height: 40px;
      }
    }
    &__title {
      margin: 0;
      padding-left: 20px;
      display: flex;
      align-items: center;
      font-size: 20px;
      color: white;
      width: 100%;
      .ant-btn {
        margin-left: auto;
      }
    }
  }
  .profile-card {
    flex: none;
    width: 250px;
    height: 345px;
    margin-bottom: 20px;
    &:not(:last-child) {
      margin-right: 20px;
    }
    .ant-card-cover,
    .main-image-text {
      display: flex;
      align-items: center;
      flex: none;
      height: 250px;
      overflow: hidden;
      border-bottom: 1px solid #ddd;
      background: #001529;
      img {
      }
    }
    .main-image-text {
      flex-direction: column;
      justify-content: center;
      & > div {
        color: white;
        font-size: 24px;
        font-weight: bold;
      }
    }
  }

  .card-skeleton {
    display: flex;
    flex-direction: column;
    .ant-skeleton-header {
      display: inline-flex;
      padding: 0;
      .ant-skeleton-avatar {
        border-radius: 0;
        width: 100%;
        height: 250px;
      }
    }
    .ant-skeleton-content {
      padding: 0 24px;
      .ant-skeleton-title {
        display: none;
      }
    }
  }
}
</style>
