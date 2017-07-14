(function(angular){
    let transactionModule = angular.module("transactionModule",['ngMaterial']);
    transactionModule.component("transactionSubmit",{
        bindings:{
            onSubmit:"&"
        },
        template:`
            
                <div layout="row">
                     <div flex="35" layout="column" style="margin:10px 50px;height:90%">
                        <md-card>
                        <md-toolbar >
                            
                            <div class="md-toolbar-tools" style="background:teal">
                               
                                <label style="text-align:center; font-size:0.9em">Make a Transfer</label>
                            </div>

                        </md-toolbar>
                            <md-card-content>
                                <md-input-container class="md-block" flex>
                                    <label> From Account </label>
                                    <input type="text" value="Free Checking(4692) - Available $5893" disabled>
                                </md-input-container>
                               <md-input-container class="md-block" flex>
                                    <label> To Account </label>
                                    <input type="text" ng-model="$ctrl.toAccount">
                                </md-input-container>
                                <md-input-container class="md-block" flex>
                                    <label>Amount</label>
                                    <input type="text" ng-model="$ctrl.amount">
                                </md-input-container>
                                <div flex style="text-align: center;">
                                    <md-button class="md-raised md-warn" style="height:20px" ng-click="$ctrl.submitAmount()">Submit</md-button>
                                </div>
                            </md-card-content>
                        </md-card>
                    </div>
                
                    
                   <div flex="50" layout="column" style="margin:10px 50px;height:95%">
                        <md-card>
                        <md-toolbar >
                            
                            <div class="md-toolbar-tools" style="background:teal;text-align:center">
                               
                                <label style="font-size:0.9em">Recent Transactions</label>
                            </div>

                        </md-toolbar>
                        <md-content style="overflow-y:auto" >
                             <div>
                                <md-list class="md-dense">
                                
                                    <md-list-item class="md-2-line contact-item" ng-repeat="transaction in $ctrl.allTransactions | orderBy:'$index'">
                                        <div style="margin:15 15 15 15">
                                           <p> <small>{{transaction.transactionDate|date:'MMM.d'}}</small> </p>
                                           <h4></h4>
                                        </div>
                                        <div>
                                           <p></p>
                                           <h4></h4>
                                        </div>
                                        <img ng-src="{{transaction.merchantLogo}}" class="md-avatar"/>
                                        <div class="md-list-item-text compact" layout="column">
                                            <h3>{{transaction.merchant }}</h3>
                                            <p>{{transaction.transactionType}}</p>
                                        </div>   
                                        <div>
                                            <p>{{"-$"+ transaction.amount}}</p>
                                           
                                        </div>
                                       
                              
                                        
                                        <md-divider></md-divider>
                                    </md-list-item>
                                </md-list>
                            </div>
                        </md-content>
                        </md-card>
                    </div>
               </div>
            `,
        
            controller:[TransactionController]
    });





})(angular);