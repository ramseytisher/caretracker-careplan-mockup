import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Typography, Button } from "antd"
import { HighlightTwoTone } from "@ant-design/icons"

const { Title } = Typography

export default () => {
  return (
    <Layout>
      <Title>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
                color: "#5C6770",
              }}
            >
              <HighlightTwoTone /> CareTracker Mockups
            </Link>
          </Title>
      <Button size="large">
        <Link to="/care-plan">Care Plan Mockup</Link>
      </Button>
    </Layout>
  )
}
