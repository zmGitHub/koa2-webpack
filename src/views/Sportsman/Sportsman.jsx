import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Form, Card, Icon, Menu, Input, Table, Row, Col, Button, DatePicker, Select } from 'antd';
import BaseInfo from './BaseInfo';
import './sportsman.scss';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sportsman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'data',
      edit: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.editBaseInfo = this.editBaseInfo.bind(this);
    this.cancel = this.cancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    const { location } = this.props;
    const pathname = location.pathname;
    const res = pathname.split('/').pop();
    switch (res) {
      case 'power':
        this.setState({ current: 'power' });
        break;
      case 'train':
        this.setState({ current: 'train' });
        break;
      case 'video':
        this.setState({ current: 'video' });
        break;
      case 'experience':
        this.setState({ current: 'experience' });
        break;
      default:
        this.setState({ current: 'data' });
        break;
    }
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
  editBaseInfo(e) {
    e.preventDefault();
    this.setState({
      edit: true,
    });
    console.log('edit', this.state.edit);
  }
  // 基础信息提交
  handleSubmit(e) {
    e.preventDefault();
    const { form } = this.props;
    const res = form.getFieldsValue();
    console.log(res);
  }
  // 基础信息取消提交
  cancel() {
    this.setState({
      edit: false,
    });
  }
  render() {
    const { children, form } = this.props;
    const id = 23;
    const editIcon = () => (
      <a href="" onClick={this.editBaseInfo}><Icon type="edit" /></a>
    );
    const { edit } = this.state;
    return (
      <Row gutter={16}>
        <Col span={6}>
          <Card className="baseinfo-card" title="基础信息" extra={editIcon()}>
            <Form onSubmit={this.handleSubmit}>
              <BaseInfo edit={edit} form={form} cancel={this.cancel} />
            </Form>
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
                <Link to={`/sportsman/${id}`}>数据</Link>
              </Menu.Item>
              <Menu.Item key="power">
                <Link to={`/sportsman/${id}/power`}>能力</Link>
              </Menu.Item>
              <Menu.Item key="train">
                <Link to={`/sportsman/${id}/train`}>训练</Link>
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
  form: PropTypes.object,
  location: PropTypes.object,
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
