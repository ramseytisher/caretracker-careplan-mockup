import React from "react"

import {
  Typography,
  Button,
  Descriptions,
  Divider,
  Card,
  Timeline,
  Collapse,
  Tag
} from "antd"
const { Title } = Typography
const { Panel } = Collapse

export default ({ details }) => {
  if (details) {
    return (
      <>
        <Collapse>
          {details.map(concern => (
            <Panel header={`${concern.name}`} extra={<Tag>{concern.status}</Tag>}>
              <Card>
                <Descriptions>
                  <Descriptions.Item label="Status">
                    {concern.status}
                  </Descriptions.Item>
                  <Descriptions.Item label="Onset Date">
                    {concern.onsetDate}
                  </Descriptions.Item>
                </Descriptions>
                <Divider orientation="left">Comments</Divider>
                <Timeline>
                  {concern.comments.map(comment => (
                    <Timeline.Item>
                      {`${comment.commentUser}, ${comment.commentDateTime}: ${comment.comment}`}
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Card>
            </Panel>
          ))}
        </Collapse>

        {/* <pre>{JSON.stringify(details, null, 2)}</pre> */}
      </>
    )
  } else return null
}
