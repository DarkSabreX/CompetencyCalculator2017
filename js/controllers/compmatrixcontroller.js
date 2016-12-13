'use strict';

angular.module('calc')

    .controller('CompMatrixController', function () {
        var cc = this;

        this.comptncs = comparr;
        this.comp = {};
        this.compsel = {};
        this.comptbl = { show: false };
        this.results = { show: false };

        //ratingFactory.getRatingList().then(function(data){
        //  cc.ratings = data;
        //console.log(data);
        //console.log(cc.ratings);
        //}

        this.ratings = [
            {
                id: "1",
                title: "Did Not Meet Expectations",
                style: 'text-align:left; padding-left: 8px;',
                color: 'color: #F44336;'
            },
            {
                id: "2",
                title: "Partially Met Expectations",
                style: 'text-align:left;',
                color: 'color: #ff6f00;'
            },
            {
                id: "3",
                title: "Fully Met Expectations",
                style: 'text-align: center;',
                color: 'color: #4CAF50;'
            },
            {
                 id: "4",
                title: "Exceeded Expectations",
                style: 'text-align:right;',
                color: 'color: #009688;'
            },
            {
                id: "5",
                title: "Distinguished Performance",
                style: 'text-align:right; white-space:break-word; padding-right:5px;',
                color: 'color: #3F51B5;'
            }
        ];
        this.comptxt = [];
        this.comptotal = 0;
        this.comptotaltxt = {};
        this.comptotaltxtcolor = {};

        this.compscore = function () {
            this.results.show = true;
           var compsubtotal = 0;
           for (var i = 0; i < this.compsel.rows.length; i++) {
               var tmpCell = 0;
               tmpCell = Math.round(parseInt(this.compsel.rows[i].curval, 10));
               this.comptxt.push(this.compsel.rows[i].behvs[tmpCell - 1].desc);
               compsubtotal += this.compsel.rows[i].curval;
            }
            this.comptotal = Math.round(parseFloat(compsubtotal) / parseFloat(this.compsel.rows.length));
            this.comptotaltxt = this.ratings[this.comptotal - 1].title;
            this.comptotaltxtcolor = this.ratings[this.comptotal - 1].color;
        };

        this.reloadcalc = function () {
            window.location.reload();
        };

        this.closecalc = function () {
            window.close();
        };
    });