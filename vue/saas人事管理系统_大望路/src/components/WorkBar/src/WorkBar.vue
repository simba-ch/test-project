<template>
  <div class="work-bar">
    <router-link
      :to="{
        name: 'recruit'
      }"
    >
      <div> <img src="@/assets/imgs/recruit.png" /> </div>
    </router-link>
    <router-link :to="{ name: 'induction' }">
      <div class="item-wrapper">
        <div class="bg induction-color">
          <Icon icon="svg-icon:induction" :size="66" />
        </div>
        <p class="title">入职</p>
      </div>
    </router-link>
    <router-link :to="{ name: 'attendance' }">
      <div class="item-wrapper">
        <div class="bg attendance-color">
          <Icon icon="svg-icon:attendance" :size="66" />
        </div>
        <p class="title">考勤</p>
      </div>
    </router-link>
    <router-link :to="{ name: 'wages' }">
      <div class="item-wrapper">
        <div class="bg wages-color">
          <Icon icon="svg-icon:wages" :size="66" />
        </div>
        <p class="title">工资</p>
      </div>
    </router-link>
    <router-link :to="{ name: 'transferAndSeparation' }">
      <div class="item-wrapper">
        <div class="bg transfer-and-separation-color">
          <Icon icon="svg-icon:transferAndSeparation" :size="66" />
        </div>
        <p class="title">调动离职</p>
      </div>
    </router-link>
    <router-link :to="{ name: 'partTimeJob' }">
      <div class="item-wrapper">
        <div class="bg part-time-job-color">
          <Icon icon="svg-icon:partTimeJob" :size="66" />
        </div>
        <p class="title">兼职管理</p>
      </div>
    </router-link>
    <div class="item-wrapper cursor-pointer">
      <div class="bg documentation-color">
        <Icon icon="svg-icon:documentation" :size="66" />
      </div>
      <p class="title">文件资料</p>
    </div>
  </div>
</template>

<style scoped lang="less">
.work-bar {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 50px 0 30px;
}

.item-wrapper {
  width: 98px;
  text-align: center;

  .title {
    margin-top: 14px;
    font-weight: bold;
    color: #535353;
  }
}

.bg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98px;
  height: 87px;
  border-radius: 15px;
}

.induction-color {
  background-color: #4eb716;
}

.attendance-color {
  background-color: #ff8809;
}

.wages-color {
  background-color: #5694f2;
}

.transfer-and-separation-color {
  background-color: #5694f2;
}

.part-time-job-color {
  background-color: #f47a7a;
}

.documentation-color {
  background-color: #067bff;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
