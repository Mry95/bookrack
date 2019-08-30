<template>
  <div id="app">
    <header>
      <router-link to="/home" tag="span">首页</router-link> 
      <router-link to="/classify" tag="span">分类</router-link>
      <router-link to="/paihang" tag="span">排行</router-link>
      <router-link to="/bookrack" tag="span">书架</router-link>
    </header>
    <main>
      <router-view/>
    </main>
    
  </div>
</template>

<style lang="scss">
*{
  margin: 0;padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  header{
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #888;
    color: #eee;
    display: flex;
    span{
      flex: 1;
      text-align: center;
      &.router-link-active{
        background: #000;
        color: #fff;
      }
    }
  }
}

</style>
