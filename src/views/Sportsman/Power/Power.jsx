import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, Card, Icon, Input, Table, Row, Col, Button, DatePicker, Select } from 'antd';


class Power extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
  }
  render() {
    return (
      <Row gutter={16}>
        power
      </Row>
    );
  }
}
Power.propTypes = {
};

Power.defaultProps = {
  apps: {
    Power: [],
  },
};

const mapDispatchToProps = {
};
const mapStateTopProps = state => ({
  log: state.log,
});
Power = Form.create()(Power);
export default connect(mapStateTopProps, mapDispatchToProps)(Power);
