/**
 * Services to setup Bitcoin address and transactions
 */
angular.module('todomvc')
  .service('bitcoinService', function () {
    'use strict';

      this.createBaseKey = function () {
        return Bitcoin.ECKey.makeRandom();
      };
      this.createPublicKey = function(key){
        return key.pub.getAddress().toString();
      };
      this.createPrivateKey = function(key){
        return key.toWIF();
      };
      this.createTx = function(){
        return new Bitcoin.Transaction();
      };
      this.signTx = function(transaction,indxOutput,privateKey){
        return transaction.sign(indxOutput,privateKey)
      };
  });
