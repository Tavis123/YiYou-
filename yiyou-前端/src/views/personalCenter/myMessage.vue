<template>
  <div class="box">
    <div class="chatList">
      <div class="chatList-text">消息箱</div>
      <el-row>
        <el-col :span="6" class="chatList-searchInput">
            <el-input
              type="text"
              prefix-icon="el-icon-search"
              v-model="chatList_content"
              placeholder="请输入"
              style="width: 270px; cursor: pointer"
              @keyup.enter.native="getAllKb"
            ></el-input>
          </el-col>
      </el-row>
      <div class="chatList-number">
        <div class="chatList-number-text">所有信息</div>
        <div class="chatList-number-box">234</div>
      </div>
      <div class="chatList-container">
        <div class="chatList-card" v-for="(item, index) in chatList" :key="item.id">
          <div class="chatList-card-avatar">
            <el-avatar :size="49" :src="item.avatarUrl"></el-avatar>
          </div>
          <div class="chatList-card-name">{{ item.name }}
            <div class="chatList-card-lastMessage">{{ item.lastMessage }}</div>
          </div>
          <span class="chatList-card-latestTime">{{ item.latestTime }}
            <span class="chatList-card-unreadMessagesNum">{{ item.unreadMessagesNum }}</span>
          </span>
        </div>
      </div>
    </div>
    <div class="chatPage">
      <div class="chatPage-header">
        <div class="chatPage-header-name">王者荣耀</div>
        <div class="chatPage-header-more"></div>
        <el-button class="chatPage-header-button" type="primary" @click="enterStore"
          >进入店铺
        </el-button>
      </div>
      <div class="chatPage-main">
        <!-- <ul class="talk_list" id="talk_list"> -->
          <!-- <li class="left_word">
            <img src="img/person01.png" /> <span>嗨，最近想我没有？</span>
          </li> -->
          <!-- <li class="right_word">
            <img src="img/person02.png" /> <span>你好哦</span>
          </li> -->
        <!-- </ul> -->
        <!-- <div class="drag_bar" style="display: none;">
          <div class="drager ui-draggable ui-draggable-handle" style="display: none; height: 412.628px;"></div>
        </div> -->
        <ul class="chatPage-main-talkList">
          <li class="chatPage-main-talkList-leftWord">
            <el-avatar :size="49" :src="avatarUrl"></el-avatar>
            <div class="chatPage-main-talkList-leftWord-name">UU酱
              <div class="chatPage-main-talkList-leftWord-word">您好，请问我有什么可以帮助你呢？</div>
            </div>
          </li>
          <li class="chatPage-main-talkList-rightWord">
            <el-avatar :size="49" :src="avatarUrl"></el-avatar>
            <div class="chatPage-main-talkList-rightWord-name">我
              <div class="chatPage-main-talkList-rightWord-word">账号是使用多久了？</div>
            </div>
          </li>
          <li class="chatPage-main-talkList-leftWord">
            <el-avatar :size="49" :src="avatarUrl"></el-avatar>
            <div class="chatPage-main-talkList-leftWord-name">UU酱
              <div class="chatPage-main-talkList-leftWord-word">亲亲放心，账号使用都是3年以上呢~</div>
            </div>
          </li>
          <li class="chatPage-main-talkList-leftWord">
            <el-avatar :size="49" :src="avatarUrl"></el-avatar>
            <div class="chatPage-main-talkList-leftWord-name">UU酱
              <div class="chatPage-main-talkList-leftWord-word">小店账号安全性高，品质有保障，亲亲可以放心下单呢~</div>
            </div>
          </li>
          <li class="chatPage-main-talkList-rightWord">
            <el-avatar :size="49" :src="avatarUrl"></el-avatar>
            <div class="chatPage-main-talkList-rightWord-name">我
              <div class="chatPage-main-talkList-rightWord-word">最近有什么优惠吗？</div>
            </div>
          </li>
          <li class="chatPage-main-talkList-leftWord">
            <el-avatar :size="49" :src="avatarUrl"></el-avatar>
            <div class="chatPage-main-talkList-leftWord-name">UU酱
              <div class="chatPage-main-talkList-leftWord-word">满100减20呢亲亲~~</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="chatPage-footer">
        <!-- <input type="text" placeholder="说的什么吧..." class="input_txt" id="ipt" />
        <input type="button" value="发 送" class="input_sub" id="btnSend" /> -->
        <el-input
          type="textarea"
          resize="none"
          :autosize="{ minRows: 4, maxRows: 4 }"
          placeholder=""
          v-model="word"
        >
        </el-input>
        <div class="chatPage-footer-image"></div>
        <div class="chatPage-footer-emoji"></div>
      </div>
    </div>
  </div>
</template>

<script>
import avatarurl1 from "@/assets/image/avatar.png"
import avatarurl2 from "@/assets/image/Ellipse 6.png"
import avatarurl3 from "@/assets/image/Ellipse 9.png"
import avatarurl4 from "@/assets/image/Ellipse 11.png"
import avatarurl5 from "@/assets/image/Ellipse 13.png"
import avatarurl6 from "@/assets/image/Ellipse 15.png"
import avatarurl7 from "@/assets/image/Ellipse 17.png"
import avatarurl8 from "@/assets/image/Ellipse 19.png"
import avatarurl9 from "@/assets/image/Ellipse 30.png"
export default {
  name: "myMessage",
  data() {
    //这里存放数据
    return {
      avatarUrl: avatarurl9,
      chatList_content: "",
      chatList: [
        {
          avatarUrl: avatarurl1,
          name: "游戏战神",
          lastMessage: "好的，祝您生活愉快！",
          latestTime: "15 : 29",
          unreadMessagesNum: "1"
        },
        {
          avatarUrl: avatarurl2,
          name: "游戏战神",
          lastMessage: "好的，祝您生活愉快！",
          latestTime: "15 : 29",
          unreadMessagesNum: "1"
        },
        {
          avatarUrl: avatarurl3,
          name: "游戏战神",
          lastMessage: "好的，祝您生活愉快！",
          latestTime: "15 : 29",
          unreadMessagesNum: "1"
        },
        {
          avatarUrl: avatarurl6,
          name: "王者荣耀",
          lastMessage: "满100减20呢亲亲~",
          latestTime: "14 : 29",
          unreadMessagesNum: "1"
        },
        {
          avatarUrl: avatarurl7,
          name: "奥比岛",
          lastMessage: "单号发一下给我",
          latestTime: "03/22",
          unreadMessagesNum: "1"
        },
        {
          avatarUrl: avatarurl8,
          name: "大神级别账号出售",
          lastMessage: "点击重新登录就可以了",
          latestTime: "03/22",
          unreadMessagesNum: "1"
        },
        {
          avatarUrl: avatarurl4,
          name: "奥比岛账号出售",
          lastMessage: "好",
          latestTime: "03/22",
          unreadMessagesNum: "1"
        },
        {
          avatarUrl: avatarurl5,
          name: "打游戏的菜菜",
          lastMessage: "可以的，没问题",
          latestTime: "03/22",
          unreadMessagesNum: "1"
        }
      ],
      word: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    enterStore() {

    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
};
</script>
<style scoped lang="less">
.box {
  position: relative;
  margin-left: 0px;
  height: 700px
}
.chatList {
  position: absolute;
  width: 365px;
  left: 0;
  top: 0;
  height: 700px;
  border-right: 2px solid #EBF5FF;
  &-container {
    position: relative;
    top: 167px;
    max-height: 650px;
    overflow-y: auto;
    height: 512px;
    width: 365px;
  }
  &-text {
    position: absolute;
    left: 39px;
    top: 35px;
    width: 60px;
    height: 26px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #000000;
  }
  &-searchInput {
    position: absolute;
    left: 39px;
    top: 76px;
    ::v-deep .el-input__inner {
      width: 264px;
      height: 40px;
      background: #EBF5FF;
      border-radius: 20px;
    }
  }
  &-number {
    position: absolute;
    left: 0px;
    top: 120px;
    width: 365px;
    height: 45px;
    border-bottom: 2px solid #EBF5FF;
    &-text {
      float: left;
      margin-left: 39px;
      height: 45px;
      width: 80px;
      font-family: "MicrosoftYaHei";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 45px;
      color: #000000;
    }
    &-box {
      float: left;
      margin: 13px auto;
      width: 35px;
      height: 20px;
      line-height: 20px;
      background: #D9D9D9;
      border-radius: 8px;
      font-size: 14px;
      text-align: center;
      color: #fff;
    }
  }
  &-card {
    position: relative;
    height: 73px;
    width: 348px;
    border-bottom: 2px solid #EBF5FF;
    &-avatar {
      float: left;
      height: 49px;
      width: 49px;
      padding-top: 10px;
      margin-left: 30px;
    }
    &-name {
      float: left;
      width: 195px;
      height: 20px;
      margin-left: 16px;
      margin-top: 14px;
      font-family: "MicrosoftYaHei";
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
    }
    &-lastMessage {
      float: left;
      width: 200px;
      height: 15px;
      margin-top: 9px;
      font-family: "MicrosoftYaHei";
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      color: #C1C1C1;
    }
    &-latestTime {
      float: right;
      margin-top: 15px;
      margin-right: 13px;
      width: 45px;
      height: 15px;
      font-family: "MicrosoftYaHei";
      font-size: 13px;
      line-height: 15px;
      color: #C1C1C1;
      text-align: right;
    }
    &-unreadMessagesNum {
      float: right;
      margin-top: 11px;
      width: 20px;
      height: 20px;
      left: 477px;
      top: 377px;
      background: #AAC8E3;
      font-family: "MicrosoftYaHei";
      font-weight: 700;
      font-size: 8px;
      line-height: 20px;
      text-align: center;
      color: #043492;
      border-radius: 50%;
    }
  }
}
.chatPage {
  width: 1050px;
  height: 700px;
  margin-left: 370px;
  &-header {
    height: 75px;
    width: 1050px;
    border-bottom: 2px solid #EBF5FF;
    &-name {
      float: left;
      margin: 21.5px auto;
      margin-left: 40px;
      width: 96px;
      height: 32px;
      font-family: "MicrosoftYaHei";
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      /* identical to box height */
      color: #000000;
    }
    &-more {
      float: right;
      margin: 24px auto;
      margin-right: 47px;
      width: 27px;
      height: 27px;
      background: url("@/assets/image/more.png");
    }
    &-button {
      float: right;
      margin: 18px auto;
      margin-right: 25px;
      width: 90px;
      height: 40px;
      line-height: 11px;
      background: #013480;
      border-radius: 18px;
      font-family: "MicrosoftYaHei";
      text-align: center;
      font-weight: 700;
      font-size: 16px;
      color: #FFFFFF;
      padding-left: 13px;
    }
  }
  &-main {
    position: relative;
    width: 1050px;
    height: 500px;
    background-color: #F5F5F5;
    &-talkList {
      position: absolute;
      &-leftWord {
        width: 1050px;
        height: 80px;
        .el-avatar {
          float: left;
          margin: 15.5px auto;
          margin-left: 35px;
        }
        &-name {
          float: left;
          margin-top: 15px;
          margin-left: 14px;
          width: 430px;
          height: 16px;
          font-family: "MicrosoftYaHei";
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          /* identical to box height */
          color: #000000;
        }
        &-word {
          margin-top: 5px;
          padding: 13px;
          max-width: 100%;
          background: #EBF5FF;
          border-radius: 10px;
          font-family: "MicrosoftYaHei";
          font-size: 16px;
          color: #000000;
        }
      }
      &-rightWord {
        width: 1050px;
        height: 80px;
        .el-avatar {
          float: right;
          margin: 15.5px auto;
          margin-right: 35px;
        }
        &-name {
          float: right;
          margin-top: 15px;
          margin-right: 14px;
          width: 430px;
          height: 16px;
          font-family: "MicrosoftYaHei";
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          text-align: right;
          /* identical to box height */
          color: #000000;
        }
        &-word {
          margin-top: 5px;
          padding: 13px;
          max-width: 100%;
          background: #053593;
          border-radius: 10px;
          font-family: "MicrosoftYaHei";
          font-size: 16px;
          color: #fff;
        }
      }
    }
    // .talk_list {
    //   position: absolute;
    //   width: 1050px;
    //   height: 500px;
    //   left:0px;
    //   top:0px;
    //   background-color: red;
    // }
  }
  &-footer {
    position: relative;
    width: 1050px;
    height: 126px;
    .el-textarea {
      margin-left: 17px;
      margin-top: 13px;
      width: 96%;
      // border: 1px solid #C1C1C1;
      // border-radius: 11px;

    }
    ::v-deep .el-textarea__inner {
      border: 1px solid #C1C1C1;
      border-radius: 11px;
      background-color: #F5F5F5;
    }
    &-image {
      position: absolute;
      bottom: 23px;
      right: 75px;
      width: 26px;
      height: 26px;
      background: url("@/assets/image/图片 (1) 1.png");
    }
    &-emoji {
      position: absolute;
      bottom: 23px;
      right: 40px;
      width: 26px;
      height: 26px;
      background: url("@/assets/image/表情 1.png");
    }
  }
}
</style>
