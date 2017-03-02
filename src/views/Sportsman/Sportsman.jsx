import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Form, Card, Icon, Menu, Input, Table, Row, Col, Button, DatePicker, Select } from 'antd';

import './sportsman.scss';


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
        <Col span={6}>
          <Card className="baseinfo-card" title="基础信息" extra={edit()}>
            <p><img src="./img/head.png" alt="" /></p>
            <p className="text-center">詹姆斯·哈登</p>
            <p className="text-center"><span>1989-8-26   男</span></p>
            <hr />
            <p><span>体重：</span> <span>104kg</span></p>
            <p><span>身高：</span> <span>198cm</span></p>
            <p><span>学校：</span> <span>圣玛利亚高中</span></p>
            <p><span>运动项目：</span> <span>篮球 足球</span></p>
            <p><span>位置（类型）：</span> <span>大前锋、中锋、组织后卫</span></p>
            <p><span>特长：</span> <span>篮球、组织能力、谈判能力</span></p>
            <p><span>标签：</span> <span className="sportsman-label"><span>标签一</span><span>标签二</span></span></p>
          </Card>
        </Col>
        <Col span={18}>
          <Card className="right-card">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              className="defined-menu-style"
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
                <Link to={'/sportsman/video'}>视频</Link>
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
  children: PropTypes.element.isRequired,
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
