"use client"

import React, { useCallback, useState } from 'react'
// import { GoogleMap, Marker, MarkerClusterer, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { APIProvider, Map, AdvancedMarker, Pin, Marker, useAdvancedMarkerRef, InfoWindow } from '@vis.gl/react-google-maps';
import styles from "./MainMap.module.css"

const containerStyle = {
    overflow: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 2
};

const center = {
    lat: 46.7712,
    lng: 23.6236
};

const apiKey = "AIzaSyDBo5jso7UAphik_z4r6xf_y07meX5n4qU"

function MainMap() {
    // `markerRef` and `marker` are needed to establish the connection between
    // the marker and infowindow (if you're using the Marker component, you
    // can use the `useMarkerRef` hook instead).
    const [markerRef, marker] = useAdvancedMarkerRef();

    const [infoWindowShown, setInfoWindowShown] = useState(false);

    // clicking the marker will toggle the infowindow
    const handleMarkerClick = useCallback(
        () => setInfoWindowShown(isShown => !isShown),
        []
    );

    // if the maps api closes the infowindow, we have to synchronize our state
    const handleClose = useCallback(() => setInfoWindowShown(false), []);

    return (
        <APIProvider apiKey={apiKey}>
            <Map
                mapId="google-map"
                style={containerStyle}
                defaultCenter={center}
                defaultZoom={14}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                options={{
                    styles: mapStyles,
                    fullscreenControl: false,
                    zoomControl: false,
                    streetViewControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                }}
                zoom={14}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
            >
                <AdvancedMarker
                    ref={markerRef}
                    position={{ lat: 46.75409, lng: 23.54627 }}
                    onClick={handleMarkerClick}
                >
                    <Pin
                        background={'#65dc5f'}
                        borderColor={'#006425'}
                        glyphColor={'#006425'}
                    />
                </AdvancedMarker>

                {infoWindowShown && (
                    <InfoWindow anchor={marker} className={styles.infoWindow} onClose={handleClose}>
                        <img src="/pin.jpg" alt="" />
                        <h2>Profi City New</h2>
                        <p>Aleea Gârbău nr.12, Cluj-Napoca 400534</p>
                        <div className={styles.buttons}>
                            <button className={styles.functional}>It's functional</button>
                            <button className={styles.notFunctional}>Not functional</button>
                        </div>
                    </InfoWindow>
                )}
            </Map>
        </APIProvider>
    )
}

const mapStyles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#393939"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "5"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "gamma": "0.90"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": "0"
            },
            {
                "lightness": "-15"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "gamma": "0.63"
            },
            {
                "saturation": "40"
            },
            {
                "hue": "#97ff00"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "gamma": "0.90"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#9cd2dc"
            },
            {
                "visibility": "on"
            }
        ]
    }
]

export default React.memo(MainMap)