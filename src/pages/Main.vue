<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }" class="header">
      <div class="header__logo">
        <img src="~assets/logo.png" alt="">
      </div>
      <h1 class="header__title"><span>노마드코더 2020 해커톤 참가 팀 목록</span><a-button  @click="showModal">팀 등록</a-button></h1>
      
      
    </a-layout-header>
      <a-layout-content
        :style="{ margin: '84px 16px 24px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <a-card hoverable class="profile-card">
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            slot="cover"
          />
          <a-card-meta title="Europe Street beat">
            <template slot="description"
              >www.instagram.com
              </template>
          </a-card-meta>
        </a-card>
        <a-card hoverable class="profile-card">
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            slot="cover"
          />
          <a-card-meta title="Europe Street beat">
            <template slot="description"
              >www.instagram.com
              </template>
          </a-card-meta>
        </a-card>
        <a-card hoverable class="profile-card">
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            slot="cover"
          />
          <a-card-meta title="Europe Street beat">
            <template slot="description"
              >www.instagram.com
              </template>
          </a-card-meta>
        </a-card>
        <a-card hoverable class="profile-card">
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            slot="cover"
          />
          <a-card-meta title="Europe Street beat">
            <template slot="description"
              >www.instagram.com
              </template>
          </a-card-meta>
        </a-card>
        <a-card hoverable class="profile-card">
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            slot="cover"
          />
          <a-card-meta title="Europe Street beat">
            <template slot="description"
              >www.instagram.com
              </template>
          </a-card-meta>
        </a-card>
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
      AddTeam,
    },
    data() {
      return {
        
      };
    },
    computed: {
      ...mapGetters({
        // changeSuccessMessage: "changeSuccessMessage",
      })
    },
    methods: {
      showModal(){
        this.$store.dispatch(T.CHANGE_MODAL_VISIBLE);
      }
    }
  };
</script>
<style lang="scss" >
  .ant-layout-header{
    padding: 0 20px;
  }
  .ant-layout{
    height: 100%;
  }
  #components-layout-demo-fixed{
    .ant-layout-content{
      height: 100%;
      padding-top: 50px;
      display: flex;
      flex: none;
      flex-wrap: wrap;
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
        width: 100%;
        .ant-btn{
          margin-left: auto;
        }
      }
    }
    .profile-card{
      max-width: 240px;
      flex:none;
      height: 390px;
      &:not(:last-child){
        margin-right: 20px;
      }
    }
  }
</style>