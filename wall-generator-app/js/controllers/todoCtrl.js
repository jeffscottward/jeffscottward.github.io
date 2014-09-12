/*global angular */

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
angular.module('todomvc')
	.controller('TodoCtrl', function TodoCtrl($scope, $routeParams, $filter, $timeout, $http, todoStorage, bitcoinService) {
		'use strict';



		//////////////////////
		// TODO MVC BASELINE
		//////////////////////

		var todos = $scope.todos = todoStorage.get();

		$scope.newTodo = '';
		$scope.editedTodo = null;

		$scope.$watch('todos', function (newValue, oldValue) {
			$scope.remainingCount = $filter('filter')(todos, { completed: false }).length;
			$scope.completedCount = todos.length - $scope.remainingCount;
			$scope.allChecked = !$scope.remainingCount;
			if (newValue !== oldValue) { // This prevents unneeded calls to the local storage
				todoStorage.put(todos);
			}
		}, true);

		// Monitor the current route for changes and adjust the filter accordingly.
		$scope.$on('$routeChangeSuccess', function () {
			var status = $scope.status = $routeParams.status || '';

			$scope.statusFilter = (status === 'active') ?
				{ completed: false } : (status === 'completed') ?
				{ completed: true } : null;
		});

		$scope.editTodo = function (todo) {
			$scope.editedTodo = todo;
			// Clone the original todo to restore it on demand.
			$scope.originalTodo = angular.extend({}, todo);
		};

		$scope.doneEditing = function (todo) {
			$scope.editedTodo = null;
			todo.title = todo.title.trim();

			if (!todo.title) {
				$scope.removeTodo(todo);
			}
		};

		$scope.revertEditing = function (todo) {
			todos[todos.indexOf(todo)] = $scope.originalTodo;
			$scope.doneEditing($scope.originalTodo);
		};

		$scope.removeTodo = function (todo) {
			todos.splice(todos.indexOf(todo), 1);
		};

		$scope.clearCompletedTodos = function () {
			$scope.todos = todos = todos.filter(function (val) {
				return !val.completed;
			});
		};

		$scope.markAll = function (completed) {
			todos.forEach(function (todo) {
				todo.completed = !completed;
			});
		};








		//////////////////////
		// BTC WALLET APP
		//////////////////////

		$scope.createKeyPair = function(){
			var longRandom = bitcoinService.createBaseKey();
			var publicKey = bitcoinService.createPublicKey(longRandom);
			var privateKey = bitcoinService.createPrivateKey(longRandom);

			return {
				publicKey: publicKey,
				privateKey: privateKey
			}
		};

		$scope.addTodo = function () {
			var newTodo = $scope.newTodo.trim();
			if (!newTodo.length) {
				return;
			}

			// Create random wallet address and private key
			var keyPair = $scope.createKeyPair();

			// Push New Back Account 
			todos.push({
				title: newTodo,
				completed: false,
				pair: keyPair
			});

			// Timeout hack for angular rendering
			$timeout(function(){

				// Instantiate QR Code Objects
				var qrcodePublic =  new QRCode("publicKey-" + keyPair.publicKey);
				var qrcodePrivate = new QRCode("privateKey-" +  keyPair.privateKey);
			
				// Render QR Codes
				qrcodePublic.makeCode(keyPair.publicKey);
				qrcodePrivate.makeCode(keyPair.privateKey);
			},0);

			$scope.newTodo = '';
		};

		$scope.renderExistingQRcodes = function(){

				// Get each QR Code
				$('#todo-list li ul li span').each(function(){
					 
					// Get Each ID
					var id = $(this).attr('id').split('-')[1];
					 
					// If it's public
					if( $(this).hasClass('public') ){

						// Instantiate Public QR Code Object
						var qrcodePublic =  new QRCode("publicKey-" + id);

								// Render QR Code
								qrcodePublic.makeCode(id);
					} else {

						// Instantiate Private QR Code Object
						var qrcodePrivate = new QRCode("privateKey-" + id);

						// Render QR Code
						qrcodePrivate.makeCode(id);
					}
				});
		};	

		$scope.getPreviousTransactionHash = function(addressKey){
			
			// Set initally to falsy value
			var previousTransactionHash = false;

			// GET REQUEST TO A BITCOIN NODE FOR ADDRESS INFO
			var promise = $http({ 
					method: 'GET', 
				  url: 'https://api.chain.com/v1/bitcoin/addresses/'+ 
				  			addressKey + 
				  			'/transactions?api-key-id=DEMO-4a5e1e4&limit=1'
				});
 
 			// Return promise of data
			return promise.then(
			  function(payload) {
			  	if(payload.data[0]){
			  		previousTransactionHash = payload.data[0].hash;
			    	return previousTransactionHash;	
			  	} else {
			  		alert('Wallet has no bitcoins to spend! Sorry :(');
			  	}
			  	
			  });
		};

		$scope.createTransaction = function(config){

			// Variable Declarations
			var transaction; 

			console.dir(config);

			// Setup the transaction
			transaction = bitcoinService.createTx();
			transaction.addInput( config.prevTransactionHash, config.indxInput);
			transaction.addOutput( config.outputAddress, config.satoshis );

			console.dir(transaction);

			// Sign the transaction
			$scope.signTransaction( transaction, config.indxOutput, config.privateKey );
		};

		$scope.signTransaction = function( transaction, indxOutput, privateKey ){
			
			// Sign transaction
			var signedTx = bitcoinService.signTx( transaction, indxOutput, privateKey );
			
			console.log(signedTx.toHex())

			// Push transaction onto the network
			// $scope.pushTransaction(signedTx);
		};

		$scope.pushTransaction = function( signedTx ){
			// POST transaction to yours or someone elses bitcoin node
		};

		$scope.sendToAddress = function( publicAddress, previousAddress, privateKey, satoshis){

			var prevHash = $scope.getPreviousTransactionHash(previousAddress);
			
			prevHash.then(function(data){

				if(data){

					$scope.createTransaction({
						privateKey: privateKey, // From your harddrive or secure privatekey hosting provider
						prevTransactionHash: data,
						indxInput: 0, // 1 - 1 transaction example
						outputAddress: publicAddress, // From a UI Input field
						indxOutput: 0, // OPTIONALLY can provide 2 Outputs, second one goes to BTC miners
						satoshis: satoshis // Equal to 0.00015000 BTC
					});

				}
				
			});
		};

		// Render exisiting QR codes
		// Timeout hack for angular rendering
		$timeout(function(){
			$scope.renderExistingQRcodes();
		}, 0);

	});
