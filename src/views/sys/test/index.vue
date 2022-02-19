<template>
  <div>{{ title }}</div>
</template>

<script lang="ts" setup>
  import { useI18n } from '/@/hooks/web/useI18n';
  const { t } = useI18n();
  const title = t('routes.test.hello');
  console.log(title);
</script>
