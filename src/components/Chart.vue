<template>
<div>
    <trend
        :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
        :gradient="['black']"
        smooth>
    </trend>
</div>
</template>

<script>
export default {
  name: 'Chart'
}
</script>

<style>

</style>
