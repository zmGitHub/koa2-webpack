import React from 'react';
import { Card, Col, Input, InputNumber, DatePicker, Select, Button, Icon, Upload, Form } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';
const FormItem = Form.Item;
const Option = Select.Option;
const imgUrl = '/upload';

const BaseInfo = (props) => {
  const { edit, form, imageUrl } = props;
  const { getFieldDecorator } = form;
  const formItemLayout = {
    labelCol: { span: 9 },
    wrapperCol: { span: 15 },
  };
  const sportSchool = (title, word, val) => (
    !edit ? <p><span>{title}</span><span>{val}</span></p>
      : <FormItem {...formItemLayout} className="base-text-left margin-top-10" label={title}>
        {getFieldDecorator(word)(
          <Input placeholder="" />
        )}
      </FormItem>
  );
  // 头像
  const head = url => (
    !edit ? <p><img src="./img/head.png" alt="" /></p> :
    <div>
      <Upload
        action={url}
        className="avatar-uploader"
        name="avatar"
        showUploadList={false}
      >
        {
          imageUrl ?
            <img src={imageUrl} alt="" className="avatar" /> :
            <Icon type="plus" className="avatar-uploader-trigger" />
        }
      </Upload>
      <span className="margin-bottom-10">支持jpg,jpeg,png,2m以内</span>
    </div>
  );
  // 体重
  const high = (title, word, val, unit) => (
    !edit ? <p><span>{title}</span><span>{val}</span></p> :
    <FormItem {...formItemLayout} className="base-text-left margin-top-10" label={title}>
      {getFieldDecorator(word)(
        <Input placeholder="" addonAfter={<span className>{unit}</span>} />
      )}
    </FormItem>
  );
  // 性别
  const gender = (title, word, val) => (
    !edit ? <p><span>{val}</span></p> :
    <FormItem {...formItemLayout} className="base-text-left margin-top-10" label={title}>
      {getFieldDecorator(word)(
        <Select placeholder="请选择性别" className="width-100">
          <Option value="man">男</Option>
          <Option value="gril">女</Option>
        </Select>
      )}
    </FormItem>
  );
  // 项目
  return (
    <div>
      {head(imgUrl)}
      {/* {sportSchool('姓名', 'name', '詹姆斯·哈登')}*/}
      {
        !edit ? <p><span>詹姆斯·哈登</span></p>
      : <FormItem {...formItemLayout} className="base-text-left margin-top-10" label="姓名">
        {getFieldDecorator('name')(
          <Input placeholder="" />
        )}
      </FormItem>
      }
      {gender('性别', 'gender', '男')}
      {
        !edit ? <p><span>生日</span></p>
      : <FormItem {...formItemLayout} className="base-text-left margin-top-10" label="生日">
        {getFieldDecorator('birthday')(
          <DatePicker format={dateFormat} />
        )}
      </FormItem>
      }
      <hr />
      {high('体重：', 'weight', '', 'kg')}
      {high('身高：', 'high', '', 'cm')}
      {sportSchool('学校：', 'school')}
      {
        !edit ? <p><span>运动项目：</span> <span>篮球 足球</span></p> :
        <FormItem {...formItemLayout} className="base-text-left margin-top-10" label="运动项目">
          {getFieldDecorator('item')(
            <Select placeholder="请选择项目类型" className="width-100">
              <Option value="basketball">篮球</Option>
              <Option value="football">足球</Option>
            </Select>
          )}
        </FormItem>
      }
      {
        !edit ? <p><span>位置（类型）：</span> <span>大前锋、中锋、组织后卫</span></p> :
        <FormItem {...formItemLayout} className="base-text-left margin-top-10" label="运动项目">
          {getFieldDecorator('item')(
            <Select placeholder="请选择位置（类型）" className="width-100">
              <Option value="pf">大前锋</Option>
              <Option value="pg">组织后卫</Option>
              <Option value="cf">中锋</Option>
            </Select>
          )}
        </FormItem>
      }
      {
        !edit ? <p><span>特长：</span> <span>篮球、组织能力、谈判能力</span></p> :
        <FormItem {...formItemLayout} className="base-text-left margin-top-10" label="运动项目">
          {getFieldDecorator('speciality')(
            <Input placeholder="" type="textarea" />
          )}
        </FormItem>
      }
      {
        !edit ? <p><span>标签：</span><span className="sportsman-label"><span>标签一</span><span>标签二</span></span></p> :
        <FormItem {...formItemLayout} className="base-text-left margin-top-10" label="标签">
          {getFieldDecorator('label')(
            <Select placeholder="请选择位置（类型）" className="width-100">
              <Option value="pf">标签一</Option>
              <Option value="pg">标签二</Option>
            </Select>
          )}
        </FormItem>
      }
      {
        edit && (
          <div>
            <hr />
            <Col className="text-right margin-top-10">
              <Button onClick={props.cancel}>取消</Button><Button htmlType="submit" type="primary" className="margin-left-10">保存</Button>
            </Col>
          </div>
        )
      }
    </div>
  );
};

BaseInfo.propTypes = {
  edit: React.PropTypes.boolean,
  form: React.PropTypes.object,
  cancel: React.PropTypes.func,
  imageUrl: React.PropTypes.string,
};

export default BaseInfo;

