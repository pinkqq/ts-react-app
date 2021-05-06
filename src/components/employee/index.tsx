import React, { Component } from "react";
import { Table } from "antd";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import QueryForm from "./QueryForm";
import { EmployeeRequest, EmployeeResponse } from "../../interface/employee";
import { getEmployee } from "../../redux/employee";

import "./index.css";

const employeeColumns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "部门",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "入职时间",
    dataIndex: "hiredate",
    key: "hiredate",
  },
  {
    title: "职级",
    dataIndex: "level",
    key: "level",
  },
];

interface Props {
  onGetEmployee(param: EmployeeRequest): void;
  employeeList: EmployeeResponse;
}

class Employee extends Component<Props> {
  // state: State = { employee: undefined };
  // getTotal = () => {
  //   let total: number;
  //   if (typeof this.state.employee !== "undefined") {
  //     total = this.state.employee.length;
  //   } else {
  //     total = 0;
  //   }
  //   return <p className="tip">共有 {total} 名员工</p>;
  // };
  // setEmployee = (employee: EmployeeResponse) => {
  //   this.setState({ employee });
  // };
  render() {
    const { onGetEmployee, employeeList } = this.props;
    return (
      <>
        <QueryForm getData={onGetEmployee} />
        {/* {this.getTotal()} */}
        <Table
          columns={employeeColumns}
          dataSource={employeeList}
          className="table"
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  employeeList: state.employee.employeeList,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ onGetEmployee: getEmployee }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
