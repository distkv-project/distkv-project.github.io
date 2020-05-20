import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import GitalkComponent from "gitalk/dist/gitalk-component";
import 'gitalk/dist/gitalk.css';

const propTypes = {
  class_name: PropTypes.string.isRequired
};

class Gitalk extends React.Component {
  render() {
    const { class_name } = this.props;

    return(
      <section className={class_name}>
        <GitalkComponent options={{
          clientID: "xxxxxx",
          clientSecret: 'xxxxxx',
          repo: 'website-comment',
          owner: 'distkv-project',
          admin: ['jovany-wang', 'senyer',  'lovepoem'],
          id: window.location.pathname,
          distractionFreeMode: false // Facebook-like distraction free mode
        }}/>
      </section>
    )
  }
}

Gitalk.propTypes = propTypes;

export default Gitalk;
