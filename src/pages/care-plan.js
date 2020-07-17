import React, { useState } from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"

import { Row, Col, Menu, Table, Drawer, List, Card, PageHeader } from "antd"

import { mockData } from "../data/mock-data"

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
      <PageHeader title="This would be resident demographic bar" style={{ backgroundColor: '#00A8E1' }}/>
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
        <Table
          columns={[
            { title: "Concern", dataIndex: "name", key: "name" },
            { title: "Status", dataIndex: "status", key: "status" },
            { title: "Onset Date", dataIndex: "onsetDate", key: "onsetDate" },
          ]}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                setDetails(record)
              },
            }
          }}
          dataSource={mockData[patient].healthConcerns}
          pagination={false}
        />
      )}
      {show === "goalsActivities" && (
        <>
          <Card title="Long Term Goals">
            <Table
              columns={[{ dataIndex: "description", key: "description" }]}
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => {
                    setDetails(record)
                  },
                }
              }}
              showHeader={false}
              dataSource={mockData[patient].goals.longTermGoals}
              pagination={false}
            />
          </Card>
          <Card title="Other Goals">
            <Table
              columns={[{ dataIndex: "description", key: "description" }]}
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => {
                    setDetails(record)
                  },
                }
              }}
              showHeader={false}
              dataSource={mockData[patient].goals.otherGoals}
              pagination={false}
            />
          </Card>
        </>
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
      <Drawer
        visible={details}
        placement="bottom"
        onClose={() => setDetails(null)}
        closable={true}
        height="80vh"
      >
        <pre>{JSON.stringify(details, null, 2)}</pre>
      </Drawer>
    </Layout>
  )
}
