import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, Upload, Table, Button, message, Icon, Row, Col } from 'antd';
import AddModal from './AddModal';

const { Column, ColumnGroup } = Table;

const FmsTable = (props) => {
  const dataSource = [
    {
      key: '2433',
      time: 'John',
      squat: '23',
      step: '2',
      arrow: '2',
      shoulder: '2',
      leg: '2',
      pushup: '2',
      rotate: '2',
      amount: '26',
      // children: [
      //   {
      //     key: '243',
      //     time: '评价',
      //     squat: '斯柯达设计费斯柯达设计费斯柯达设计费斯柯达设计费',
      //     step: '斯柯达设计费',
      //     arrow: '斯柯达设计费',
      //     shoulder: '斯柯达设计费',
      //     leg: '斯柯达设计费',
      //     pushup: '斯柯达设计费',
      //     rotate: '斯柯达设计费',
      //     amount: '斯柯达设计费',
      //   },
      //   {
      //     key: '2483',
      //     time: '视频',
      //     squat: '图片视频',
      //     step: '斯柯达设计费',
      //     arrow: '斯柯达设计费',
      //     shoulder: '斯柯达设计费',
      //     leg: '斯柯达设计费',
      //     pushup: '斯柯达设计费',
      //     rotate: '斯柯达设计费',
      //     amount: '',
      //   },
      // ],
    },
  ];
  return (
    <Col span={24}>
      <AddModal modalVisible={props.modalVisible} modalKey={props.modalKey} setModalVisible={props.setModalVisible} postModal={props.postModal} />
      <Col span={12}>
        <h2 className="panel-block-title">FMS<span className="panel-block-title-sub">（功能性运动测试）</span></h2>
      </Col>
      <Col span={12} className="text-right margin-top-10">
        <Button onClick={props.newModal}>新增</Button>
      </Col>
      <Col span={24}>
        <Table
          dataSource={dataSource}
          bordered
          className="margin-bottom-20"
          pagination={false}
        >
          <Column
            title="测试时间"
            dataIndex="time"
            key="time"
          />
          <ColumnGroup title="各项成绩">
            <Column
              title="过顶深蹲"
              dataIndex="squat"
              key="squat"
            />
            <Column
              title="上踏步"
              dataIndex="step"
              key="step"
            />
            <Column
              title="直线弓箭步"
              dataIndex="arrow"
              key="arrow"
            />
            <Column
              title="肩部灵活性"
              dataIndex="shoulder"
              key="shoulder"
            />
            <Column
              title="直腿主动上抬"
              dataIndex="leg"
              key="leg"
            />
            <Column
              title="躯干稳定俯卧撑"
              dataIndex="pushup"
              key="pushup"
            />
            <Column
              title="扭转/旋转稳定性"
              dataIndex="rotate"
              key="rotate"
            />
          </ColumnGroup>
          <Column
            title="总成绩"
            dataIndex="amount"
            key="amount"
          />
        </Table>
      </Col>
    </Col>
  );
};
FmsTable.propTypes = {
  modalVisible: PropTypes.boolean,
  setModalVisible: PropTypes.func,
  postModal: PropTypes.func,
  newModal: PropTypes.func,
  modalKey: PropTypes.number,
};

export default FmsTable;
