import React, {Component} from 'react';
import Favicon from 'react-favicon';
import {Helmet} from 'react-helmet';
import {
  Configure,
  InstantSearch,
  RefinementList,
  CurrentRefinements,
} from 'react-instantsearch/dom';

import styles from './ConferencePage.scss';
import './RefinementList.scss';
import './CurrentRefinement.scss';
import Footer from '../Footer';
import Link from '../Link';
import GithubStar from '../GithubStar';
import Heading from '../Heading';
import ConferenceList from '../ConferenceList';
import {
  TYPES,
  APPLICATION_ID,
  API_KEY,
  ALGOLIA_INDEX_NAME,
  getAddConferenceUrl,
} from '../config';

const TODAY = Math.round(new Date().getTime() / 1000);

export default class ConferencePage extends Component {
  state = {
    sortBy: 'startDate',
    showPast: false,
  };

  togglePast = () => {
    const {showPast} = this.state;
    this.setState({showPast: !showPast}, () => {
      window.scrollTo(0, 0);
    });
  };

  sortByCfpEndDate = () => {
    this.setState({
      sortBy: this.state.sortBy === 'cfpEndDate' ? 'startDate' : 'cfpEndDate',
    });
  };

  render() {
    const {
      showPast,
      sortBy,
    } = this.state;
    const {showCFP, match: {params: {type, country}}} = this.props;
    const addConferenceUrl = getAddConferenceUrl(type);

    return (
      <div>
        <Helmet>
          <title>Tech conferences | Confs.tech</title>
        </Helmet>
        <Favicon url={`/${type}.png`} />
        <div className={styles.Header}>
          <Heading element="h1">Find your next tech conference</Heading>
          <GithubStar />
        </div>

        <InstantSearch
          appId={APPLICATION_ID}
          apiKey={API_KEY}
          indexName={ALGOLIA_INDEX_NAME}
        >
          <Configure
            hitsPerPage={150}
            filters={`date>${TODAY}`}
          />
          <br />
          <RefinementList
            attributeName="topics"
            defaultRefinement={type ? [type] : []}
            transformItems={transformTopicRefinements}
          />
          <RefinementList
            limitMin={100}
            attributeName="country"
            defaultRefinement={country ? [country] : []}
          />

          <CurrentRefinements />
          <ConferenceList />
        </InstantSearch>

        <div>
          {showCFP
            ? <CfpHeader sortByCfpEndDate={this.sortByCfpEndDate} sortBy={sortBy} />
            : null
          }
        </div>
        <Footer
          showCFP={showCFP}
          addConferenceUrl={addConferenceUrl}
          togglePast={this.togglePast}
          showPast={showPast}
        />
      </div>
    );
  }
}

function CfpHeader({sortByCfpEndDate, sortBy}) {
  return (
    <div className={styles.CfpHeader}>
      <Heading element="h2" level={2}>Call For Papers</Heading>
      <Link
        button
        onClick={sortByCfpEndDate}
      >
        {sortBy === 'startDate'
          ? 'Start date ⬇'
          : 'CFP end date ⬇'
        }
      </Link>
    </div>
  );
}

function transformTopicRefinements(items) {
  return items.map((item) => {
    item.label = TYPES[item.label];
    return item;
  });
}
