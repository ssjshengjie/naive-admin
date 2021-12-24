<template>
  <nConfigProvider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="{ common: { fontWeightStrong: '600' } }"
  >
    <RouterView />
  </nConfigProvider>
</template>
<script lang="ts" setup>
import { zhCN, dateZhCN } from 'naive-ui'
</script>
