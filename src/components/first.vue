<template>
   <div>
    {{text}}
    <slot></slot>
   </div>
</template>

<script>

export default{
    props:{
        text:""
    }
}
    
</script>

