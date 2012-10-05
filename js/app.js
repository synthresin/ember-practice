var App = Em.Application.create();

App.Router = Em.Router.extend({
	root: Em.Route.extend({
		// 모든 상태에서 통용되는(?) 액션들
		showIndex: Ember.Route.transitionTo('index'),
		showDiary: Ember.Route.transitionTo('diary'),
		showMusic: Ember.Route.transitionTo('music'),
		showPhoto: Ember.Route.transitionTo('photo'),


		index: Em.Route.extend({
			route: '/',
			connectOutlets: function(router) {
				console.log("인덱스 라우트에 들어갔다!");
				router.get('applicationController').connectOutlet('index');
			}
		}),
		diary: Em.Route.extend({
			route: '/diary',
			connectOutlets: function(router) {
				console.log("다이어리 라우트에 들어갔다!");
				router.get('applicationController').connectOutlet('diary');
			}
		}),
		music: Em.Route.extend({
			route: '/music',
			connectOutlets: function(router) {
				console.log("뮤직 라우트에 들어갔다!");
				router.get('applicationController').connectOutlet('music');
			}
		}),
		photo: Em.Route.extend({
			route: '/photo',
			connectOutlets: function(router) {
				console.log("포토 라우트에 들어갔다!");
				router.get('applicationController').connectOutlet('photo');
			}
		})
	})
});

App.ApplicationController = Em.Controller.extend();

App.ApplicationView = Em.View.extend({
	// templateName: 'application'
	templateName: 'application'
});

App.IndexController = Em.Controller.extend();

App.IndexView = Em.View.extend({
	// templateName: 'application'
	templateName: 'index'
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

App.PhotoController = Em.Controller.extend();

App.PhotoView = Em.View.extend({
	// templateName: 'application'
	templateName: 'photo'
});

App.initialize();