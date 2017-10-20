import React from 'react';
import PropTypes from 'prop-types';

import SearchResultsListWithData from '../SearchResultsList/withData'
import FlightsFiltersWithData from  '../FlightsFilters/withData'
import FlightsComparisonTableWithData from  '../FlightsComparisonTable/withData'
import Paginate from '../Paginate/withData'
import Tabs, { Tab } from "../Tabs";
import PriceTrendCalendar from "../PriceTrendCalendar/withData";
import Text from "../Text";
import Link from "../Link";
import CurrencySelector from "../CurrencySelector";
import Select from "../Select";
import Breadcrumb from "../Breadcrumb";
import FlightSearchBox from "../FlightSearchBox/withData";
import Subscribe from "../Subscribe/TripSubscribe/withData";

import { Container, MaxWidth, BreadcrumbContainer, LeftContainer, RightContainer, SearchResult, SubscribeContainer, FlightsFiltersContainer } from './styled';
import { indexOf, find, map } from 'lodash';

const onBuyHandler = next => value => {
  next(value);
}

const calendarTitle = <div>
  <div><Text>¡Nuevo!</Text></div>
  <div><Text>Tendencia de tarifas</Text></div>
</div>;

//TODO eliminar cuando se aplique correctamente el CurrentSelector
const initialOptions = [{
  value: 1,
  label: "ARS"
},
{
  value: 2,
  label: "USD"
},
{
  value: 3,
  label: "REAL"
}];

const SearchResults = ({
  showItemsByPage,
  filters,
  flightClusters,
  countItems,
  comparisonFlights,
  onBuy
}) =>  {

  const countPage = Math.ceil((countItems/showItemsByPage));
  //applyPaginate(getState())

  return (
    <Container>
      <MaxWidth>
        <BreadcrumbContainer>
          <Breadcrumb>
            <Link href="https://www.avantrip.com">
              <Text type='xs' color='primary'>
                Avantrip.com
              </Text>
            </Link>
            <Link href="https://www.avantrip.com/vuelos">
              <Text type='xs' color='primary'>
                Vuelos
              </Text>
            </Link>
            <Text type='xs' tag='strong'>
              {`[Numero_vuelos] vuelos a [Ciudad_Hasta] desde [Ciudad_Desde]`}
            </Text>
          </Breadcrumb>
        </BreadcrumbContainer>

        <SearchResult>
          <LeftContainer>
            <FlightSearchBox
              title='Buscá tu vuelo'
            />
            <SubscribeContainer>
              <Subscribe
                value={{ city: "[Ciudad_Hasta]" }}
                title={`Te avisamos cuando tengamos los precios
                  más bajos a [city].`}/>
            </SubscribeContainer>
            <FlightsFiltersContainer>
              <FlightsFiltersWithData options={filters} />
            </FlightsFiltersContainer>
          </LeftContainer>

          <RightContainer>
            <Tabs>
              <Tab id="tab1" title="Precio más Bajo">
                {/* <FlightsComparisonTableWithData flights={comparisonFlights} /> */}
              </Tab>
              <Tab id="tab2" title={calendarTitle}>
                Agregar calendario de tendencia de precios.
              </Tab>
            </Tabs>
            <div>
              <CurrencySelector
                options={initialOptions}
              />
              <div>
                <span>Ordenar por</span>
                <Select
                  value='one'
                  options={[
                    {value: 'one', label: 'Menor Precio'},
                    {value: 'two', label: 'Mayor Precio'},
                    {value: 'three', label: 'Menos Escalas'},
                    {value: 'four', label: 'Más Escalas'}
                  ]} />
              </div>
            </div>
            <SearchResultsListWithData flightClusters={flightClusters} onBuy={onBuy} />
            <Paginate  pageCount={countPage} />
          </RightContainer>
        </SearchResult>
      </MaxWidth>
    </Container>
  )
}

SearchResults.propTypes = {
  showItemsByPage: PropTypes.number,
  filters: PropTypes.object,
  clusters: PropTypes.object,
  onBuy: PropTypes.func
}

export default SearchResults;
