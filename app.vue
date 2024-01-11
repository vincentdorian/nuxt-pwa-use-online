<script setup lang="ts">
const isOnline = useOnline()

const isOnlineNavigator = ref(false)

if (process.client){
 isOnlineNavigator.value = navigator.onLine
}

</script>
<template>
  <div>
    <VitePwaManifest />
   <ClientOnly>
    <div>
      {{ 'Online:' + isOnline }}

      {{ 'OnlineNavigator:' + isOnlineNavigator }}
    </div>
   </ClientOnly>
  </div>
</template>
