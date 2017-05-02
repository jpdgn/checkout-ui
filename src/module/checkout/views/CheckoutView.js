import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// import { increment, doubleAsync } from '../redux/home'
// import '../assets/HomeView.css'

export class CheckoutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: 'unilever',
      classic: 269.99,
      standout: 322.99,
      premium: 394.99,
      classicNum: 0,
      standoutNum: 0,
      premiumNum: 0
    }
  }
  onSelectCustomer = (event) => {
    console.log(event.target.value)
    this.setState({customer: event.target.value});
  }
  onChangeClassic = (event) => {
    console.log(event.target.value)
    this.setState({classicNum: event.target.value})
  }
  onChangeStandout = (event) => {
    console.log(event.target.value)
    this.setState({standoutNum: event.target.value})
  }
  onChangePremium = (event) => {
    console.log(event.target.value)
    this.setState({premiumNum: event.target.value})
  }
  count = () => {
    console.log('classicNum:', this.state.classicNum)
  }
  render () {
    return (
      <div>
        <div>
          <div><label>Customer: </label></div>
          <select value={this.state.customer} onChange={this.onSelectCustomer}>
            <option value='apple'>Apple</option>
            <option value='ford'>Ford</option>
            <option value='nike'>Nike</option>
            <option value='unilever'>Unilever</option>
          </select>
        </div>
        <div><label>Ads: </label></div>
        Classic
        <input onChange={this.onChangeClassic} />
        Standout
        <input onChange={this.onChangeStandout} />
        Premium
        <input onChange={this.onChangePremium} />
        <div><button onClick={this.count}>Count</button></div>
      </div>
    )
  }
}

CheckoutView.propTypes = {
    home: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    home: state.home
})

export default connect(mapStateToProps)(CheckoutView)
