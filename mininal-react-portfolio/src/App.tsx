import React from "react";
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

const { Footer, Content } = Layout;
const { Title, Paragraph, Link } = Typography;
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

// Replace with your photo
const profile = "./logo192.png";

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
    <Avatar
      size={{ xs: 100, sm: 128, md: 160, lg: 200, xl: 240, xxl: 256 }}
      src={profile}
    />
    <Title>Your name</Title>
    <Title level={3}>Headline, degree, etc.</Title>

    <Title level={5}>
      Tell the world about yourself. Use @ant-design/icons below to link to your
      social media. For more details about those icons, visit:
      <a
        href="https://ant-design.antgroup.com/components/icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        {"  "}https://ant-design.antgroup.com/components/icon
      </a>
    </Title>
    <br />

    <Space id="icons" style={{ fontSize: 32 }} size={"large"}>
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

    <Divider />
  </Typography>
);

// projects information
const data = Array.from({ length: 5 }).map((_, i) => ({
  href: "https://link.to.your.project",
  title: `Project title ${i}`,
  avatar: `https://image.about.your.project`,
  content: "Summary of your project",
}));

// Experience
const data2 = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: { colorPrimary: primColor },
        components: {
          Anchor: {
            fontSize: 18,
            linkPaddingBlock: 14,
            linkPaddingInlineStart: 14,
          },
        },
      }}
    >
      <Layout>
        <FloatButton.BackTop visibilityHeight={100} />
        <div id="anchor-container">
          <Anchor
            replace
            direction="horizontal"
            items={items}
            style={{
              backdropFilter: "blur(10px)",
            }}
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
                bordered={true}
                size="small"
                itemLayout="vertical"
                pagination={{
                  pageSize: 3,
                  align: "center",
                  position: "top",
                }}
                dataSource={data}
                renderItem={(item) => (
                  <List.Item
                    key={item.title}
                    extra={
                      <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      />
                    }
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
          <div id="experience" className="section">
            <Title>Experience</Title>
            <Divider />
            <List
              header={<div>Experience1</div>}
              bordered
              dataSource={data2}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
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
