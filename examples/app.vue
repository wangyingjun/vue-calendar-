<template>
    <div class="test">
        <calendar></calendar>
    </div>
</template>
<script>
    import calendar from '../src/components/calendar/calendar.vue'
    export default {
        data(){
            return {
                msg: 'test'
            }
        },
        mounted: function() {

        },
        methods: {
        },
        components: {
            calendar
        }
    }
</script>