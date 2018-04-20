<template>
    <div class="ui-model">
        <div class="ui-calendar">
            <div class="ui-calendar__tools"></div>
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
                            <li v-for="day in item.list">
                                <div v-if="day === 'empty'" class="inner"></div>
                                <div v-else class="inner"><span>{{day}}</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="ui-month__plane">
                    <div class="ui-month__bar">2018年04月</div>
                    <div class="ui-month__list">
                        <ul>

                            <li class="in-range">
                                <div class="inner"><span>13</span></div>
                            </li>
                            <li class="in-range">
                                <div class="inner"><span>14</span></div>
                            </li>
                            <li class="in-range">
                                <div class="inner"><span>15</span></div>
                            </li>
                            <li class="in-range">
                                <div class="inner"><span>16</span></div>
                            </li>
                            <li class="in-range">
                                <div class="inner"><span>17</span></div>
                            </li>
                            <li class="in-range end-date">
                                <div class="inner"><span>18</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>6</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>7</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>8</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>9</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>10</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>11</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>12</span></div>
                            </li>
                            <li class="in-range start-date">
                                <div class="inner"><span>13</span></div>
                            </li>
                            <li class="in-range">
                                <div class="inner"><span>14</span></div>
                            </li>
                            <li class="in-range">
                                <div class="inner"><span>15</span></div>
                            </li>
                            <li class="in-range">
                                <div class="inner"><span>16</span></div>
                            </li>
                            <li class="in-range">
                                <div class="inner"><span>17</span></div>
                            </li>
                            <li class="in-range end-date">
                                <div class="inner"><span>18</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>19</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>20</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>21</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>22</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>23</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>24</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>25</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>26</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>27</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>28</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>29</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>30</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="ui-month__plane">
                    <div class="ui-month__bar">2018年04月</div>
                    <div class="ui-month__list">
                        <ul>
                            <li>
                                <div class="inner"><span>1</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>2</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>3</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>4</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>5</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>6</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>7</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>8</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>9</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>10</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>11</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>12</span></div>
                            </li>
                            <li class="in-range start-date">
                                <div class="inner"><span>13</span></div>
                            </li>
                            <li class="in-range">
                                <div class="inner"><span>14</span></div>
                            </li>
                            <li class="in-range">
                                <div class="inner"><span>15</span></div>
                            </li>
                            <li class="in-range">
                                <div class="inner"><span>16</span></div>
                            </li>
                            <li class="in-range">
                                <div class="inner"><span>17</span></div>
                            </li>
                            <li class="in-range end-date">
                                <div class="inner"><span>18</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>19</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>20</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>21</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>22</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>23</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>24</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>25</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>26</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>27</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>28</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>29</span></div>
                            </li>
                            <li>
                                <div class="inner"><span>30</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .ui-model {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .7);
        z-index: 999;
    }

    .ui-calendar {
        position: absolute;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        background-color: #fff;
        width: 100%;
        height: 75%;
        z-index: 1000;
        .ui-calendar__tools {
            position: absolute;
            z-index: 10;
            top: 0;
            left: 0;
            height: 90px;
            width: 100%;
            border-bottom: 1px solid #d9d9d9;
            background-color: #fff;
        }
        .ui-calendar__week-bar {
            position: absolute;
            z-index: 10;
            top: 90px;
            left: 0;
            height: 98px;
            width: 100%;
            border-bottom: 1px solid #d9d9d9;
            background-color: #fff;
            ul{
                display: flex;
            }
            li{
                flex: 1 1 auto;
                text-align: center;
                line-height: 98px;
                font-size: 28px;
                color: #333;
                &.weekend{
                    color: #FF811B;
                }
            }
        }
        .ui-calendar__wrapper{
            box-sizing: border-box;
            padding-top: 188px;
            width: 100%;
            height: 100%;
            overflow: auto;
        }
        .ui-month__plane{
            .ui-month__bar{
                height: 120px;
                line-height: 120px;
                text-align: center;
                font-size: 28px;
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
                    padding: 28px 0;
                    border-bottom: 1px solid #eee;
                    text-align: center;
                    position: relative;
                    font-size: 32px;
                    color: #333;
                }
                .inner{
                    height: 60px;
                    span{
                        display: block;
                        width: 60px;
                        height: 60px;
                        line-height: 60px;
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
                .in-range.start-date{
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
                .in-range.end-date{
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
                today: new Date(),
                months: 4,
                monthDayList: [31,28,31,30,31,30,31,31,30,31,30,31],
                monthPlaneList: []
            }
        },
        props: {

        },
        methods: {
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
                    list.push(i)
                }
                return {
                    year,
                    month,
                    list
                }
            },
            getCellClasses(cell){

            }
        },
        mounted(){
            this.createMonthList();
            console.log(this.monthPlaneList)
        }
    }
</script>