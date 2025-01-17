// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    bitRateHandler = () => {
        console.log('here')
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resolutionHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
                
            }
        })
    }

    render() {
        return(  
            <div>
                <button onClick={this.bitRateHandler} className="bitrate">{this.state.bitrate}</button>
                <button onClick={this.resolutionHandler} className="resolution">Resolution</button>
            </div>
        )
    }
}