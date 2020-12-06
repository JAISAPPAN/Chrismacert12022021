import {Component} from 'react'
import GoogleMapReact from 'google-map-react';

const AlJazeera_MapComponent = ({ text }) => <div>{text}</div>;

class AlJazeera_Map extends Component
{
    static defaultProps = {
        center: {
            lat: 25.4347647,
            lng: 55.5367551
        },
        zoom: 11
    };

    render()
    {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '121vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <homEnggMapComponent
                        lat={19.158879}
                        lng={73.243655}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default AlJazeera_Map;

// GOOGLE MAp api KEY -'AIzaSyD_2YXC35p2RnXJjAbF3nPimOvpZJcgsmU'