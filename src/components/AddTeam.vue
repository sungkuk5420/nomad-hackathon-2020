<template>
  <div>
    <a-modal
      v-model="modalVisible"
      title="참가자 카드 등록"
      onOk="handleOk"
      :maskClosable="false"
      v-bind:class="addTeamData.teamType"
    >
      <template slot="footer">
        <a-button key="back" @click="handleCancel">취소</a-button>
        <a-button
          key="submit"
          type="primary"
          :loading="firstLoding"
          @click="handleOk"
        >
          확인
        </a-button>
      </template>
      <a-radio-group
        defaultValue="alone"
        buttonStyle="solid"
        v-model="addTeamData.teamType"
      >
        <a-radio-button value="alone">개인</a-radio-button>
        <a-radio-button value="team">팀</a-radio-button>
      </a-radio-group>
      <div class="flex justify-cendter">
        <div class="people">
          <div class="people__image" ref="firstPeople">
            <a-upload
              name="avatar"
              listType="picture-card"
              class="avatar-uploader"
              :showUploadList="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :beforeUpload="beforeUpload"
              @change="firstHandleChange"
            >
              <img
                v-if="addTeamData.firstPeople.image"
                :src="addTeamData.firstPeople.image"
                alt="avatar"
              />
              <div v-else>
                <a-icon :type="firstLoding ? 'loading' : 'plus'" />
                <div class="ant-upload-text">Upload</div>
              </div>
            </a-upload>
          </div>
          <a-input
            placeholder="참가자 1 이름"
            v-model="addTeamData.firstPeople.name"
          />
        </div>
        <div class="people" v-show="addTeamData.teamType == 'team'">
          <div class="people__image" ref="secondPeople">
            <a-upload
              name="avatar"
              listType="picture-card"
              class="avatar-uploader"
              :showUploadList="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :beforeUpload="beforeUpload"
              @change="secondHandleChange"
            >
              <img
                v-if="addTeamData.secondPeople.image"
                :src="addTeamData.secondPeople.image"
                alt="avatar"
              />
              <div v-else>
                <a-icon :type="secondLoding ? 'loading' : 'plus'" />
                <div class="ant-upload-text">Upload</div>
              </div>
            </a-upload>
          </div>
          <a-input
            placeholder="참가자 2 이름"
            v-model="addTeamData.secondPeople.name"
          />
        </div>
        <a-input
          style="margin-top:10px;"
          placeholder="포부 한마디"
          v-model="addTeamData.comment"
        />
      </div>
    </a-modal>
  </div>
</template>
<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
export default {
  data() {
    return {
      modalLoading: false,
      visible: false,
      firstLoding: false,
      secondLoding: false,
      addTeamData: {
        teamType: "alone",
        firstPeople: {
          name: "",
          image: ""
        },
        secondPeople: {
          name: "",
          image: ""
        },
        comment: ""
      }
    };
  },
  computed: {
    ...mapGetters({
      modalVisible: "getModalVisible"
    })
  },
  methods: {
    handleOk(e) {
      this.modalLoading = true;
      if (this.addTeamData.firstPeople.image == "") {
        this.$message.error("팀원 1의 이미지를 등록해주세요.");
        this.modalLoading = false;
      } else if (this.addTeamData.firstPeople.name == "") {
        this.$message.error("팀원 1의 이름을 입력해주세요.");
        this.modalLoading = false;
      } else if (this.addTeamData.secondPeople.image == "") {
        this.$message.error("팀원 2의 이미지를 등록해주세요.");
        this.modalLoading = false;
      } else if (this.addTeamData.secondPeople.name == "") {
        this.$message.error("팀원 2의 이름을 입력해주세요.");
        this.modalLoading = false;
      } else if (this.addTeamData.comment == "") {
        this.$message.error("포부 한마디를 입력해주세요.");
        this.modalLoading = false;
      } else {
        setTimeout(() => {
          this.$message.success("등록완료");
          this.$store.dispatch(T.CHANGE_MODAL_VISIBLE);
          this.firstLoding = false;
        }, 500);
      }
    },
    handleCancel(e) {
      this.$store.dispatch(T.CHANGE_MODAL_VISIBLE);
    },
    firstHandleChange(info) {
      if (info.file.status === "uploading") {
        this.firstLoding = true;
        return;
      }
      if (info.file.status === "done") {
        this.$refs.firstPeople.style.height = "auto";
        this.$refs.secondPeople.style.height = "auto";
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.addTeamData.firstPeople.image = imageUrl;
          this.firstLoding = false;

          setTimeout(() => {
            const maxHeight = Math.max(
              this.$refs.firstPeople.clientHeight,
              this.$refs.secondPeople.clientHeight
            );
            console.log(maxHeight);
            this.$refs.firstPeople.style.height = maxHeight + "px";
            this.$refs.secondPeople.style.height = maxHeight + "px";
          }, 1000);
        });
      }
    },
    secondHandleChange(info) {
      if (info.file.status === "uploading") {
        this.secondLoding = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        this.$refs.firstPeople.style.height = "auto";
        this.$refs.secondPeople.style.height = "auto";
        getBase64(info.file.originFileObj, imageUrl => {
          this.addTeamData.secondPeople.image = imageUrl;
          this.secondLoding = false;

          setTimeout(() => {
            const maxHeight = Math.max(
              this.$refs.firstPeople.clientHeight,
              this.$refs.secondPeople.clientHeight
            );
            console.log(maxHeight);
            this.$refs.firstPeople.style.height = maxHeight + "px";
            this.$refs.secondPeople.style.height = maxHeight + "px";
          }, 1000);
        });
      }
    },
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isLt2M;
    }
  }
};
</script>

<style lang="scss">
.ant-modal-close-x {
  display: none;
}
.avatar-uploader {
  img {
    width: 100%;
  }
  .ant-upload {
    width: 150px;
    height: 150px;
  }
}
.people {
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: calc(50% - 5px);
  justify-content: space-between;
  &__image {
    display: flex;
    align-items: center;
  }
  &:first-child {
    margin-right: 10px;
  }
}
.ant-modal {
  &.alone {
    width: 300px !important;
    .people {
      width: calc(100%);
      &:first-child {
        margin-right: 0;
      }
    }
  }
}
</style>
