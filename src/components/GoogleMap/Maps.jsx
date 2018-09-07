import React, {Component} from 'react';
import ReactMapGL, {NavigationControl, Marker, Popup} from 'react-map-gl';
import {LocalHospital, Event} from "@material-ui/icons";
import Button from '@material-ui/core/Button';
import 'mapbox-gl/dist/mapbox-gl.css'


export default class Map extends Component {
constructor(props) {
  super(props)
  this.state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    },
    popupInfo: '',
  };
}

popup () {
  this.setState({
    popupInfo: "this is a test"
  })
}

popupClose () {
  this.setState({
    popupInfo: ""
  })
}

// handleStyleLoad = map => (map.resize())

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
        // containerStyle={{ height: '100%', width: '100%' }}
        // onStyleLoad={this.handleStyleLoad}
      >

        {/* {  <Marker latitude={37.78} longitude={-122.41}
            style="mapbox://styles/mapbox/light-v9"
            renderWhileDragging={ false }>
            <LocalHospital style={{color: "red"}} onClick ={() => this.popup()}/>
          </Marker>
          {this.state.popupInfo?
            <Popup latitude={37.78} longitude={-122.41} anchor="top" closeButton={false} closeOnClick={true}
              onClose={() => this.setState({popupInfo: null})}
              style="mapbox://styles/mapbox/light-v9"
              renderWhileDragging={ false }>
            {this.state.popupInfo}
          </Popup>
            : <div></div>}} */}

      </ReactMapGL>
    );
  }
}
