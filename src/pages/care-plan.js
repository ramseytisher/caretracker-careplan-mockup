import React, { useState } from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"

import { Row, Col, Menu, Table, Drawer, List, Card, PageHeader } from "antd"
import { UserOutlined } from "@ant-design/icons"

import { mockData } from "../data/mock-data"

import HealthConcerns from "../components/health-concerns"
import GoalActivities from "../components/goal-activities"

const columns = [
  {
    title: "Health Concern",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
]

export default () => {
  const [show, setShow] = useState("healthConcerns")
  const [details, setDetails] = useState(null)
  const [patient, setPatient] = useState(0)

  return (
    <Layout>
      <PageHeader
        onBack={() => navigate("/")}
        title="CareTracker Care Plan Information"
        subTitle="This is only a mockup"
      />
      <PageHeader
        title="This would be resident demographic bar"
        style={{ backgroundColor: "#00A8E1" }}
        avatar={<UserOutlined />}
      />
      <Menu
        onClick={e => setShow(e.key)}
        selectedKeys={[show]}
        mode="horizontal"
      >
        <Menu.Item key="healthConcerns">Health Concerns</Menu.Item>
        <Menu.Item key="goalsActivities">Goals & Activities</Menu.Item>
        <Menu.Item key="strengths">Strengths</Menu.Item>
      </Menu>
      {show === "healthConcerns" && (
        <HealthConcerns concerns={mockData[patient].healthConcerns} goals={mockData[patient].goals} />
        // <Table
        //   columns={[
        //     { title: "Concern", dataIndex: "name", key: "name" },
        //     { title: "Status", dataIndex: "status", key: "status" },
        //     { title: "Onset Date", dataIndex: "onsetDate", key: "onsetDate" },
        //   ]}
        //   onRow={(record, rowIndex) => {
        //     return {
        //       onClick: event => {
        //         setDetails(record)
        //       },
        //     }
        //   }}
        //   dataSource={mockData[patient].healthConcerns}
        //   pagination={false}
        // />
      )}
      {show === "goalsActivities" && (
        <GoalActivities
          goals={mockData[patient].goals}
        />
      )}
      {show === "strengths" && (
        <Card title="Strengths">
          <List
            dataSource={mockData[patient].strengths}
            renderItem={({ description }) => (
              <List.Item>{description}</List.Item>
            )}
            bordered
          />
        </Card>
      )}
    </Layout>
  )
}
