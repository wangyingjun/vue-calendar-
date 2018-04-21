# vue-calendar-range-mobile
> 用于移动端的选择日期范围

> vue >= 2.0

## 快速开始
### 安装
```bash
npm install vue-calendar-range-mobile
```
### 引入
```javascript
import Vue from 'vue'
import Calendar from 'vue-calendar-range-mobile'
import 'vue-calendar-range-mobile/dist/calendar.css'
Vue.use(Calendar)
```

### 或者组件中引入单个组建
```javascript
import {Calendar} from 'vue-calendar-range-mobile'
```

### 或者页面中引用
```html
<!-- 引入样式 -->
<link rel="stylesheet" href="package/dist/calendar.css">
<!-- 引入组件库 -->
<script src="package/dist/calendar.js"></script>
```

### 使用
```vue
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
```
