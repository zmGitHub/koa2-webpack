import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Layout, Menu } from 'antd';
import Avatar from 'components/Avatar';
import classnames from 'classnames';
import './CoreLayout.scss';

const { Header, Content, Footer } = Layout;

class CoreLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.logout = this.logout.bind(this);
  }
  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  logout(e) {
    e.preventDefault();
    browserHistory.push('/login');
  }
  render() {
    const { children } = this.props;
    return (
      <Layout className="layout sport-layout">
        <Header>
          <div className="layout-logo">
            <p>
              <span>Next Champions</span>
            </p>
            <p>
              <span>展现你的运动才华</span>
            </p>
          </div>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['home']}
          >
            <Menu.Item key="home">首 页</Menu.Item>
            <Menu.Item key="sport">运动员</Menu.Item>
            <Menu.Item key="coach">教 练</Menu.Item>
            <Menu.Item key="about">关于我们</Menu.Item>
          </Menu>
          <Avatar />
        </Header>
        <Content>
          {children || '加载中...'}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Sport Champions ©2017 deadPool Team
        </Footer>
      </Layout>
    );
  }
}

const mapStateTopProps = state => ({
  location: state.location,
});

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
};

export default connect(mapStateTopProps, null)(CoreLayout);
