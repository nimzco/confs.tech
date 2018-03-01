import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import DatePicker from 'react-datepicker';
// import moment from 'moment';

import styles from './ConferenceNewPage.scss';
import GithubStar from '../GithubStar';
import Heading from '../Heading';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class ConferenceNewPage extends Component {
  state = {
    endDate: null,
    startDate: null,
  };

  handleEndDateChange = (date) => {
    this.setState({
      endDate: date,
    });
  };

  handleStartDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
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
            <input className={styles.formInput} type="text" id="name" />
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
          <div className={styles.formDatepicker}>
            <DatePicker
              className={styles.formInput}
              id="startDate"
              selected={this.state.startDate}
              onChange={this.handleStartDateChange}
            />
          </div>
          <br />
          <label htmlFor="endDate" className={styles.formLabel}>
            End date:
          </label>

          <div className={styles.formDatepicker}>
            <DatePicker
              className={styles.formInput}
              id="endDate"
              selected={this.state.endDate}
              onChange={this.handleEndDateChange}
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
            <input className={styles.formInput} type="text" id="cfpEndDate" />
          </label>
          <br />
          <label htmlFor="Twitter" className={styles.formLabel}>
            Twitter handle:
            <input className={styles.formInput} type="text" id="Twitter" />
          </label>
          <button className={styles.formSubmit} type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
