import React from "react"

import {
  Typography,
  Button,
  Descriptions,
  Divider,
  Card,
  Timeline,
  Collapse,
  Tag,
} from "antd"
const { Title } = Typography
const { Panel } = Collapse

export default ({ longTermGoals, otherGoals }) => {
  return (
    <>
      <Divider orientation="left">Long-Term Goals</Divider>
      <Collapse>
        {longTermGoals.map(longGoal => (
          <Panel
            header={`${longGoal.description}`}
            extra={
              <>
                <Tag>{longGoal.progression}</Tag>
                <Tag>{longGoal.discipline}</Tag>
              </>
            }
          >
            <Card>
              <Descriptions>
                <Descriptions.Item label="Status">
                  {longGoal.status}
                </Descriptions.Item>
                <Descriptions.Item label="Target Date">
                  {longGoal.targetDate}
                </Descriptions.Item>
                <Descriptions.Item label="Owner">
                  {longGoal.owner}
                </Descriptions.Item>
                <Descriptions.Item label="Progression">
                  {longGoal.progression}
                </Descriptions.Item>
                <Descriptions.Item label="Disciple">
                  {longGoal.discipline}
                </Descriptions.Item>
                <Descriptions.Item label="Progression Updated">
                  {longGoal.progressionUpdated}
                </Descriptions.Item>
              </Descriptions>
              <Divider orientation="left">Short-Term Goals</Divider>
              <Collapse>
                {longGoal.shortTermGoals.map(shortGoal => (
                  <Panel
                    header={shortGoal.description}
                    extra={
                      <>
                        <Tag>{shortGoal.progression}</Tag>
                        <Tag>{shortGoal.discipline}</Tag>
                      </>
                    }
                  >
                    <Card>
                      <Descriptions>
                        <Descriptions.Item label="Status">
                          {shortGoal.status}
                        </Descriptions.Item>
                        <Descriptions.Item label="Target Date">
                          {shortGoal.targetDate}
                        </Descriptions.Item>
                        <Descriptions.Item label="Owner">
                          {shortGoal.owner}
                        </Descriptions.Item>
                        <Descriptions.Item label="Progression">
                          {shortGoal.progression}
                        </Descriptions.Item>
                        <Descriptions.Item label="Disciple">
                          {shortGoal.discipline}
                        </Descriptions.Item>
                        <Descriptions.Item label="Progression Updated">
                          {shortGoal.progressionUpdated}
                        </Descriptions.Item>
                      </Descriptions>
                      <Divider orientation="left">Related Activities</Divider>
                      <Collapse>
                        {shortGoal.activities.map(activity => (
                          <Panel
                            header={`${activity.description}: (${activity.schedule})`}
                          >
                            <Card>
                              <Descriptions>
                                <Descriptions.Item label="Owner">
                                  {activity.owner}
                                </Descriptions.Item>
                                <Descriptions.Item label="Disciple">
                                  {activity.discipline}
                                </Descriptions.Item>
                              </Descriptions>
                            </Card>
                          </Panel>
                        ))}
                      </Collapse>
                    </Card>
                  </Panel>
                ))}
              </Collapse>
              <Divider orientation="left">Goal Comments</Divider>
              <Card>
                <Timeline>
                  {longGoal.comments.map(comment => (
                    <Timeline.Item>
                      {`${comment.commentUser}, ${comment.commentDateTime}: ${comment.comment}`}
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Card>
            </Card>
          </Panel>
        ))}
      </Collapse>
      <Divider orientation="left">Other Goals</Divider>
      <Collapse>
        {otherGoals.map(otherGoal => (
          <Panel
            header={otherGoal.description}
            extra={
              <>
                <Tag>{otherGoal.progression}</Tag>
                <Tag>{otherGoal.discipline}</Tag>
              </>
            }
          >
            <Card>
              <Descriptions>
                <Descriptions.Item label="Status">
                  {otherGoal.status}
                </Descriptions.Item>
                <Descriptions.Item label="Target Date">
                  {otherGoal.targetDate}
                </Descriptions.Item>
                <Descriptions.Item label="Owner">
                  {otherGoal.owner}
                </Descriptions.Item>
                <Descriptions.Item label="Progression">
                  {otherGoal.progression}
                </Descriptions.Item>
                <Descriptions.Item label="Disciple">
                  {otherGoal.discipline}
                </Descriptions.Item>
                <Descriptions.Item label="Progression Updated">
                  {otherGoal.progressionUpdated}
                </Descriptions.Item>
              </Descriptions>
              <Divider orientation="left">Related Activities</Divider>
              <Collapse>
                {otherGoal.activities.map(activity => (
                  <Panel
                    header={`${activity.description}: (${activity.schedule})`}
                  >
                    <Card>
                      <Descriptions>
                        <Descriptions.Item label="Owner">
                          {activity.owner}
                        </Descriptions.Item>
                        <Descriptions.Item label="Disciple">
                          {activity.discipline}
                        </Descriptions.Item>
                      </Descriptions>
                    </Card>
                  </Panel>
                ))}
              </Collapse>
              <Divider orientation="left">Goal Comments</Divider>
              <Card>
                <Timeline>
                  {otherGoal.comments.map(comment => (
                    <Timeline.Item>
                      {`${comment.commentUser}, ${comment.commentDateTime}: ${comment.comment}`}
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Card>
            </Card>
          </Panel>
        ))}
      </Collapse>

      {/* <Divider orientation="left">Comments</Divider>
      <Timeline>
        {details.comments.map(comment => (
          <Timeline.Item>
            {`${comment.commentUser}, ${comment.commentDateTime}: ${comment.comment}`}
          </Timeline.Item>
        ))}
      </Timeline> */}
    </>
  )
}
