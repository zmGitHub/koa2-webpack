import React, { Component, PropTypes } from 'react';
import { Form, InputNumber, Input, Upload, Table, Button, message, Icon, Row, Col, Modal } from 'antd';

const FormItem = Form.Item;
const project = ['过顶深蹲', '上踏步', '直线弓箭步', '肩部灵活性', '直腿主动上抬', '躯干稳定俯卧撑', '扭转/旋转稳定性'];

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: '',
      file_squat: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
      file_step: [],
      file_arrow: [],
      file_shoulder: [],
      file_leg: [],
      file_pushup: [],
      file_rotate: [],
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitFms = this.submitFms.bind(this);
  }
  handleCancel() {
    this.setState({ previewVisible: false });
  }

  handlePreview(file) {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange(e, typeName) {
    this.setState({ [typeName]: e.fileList });
  }
  submitFms() {
    const { form, postModal } = this.props;
    // console.log(form.getFieldsValue());
    const res = form.getFieldsValue();
    postModal(res);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const columns = [
      {
        title: '项目',
        dataIndex: 'projects',
        key: 'squat',
      },
      {
        title: '得分',
        dataIndex: '',
        key: 'score',
        render: (param) => {
          const fileListName = `${param.type}_score`;
          return (
            <FormItem {...formItemLayout} label="">
              {getFieldDecorator(fileListName)(
                <InputNumber placeholder="" />
              )}
            </FormItem>
          );
        },
      },
      {
        title: '评价',
        dataIndex: '',
        key: 'evaluate',
        render: (param) => {
          const fileListName = `${param.type}_evaluate`;
          return (
            <FormItem {...formItemLayout} label="">
              {getFieldDecorator(fileListName)(
                <Input placeholder="" />
              )}
            </FormItem>
          );
        },
      },
      {
        title: '视频/图片(最多8个视频或图片)',
        dataIndex: '',
        key: 'video',
        render: (param) => {
          const uploadButton = (
            <div>
              <Icon type="plus" />
              <div className="ant-upload-text" />
            </div>
          );
          const fileListName = `file_${param.type}`;
          const fileList = this.state[fileListName];
          const { previewVisible, previewImage } = this.state;
          return (
            <div className="clearfix">
              <Upload
                action="/upload.do"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={e => this.handleChange(e, fileListName)}
                className="defined-updete-style"
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </div>
          );
        },
      },
    ];
    const dataSource = [
      { type: 'squat' },
      { type: 'step' },
      { type: 'arrow' },
      { type: 'shoulder' },
      { type: 'leg' },
      { type: 'pushup' },
      { type: 'rotate' },
    ];
    dataSource.forEach((item, index) => {
      item.projects = project[index];
    });
    return (
      <Modal
        maskClosable={false}
        title="新增FMS数据"
        style={{ top: 20 }}
        width="800px"
        visible={this.props.modalVisible}
        onOk={this.submitFms}
        onCancel={this.props.setModalVisible}
      >
        <Table
          columns={columns}
          dataSource={dataSource}
          bordered
          className="margin-bottom-20"
          pagination={false}
        />
      </Modal>
    );
  }
}

AddModal.propTypes = {
  modalVisible: PropTypes.boolean,
  setModalVisible: PropTypes.func,
  postModal: PropTypes.func,
  form: PropTypes.object,
};
AddModal = Form.create()(AddModal);

export default AddModal;
