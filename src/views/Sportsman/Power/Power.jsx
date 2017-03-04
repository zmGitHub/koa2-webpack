import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, Card, Icon, Input, message, Upload, Table, Row, Col, Button, DatePicker, Select } from 'antd';


const COLUMNS = [
  {
    title: '项目名称',
    dataIndex: 'name',
  },
  {
    title: '操作人',
    dataIndex: 'handle',
  },
  {
    title: '时间',
    dataIndex: 'time',
  },
  {
    title: '地点',
    dataIndex: 'site',
  },

  {
    title: '测试内容',
    dataIndex: 'content',
  },
];
const uploadInit = {
  // name: 'file',
  showUploadList: false,
  // data: {
  //   method: 'POST',
  // },
  headers: {
    authorization: 'authorization-text',
  },
  action: 'http://112.74.37.39/upload',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 文件上传成功`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败.`);
    }
  },
};
class Power extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
  }
  render() {
    const data = [];
    return (
      <Row gutter={16}>
        <Col span={20}>
          <h3 className="panel-block-title">运动能力测试</h3>
        </Col>
        <Col span={4} className="text-right margin-top-10"><Button>新增</Button></Col>
        <Col span={24}>
          <Table
            columns={COLUMNS}
            dataSource={data}
            pagination={false}
            className="table-analyzeMembers"
          />
        </Col>
        <Col span={24} className="margin-top-20">
          <Col span={20}>
            <h3 className="panel-block-title">运动科学依据</h3>
          </Col>
          <Col span={4} className="text-right margin-top-10">
            <Upload {...uploadInit}>
              <Button>
                <Icon type="upload" /> 上传
              </Button>
            </Upload>
          </Col>
        </Col>
        <Col span={24}>
          <Card></Card>
        </Col>
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
