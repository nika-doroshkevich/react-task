import React from 'react';
import './style.css';

// Задание
// Допишите код так, чтобы DatePicker был контролируемым компонентом.
// При выборе даты в input'е, текст на ним должен обновляться и показывать выбранную дату
// При нажатии на кнопку Reset date, input должен очищаться, а надпись становаиться 'Select date'
// Документация по JQuery UI
// https://jqueryui.com/datepicker
// https://api.jqueryui.com/datepicker

class DatePicker extends React.Component {
  inputRef = null;

  componentDidMount() {
    $(this.inputRef).datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: this.onDateChange,
    });
    $(this.inputRef).datepicker('setDate', this.props.value || '');
  }

  onDateChange = (selectedDate) => {
    if (this.props.onChange) {
      this.props.onChange(selectedDate);
    }
  };

  render() {
    return (
      <input
        ref = {(domElement) => {
          this.inputRef = domElement;
        }}
        value = {this.props.value || ''}
      />
    );
  }
}

export default class App extends React.Component {
  state = {
    date: 'Select date',
  };

  onDateChange = (selectedDate) => {
    this.setState({ date: selectedDate });
  };

  onResetClick = () => {
    this.setState({ date: 'Select date' });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.date ? `Date: ${this.state.date}` : 'Select date'}
        </div>
        <div>
          <DatePicker value = {this.state.date} onChange={this.onDateChange}
          />
        </div>
        <div>
          <button onClick = {this.onResetClick}>Reset date</button>
        </div>
      </React.Fragment>
    );
  }
}
