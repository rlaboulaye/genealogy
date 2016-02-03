angular.module('familyApp', []).controller('familyCtrl', function($scope) {
    $scope.person = 'Person',
    $scope.father = 'Father',
    $scope.mother = 'Mother',
    $scope.people = [{person: 'John', father: 'George', mother: 'Liza', check: false}, {person: 'Cedric', father: 'Fred', mother: 'Marge', check: false}],
    $scope.addNew = function() {
      $scope.people.push({person: $scope.person, father: $scope.father, mother: $scope.mother, check: false});
      $scope.person = '';
      $scope.father = '';
      $scope.mother = '';
    },
    $scope.removeMarked = function() {
      var counter = 0;
      angular.forEach($scope.people, function(entry){
        if (entry.check === true)
        {
          $scope.people.splice(counter, 1);
        }
        counter +=1;
      });
      if ($scope.people.length === 1 && $scope.people[0].check === true)
      {
        $scope.people = [];
      }
    }
});
