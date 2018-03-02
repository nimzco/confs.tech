import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import DatePicker from 'react-datepicker';
import Recaptcha from 'react-recaptcha';

import styles from './ConferenceNewPage.scss';
import GithubStar from '../GithubStar';
import Heading from '../Heading';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

/* eslint-disable */
export default class ConferenceNewPage extends Component {
  state = {
    endDate: null,
    name: '',
    startDate: null,
  };

<<<<<<< HEAD
  handleDateChange = (key, date) => {
=======
  canBeSubmitted() {
    const errors = this.validate(this.state.name);
    const isDisabled = Object.keys(errors).some((x) => errors[x]);
    return !isDisabled;
  }

  validate = (name) => {
    // true means invalid, so our conditions got reversed
    return {
      name: name.length === 0,
    };
  };

  handleNameChange = (evt) => {
    this.setState({
      name: evt.target.value,
    });
  };

  handleEndDateChange = (date) => {
>>>>>>> test add validation
    this.setState({
      [key]: date,
    });
  };

  submitForm = (event) => {
    event.preventDefault();
<<<<<<< HEAD
    console.log(this.state);
=======
    console.log('wat');
    if (!this.canBeSubmitted()) {
      event.preventDefault();
      console.log('error here');
      return;
    }
>>>>>>> test add validation
  };

  render() {
    const errors = this.validate(this.state.name);
    const isDisabled = Object.keys(errors).some((x) => errors[x]);

    return (
      <div>
        <Helmet>
          <title>New conference | Confs.tech</title>
        </Helmet>
        <div className={styles.Header}>
          <Heading element="h1">Add a new conference</Heading>
          <GithubStar />
        </div>
        <form>
          <label htmlFor="name" className={styles.formLabel}>
            Name:
            <input
              className={errors.email ? styles.error : styles.formInput}
              type="text"
              id="name"
              required
              onChange={this.handleNameChange}
            />
          </label>
          <br />
          <label htmlFor="url" className={styles.formLabel}>
            URL:
            <input className={styles.formInput} type="text" id="url" />
          </label>
          <br />
          <label htmlFor="type" className={styles.formLabel}>
            Discipline:
            <input className={styles.formInput} type="text" id="type" />
          </label>
          <br />
          <label htmlFor="startDate" className={styles.formLabel}>
            Start date:
          </label>
          <div className={styles.formDatePicker}>
            <DatePicker
              className={styles.formInput}
              id="startDate"
              selected={this.state.startDate}
              onChange={this.handleDateChange.bind(this, 'startDate')}
            />
          </div>
          <br />
          <label htmlFor="endDate" className={styles.formLabel}>
            End date:
          </label>

          <div className={styles.formDatePicker}>
            <DatePicker
              className={styles.formInput}
              id="endDate"
              selected={this.state.endDate}
              onChange={this.handleDateChange.bind(this, 'endDate')}
            />
          </div>

          <br />
          <label htmlFor="city" className={styles.formLabel}>
            City:
            <input className={styles.formInput} type="text" id="city" />
          </label>
          <br />
          <label htmlFor="country" className={styles.formLabel}>
            Country:
            <input className={styles.formInput} type="text" id="country" />
          </label>
          <br />
          <label htmlFor="cfpUrl" className={styles.formLabel}>
            CFP URL:
            <input className={styles.formInput} type="text" id="cfpUrl" />
          </label>
          <br />
          <label htmlFor="cfpEndDate" className={styles.formLabel}>
            CFP end date:
          </label>
          <div className={styles.formDatePicker}>
            <DatePicker
              className={styles.formInput}
              id="cfpEndDate"
              selected={this.state.cfpEndDate}
              onChange={this.handleDateChange.bind(this, 'cfpEndDate')}
            />
          </div>
          <br />
          <label htmlFor="twitter" className={styles.formLabel}>
            Twitter handle:
            <input className={styles.formInput} type="text" id="twitter" />
          </label>
          <Recaptcha
            sitekey="6Lf5FEoUAAAAAJtf3_sCGAAzV221KqRS4lAX9AAs"
          />
          <button
            className={styles.formSubmit}
            type="submit"
            value="Submit"
            onClick={this.submitForm}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
