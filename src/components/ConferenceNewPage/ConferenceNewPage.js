import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import DatePicker from 'react-datepicker';
import Recaptcha from 'react-recaptcha';

import styles from './ConferenceNewPage.scss';
import GithubStar from '../GithubStar';
import Heading from '../Heading';
import {TOPICS} from '../config';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

/* eslint-disable */
export default class ConferenceNewPage extends Component {
  state = {
    captchaResponse: null,
    cfpUrl: '',
    city: '',
    country: '',
    endDate: null,
    name: '',
    url: '',
    startDate: null,
    twitterHandle: '',
  };

  canBeSubmitted() {
    const errors = this.validate(
      this.state.name,
      this.state.url,
      this.state.city,
      this.state.country,
      this.state.cfpUrl,
      this.state.twitterHandle
    );
    const isDisabled = Object.keys(errors).some((x) => errors[x]);
    return !isDisabled;
  }

  validate = (name, url, city, country, cfpUrl, twitterHandle) => {
    // true means invalid, so our conditions got reversed
    return {
      cfpUrl: cfpUrl.length === 0,
      city: city.length === 0,
      country: country.length === 0,
      name: name.length === 0,
      twitterHandle: twitterHandle.length === 0,
      url: url.length === 0,
    };
  };

  handleTextfieldChange = (key, event) => {
    this.setState({
      [key]: event.target.value,
    });
  };

  handleEndDateChange = (date) => {
    this.setState({
      [key]: date,
    });
  };

  // executed once the captcha has been verified
  // can be used to post forms, redirect, etc.
  verifyCallback = (response) => {
    this.setState({ captchaResponse: response });
  };

  submitForm = (event) => {
    event.preventDefault();
    console.log('captcha response =', this.state.captchaResponse);

    if (!this.canBeSubmitted() && this.state.captchaResponse !== null) {
      event.preventDefault();
      console.log('error here');
      return;
    }
    console.log(this.state);
  };

  render() {
    const errors = this.validate(
      this.state.name,
      this.state.url,
      this.state.city,
      this.state.country,
      this.state.cfpUrl,
      this.state.twitterHandle
    );

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      // const shouldShow = this.state.touched[field];

      // return hasError ? shouldShow : false;
      return hasError;
    };
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
          <pre>{JSON.stringify(errors)}</pre>
          <label htmlFor="name" className={styles.formLabel}>
            Name:
            <input
              className={
                shouldMarkError('name')
                  ? styles.error + ' ' + styles.formInput
                  : styles.formInput
              }
              type="text"
              id="name"
              required
              value={this.state.name}
              onChange={this.handleTextfieldChange.bind(this, 'name')}
            />
          </label>
          <br />
          <label htmlFor="url" className={styles.formLabel}>
            URL:
            <input
              className={
                shouldMarkError('url')
                  ? styles.error + ' ' + styles.formInput
                  : styles.formInput
              }
              type="text"
              value={this.state.url}
              id="url"
              onChange={this.handleTextfieldChange.bind(this, 'url')}
            />
          </label>
          <br />
          <label htmlFor="type" className={styles.formLabel}>
            Discipline:
            <select name="type" className={styles.formInput}>
              {Object.keys(TOPICS).map((key, value) =>
                <option value={ key }>{TOPICS[key]}</option>
              )}
            </select>
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
            <input
              className={
                shouldMarkError('city')
                  ? styles.error + ' ' + styles.formInput
                  : styles.formInput
              }
              type="text"
              id="city"
              value={this.state.city}
              onChange={this.handleTextfieldChange.bind(this, 'city')}
            />
          </label>
          <br />
          <label htmlFor="country" className={styles.formLabel}>
            Country:
            <input
              className={
                shouldMarkError('country')
                  ? styles.error + ' ' + styles.formInput
                  : styles.formInput
              }
              type="text"
              id="country"
              value={this.state.country}
              onChange={this.handleTextfieldChange.bind(this, 'country')}
            />
          </label>
          <br />
          <label htmlFor="cfpUrl" className={styles.formLabel}>
            CFP URL:
            <input
              className={
                shouldMarkError('cfpUrl')
                  ? styles.error + ' ' + styles.formInput
                  : styles.formInput
              }
              type="text"
              id="cfpUrl"
              value={this.state.cfpUrl}
              onChange={this.handleTextfieldChange.bind(this, 'cfpUrl')}
            />
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
            <input
              className={
                shouldMarkError('twitterHandle')
                  ? styles.error + ' ' + styles.formInput
                  : styles.formInput
              }
              type="text"
              id="twitter"
              value={this.state.twitterHandle}
              onChange={this.handleTextfieldChange.bind(this, 'twitterHandle')}
            />
          </label>
          <Recaptcha
            sitekey="6Lf5FEoUAAAAAJtf3_sCGAAzV221KqRS4lAX9AAs"
            verifyCallback={this.verifyCallback}
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
