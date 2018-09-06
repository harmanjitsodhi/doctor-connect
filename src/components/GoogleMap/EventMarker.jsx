import React from "react";
import { Marker } from "react-google-maps";
import {Event} from "@material-ui/icons";

class EventMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          icon={Event}
        >
        </Marker>
    );
  }
}

export default EventMarker;
