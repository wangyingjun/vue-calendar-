<template>
    <div class="test">
        <button @click="open">test</button>
        <div>{{start}}</div>
        <div>{{end}}</div>
        <Calendar ref="calendar" :done="selectDate" :default-value="defaultValue"></Calendar>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                start: '',
                end: '',
                defaultValue: [Date.now(), Date.now()+86400000]
            }
        },
        mounted: function() {

        },
        methods: {
            open(){
                this.$refs.calendar.open();
            },
            selectDate(selectData){
                this.start = selectData.startDate;
                this.end = selectData.endDate;
            }
        },
        components: {
        }
    }
</script>