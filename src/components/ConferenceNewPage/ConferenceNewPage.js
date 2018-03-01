import React, {Component} from 'react';
// import Favicon from 'react-favicon';
import {Helmet} from 'react-helmet';

import styles from './ConferenceNewPage.scss';
import GithubStar from '../GithubStar';
import Heading from '../Heading';

export default class ConferenceNewPage extends Component {
  state = {};

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
          <label htmlFor="name">
            <Heading element="h2" level={3}>
              Name
            </Heading>
            <input type="text" id="name" />
          </label>

          <label htmlFor="url">
            <Heading element="h2" level={3}>
              URL
            </Heading>
            <input type="text" id="url" />
          </label>

          <label htmlFor="type">
            <Heading element="h2" level={3}>
              Discipline
            </Heading>
            <input type="text" id="type" />
          </label>

          <label htmlFor="startDate">
            <Heading element="h2" level={3}>
              Start date
            </Heading>
            <input type="text" id="startDate" />
          </label>

          <label htmlFor="endDate">
            <Heading element="h2" level={3}>
              End date
            </Heading>
            <input type="text" id="endDate" />
          </label>

          <label htmlFor="city">
            <Heading element="h2" level={3}>
              City
            </Heading>
            <input type="text" id="city" />
          </label>

          <label htmlFor="country">
            <Heading element="h2" level={3}>
              Country
            </Heading>
            <input type="text" id="country" />
          </label>

          <label htmlFor="country">
            <Heading element="h2" level={3}>
              CFP URL
            </Heading>
            <input type="text" id="country" />
          </label>

          <label htmlFor="country">
            <Heading element="h2" level={3}>
              CFP end date
            </Heading>
            <input type="text" id="country" />
          </label>

          <label htmlFor="twitterHandle">
            <Heading element="h2" level={3}>
              Twitter handle
            </Heading>
            <input type="text" id="twitterHandle" />
          </label>
        </form>
      </div>
    );
  }
}
