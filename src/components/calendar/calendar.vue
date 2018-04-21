<template>
    <div>
        <transition name="fade">
            <div v-if="visible" class="ui-model" @click="close"></div>
        </transition>
        <transition name="slide">
        <div v-if="visible" class="ui-calendar">
            <div class="ui-calendar__tools">
                <a href="javascript:;" class="ui-tools__btn" @click="handleCancel">取消</a>
                <a href="javascript:;" class="ui-tools__btn done" @click="handleDone">完成</a>
            </div>
            <div class="ui-calendar__week-bar">
                <ul>
                    <li class="weekend">日</li>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li class="weekend">六</li>
                </ul>
            </div>
            <div class="ui-calendar__wrapper">
                <div v-for="item in monthPlaneList" class="ui-month__plane">
                    <div class="ui-month__bar">{{item.year}}年{{item.month + 1}}月</div>
                    <div class="ui-month__list">
                        <ul>
                            <li v-for="cell in item.list" :class="getCellClasses(cell)"
                                @click="handleClick(item.year, item.month, cell)">
                                <div v-if="cell === 'empty'" class="inner"></div>
                                <div v-else class="inner"><span>{{cell.text}}</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </transition>
    </div>
</template>
<style lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .slide-enter-active, .slide-leave-active {
        transition: transform .3s;
    }
    .slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
        transform: translateY(100%);
    }
    .ui-model {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .7);
        z-index: 9;
    }

    .ui-calendar {
        position: absolute;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        background-color: #fff;
        width: 100%;
        height: 75%;
        z-index: 10;
        .ui-calendar__tools {
            position: absolute;
            z-index: 10;
            top: 0;
            left: 0;
            height: 45px;
            width: 100%;
            border-bottom: 1px solid #d9d9d9;
            background-color: #fff;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            .ui-tools__btn{
                font-size: 15px;
                padding: 5px 10px;
                color: #333;
                &.done{
                    color: #0BB580
                }
            }
        }
        .ui-calendar__week-bar {
            position: absolute;
            z-index: 10;
            top: 45px;
            left: 0;
            height: 49px;
            width: 100%;
            border-bottom: 1px solid #d9d9d9;
            background-color: #fff;
            ul{
                display: flex;
            }
            li{
                flex: 1 1 auto;
                text-align: center;
                line-height: 49px;
                font-size: 14px;
                color: #333;
                &.weekend{
                    color: #FF811B;
                }
            }
        }
        .ui-calendar__wrapper{
            box-sizing: border-box;
            padding-top: 94px;
            width: 100%;
            height: 100%;
            overflow: auto;
        }
        .ui-month__plane{
            .ui-month__bar{
                height: 60px;
                line-height: 60px;
                text-align: center;
                font-size: 14px;
                color: #333;
            }
            .ui-month__list{
                ul{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                }
                li{
                    flex: 0 0 auto;
                    width: 14.28%;
                    padding: 14px 0;
                    border-bottom: 1px solid #eee;
                    text-align: center;
                    position: relative;
                    font-size: 16px;
                    color: #333;
                    &.weekend{
                        color: #FF811B;
                    }
                    &.today{
                        color: #0BB580;
                        font-weight: bold;
                    }
                    &.disable{
                        color: #ccc;
                    }
                }
                .inner{
                    height: 30px;
                    span{
                        display: block;
                        width: 30px;
                        height: 30px;
                        line-height: 30px;
                        margin: 0 auto;
                    }
                }
                .in-range{
                    .inner{
                        background-color: #F7F8F8;
                    }
                    span{
                        color: #0BB580;
                    }
                }
                .start-date{
                    .inner{
                        position: relative;
                        &::before{
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 50%;
                            height: 100%;
                            background-color: #fff;
                        }
                    }
                    span{
                        position: relative;
                        z-index: 3;
                        color: #fff;
                        background: #0BB580;
                        border-radius: 50%;
                    }
                }
                .end-date{
                    .inner{
                        position: relative;
                        &::before{
                            content: '';
                            position: absolute;
                            top: 0;
                            right: 0;
                            width: 50%;
                            height: 100%;
                            background-color: #fff;
                        }
                    }
                    span{
                        position: relative;
                        z-index: 3;
                        color: #fff;
                        background: #0BB580;
                        border-radius: 50%;
                    }
                }
            }
        }
    }
</style>
<script>
    export default {
        data(){
            return {
                visible: false,
                today: new Date(),
                currentYear: '',
                currentMonth: '',
                currentDay: '',
                startDate: '',
                endDate: '',
                monthDayList: [31,28,31,30,31,30,31,31,30,31,30,31],
                monthPlaneList: []
            }
        },
        props: {
            done: Function,
            months: {
                type: Number,
                default: 4
            },
            defaultValue: {
                type: Array,
                default(){
                    return ['', '']
                }
            }
        },
        watch:{
            defaultValue(newVal, oldVal){
                this.startDate = newVal[0];
                this.endDate = newVal[1];
                this.doMark();
            }
        },
        methods: {
            getUTC(year, month, day){
                return Date.UTC(year, month, day)
            },
            createMonthList(){
                let year = this.today.getFullYear(),
                    month = this.today.getMonth(),
                    planeList = [];
                planeList.push(this.createMonth(year, month));
                for (let i=1; i<this.months; i++){
                    if(month === 11){
                        year += 1;
                        month = 1;
                    }else{
                        month += 1;
                    }
                    planeList.push(this.createMonth(year, month));
                }
                this.monthPlaneList = planeList;
            },
            createMonth(year, month){

                let isLeapYear = year%400 === 0 || (year%4 === 0 && year%100 !== 0),
                    leapMonthDays = isLeapYear ? 29 : 28,
                    monthDays = month === 1 ? leapMonthDays : this.monthDayList[month];

                let firstDay = (new Date(Date.UTC(year, month, 1))).getDay(),
                    offsetDays = firstDay === 0 ? 0 : firstDay -1;

                let list = [];
                for(let i=0; i<offsetDays; i++){
                    list.push('empty')
                }
                for(let i=1; i<=monthDays; i++){
                    let index  = offsetDays + i - 1,
                        isWeekend = index % 7 === 0 || (index+1) % 7 === 0,
                        isToday = this.currentYear === year && this.currentMonth === month && this.currentDay === i,
                        disable = Date.UTC(year, month, i) < Date.UTC(this.currentYear, this.currentMonth, this.currentDay);
                    list.push({
                        text: i,
                        isRange: false,
                        isStart: false,
                        isEnd: false,
                        disable,
                        isWeekend,
                        isToday
                    })
                }
                return {
                    year,
                    month,
                    list
                }
            },
            getCellClasses(cell){
                let classes = [];
                if(typeof cell === 'string') return '';
                if(cell.isWeekend){
                    classes.push('weekend')
                }
                if(cell.isToday){
                    classes.push('today')
                }
                if(cell.disable){
                    classes.push('disable')
                }
                if(cell.isRange){
                    classes.push('in-range')
                }
                if(cell.isStart){
                    classes.push('start-date')
                }
                if(cell.isEnd){
                    classes.push('end-date')
                }

                return classes.join(' ')
            },
            currentDate(){
                this.currentYear = this.today.getFullYear();
                this.currentMonth = this.today.getMonth();
                this.currentDay = this.today.getDate();
            },
            markRange(){
                if(!this.startDate && !this.endDate){
                    for (let i=0; i<this.months; i++){
                        this.monthPlaneList[i].list.forEach( day => {
                            if(typeof day === 'string') return;
                            if(day.disable) return;
                            day.isRange = false;
                            day.isStart = false;
                            day.isEnd = false;
                        })
                    }
                }else if(this.startDate && this.endDate){
                    for (let i=0; i<this.months; i++){
                        let current = this.monthPlaneList[i],
                            currentYear = current.year,
                            currentMonth = current.month;
                        current.list.forEach( day => {
                            if(typeof day === 'string') return;
                            if(day.disable) return;
                            day.isRange = false;
                            day.isStart = false;
                            day.isEnd = false;
                            let currentUTC = this.getUTC(currentYear, currentMonth, day.text);
                            if(currentUTC === this.startDate){
                                day.isStart = true;
                            }
                            if(currentUTC === this.endDate){
                                day.isEnd = true;
                            }
                            if(currentUTC >= this.startDate && currentUTC <= this.endDate){
                                day.isRange = true;
                            }
                        })
                    }
                }else if(this.startDate && !this.endDate){
                    for (let i=0; i<this.months; i++){
                        let current = this.monthPlaneList[i],
                            currentYear = current.year,
                            currentMonth = current.month;
                        current.list.forEach( day => {
                            if(typeof day === 'string') return;
                            if(day.disable) return;
                            day.isRange = false;
                            day.isStart = false;
                            day.isEnd = false;
                            let currentUTC = this.getUTC(currentYear, currentMonth, day.text);
                            if(currentUTC === this.startDate){
                                day.isStart = true;
                            }
                        })
                    }
                }
            },
            getDates(){
                return {
                    startDate: this.startDate,
                    endDate: this.endDate,
                }
            },
            handleClick(year, month, cell){
                if(typeof cell === 'string') return;
                if(cell.disable) return;
                let currentUTC = this.getUTC(year, month, cell.text);
                if( (!this.startDate && !this.endDate) ||
                    (this.startDate && this.endDate) ){
                    this.startDate = currentUTC;
                    this.endDate = '';
                }else if(this.startDate){
                    if(currentUTC < this.startDate){
                        this.startDate = currentUTC
                    }else if(currentUTC > this.startDate){
                        this.endDate = currentUTC;
                    }
                }
                this.markRange();
            },
            open(){
                this.visible = true;
            },
            close(){
                this.visible = false;
            },
            handleDone(){
                if(!this.startDate || !this.endDate) return;
                this.done && this.done(this.getDates());
                this.close();
            },
            handleCancel(){
                this.close();
            },
            doMark(){
                let start = this.defaultValue[0];
                let end = this.defaultValue[1];
                if(start){
                    start = new Date(start);
                    start = this.getUTC(start.getFullYear(), start.getMonth(), start.getDate())
                }
                if(end){
                    end = new Date(end);
                    end = this.getUTC(end.getFullYear(), end.getMonth(), end.getDate())
                }
                this.startDate = start;
                this.endDate = end;
                this.markRange();
            }
        },
        mounted(){
            this.currentDate();
            this.createMonthList();
            this.doMark()
        }
    }
</script>