<template>
  <NConfigProvider
    :locale="language"
    :date-locale="date"
    :theme-overrides="{ common: { fontWeightStrong: '600' } }"
    class="mint-admin"
  >
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>
<script lang="ts" setup>
import { AppProvider } from "@/components/AppProvider";
import useLanguage from "./hooks/useLanguage";
const { language, date } = useLanguage();
</script>
