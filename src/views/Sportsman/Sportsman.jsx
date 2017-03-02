import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Form, Card, Icon, Menu, Input, Table, Row, Col, Button, DatePicker, Select } from 'antd';
import { getAppList } from 'store/actions/apps';
import { getLog } from './containers';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sportsman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'data',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
  }
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  callback(e) {
    console.log(e);
  }
  render() {
    const { children } = this.props;
    const edit = () => (
      <a href="" onClick={this.editBaseInfo}><Icon type="edit" /></a>
    );
    return (
      <Row gutter={16}>
        <Col span={8}>
          <Card title="基础信息" extra={edit()}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={16}>
          <Card>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="data">
                <Link to={'/sportsman'}>数据</Link>
              </Menu.Item>
              <Menu.Item key="power">
                <Link to={'/sportsman/power'}>能力</Link>
              </Menu.Item>
              <Menu.Item key="practice">
                <Link to={'/sportsman/data'}>训练</Link>
              </Menu.Item>
              <Menu.Item key="video">
                <Link to={'/sportsman/data'}>视频</Link>
              </Menu.Item>
              <Menu.Item key="experience">
                <Link to={'/sportsman/data'}>经历</Link>
              </Menu.Item>
            </Menu>
            <Row gutter={16}>
              {children}
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}
Sportsman.propTypes = {
  form: PropTypes.object,
  children: PropTypes.element.isRequired,
  query: PropTypes.func,
  getApp: PropTypes.func,
  apps: PropTypes.object,
};

Sportsman.defaultProps = {
  apps: {
    data: [],
  },
};

const mapDispatchToProps = {
};
const mapStateTopProps = state => ({
  log: state.log,
});
Sportsman = Form.create()(Sportsman);
export default connect(mapStateTopProps, mapDispatchToProps)(Sportsman);
