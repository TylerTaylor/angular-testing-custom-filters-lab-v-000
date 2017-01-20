describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter on favorite food', function() {
    var people = [{
      name: 'Joe',
      favoriteFood: 'Peanut'
    }, {
      name: 'Bob',
      favoriteFood: 'Butter'
    }, {
      name: 'Billy',
      favoriteFood: 'Jelly'
    }]

    var results = $filter('favoriteFood')(people, 'Jelly')

    expect(results.length).toBe(1)
    expect(results[0].name).toBe('Billy')
  })
});
