import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Row, Col, Table, Input, Button, Tag, Modal } from 'antd';
import UploadModal from './UploadModal';

const CheckableTag = Tag.CheckableTag;
const tagsFromServer = ['篮球', '足球', '网球', '乒乓球', '马拉松', '短跑', '铅球'];


class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTags: [],
    };
  }

  handleChange(tag, checked) {
    console.log('checked');
  }

  render() {
    const { selectedTags } = this.state;
    return (
      <div>
        <Row gutter={16}>
          <Col span={24}>
            <div className="margin-top-15">
              <strong>热门标签 : </strong>
              {tagsFromServer.map(tag => (
                <CheckableTag
                  key={tag}
                  checked={selectedTags.indexOf(tag) > -1}
                  onChange={checked => this.handleChange(tag, checked)}
                >
                  {tag}
                </CheckableTag>
              ))}
            </div>
          </Col>
          <Col sm={12} offset={12} className="text-right">
            <Button icon="upload" className="margin-right-15" type="primary">上传</Button>
          </Col>
          <Col sm={8} className="margin-top-15">
            <Card>
              <div>
                <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
              </div>
              <div>
                <h3 className="text-center">Europe Street beat</h3>
                <div className="margin-top-15">
                  <Tag color="green">green</Tag>
                  <Tag color="green">green</Tag>
                  <Tag color="green">green</Tag>
                </div>
                <hr className="margin-top-15" />
                <div className="margin-8">
                  <span>赵丽颖</span>
                  <span style={{ marginLeft: 80 }}>2017-02-01</span>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <UploadModal />
      </div>
    );
  }
}


const mapDispatchToProps = {
};
const mapStateTopProps = state => ({
  log: state.log,
});

Video = Form.create()(Video);

export default connect(mapStateTopProps, mapDispatchToProps)(Video);
