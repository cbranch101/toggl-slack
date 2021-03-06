cronHandler = {
	
};

Meteor.methods({
	startJobs : function() {
		SyncedCron.add({
			name: 'send slack messages',
			schedule: function(parser) {
				// parser is a later.parse object
				return parser.text('at 1:00pm on Tuesday, Wednesday, Thursday, Friday and Saturday');
			},
			job: function() {
				togglHandler.generateSlackMessagesForTrackedUsers();
			}
		});
		SyncedCron.start();
	},
	stopJobs : function() {
		SyncedCron.stop();	
	},
	getNextScheduledMessage : function() {
		console.log(SyncedCron.nextScheduledAtDate('send slack messages'));
	},
});
