import React from "react"

import { Typography, Button, Descriptions, Divider, Card, Timeline } from "antd"
const { Title } = Typography

export default ({ details }) => {
  if (details) {
    return (
      <>
        <Divider orientation="left">Health Concern</Divider>
        <Card title={details.name}>
          <Descriptions>
            <Descriptions.Item label="Description">
              {details.name}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              {details.status}
            </Descriptions.Item>
            <Descriptions.Item label="Onset Date">
              {details.onsetDate}
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Divider orientation="left">Comments</Divider>
        <Timeline>
          {details.comments.map(comment => (
            <Timeline.Item>
              {`${comment.commentUser}, ${comment.commentDateTime}: ${comment.comment}`}
            </Timeline.Item>
          ))}
        </Timeline>
        <pre>{JSON.stringify(details, null, 2)}</pre>
      </>
    )
  } else return null
}
