<template>
  <div>
    <div class="header">
      <slot name="header">Une entête</slot>
    </div>
    <div class="content">
      <slot name="content">Un contenu</slot>
    </div>
    <div class="footer">
      <slot name="footer">Un footer</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style>
.header {
  background-color: red;
}
.content {
  background-color: green;
}
.footer {
  background-color: blue;
}
</style>