import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, Card, Upload, message, Icon, Input, Table, Row, Col, Button, DatePicker, Select } from 'antd';
import './data.scss';
import BodyBase from './BodyBase';
import Test from './TestTen';

const beforeUpload = (file) => {
  const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
  if (!isJPG) {
    message.error('目前仅支持JPG，JPEG，PNG格式图片上传!');
  }
  const isLt4M = file.size / 1024 / 1024 / 1024 / 1024 < 2;
  if (!isLt4M) {
    message.error('图片必须小于4M！');
  }
  return isJPG && isLt4M;
};

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.bodySubmit = this.bodySubmit.bind(this);
    this.testSubmit = this.testSubmit.bind(this);
  }
  componentWillMount() {
  }
  handleChange(info) {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
    }
  }
  // 身体指标
  bodySubmit(e) {
    console.log(e);
  }
  // 测试数据
  testSubmit(e) {
    console.log(e);
  }
  render() {
    const imageUrl = this.state.imageUrl;
    const { bodybase, form } = this.props;
    return (
      <Row gutter={16}>
        <Col span={24}>
          <h2 className="panel-block-title">身体形态</h2>
          <p className="panel-block-sub">图片上传（*上传运动员的正面全身图、侧面图等，现支持jpg、jepg、png，4m以内）</p>
        </Col>
        <Col span={6}>
          <Upload
            className="avatar-uploader"
            name="avatar"
            showUploadList={false}
            action="http://112.74.37.39/upload"
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            {
              imageUrl ?
                <img src={imageUrl} alt="" className="avatar" /> :
                <Icon type="plus" className="avatar-uploader-trigger" />
            }
          </Upload>
          <p className="avatar-uploader-p">正面图</p>
        </Col>
        <Col span={6}>
          <Upload
            className="avatar-uploader"
            name="avatar"
            showUploadList={false}
            action="http://112.74.37.39/upload"
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            {
              imageUrl ?
                <img src={imageUrl} alt="" className="avatar" /> :
                <Icon type="plus" className="avatar-uploader-trigger" />
            }
          </Upload>
          <p className="avatar-uploader-p">侧面图</p>
        </Col>
        <Col span={6}>
          <Upload
            className="avatar-uploader"
            name="avatar"
            showUploadList={false}
            action="http://112.74.37.39/upload"
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            {
              imageUrl ?
                <img src={imageUrl} alt="" className="avatar" /> :
                <Icon type="plus" className="avatar-uploader-trigger" />
            }
          </Upload>
          <p className="avatar-uploader-p">背面</p>
        </Col>
        <Col span={6}>
          <Upload
            className="avatar-uploader"
            name="avatar"
            showUploadList={false}
            action="http://112.74.37.39/upload"
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            {
              imageUrl ?
                <img src={imageUrl} alt="" className="avatar" /> :
                <Icon type="plus" className="avatar-uploader-trigger" />
            }
          </Upload>
          <p className="avatar-uploader-p">45°图</p>
        </Col>
        <Col className="panel-block-hr" span={24}><hr /></Col>
        <Col span={24}>
          <BodyBase key="BodyBase" bodySubmit={this.bodySubmit} data={bodybase} />
        </Col>
        <Col span={24}>
          <h2 className="panel-block-title">十项指标</h2>
        </Col>
        <Col span={24}>
          <Test key="testTen" testSubmit={this.testSubmit} data={bodybase} />
        </Col>
      </Row>
    );
  }
}
Data.propTypes = {
  form: PropTypes.object,
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
