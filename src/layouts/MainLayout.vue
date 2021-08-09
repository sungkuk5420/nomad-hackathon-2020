<template>
  <div class="page-layout">
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Vue from "vue";

export default {
  name: "MyLayout",
  data() {
    return {
      active: 0
    };
  },
  computed: {
  },
  methods: {
    onClickBack() {
      this.$router.push(`/Home`);
    },
    movePage(pageName) {
      this.$router.push(`${pageName}`);
    }
  }
};
</script>

<style lang="scss">
.page-container {
  height: 100%;
  overflow: auto;
  background: #f6f6f6 0% 0% no-repeat padding-box;
}
.page-layout {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.van-sticky--fixed {
  position: fixed;
  top: 46px;
  right: 0;
  left: 0;
  z-index: 99;
}
.van-nav-bar--fixed {
  flex: none;
}
.van-tabbar--fixed {
  flex: none;
}
.images-slider {
  display: flex;
  width: 100%;
  overflow: auto;
  flex: none;
  padding: 0 5px;
  background: white;
  &.market {
    .van-image {
      width: 28%;
    }
  }
}
.van-image {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: calc(100% - 40px);
}
.item-card {
  width: calc(33.3333% - 4px);
  height: calc(33.3333vw + 33px);
  flex: none;
  margin-right: 6px;
}
.item-info {
  &__name {
    font-family: "Noto Sans CJK KR";
    font-size: 9px;
    font-weight: bold;
    color: #999999;
  }
  &__price {
    display: flex;
    justify-content: space-between;
    span {
      font-family: "Noto Sans CJK KR";
      font-size: 14px;
      font-weight: bold;
      color: #333333;
    }
    .van-icon {
      display: inline-flex;
      align-items: center;
      span {
        font-family: "Noto Sans CJK KR";
        font-size: 9px;
        font-weight: bold;
        color: #333333;
        margin: 0 5px;
      }
    }
  }
}

.title-wrapper {
  &__title {
    font-weight: bold;
    font-family: "Noto Sans CJK KR";
    font-size: 16px;
    color: #333333;
    padding: 10px;
  }
}
#q-app {
  .van-checkbox__icon {
    background: none;
    &--round:not(.van-checkbox__icon--checked) .van-icon {
      background: white;
    }
  }
}
.van-tabbar {
  height: 70px;
}
.van-tabbar-item {
  color: #a5a5a5;
  padding-bottom: 10px;
  &__icon {
    margin-bottom: 3px;
  }
  img,
  g,
  path {
    fill: #a5a5a5;
    stroke: #a5a5a5;
    stroke-width: 0.3;
  }
  &.van-tabbar-item--active {
    color: #3b9dff;
    img,
    g,
    path {
      fill: #3b9dff;
      stroke: #3b9dff;
      stroke-width: 0.3;
    }
  }
}
.van-nav-bar {
  .van-nav-bar__left {
    display: flex;
    align-items: center;
  }
  .van-nav-bar__title {
    display: block;
  }
  img {
    display: none;
  }
  &.logo-nav {
    .van-icon-arrow-left,
    .van-nav-bar__title {
      display: none;
    }
    img {
      display: block;
    }
  }
  &.no-back-button {
    .van-nav-bar__left {
      display: none;
    }
    .van-nav-bar__right {
      display: none;
    }
  }
  .van-icon.van-icon-search {
    color: #333333;
  }
}
.van-nav-bar__right {
  height: 50px;
}
</style>
