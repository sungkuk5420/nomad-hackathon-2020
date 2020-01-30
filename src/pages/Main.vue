<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header
      :style="{ position: 'fixed', zIndex: 1, width: '100%' }"
      class="header"
    >
      <div class="header__logo">
        <img src="~assets/logo.png" alt="" />
      </div>
      <h1 class="header__title">
        <span>노마드코더 2020 해커톤 참가 팀 목록 </span
        ><a-button @click="showModal">팀 등록</a-button>
      </h1>
    </a-layout-header>
    <a-layout-content
      :style="{
        margin: '84px 16px 24px',
        padding: '24px',
        background: '#fff',
        minHeight: '280px'
      }"
      :class="loading ? 'overflow-hidden' : ''"
    >
      <a-card
        hoverable
        class="profile-card"
        v-for="(item, index) in teamCards"
        :key="index"
        v-show="!loading"
      >
        <img alt="example" :src="item.firstPeopleImage" slot="cover" />
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
      >
      </a-skeleton>

      <add-team></add-team>
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
    max-width: 240px;
    flex: none;
    height: 345px;
    margin-bottom: 20px;
    &:not(:last-child) {
      margin-right: 20px;
    }
    .ant-card-cover {
      max-height: 250px;
      overflow: hidden;

      img {
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
