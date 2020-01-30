<template>
  <div>
    <a-modal v-model="modalVisible" title="팀 등록" onOk="handleOk">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">취소</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          확인
        </a-button>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
<script>
  import { mapGetters } from "vuex";
  import { T } from "../store/module-example/types";
  export default {
    data() {
      return {
        loading: false,
        visible: false,
      };
    },
    computed: {
      ...mapGetters({
        modalVisible: "getModalVisible",
      })
    },
    methods: {
      handleOk(e) {
        this.loading = true;
        setTimeout(() => {
        this.$message.success(
          '등록완료'
        );
          this.$store.dispatch(T.CHANGE_MODAL_VISIBLE);
          this.loading = false;
        }, 500);
      },
      handleCancel(e) {
        this.$store.dispatch(T.CHANGE_MODAL_VISIBLE);
      },
    },
  };
</script>

<style >
.ant-modal-close-x{
    display: none;
}
</style>