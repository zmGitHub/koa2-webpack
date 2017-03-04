import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Col, Row, Button } from 'antd';
import { getTrain, postTrain } from './containers';
import './train.scss';

const FormItem = Form.Item;


class Train extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTags: [],
    };
  }
  componentWillMount() {
    this.props.get({ id: '' });
  }
  handleSubmit() {
    const { form, post } = this.props;
    post(form.getFieldsValue());
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
    };
    return (
      <Row gutter={16}>
        <Col span={24} className="margin-top-10 textarea-parent">
          <FormItem {...formItemLayout}>
            {getFieldDecorator('train')(
              <Input type="textarea" />
            )}
          </FormItem>
        </Col>
        <Col className="panel-block-hr" span={24}><hr /></Col>
        <Col className="text-right margin-bottom-10"><Button onClick={this.handleSubmit}>保存</Button></Col>
      </Row>
    );
  }
}

Train.propTypes = {
  form: PropTypes.object,
  post: PropTypes.func,
  get: PropTypes.func,
};

const mapDispatchToProps = {
  post: param => postTrain(param),
  get: param => getTrain(param),
};
const mapStateTopProps = state => ({
  log: state.log,
});

Train = Form.create()(Train);

export default connect(mapStateTopProps, mapDispatchToProps)(Train);
