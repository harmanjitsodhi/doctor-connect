import React from "react";
import { Marker } from "react-google-maps";
import {LocalHospital} from "@material-ui/icons";

class DoctorMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          icon={LocalHospital}
        >
        </Marker>
    );
  }
}

export default DoctorMarker;
