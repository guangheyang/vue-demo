<template>
  <div class="demo">
    <div class="btn">
      <button @click="handleClick('last')">数组最后一位添加</button>
      <button @click="handleClick('random')">随机添加一位</button>
      <button @click="handleRemove()">随机删除一位</button>
      <button @click="handleShuffle()">洗牌</button>
    </div>
    <transition-group tag="ul">
      <li v-for="item in lists" :key="item">{{ item }}</li>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods: {
    handleClick(type) {
      if (type === 'last') {
        this.lists.push(this.nextNum++)
      } else {
        const randomIndex = Math.floor(Math.random() * this.lists.length);
        this.lists.splice(randomIndex, 0, this.nextNum++)
      }
    },
    handleRemove() {
      const randomIndex = Math.floor(Math.random() * this.lists.length);
      this.lists.splice(randomIndex, 1)
    },
    handleShuffle() {
      this.lists.sort(() => Math.random() - 0.5)
    }
  }
}
</script>
<style scoped>
  .btn {
    display: block;
  }
  button {
    margin: 20px 5px;
  }
  li {
    list-style: none;
    display: inline-block;
    margin-right: 10px;
  }
  ul, li {
    padding: 0;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .v-enter-active,
  .v-leave-active {
    transition: all .5s;
  }
  .v-enter-to,
  .v-leave {
    opacity: 1;
    transform: translateY(0px);
  }
  .v-move {
    transition: transform .5s;
  }
</style>