import React, { Component, PropTypes } from 'react';
import { Form, Card, Icon, InputNumber, Row, Col, Button } from 'antd';
import Radar from './Radar';

const FormItem = Form.Item;


class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: true,
    };
    this.editTest = this.editTest.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  editTest(e) {
    e.preventDefault();
    this.setState({
      disable: false,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const res = this.props.form.getFieldsValue();
    this.props.testSubmit(res);
  }
  handleReset() {
    this.setState({
      disable: true,
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 9 },
      wrapperCol: { span: 15 },
    };
    const { disable } = this.state;
    const edit = () => (
      <a href="" onClick={e => this.editTest(e)}><Icon type="edit" /></a>
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
      <Col span={24}>
        <Col span={24}>
          <Card title="测试指标" className="data-body-data" bordered extra={edit()}>
            <Row gutter={16} className="data-body-data-row">
              <Form
                onSubmit={this.handleSubmit}
              >
                <Col span={8}>
                  {isShow('心肺能力：', 'heart', 23)}
                </Col>
                <Col span={8}>
                  {isShow('速度：', 'speed', 23)}
                </Col>
                <Col span={8}>
                  {isShow('耐力：', 'endurance', 23)}
                </Col>
                <Col span={8}>
                  {isShow('协调性：', 'harmonize', 23)}
                </Col>
                <Col span={8}>
                  {isShow('功率：', 'powerRate', 23)}
                </Col>
                <Col span={8}>
                  {isShow('平衡能力：', 'balance', 23)}
                </Col>
                <Col span={8}>
                  {isShow('力量：', 'force', 23)}
                </Col>
                <Col span={8}>
                  {isShow('敏捷能力：', 'agility', 23)}
                </Col>
                <Col span={8}>
                  {isShow('柔韧性：', 'suppleness', 23)}
                </Col>
                <Col span={8}>
                  {isShow('身体控制能力：', 'control', 23)}
                </Col>
                {
                  !disable ? (
                    <div>
                      <Col className="panel-block-hr" span={24}><hr /></Col>
                      <Col span={12} className="pull-right text-right margin-bottom-10">
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
            <Col className="panel-block-hr" span={24}><hr /></Col>
            <Col span={24} className="margin-top-20">
              <Radar />
            </Col>
          </Card>
        </Col>
      </Col>
    );
  }
}

Test.propTypes = {
  form: PropTypes.object,
  testSubmit: PropTypes.func,
};
Test = Form.create()(Test);
export default Test;
