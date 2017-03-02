import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, Card, Icon, Input, Table, Row, Col, Button, DatePicker, Select } from 'antd';


class Data extends Component {
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
        hfsdfsfl
      </Row>
    );
  }
}
Data.propTypes = {
};

Data.defaultProps = {
  apps: {
    data: [],
  },
};

const mapDispatchToProps = {
};
const mapStateTopProps = state => ({
  log: state.log,
});
Data = Form.create()(Data);
export default connect(mapStateTopProps, mapDispatchToProps)(Data);
