import withData from '../../utils/withData';
import theme from '../styled.theme';
import homeReducer from '../Home/reducer';
import persistState from 'redux-localstorage'

(typeof window != 'undefined') && (window.global = window)

export default withData({
  theme:theme,
  redux:{
    enhacers:[
      persistState(['search'])
    ],
    reducers:homeReducer,
  },
  apollo:{
    networkInterface:{
      uri:'//product.api.int.devtrip.com.ar/data'
    }
  }
}, (apollo, redux)=>{
  const setResize = () => redux.dispatch({
    type:'UPDATE_SCREEN_SIZE'
  });

  global.addEventListener && global.addEventListener("resize", setResize);
})
