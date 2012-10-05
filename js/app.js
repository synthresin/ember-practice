var App = Em.Application.create();

App.Router = Em.Router.extend({
	root: Em.Route.extend({
		index: Em.Route.extend({
			route: '/',
			connectOutlets: function(router) {
				console.log("인덱스 라우트에 들어갔다!");
				router.get('applicationController').connectOutlet('diary');
			}
		}),
		diary: Em.Route.extend({
			route: '/diary',
			connectOutlets: function(router) {
				console.log("다이어리 라우트에 들어갔다!");
				router.get('applicationController').connectOutlet('diary');
			}
		})
	})
});

App.ApplicationController = Em.Controller.extend();

App.ApplicationView = Em.View.extend({
	// templateName: 'application'
	templateName: 'application'
});

App.DiaryController = Em.Controller.extend();

App.DiaryView = Em.View.extend({
	// templateName: 'application'
	templateName: 'diary'
});

App.MusicController = Em.Controller.extend();

App.MusicView = Em.View.extend({
	// templateName: 'application'
	templateName: 'music'
});

App.initialize();