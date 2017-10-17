import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Text from '../Text';
import Icon from '../Icon';
import InputRadio from '../InputRadio';
import ExpansionPanel from '../ExpansionPanel';
import {ExpandButton, ExtendedInformation} from '../ExpansionPanel/styled';
import {
  ClusterItem,
  ClusterContent,
  AirlineName,
  InfoContainer,
  AirlineContainer,
  FromTo,
  Detail,
  Origin,
  Arrival,
  Scale,
  Iata,
  Date,
  TripTitle,
  IataBold,
  MediumBold,
  DetailDeparture,
  DetailFlight,
  DetailArrival,
  DetailExtended,
  MainDetail,
  Delay,
  DelayContainer,
  Step,
  AirlineDetail,
  BoldText,
  FlightNumber,
  Disclaimer
} from "./styled";

import { withState } from 'recompose';

import { map } from 'lodash'

const formatMinutes = totalMinutes => {
  console.log(totalMinutes)
  const hours = Math.floor(totalMinutes/60);
  const minutes = (totalMinutes/60 - hours) * 60;

  return moment.duration(hours, 'hours').asHours() + 'hs ' + Math.round(moment.duration(minutes, 'minutes').asMinutes()) + 'm' 
}

const FlightClusterRouteOption = ({data, onClick, selected}) => (
  <ClusterItem onClick={onClick} selected={selected}>
    <ClusterContent>
      <ExpansionPanel
        SummaryInformation={({onChange, isExpanded})  =>
          <InfoContainer>
            <InputRadio onChange={onClick} checked ={selected} />
            <AirlineContainer>
              <figure>
                {
                  map(data.summaryInfo.airlineLogos, a => (
                    <img src={a} />
                  ))
                }
              </figure>
              <AirlineName>
                <Text tag='p'>
                  {data.summaryInfo.airlineName}
                </Text>
                <Text type='xs' tag='p'>
                  {data.summaryInfo.provider}
                </Text>
              </AirlineName>
            </AirlineContainer>
            <FromTo>
              <Origin>
                <Iata>
                  {data.summaryInfo.departureIata}
                </Iata>
                <Date>
                  {moment(data.summaryInfo.departureDate).format('HH:mm[hs]')}
                </Date>
              </Origin>

              <Scale>
                <ExpandButton onClick={onChange}>
                  <Text type='s'>
                    {data.summaryInfo.scalesText}
                  </Text>
                </ExpandButton>
              </Scale>

              <Arrival>
                <Iata>
                  {data.summaryInfo.arrivalIata}
                </Iata>
                <Date>
                  {moment(data.summaryInfo.arrivalDate).format('HH:mm[hs]')}
                </Date>
              </Arrival>
            </FromTo>

            <Detail>
              <div>
                {formatMinutes(data.summaryInfo.totalTime)}
              </div>
              <ExpandButton onClick={onChange}>
                <Text type='s'>
                  Detalle
                </Text>
              </ExpandButton>
            </Detail>

          </InfoContainer>
        }

        ExtendedInformation={({onChange}) =>
          <ExtendedInformation>
            <TripTitle>
              <Text tag='h1' type='m'>
                {data.extendedInfo.header}
              </Text>
              <Text tag='h2' type='m'>
                <Text>
                  Duracion:
                </Text>
                <BoldText>
                  {formatMinutes(data.summaryInfo.totalTime)}
                </BoldText>
              </Text>
            </TripTitle>
            {
              map(data.extendedInfo.flights, (f, index) => (
                <MainDetail>
                  <DetailDeparture style={{margin:'10px', 'flexGrow':'1', 'flexBasis': '0'}}>
                    <Text type='m'>
                      SALIDA
                    </Text>
                    <MediumBold type='m' tag='strong'>
                      {moment(f.departure.date).format('ddd. DD MMM [de] YYYY')}
                    </MediumBold>
                    <IataBold tag='strong' type='xl'>
                      {f.departure.iata}
                    </IataBold>
                    <MediumBold type='m' tag='strong'>
                      {moment(f.departure.date).format('HH:mm[hs]')}
                    </MediumBold>
                    <Text>
                      {f.departure.city}
                    </Text>
                    <Text>
                      {f.departure.airport}
                    </Text>
                  </DetailDeparture>

                  <DetailFlight>
                    <Step>
                      <Icon id='Vuelos' width='14px' height='14px'/>
                      <BoldText>
                        {f.common.flightStep}° Tramo
                      </BoldText>
                    </Step>
                    <AirlineDetail>
                      <img src={f.common.airlineLogo} />
                      <Text tag='figcaption'>
                        {f.common.provider}
                      </Text>
                    </AirlineDetail>
                    <Text>
                      <Text>
                        Clase:
                      </Text>
                      <BoldText>
                        {f.common.class}
                      </BoldText>
                    </Text>
                    <FlightNumber>
                      <Icon id='Vuelos' width='12px' height='12px'/>
                      <Text>
                        Vuelo N°:
                      </Text>
                      <BoldText>
                        {f.common.flightNumber}
                      </BoldText>
                    </FlightNumber>
                  </DetailFlight>

                  <DetailArrival style={{margin:'10px', 'flexGrow':'1', 'flexBasis': '0'}}>
                    <Text type='m'>
                      LLEGADA
                    </Text>
                    <MediumBold type='m' tag='strong'>
                      {moment(f.arrival.date).format('ddd. DD MMM [de] YYYY')}
                    </MediumBold>
                    <IataBold tag='strong' type='xl'>
                      {f.arrival.iata}
                    </IataBold>
                    <MediumBold type='m' tag='strong'>
                      {moment(f.arrival.date).format('HH:mm[hs]')}
                    </MediumBold>
                    <Text>
                        {f.arrival.city}
                    </Text>
                    <Text>
                        {f.arrival.airport}
                    </Text>
                  </DetailArrival>
                  {
                    data.extendedInfo.flights.length > 1 &&
                    index != data.extendedInfo.flights.length-1 &&
                    <DelayContainer>
                      <Delay tag='h3'>
                        Escala en {f.arrival.city} con espera de 23hs 59m
                      </Delay>
                    </DelayContainer>
                  }
                </MainDetail>
                )
              )
            }
            <Disclaimer tag='p' type='xs'>
              Los horarios están expresados en la hora local de cada ciudad
            </Disclaimer>
          </ExtendedInformation>
        }
      />
    </ClusterContent>
  </ClusterItem>
)

FlightClusterRouteOption.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.object.isRequired,
  isExpanded:PropTypes.bool
}

FlightClusterRouteOption.defaultProps = {
  isExpanded: false
}

export default FlightClusterRouteOption;
