remyndrApp.controller('remyndrController', ['$scope', function($scope) {

	$scope.saved = localStorage.getItem('remyndrs');
	$scope.remyndrs = (localStorage.getItem('remyndrs')!==null) ? JSON.parse($scope.saved) : [ {text: 'Bring jacket home', done: false}, {text: 'Remember to bring my brain home too', done: false} ];
	localStorage.setItem('remyndrs', JSON.stringify($scope.remyndrs));

	$scope.addRemyndr = function() {
		$scope.remyndrs.push({
			text: $scope.remyndrText,
			done: false
		});
		$scope.remyndrText = ''; //clear the input after adding
		localStorage.setItem('remyndrs', JSON.stringify($scope.remyndrs));
	};

	// $scope.remaining = function() {
	// 	var count = 0;
	// 	angular.forEach($scope.remyndrs, function(remyndr){
	// 		count+= remyndr.done ? 0 : 1;
	// 	});
	// 	return count;
	// };

	$scope.deleteRemyndr = function() {
		var oldRemyndrs = $scope.remyndrs;
		$scope.remyndrs = [];
		angular.forEach(oldRemyndrs, function(remyndr){
			if (!remyndr.done)
				$scope.remyndrs.push(remyndr);
		});
		localStorage.setItem('remyndrs', JSON.stringify($scope.remyndrs));
	};

}]);