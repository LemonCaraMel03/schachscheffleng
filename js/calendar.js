/* Events */


/**
 * Präziseier en Titel, Start an End Datum, an en Link.
 * 
 * All Event muss esou ausgesinn:
 *      {
 *          title           :   "   Titel           "   ,
 *          start           :   "   Start Datum     "   ,
 *          end             :   "   End Datum       "   ,
 *          extendedProps   :   {
                link        :   "   Link            "
            }
 *      }
 * 
 * Wichteg!!
 * Zweschen all Eventer muss en Komma sinn!!!
 * 
 * 
 * Den Start an End Datum muss esou ausgesinn:
 * 
 *      "year   -   month   -   day   T   hour   :   min   :   sec"
 *      
 *      Ex. "2023-03-20T18:30:00"
 * 
 * 
 */


var eventList = [

    {
        title: "Last Saturday",
        start: "2023-06-24T14:30:00",
        end: "2023-06-24T17:30:00",
        extendedProps: {
            link: "#"
        }
    },

    {
        title: "Example",
        start: "2023-06-14T14:30:00",
        end: "2023-06-14T17:30:00",
        extendedProps: {
            link: "#"
        }
    },

]





/* CODE - Net upacken weg. !! */
/*----------------------------------------------------------------------------------------------------------------*/

function update_calendar() {
    var calendarElement = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarElement, {
        initialView: 'dayGridMonth',
        height: "auto",
        locale: "en-gb",
        events: eventList,
        eventClick: function(arg) {
            document.getElementById("event-title").innerHTML = "<b>Title</b> : " + arg.event.title;
            document.getElementById("event-start").innerHTML = "<b>Start Date</b> : " + arg.event.start;
            document.getElementById("event-end").innerHTML = "<b>End Date</b> : " + arg.event.end;
            document.getElementById("event-link").innerHTML = "<b>Link</b> : " + arg.event.extendedProps.link;

            $("#event_modal").modal("show")
        }
    });

    calendar.render();
}

/*----------------------------------------------------------------------------------------------------------------*/