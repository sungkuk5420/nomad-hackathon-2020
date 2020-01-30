<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }" class="header">
      <div class="header__logo">
        <img src="~assets/logo.png" alt="">
      </div>
      <h1 class="header__title">노마드코더 2020 해커톤 참가 팀 목록</h1>
    </a-layout-header>
      <a-layout-content
        :style="{ margin: '84px 16px 24px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <a-card hoverable style="width: 240px">
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            slot="cover"
          />
          <a-card-meta title="Europe Street beat">
            <template slot="description"
              >www.instagram.com</template
            >
          </a-card-meta>
        </a-card>
      </a-layout-content>
  </a-layout>
</template>
<script>
  export default {
    data() {
      return {
        
      };
    },
  };
</script>
<style lang="scss" >
.ant-layout-header{
  padding: 0 20px;
}
  #components-layout-demo-fixed{
    .ant-layout-content{
      padding-top: 50px;
    }
    .header{
      display: flex;
      &__logo {
        img{
          width: auto;
          height: 40px;
        }
      }
      &__title{
        margin: 0;
        padding-left: 20px;
        display: flex;
        align-items: center;
        font-size: 20px;
        color: white;
      }
    }
    
  }
</style>