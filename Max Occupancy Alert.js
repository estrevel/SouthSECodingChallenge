const xapi = require('xapi');
// Set MAX_PEOPLE to max occupancy per fire marshall; 0 is used for testing
const MAX_PEOPLE=0;

// Log errors gracefully
function handleError(error) {
    console.log('Error', error);
}

// This function is called when user is prompted on Touch 10 to schedule a larger room
// Could be enhanced to interface with a calendar system
function showSchedule() {
        xapi.command('UserInterface Message Alert Display', {
          Title: 'Scheduler',
          Text: 'Texas Room is Available',
          Duration: 60
        });
   }
// This function is called when a call first starts.  If too many people in room, it holds the call and prompts the user on the Touch 10
function checkPeopleCountInCall(people) {
  if (people > MAX_PEOPLE) {
        xapi.command('Call Hold');
        xapi.command('UserInterface Message Prompt Display', {
          Title: 'Prompt',
          Text: 'Max Occupancy of Room Exceeded - Call Held',
          FeedbackID: 'what-to-do-call',
          'Option.1':'Press here to schedule a larger room',
          'Option.2':'Confirm safe occupancy to resume',
        });
}
}

// This function is called anytime the people count in the room changes and alerts if over max occupancy
function checkPeopleCount(people) {
  if (people > MAX_PEOPLE) {
        xapi.command('UserInterface Message Alert Display', {
          Title: 'Alert',
          Text: 'Max Occupancy of Room Exceeded',
          Duration: 10,
        });
   }
}

// This function gets the current people count in the room after immediately after a call starts
function callStarted() {
 const people = xapi.status.get('RoomAnalytics PeopleCount Current')
  .then(checkPeopleCountInCall);
}
  
// Monitors the response on the Touch 10 when a call starts and is held due to max occupancy exceeded
xapi.event.on('UserInterface Message Prompt Response', (event) => {
    switch(event.OptionId){
      case '1': showSchedule();
        break;
      case '2': xapi.command('Call Resume');
    }
});

// Monitors for a successful call start message which is received on dial-in or dial-out
xapi.event.on('CallSuccessful', callStarted);
  
// Monitors for a change in people count
xapi.status.on('RoomAnalytics PeopleCount Current', checkPeopleCount);



