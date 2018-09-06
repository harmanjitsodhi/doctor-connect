import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import DoctorMarker from "./DoctorMarker";
import EventMarker from "./EventMarker";

const Map = withScriptjs(withGoogleMap((props) =>{


    const eventMarkers = props.events.map( eventNew => <EventMarker
                      name={eventNew.name}
                      location={{lat: eventNew.lat, lng: eventNew.lng}}
                    />);

    const doctorMarkers = props.doctors.map(doctor => <DoctorMarker
                      name={doctor.name}
                      location={{lat: doctor.lat, lng: doctor.lng}}
                    />);

  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  42.3601, lng: -71.0589 } }
        >
        {eventMarkers}
        {doctorMarkers}
      </GoogleMap>
    );
  }
))

export default Map;
