// JavaScript File
(function(){
				var app = angular.module('calc', ['ngMaterial', 'md.data.table']);
				
				app.config(function($mdThemingProvider) {
					$mdThemingProvider.theme('default')
					  .warnPalette('deep-purple');
					  
					$mdThemingProvider.theme('1')
					  .primaryPalette('red');
					
					$mdThemingProvider.theme('2')
					  .primaryPalette('amber');
					  
					$mdThemingProvider.theme('3')
					  .primaryPalette('green');
					  
					$mdThemingProvider.theme('4')
					  .primaryPalette('teal');  
					
					$mdThemingProvider.theme('5')
					  .primaryPalette('indigo');
					
					$mdThemingProvider.alwaysWatchTheme(true);
				});
				
				app.controller('CompMatrixController', function(){
					this.comptncs = comparr;
					this.comp = {};
					this.compsel = {};
					this.comptbl = {show: false};
					this.results = {show: false};
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
					
					this.compscore = function(){
						this.results.show = true;
						var compsubtotal = 0;
						for (var i=0;i<this.compsel.rows.length;i++){
							var tmpCell = 0;
							tmpCell = Math.round(parseInt(this.compsel.rows[i].curval, 10));
							this.comptxt.push(this.compsel.rows[i].behvs[tmpCell-1].desc);
							compsubtotal += this.compsel.rows[i].curval;
						}
						this.comptotal = Math.round(parseFloat(compsubtotal) / parseFloat(this.compsel.rows.length));
						this.comptotaltxt = this.ratings[this.comptotal-1].title;
						this.comptotaltxtcolor = this.ratings[this.comptotal-1].color;
					};
					
					this.reloadcalc = function(){
						window.location.reload();
					};
					
					this.closecalc = function (){
						window.close();
					};
				});

				//this loader init code must be included
				angular.element(document).ready(function() {
				angular.bootstrap(document, ['calc', 'ngMaterial', 'md.data.table']);
					});

			})();