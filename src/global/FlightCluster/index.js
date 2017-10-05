import React from 'react';
import PropTypes from 'prop-types';
import FareDetail from '../FareDetail'
import FlightClusterRoute from './FlightClusterRoute'
import FlightClusterRouteOption from './FlightClusterRouteOption'

import { map } from 'lodash'

const containerStyle = {
  backgroundColor:'white',
  minWidth:'200px',
  minHeight:'200px',
  display:'flex'
}

const fareDetailContainer = {
  flexGrow:1,
  backgroundColor:'lightGrey'
}

const routeContainer = {
  flexGrow:3 
}

const FlightCluster = ({
  onClick,
  data
}) => {
  return (
    <div style={containerStyle}>
      <div style={routeContainer}>
        <div style={{'padding':'10px','color':'green'}}>
          {data.additionalInfo}
        </div>
        {
          map(data.routes, r => (
            <div>
              <FlightClusterRoute
                title={r.header.title} 
                date={r.header.date} 
                departureCity={r.header.departureCity} 
                arrivalCity={r.header.arrivalCity}
              >
                {
                  map(r.options, o => (
                    <FlightClusterRouteOption data={o} onClick={()=>{}} />
                  ))
                }
              </FlightClusterRoute>
            </div>
          ))
          
        }
        <div style={{'padding':'10px','color':'blue'}}>
          {data.disclaimerText}
        </div>
      </div>


      <div style={fareDetailContainer}>
        <FareDetail currency="ARS" detailInfo={data.fareDetail}></FareDetail>
      </div>
    </div>
  )
}

FlightCluster.propTypes = {

}

FlightCluster.defaultProps = {

}

export default FlightCluster;
