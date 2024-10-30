import { createStyles, Text, Avatar, Group, TypographyStylesProvider, Paper, Container, Badge, Title, Divider, List, Button, Grid, Card, Image, SimpleGrid } from '@mantine/core';
import portfolio from "../services/portfolio.json"


const useStyles = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
    paddingLeft: 0,
    paddingRight: 0,
  },
  container: {
    background: theme.colors.dark,
    padding: "3rem 5%",
    borderRadius: 0,
  },
  body: {
    paddingLeft: 54,
    paddingBottom: (theme.spacing.sm) / 1.5,
    fontSize: theme.fontSizes.sm,
  },
  content: {
    '& > p:last-child': {
      marginBottom: 0,
    },
  },
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 28,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },
}));

interface IPortfolio {
  title: string,
  images: string[],
  link?: string,
  description: string,
  skills: string[],
};

export default function Experience() {
  const { classes } = useStyles();
  return (
    <Paper className={classes.container}>
      <Grid grow gutter="lg">
        <Grid.Col span={12}>
          <Title order={1} color='white' mb="lg" id="#portfolio">Portfolio</Title>
        </Grid.Col>
        {portfolio.map((project: IPortfolio) => (
          <Grid.Col span={6}>
            <Card shadow="sm">
              {/* <Card.Section>
                <Grid grow gutter="lg">
                  <Grid.Col span={6}>
                    {project.images.map(image => (
                      <Image key={image} src={'/'+image} alt="" w={"100%"}/>
                    ))}
                  </Grid.Col>
                </Grid>
              </Card.Section> */}

              <Card.Section>
                <SimpleGrid cols={4} spacing={"xs"}>
                  {project.images.map(image => (
                    <Image key={image} src={'/'+image} alt="" w={"100%"} radius={"xs"}/>
                  ))}
                </SimpleGrid>
              </Card.Section>

              <Text fw={500} size="lg" mt="md">{project.title}</Text>
              <Text mt="xs" c="dimmed" size="sm">{project.description}</Text>
              <Text mt="sm" c="blue" size="sm" component="a" href={project.link} style={{display:"block"}}>{project.link}</Text>
            </Card>
          </Grid.Col>
        ))};
      </Grid>
    </Paper>
  );
}