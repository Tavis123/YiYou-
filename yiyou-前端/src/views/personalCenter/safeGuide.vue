<template>
  <div :style="{'max-height': this.timeLineHeight + 'px' }"
    style="overflow-y:scroll;">
    <div class="title">账号安全指南</div>
    <div class="content">
      <span>1.使用强密码：创建一个强大且独特的密码，包括字母、数字和特殊字符，并定期更改密码。避免使用与其他平台相同的密码，以防止一次密码泄露导致多个账号受到影响。</span>
      <span>2.启用双因素认证：使用平台提供的双因素认证功能，例如短信验证码、身份验证应用程序或硬件安全令牌。这样，在登录时需要提供额外的身份验证，提高账号的安全性。</span>
      <span>3.警惕钓鱼网站和欺诈链接：避免点击来自未知来源的链接，特别是通过电子邮件或社交媒体收到的链接。骗子可能会伪装成合法平台发送虚假链接，以获取你的登录凭据。要确保访问的网站是正规的，最好手动输入网址或使用书签。</span>
      <span>4.不要透露个人信息：永远不要在不受信任的网站或与陌生人的聊天中透露个人信息，例如密码、地址、电话号码或支付信息。平台的客服人员不会要求你提供这些敏感信息。</span>
      <span>5.谨慎处理交易邀请：在交易平台上，仔细评估交易邀请的可信度。避免与声称要交易的不可信用户进行交易，尤其是当他们提供过于诱人的交易条件时。优先选择与有良好声誉和正面评价的用户进行交易。</span>
      <span>6.不要共享账号信息：不要与任何人共享你的账号信息，包括用户名、密码或其他登录凭据。将账号视为个人财产，并对其保持机密，时刻保持警惕。</span>
      <span>7.定期检查账号活动：定期检查账号的登录活动和交易历史记录。如果发现任何异常活动，例如未经授权的登录或交易，请立即与平台的客服联系并更改密码。</span>
      <span>8.定期更新系统和安全软件：确保你的设备和操作系统保持最新的安全更新，并使用可信的防病毒和防恶意软件工具来保护设备免受恶意软件和网络攻击。</span>
      <span>9.谨慎使用公共Wi-Fi：避免在公共Wi-Fi网络上登录或进行敏感操作。公共网络存在风险，黑客可能截获你的通信数据。最好在安全的私人网络上进行账号操作。</span>
      <span>10.及时报告问题：如果你怀疑账号存在安全问题或发生了未经授权的活动，请立即联系平台的客服团队报告问题。他们将能够协助你保护账号并采取适当的行动。</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "safeGuide",
  components: {},
  data() {
    //这里存放数据
    return {
      timeLineHeight: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  mounted() {
    this.timeLineHeight = document.documentElement.clientHeight - 80;
    window.onresize = () => {
      this.timeLineHeight = document.documentElement.clientHeight - 80;
    };
  }
};
</script>
<style scoped lang="less">
.title {
  margin-left: 60px;
  margin-top: 32px;
  color: #000;
  font-size: 24px;
  font-family: "MicrosoftYaHei";
  font-weight: 700;
}
.content {
  display: flex;
  width: 1278px;
  flex-direction: column;
  color: #000;
  font-size: 18px;
  font-family: "MicrosoftYaHei";
  line-height: 156%;
  margin-left: 60px;
  margin-top: 15px;
  span {
    margin: 8px 0;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
