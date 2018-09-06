import React from "react";
import Geocode from "react-geocode";

Geocode.fromAddress().then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
  },
  error => {
    console.error(error);
  }
);
