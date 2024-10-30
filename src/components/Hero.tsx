import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    Avatar,
  } from '@mantine/core';
  import { IconCheck } from '@tabler/icons';
  
  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: theme.spacing.xl * 4,
      paddingBottom: theme.spacing.xl * 4,
    },
  
    content: {
      maxWidth: 600,
      marginRight: theme.spacing.xl * 3,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: 44,
      lineHeight: 1.2,
      fontWeight: 900,
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: 28,
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        flex: 1,
      },
    },
  
    image: {
      flex: 1,
  
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  
    highlight: {
      position: 'relative',
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      borderRadius: theme.radius.sm,
      padding: '4px 12px',
    },
  }));
  
  export default function Hero() {
    const { classes } = useStyles();
    return (
      <div>
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                A <span className={classes.highlight}>versatile</span> Software<br /> Engineer
              </Title>
              <Text color="dimmed" mt="md">
                With 8 years of experience using technologies like ReactJs, NextJs, AWS, NodeJs, TypeScript/JavaScript, GraphQL and Postgres.
                I consistently deliver high-quality solutions that meet both technical and business objectives.
              </Text>
  
              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={12} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Frontend.</b> JavaScript 9yrs, TypeScript 4yrs, React 5yrs, Vue 2yrs & Angular 1yr
                </List.Item>
                <List.Item>
                  <b>Backend.</b> NodeJS 4yrs, GraphQL, AWS 3yrs, PHP 5yrs, Postgres & MySQL 8 years
                </List.Item>
                <List.Item>
                  <b>Others.</b> As a software engineer, I{"'"}ve demonstrated adaptability to new stack/Tech
                </List.Item>
              </List>
  
              <Group mt={30}>
                <a href="mailto:ignatiusyesigye@gmail.com" target="_blank" rel="noreferrer">
                  <Button radius="xl" size="md" className={classes.control}>
                    Contact me
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/ignatius-yesigye/" target="_blank" rel="noreferrer">
                  <Button variant="default" radius="xl" size="md" className={classes.control}>
                    LinkedIn
                  </Button>
                </a>
              </Group>
            </div>
            <Avatar src="/me.png" size={250} radius={250} alt="ignatius" />
          </div>
        </Container>
      </div>
    );
  }