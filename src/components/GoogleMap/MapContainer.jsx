import React, {Component} from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import DoctorMarker from "./DoctorMarker";
import EventMarker from "./EventMarker";
import Geocode from "react-geocode";
import Map from "./GoogleMap";

class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      events: [],
    }
  }


doctorFindAddress(name, address) {
  Geocode.fromAddress(address).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      this.setState({doctors: this.state.doctors.concat([{name: name, lat: lat, lng: lng}])})
    },
    error => {
      console.error(error);
    }
  );
}

eventFindAddress(name, address) {
  Geocode.fromAddress(address).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      this.setState({events: this.state.events.concat([{name: name, lat: lat, lng: lng}])})
    },
    error => {
      console.error(error);
    }
  );
}


	render() {
    this.props.events.map(event => this.eventFindAddress(event.name, event.address));
    this.props.doctors.map(doctor => this.doctorFindAddress(doctor.name, doctor.address));

		return (
			<Map
        events={this.state.events}
        doctors={this.state.doctors}
				googleMapURL={process.env.REACT_APP_TOKEN}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}

export default MapContainer;
