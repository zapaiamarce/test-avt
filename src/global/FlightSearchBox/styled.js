import styled from 'styled-components';
import Text from '../Text';

export const Container = styled.div`
  display: block;
  background: white;
  padding: 10px;
  input{
    ${'' /* don't get mad */}
    padding: 10px 5px;
    font-size: 14px;
    font-weight: 300;
    border-radius: 0 !important;
  }
  .react-autosuggest__suggestions-container{
    position: absolute;
    background: white;
    z-index: 9;
    margin-top: 30px;
    width: 100%;
    left: 0;
  }
  .react-autosuggest__suggestions-list{
    border: 1px solid ${props=>props.theme.colors.darkgray};
    position: relative;
    margin-top: 10px;
    &:before{
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 11px 10px 10px;
      border-color: transparent transparent white transparent;
      position: absolute;
      top: -10px;
      left: 10px;
      z-index: 9999;
    }
    &:after{
      border-color: transparent;
      width: 15px;
      height: 15px;
      position: absolute;
      content: "";
      transform: rotate(135deg);
      border-bottom: 1px solid ${props=>props.theme.colors.darkgray};
      border-left: 1px solid ${props=>props.theme.colors.darkgray};
      top: -9px;
      left: 12.5px;
    }
  }
  .react-autosuggest__suggestion{
    padding: 5px;
    cursor: pointer;
    &:hover{
      background: ${props=>props.theme.colors.primary};
      button{
        color: white;
      }
    }
    button{
      border: none;
      background: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 300;
      &:active, &:focus{
        outline: none;
        box-shadow: none;
      }
    }
  }

  .DateRangePicker{
    margin-top: 20px;
    width: 100%;
  }
  .DateRangePickerInput{
    width: 100%;
    display: flex;
    align-items: center;
  }
  .DateInput{
    flex: 1;
    padding: 5px 10px;
  }
  .DateRangePickerInput__arrow svg{
    fill: ${props=>props.theme.colors.primary};
  }
  .DateInput__display-text {
    padding: 0px 0px;
    white-space: nowrap;
    font-size: 15px;
    overflow: hidden;
  }
  .DateInput__display-text--focused{
    background: none;
    border-color: transparent;
    color: black;
    font-weight: 400;
  }
`
export const MainTitle = Text.extend`
  margin: 10px 0;
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 400;
  svg{
    margin-right: 5px;
  }
`
export const TopSearch = styled.div`
  display: flex;
  align-items: center;
`
export const Radios = styled.div`
  flex: 2;
  > div > div{
    display: flex;
    justify-content: space-around;
  }

`
export const FromTo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  label{
    flex: 0 1 48%;
    &:last-of-type{
      .react-autosuggest__suggestions-list{
        &:before{
          left: inherit;
          right: 42%;
        }
        &:after{
          left: inherit;
          right: calc(42% + 3px);
        }

      }
    }
  }
`
