<template>
  <div>
    <a-modal
      v-model="modalVisible"
      title="참가자 카드 등록"
      onOk="handleOk"
      :maskClosable="false"
      :keyboard="false"
      v-bind:class="addTeamCard.teamType"
    >
      <div class="main">
        <div class="center-label">메인 이미지</div>
        <div class="main__image">
          <a-upload
            name="avatar"
            listType="picture-card"
            class="avatar-uploader"
            :showUploadList="false"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :beforeUpload="beforeUpload"
            @change="mainHandleChange"
          >
            <img v-if="mainImagePreview" :src="mainImagePreview" alt="avatar" />
            <div v-else>
              <a-icon :type="mainLoding ? 'loading' : 'plus'" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
        </div>
      </div>
      <div class="center-label">
        <a-radio-group defaultValue="alone" buttonStyle="solid" v-model="addTeamCard.teamType">
          <a-radio-button value="alone">개인</a-radio-button>
          <a-radio-button value="team">팀</a-radio-button>
        </a-radio-group>
      </div>
      <div class="flex justify-cendter">
        <div class="people">
          <div class="center-label" v-show="addTeamCard.teamType == 'team'">팀원 1</div>
          <div class="center-label" v-show="addTeamCard.teamType == 'alone'">프로필 이미지</div>
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
              <img v-if="firstPeopleImagePreview" :src="firstPeopleImagePreview" alt="avatar" />
              <div v-else>
                <a-icon :type="firstLoding ? 'loading' : 'plus'" />
                <div class="ant-upload-text">Upload</div>
              </div>
            </a-upload>
          </div>
          <a-input placeholder="참가자 1 이름" v-model="addTeamCard.firstPeopleName" />
        </div>
        <div class="people" v-show="addTeamCard.teamType == 'team'">
          <div class="center-label">팀원 2</div>
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
              <img v-if="secondPeopleImagePreview" :src="secondPeopleImagePreview" alt="avatar" />
              <div v-else>
                <a-icon :type="secondLoding ? 'loading' : 'plus'" />
                <div class="ant-upload-text">Upload</div>
              </div>
            </a-upload>
          </div>
          <a-input placeholder="참가자 2 이름" v-model="addTeamCard.secondPeopleName" />
        </div>
        <a-input style="margin-top:10px;" placeholder="팀명" v-model="addTeamCard.teamName" />
        <a-input style="margin-top:10px;" placeholder="포부 한마디" v-model="addTeamCard.comment" />
        <a-input-password
          style="margin-top:10px;"
          placeholder="수정, 삭제 패스워드"
          v-model="addTeamCard.password"
        />
      </div>
      <template slot="footer">
        <a-button key="back" @click="handleCancel">취소</a-button>
        <a-button
          key="submit"
          type="primary"
          :loading="buttonLoading"
          v-show="updateTeamCardData === null"
          @click="handleOk"
        >확인</a-button>
        <a-button
          key="update"
          type="primary"
          :loading="buttonLoading"
          v-show="updateTeamCardData !== null"
          @click="handleUpdate"
        >수정</a-button>
      </template>
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
      visible: false,
      buttonLoading: false,
      mainLoding: false,
      firstLoding: false,
      secondLoding: false,
      mainImagePreview: "",
      firstPeopleImagePreview: "",
      secondPeopleImagePreview: "",
      addTeamCard: {
        teamType: "alone",
        mainImage: "",
        firstPeopleImage: "",
        firstPeopleName: "",
        secondPeopleImage: "",
        secondPeopleName: "",
        teamName: "",
        comment: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters({
      modalVisible: "getModalVisible",
      imageServerUrl: "getImageServerUrl",
      updateTeamCardData: "getUpdateTeamCardData"
    })
  },
  watch: {
    updateTeamCardData(updateTeamCard) {
      if (updateTeamCard != null) {
        this.mainImagePreview =
          updateTeamCard.mainImage != ""
            ? this.imageServerUrl + updateTeamCard.mainImage
            : updateTeamCard.mainImage;
        this.firstPeopleImagePreview =
          updateTeamCard.firstPeopleImage != ""
            ? this.imageServerUrl + updateTeamCard.firstPeopleImage
            : updateTeamCard.firstPeopleImage;
        this.secondPeopleImagePreview =
          updateTeamCard.secondPeopleImage != ""
            ? this.imageServerUrl + updateTeamCard.secondPeopleImage
            : updateTeamCard.secondPeopleImage;
        this.addTeamCard = {
          _id: updateTeamCard._id,
          teamType: updateTeamCard.teamType,
          mainImage: updateTeamCard.mainImage,
          firstPeopleImage: updateTeamCard.firstPeopleImage,
          firstPeopleName: updateTeamCard.firstPeopleName,
          secondPeopleImage: updateTeamCard.secondPeopleImage,
          secondPeopleName: updateTeamCard.secondPeopleName,
          teamName: updateTeamCard.teamName,
          comment: updateTeamCard.comment,
          password: ""
        };
      }
    },
    modalVisible(value) {
      if (this.updateTeamCardData == null && value == true) {
        this.mainLoding = false;
        this.firstLoding = false;
        this.secondLoding = false;
        this.buttonLoading = false;
        this.mainImagePreview = "";
        this.firstPeopleImagePreview = "";
        this.secondPeopleImagePreview = "";
        this.addTeamCard = {
          teamType: "alone",
          mainImage: "",
          firstPeopleImage: "",
          firstPeopleName: "",
          secondPeopleImage: "",
          secondPeopleName: "",
          teamName: "",
          comment: ""
        };
      } else if (value == false) {
        this.$store.dispatch(T.INSERT_TEAM_CARD_DATA, {
          insertTeamCardData: null
        });
      }
    }
  },
  methods: {
    handleOk(e) {
      this.buttonLoading = true;
      if (this.addTeamCard.firstPeopleName == "") {
        this.$message.error("팀원 1의 이름을 입력해주세요.");
        this.buttonLoading = false;
      } else if (
        this.addTeamCard.teamType == "team" &&
        this.addTeamCard.secondPeopleName == ""
      ) {
        this.$message.error("팀원 2의 이름을 입력해주세요.");
        this.buttonLoading = false;
      } else if (this.addTeamCard.comment == "") {
        this.$message.error("포부 한마디를 입력해주세요.");
        this.buttonLoading = false;
      } else if (this.addTeamCard.teamName == "") {
        this.$message.error("팀명을 입력해주세요.");
      } else if (this.addTeamCard.password == "") {
        this.$message.error("수정 / 삭제를 위한 비밀번호를 입력해주세요.");
        this.buttonLoading = false;
      } else {
        let vueObj = this;
        let addTeamCard = this.addTeamCard;
        setTimeout(() => {
          this.$store.dispatch(T.ADD_TEAM_CARD, {
            addTeamCard,
            cb: data => {
              vueObj.firstLoding = false;
              vueObj.buttonLoading = false;
              vueObj.$message.success("등록완료");
              vueObj.$store.dispatch(T.CHANGE_MODAL_VISIBLE);
            }
          });
          this;
        }, 500);
      }
    },
    handleUpdate(e) {
      this.buttonLoading = true;
      if (this.addTeamCard.firstPeopleName == "") {
        this.$message.error("팀원 1의 이름을 입력해주세요.");
        this.buttonLoading = false;
      } else if (
        this.addTeamCard.teamType == "team" &&
        this.addTeamCard.secondPeopleName == ""
      ) {
        this.$message.error("팀원 2의 이름을 입력해주세요.");
        this.buttonLoading = false;
      } else if (this.addTeamCard.comment == "") {
        this.$message.error("포부 한마디를 입력해주세요.");
        this.buttonLoading = false;
      } else if (this.addTeamCard.teamName == "") {
        this.$message.error("팀명을 입력해주세요.");
      } else if (this.addTeamCard.password == "") {
        this.$message.error("수정 / 삭제를 위한 비밀번호를 입력해주세요.");
        this.buttonLoading = false;
      } else {
        let vueObj = this;
        let addTeamCard = this.addTeamCard;
        setTimeout(() => {
          this.$store.dispatch(T.CHECK_UPDATE_PASSWORD, {
            addTeamCard,
            cb: isPasswordOk => {
              if (!isPasswordOk) {
                vueObj.$message.error("패스워드가 일치하지 않습니다.");
                vueObj.buttonLoading = false;
              } else {
                vueObj.$store.dispatch(T.UPDATE_TEAM_CARD, {
                  updateTeamCard: addTeamCard,
                  cb: data => {
                    vueObj.firstLoding = false;
                    vueObj.buttonLoading = false;
                    vueObj.$message.success("수정완료");
                    vueObj.$store.dispatch(T.CHANGE_MODAL_VISIBLE);
                  }
                });
              }
            }
          });
        }, 500);
      }
    },
    handleCancel(e) {
      this.$store.dispatch(T.CHANGE_MODAL_VISIBLE);
    },
    mainHandleChange(info) {
      if (info.file.status === "uploading") {
        this.mainLoding = true;
        this.buttonLoading = true;
        return;
      }
      if (info.file.status === "done") {
        this.addTeamCard.mainImage = info.file.originFileObj;
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.mainImagePreview = imageUrl;
          this.mainLoding = false;
          this.buttonLoading = false;
        });
      }
    },
    firstHandleChange(info) {
      if (info.file.status === "uploading") {
        this.firstLoding = true;
        this.buttonLoading = true;
        return;
      }
      if (info.file.status === "done") {
        this.$refs.firstPeople.style.height = "auto";
        this.$refs.secondPeople.style.height = "auto";
        // Get this url from response in real world.

        this.addTeamCard.firstPeopleImage = info.file.originFileObj;
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.firstPeopleImagePreview = imageUrl;
          this.firstLoding = false;
          this.buttonLoading = false;

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
        this.buttonLoading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        this.$refs.firstPeople.style.height = "auto";
        this.$refs.secondPeople.style.height = "auto";
        this.addTeamCard.secondPeopleImage = info.file.originFileObj;
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.secondPeopleImagePreview = imageUrl;
          this.secondLoding = false;
          this.buttonLoading = false;

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
.center-label {
  width: 100%;
  text-align: center;
}
.main {
  width: 100%;
  &__image {
    display: flex;
    justify-content: center;
  }
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
