<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }" class="header">
      <div class="header__logo">
        <img src="~assets/logo.png" alt />
      </div>
      <div class="header__bi" @click="sortCard">
        <img src="~assets/hackathon-bi.jpg" alt class="pc" />
        <img src="~assets/hackathon-bi-mobile.jpg" alt class="mobile" />
      </div>
      <div class="header__menu">
        <ul>
          <li>
            <a-button @click="showModal">
              <i class="material-icons">add</i>팀 등록
            </a-button>
          </li>
          <li>
            <a href="https://festa.io/events/885/" target="_blank">Join Us</a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCUpJs89fSBXNolQGOYKn0YQ?"
              target="_blank"
            >Youtube</a>
          </li>
          <li>
            <a href="https://www.instagram.com/nomad_coders/" target="_blank">instagram</a>
          </li>
        </ul>
      </div>
    </a-layout-header>
    <a-layout-content
      :style="{
        margin: '84px 16px 24px',
        padding: '24px',
        background: '#fff',
        minHeight: '280px'
      }"
      :class="
        !loading && teamCardsFilter.length == 0
          ? 'empty'
          : loading
          ? 'overflow-hidden'
          : ''
      "
    >
      <a-card
        hoverable
        class="profile-card"
        v-for="(item, index) in teamCardsFilter"
        :key="'profile-card'+index"
        v-show="!loading"
        @click="showModalUpdate(item)"
      >
        <a-tag color="blue" slot="cover">{{item.teamType=='alone'?'개인':'팀'}}</a-tag>
        <div
          class="main-image"
          v-if="item.mainImage&&item.mainImage!=''"
          :style="{ backgroundImage: `url('${imageServerUrl+item.mainImage}')` }"
          slot="cover"
        ></div>
        <div class="main-image-text" v-if="!item.mainImage||item.mainImage==''" slot="cover">
          <div>{{item.firstPeopleName}}</div>
          <div v-if="item.teamType == 'team'">{{item.secondPeopleName}}</div>
        </div>
        <div class="avatar">
          <a-avatar size="large" v-if="item.firstPeopleImage==''"></a-avatar>
          <img
            alt="example"
            v-if="item.firstPeopleImage!=''"
            :src="imageServerUrl+item.firstPeopleImage"
            class="ant-avatar ant-avatar-lg ant-avatar-circle ant-avatar-icon"
          />
          <a-avatar size="large" v-if="item.teamType == 'team'&&item.secondPeopleImage==''"></a-avatar>
          <img
            alt="example"
            v-if="item.teamType == 'team'&&item.secondPeopleImage!=''"
            :src="imageServerUrl+item.secondPeopleImage"
            class="ant-avatar ant-avatar-lg ant-avatar-circle ant-avatar-icon"
          />
        </div>
        <a-card-meta :title="item.teamName&&item.teamName!=''?item.teamName:''">
          <template slot="description">
            <div class="ant-card-meta-people-name">{{ item.peopleName }}</div>
          </template>
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
      <a-empty v-show="!loading && teamCardsFilter.length == 0" />
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
      sortMode: "all",
      teamCardsFilter: [],
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
      teamCards: "getTeamCards",
      imageServerUrl: "getImageServerUrl"
    })
  },
  watch: {
    teamCards(cards) {
      if (cards.length > 0) {
        this.loading = false;
        this.teamCardsFilter = cards;
      } else {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.$notification.open({
      message: "알림",
      description:
        "상단 해커톤 텍스트를 클릭하면 전체/팀/개인/별 카드를 모아서 볼 수 있어요!",
      duration: 3,
      style: { top: "50px" }
    });
    this.getCards();
  },
  methods: {
    sortCard() {
      this.$message.config({
        top: "70px"
      });
      if (this.sortMode == "all") {
        this.sortMode = "team";
        this.teamCardsFilter = this.teamCards.filter(
          item => item.teamType == "team"
        );
        this.$message.success("팀 참가자만 표시");
      } else if (this.sortMode == "team") {
        this.sortMode = "alone";
        this.teamCardsFilter = this.teamCards.filter(
          item => item.teamType == "alone"
        );
        this.$message.success("개인 참가자만 표시");
      } else {
        this.sortMode = "all";
        this.teamCardsFilter = this.teamCards;
        this.$message.success("전체 참가자표시");
      }
    },
    showModal() {
      this.$store.dispatch(T.CHANGE_MODAL_VISIBLE);
    },
    showModalUpdate(teamCardData) {
      const insertTeamCardData = teamCardData;
      this.$store.dispatch(T.INSERT_TEAM_CARD_DATA, {
        insertTeamCardData,
        cb: () => {
          this.$store.dispatch(T.CHANGE_MODAL_VISIBLE);
        }
      });
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
$main-color: #f6ce19;
$hover-color: #d5a009;

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background-color: #474747;
}
::-webkit-scrollbar-thumb {
  background-color: $hover-color;
}
::-webkit-scrollbar-button {
  display: none;
}

@mixin nomad-btn() {
  background-color: $main-color;
  border-radius: 20px;
  color: #000000;
  border-style: none;
  padding: 0 20px 0 12px;
}

.ant-layout-header {
  padding: 0 20px;
  height: 70px;
}
.ant-layout {
  height: 100%;
  background: linear-gradient(#212121, #1f1f1f);
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
    padding: 60px 32px 32px;

    .ant-card-meta-detail {
      text-align: center;

      .ant-card-meta-title {
        color: #a3a3a5;
      }
      .ant-card-meta-description {
        color: #ffffff;
      }
    }
  }
  .avatar {
    position: absolute;
    top: -36px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .ant-avatar {
      &:first-child {
        margin-right: -12px;
        z-index: 1;
        border: 4px solid $main-color;
      }
      background: url("../assets/user-default.png");
      background-size: cover;
    }
    img {
      width: 70px;
      height: 70px;
    }
    .ant-avatar-lg {
      width: 70px;
      height: 70px;
    }
  }
  .ant-card-meta-title {
    margin: 0;
    font-size: 1.5rem;
    color: #f6ce19 !important;
  }
  .ant-card-meta-people-name {
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #a3a3a5;
    margin-bottom: 12px;
  }
  .ant-layout-content {
    height: calc(100% - 104px);
    padding-top: 50px;
    display: flex;
    flex: none;
    flex-wrap: wrap;
    overflow: auto;
    background-color: unset !important;
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
    background: #000000;
    justify-content: space-between;
    &__logo {
      flex: 1;
      img {
        width: auto;
        height: 40px;
      }
    }
    &__bi {
      flex: 1;
      :hover {
        cursor: pointer;
      }
      img {
        width: auto;
        margin-left: 60px;
      }
    }
    &__menu {
      flex: 1;
      ul {
        display: flex;
        height: 100%;
        justify-content: flex-end;
        align-items: center;
        li {
          & ~ li {
            margin-left: 20px;
          }
          .ant-btn {
            @include nomad-btn();
            &:hover {
              background-color: $hover-color;
            }
            i {
              margin-right: 10px;
              font-size: 1rem;
            }
          }
          a {
            color: $main-color;
            font-weight: 600;
            font-size: 1rem;
            &:hover {
              color: $hover-color;
            }
          }
        }
      }
    }
  }
  .profile-card {
    flex: none;
    margin-bottom: 20px;
    border-radius: 20px;
    background-color: #0b0b0e;
    border: 1px solid #3c3939;

    .main-image {
      height: 250px;
      background-size: cover;
      background-position: center center;
    }
    &:not(:last-child) {
      margin-right: 20px;
    }
    .ant-card-cover,
    .main-image-text {
      border-radius: 20px 20px 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: none;
      height: 250px;
      overflow: hidden;
      border-bottom: 1px solid #3c3939;
      background: #001529;
      img {
        width: auto;
        height: 100%;
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
/* Mobile Device */
//768px 미만 해상도의 모바일 기기를 위한 코드를 작성한다. 모든 해상도에서 이 코드가 실행됨. 미디어 쿼리를 지원하지 않는 모바일 기기를 위해 미디어 쿼리 구문을 사용하지 않는다.

.profile-card {
  width: calc(100% / 1 - 20px);
}
#components-layout-demo-fixed {
  .header__bi {
    img.pc {
      display: none;
    }
    img.mobile {
      margin-left: 0;
      display: inline-flex;
    }
  }
  .header__menu {
    ul {
      li {
        &:not(:first-child) {
          display: none;
        }
      }
    }
  }
}

/* Tablet Device */
@media all and (min-width: 481px) {
  //모바일 이외에 모든 해상도 공통

  #components-layout-demo-fixed {
    .header__bi {
      flex: 1;
      overflow: initial;
      img.pc {
        display: inline-flex;
      }
      img.mobile {
        display: none;
      }
    }

    .header__menu {
      ul {
        li {
          &:not(:first-child) {
            display: inline-flex;
          }
        }
      }
    }
  }
}

/* Tablet Device */
@media all and (min-width: 768px) and (max-width: 1024px) {
  //사용자 해상도가 768px 이상이고 1024px 이하일 때 이 코드가 실행됨. 아이패드 또는 비교적 작은 해상도의 랩탑이나 데스크톱에 대응하는 코드를 작성한다.
  .profile-card {
    width: calc(100% / 3 - 20px);
  }
}

/* Desktop Device */
@media all and (min-width: 1025px) and (max-width: 1280px) {
  //사용자 해상도가 1025px 이상일 때 이 코드가 실행됨. 1025px 이상의 랩탑 또는 데스크톱에 대응하는 코드를 작성한다.
  .profile-card {
    width: calc(100% / 4 - 20px);
  }
}

/* Desktop Device */
@media all and (min-width: 1281px) {
  //사용자 해상도가 1025px 이상일 때 이 코드가 실행됨. 1025px 이상의 랩탑 또는 데스크톱에 대응하는 코드를 작성한다.
  .profile-card {
    width: calc(100% / 6 - 20px);
  }
}
</style>

