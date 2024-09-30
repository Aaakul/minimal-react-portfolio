import React, { useEffect, useState } from "react";
import {
  Space,
  Layout,
  Anchor,
  Typography,
  Divider,
  FloatButton,
  Avatar,
  ConfigProvider,
  theme,
  List,
  Card,
  Row,
  Col,
} from "antd";
import {
  GithubOutlined,
  MailOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  LinkOutlined,
  BilibiliOutlined,
} from "@ant-design/icons";

// Replace with your photo
import profile from "./profile.png";

const { Footer, Content } = Layout;
const { Title, Paragraph, Link, Text } = Typography;
// Your favorite color
const primColor = "#61dafb";

// Anchors
const items = [
  {
    key: "1",
    href: "#about",
    title: "About",
  },
  {
    key: "2",
    href: "#projects",
    title: "Projects",
  },
  {
    key: "3",
    href: "#experience",
    title: "Experience",
  },
  {
    key: "4",
    href: "#other",
    title: "Other section...",
  },
];

// Set your links
const links = {
  email: "mailto:yourname@mail.addr",
  github: "https://github.com/yourprofile",
  instagram: "https://instagram.com/yourinstagram",
  linkedin: "https://linkedin.com/yourname",
  youtube: "https://youtube.com/yourchannel",
  bilibili: "https://bilibli.com/uid",
  link1: "https://your.otherlink.com",
};

// Edit your content
const about = (
  <Typography>
    <br />
    <Avatar
      size={{ xs: 100, sm: 128, md: 160, lg: 200, xl: 240, xxl: 256 }}
      src={profile}
    />
    <Title>Hi, I am [Your name]</Title>
    <Title level={4}>Headline, degree, etc.</Title>

    <Text
      strong
      style={{
        fontSize: "large",
        textAlign: "justify",
        marginLeft: "10%",
        marginRight: "10%",
      }}
    >
      Tell the world about yourself. Use @ant-design/icons below to link to your
      social media. For more details about those icons, visit:
      <a
        href="https://ant-design.antgroup.com/components/icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <u>https://ant-design.antgroup.com/components/icon</u>
      </a>
    </Text>
    <br />

    <Space id="icons" style={{ fontSize: "x-large" }} size={"large"}>
      <a id="mail" href={links.email} target="_blank" rel="noopener noreferrer">
        <MailOutlined style={{ color: primColor }} />
      </a>
      <a
        id="mail"
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubOutlined style={{ color: primColor }} />
      </a>
      <a
        id="mail"
        href={links.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramOutlined style={{ color: primColor }} />
      </a>
      <a
        id="mail"
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinOutlined style={{ color: primColor }} />
      </a>
      <a
        id="mail"
        href={links.youtube}
        target="_blank"
        rel="noopener noreferrer"
      >
        <YoutubeOutlined style={{ color: primColor }} />
      </a>
      <a
        id="bilibili"
        href={links.bilibili}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BilibiliOutlined style={{ color: primColor }} />
      </a>
    </Space>

    <Paragraph>
      <Paragraph copyable={{ text: links.link1 }}>
        Other link 1:{"  "}
        <LinkOutlined style={{ color: primColor }} />
        <Link
          id="link1"
          href={links.link1}
          target="_blank"
          rel="noopener noreferrer"
        >
          {links.link1}
        </Link>
      </Paragraph>
    </Paragraph>
    <br />
    <Divider />
  </Typography>
);

// projects information
const projects = [
  {
    key: "1",
    href: "https://link.to.your.project",
    title: "Project1",
    content: "Summary of your project",
    img: `https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png`,
  },
  {
    key: "2",
    href: "https://link.to.your.project",
    title: "Project2",
    content: "Summary of your project",
    img: `https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png`,
  },
  {
    key: "3",
    href: "https://link.to.your.project",
    title: "Project3",
    content: "Summary of your project",
    img: `https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png`,
  },
  {
    key: "4",
    href: "https://link.to.your.project",
    title: "Project2",
    content: "Summary of your project",
    img: `https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png`,
  },
];

const App: React.FC = () => {
  // Set scroll offset
  const topRef = React.useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();

  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);

  return (
    <ConfigProvider
      theme={{
        // Dark mode
        algorithm: theme.darkAlgorithm,
        token: { colorPrimary: primColor },
      }}
    >
      <Layout>
        <FloatButton.BackTop visibilityHeight={100} />
        <div id="anchor-container" ref={topRef}>
          <Anchor
            className="header"
            targetOffset={targetOffset}
            replace
            direction="horizontal"
            items={items}
          />
        </div>
        <Content>
          <div id="about" className="section">
            {about}
          </div>
          <div id="projects" className="section" style={{ height: "auto" }}>
            <Title>Projects</Title>
            <Divider />
            <div id="list-container">
              <List
                className="list"
                bordered={true}
                size="small"
                itemLayout="vertical"
                pagination={{
                  pageSize: 3,
                  align: "center",
                  position: "top",
                }}
                dataSource={projects}
                renderItem={(item) => (
                  <List.Item
                    key={item.title}
                    extra={<img width={200} alt="logo" src={item.img} />}
                  >
                    <List.Item.Meta
                      title={<a href={item.href}>{item.title}</a>}
                    />
                    {item.content}
                  </List.Item>
                )}
              />
            </div>
            <Divider />
          </div>
          <div id="experience" className="section" style={{ height: "auto" }}>
            <Title>Experience</Title>
            <Divider />
            <Row id="exp-container">
              <Col id="sider">
                <Anchor
                  targetOffset={targetOffset}
                  items={[
                    {
                      key: "1",
                      href: "#Education",
                      title: "Education",
                    },
                    {
                      key: "2",
                      href: "#Volunteer",
                      title: "Volunteer",
                    },
                    {
                      key: "3",
                      href: "#Internship",
                      title: "Internship",
                    },
                    {
                      key: "4",
                      href: "#Work",
                      title: "Work",
                    },
                  ]}
                />
              </Col>
              <Col id="cards" span={20}>
                <Space direction="vertical" size={"large"}>
                  <Card id="Education" title="Education" className="card">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>
                  <Card id="Volunteer" title="Volunteer" className="card">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>
                  <Card id="Internship" title="Internship" className="card">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>
                  <Card id="Work" title="Work" className="card">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>
                </Space>
              </Col>
            </Row>
            <Divider />
          </div>
          <div id="other" className="section">
            <span>Add other sections as you want</span>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©{new Date().getFullYear()} Your name · Made with React and Ant Design
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
