import React, { Component, PropTypes } from 'react';
import { Form, Card, Icon, InputNumber, Row, Col, Button } from 'antd';

const FormItem = Form.Item;


class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: true,
    };
    this.editBody = this.editBody.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  editBody(e) {
    e.preventDefault();
    this.setState({
      disable: false,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const res = this.props.form.getFieldsValue();
    this.props.bodySubmit(res);
  }
  handleReset() {
    this.setState({
      disable: true,
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const { disable } = this.state;
    const edit = () => (
      <a href="" onClick={e => this.editBody(e)}><Icon type="edit" /></a>
    );
    const isShow = (title, word, val) => (
      disable ? <p>{title}<span>2387</span></p>
        : <FormItem {...formItemLayout} label={title}>
          {getFieldDecorator(word)(
            <InputNumber placeholder="" disabled={disable} />
          )}
        </FormItem>
    );
    return (
      <Card title="身体指标" className="data-body-data" bordered extra={edit()}>
        <Row gutter={16} className="data-body-data-row">
          <Form
            onSubmit={this.handleSubmit}
          >
            <Col span={8}>
              {isShow('上臂：', 'upper', 23)}
            </Col>
            <Col span={8}>
              {isShow('胸部：', 'chest', 23)}
            </Col>
            <Col span={8}>
              {isShow('前臂：', 'forearm', 23)}
            </Col>
            <Col span={8}>
              {isShow('大腿：', 'ham', 23)}
            </Col>
            <Col span={8}>
              {isShow('臀围：', 'hipline', 23)}
            </Col>
            <Col span={8}>
              {isShow('腰围：', 'waistline', 23)}
            </Col>
            <Col span={8}>
              {isShow('小腿：', 'shank', 23)}
            </Col>
            {
              !disable ? (
                <div>
                  <Col className="panel-block-hr" span={24}><hr /></Col>
                  <Col span={8} className="pull-right text-right margin-bottom-10">
                    <Button type="primary" htmlType="submit" className="save-btn">保存</Button>
                    <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                      取消
                    </Button>
                  </Col>
                </div>
              ) : ''
            }
          </Form>
        </Row>
      </Card>
    );
  }
}

Base.propTypes = {
  form: PropTypes.object,
  bodySubmit: PropTypes.func,
};

Base = Form.create()(Base);

export default Base;
