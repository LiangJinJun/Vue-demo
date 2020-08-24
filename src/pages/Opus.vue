<template>
  <div class="opus">
    <TopNav />
    <div class="container">
      <router-link
        :to="`/useropus`"
        v-for="(item, index) in userInfos"
        :key="index"
        class="opus-item"
      >
        <div class="left">
          <img src="../assets/userImg.jpg" alt />
          <div>{{item.name}}</div>
        </div>
        <div class="right">
          <div class="title">{{item.opusName}}</div>
          <div class="jieshao">{{item.jieshao}}</div>
          <div class="bottom">
            <div>作品数量:{{item.count}}</div>
            <div @click="changeLike(item.id)">
              <div class="islike" :class="{like: item.like}"></div>
              <div>添加收藏</div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <Nav />
  </div>
</template>
<script>
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";

export default {
  name: "Opus",
  components: { Nav, TopNav },
  data() {
    return {
      userInfos: [
        {
          id: 1,
          name: "梁又文",
          opusName: "layouwen的仓库",
          jieshao: "小程序开发、网站开发、ui设计",
          count: 3,
          like: false,
        },
        {
          id: 2,
          name: "梁金俊",
          opusName: "layouwen的仓库",
          jieshao: "小程序开发、网站开发、ui设计",
          count: 3,
          like: true,
        },
        {
          id: 3,
          name: "王煜",
          opusName: "layouwen的仓库",
          jieshao: "小程序开发、网站开发、ui设计",
          count: 3,
          like: true,
        },
        {
          id: 4,
          name: "杨青青",
          opusName: "layouwen的仓库",
          jieshao: "小程序开发、网站开发、ui设计",
          count: 3,
          like: false,
        },
      ],
    };
  },
  methods: {
    changeLike: function (id) {
      let index = this.userInfos.findIndex((item) => item.id === id);
      this.userInfos[index].like = !this.userInfos[index].like;
    },
  },
};
</script>
<style>
.like {
  background: red;
}
.opus {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.container {
  flex: 1;
}
.opus-item {
  display: flex;
  margin: 0 10px;
  padding: 10px;
  border-bottom: 1px solid gray;
}
.left {
  padding-right: 10px;
}
.left img {
  display: block;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 50%;
}
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.jieshao {
  flex: 1;
}
.bottom {
  display: flex;
  justify-content: space-between;
}
.bottom div:nth-child(2) {
  display: flex;
  align-items: center;
}
.islike {
  width: 16px;
  height: 16px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid #000;
}
</style>