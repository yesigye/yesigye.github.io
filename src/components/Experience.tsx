import { createStyles, Text, Avatar, Group, TypographyStylesProvider, Paper, Container, Badge, Title, Divider } from '@mantine/core';
import experiences from "../services/experience.json"


const useStyles = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
    paddingLeft: 0,
    paddingRight: 0,
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

interface IExperience {
  title: string,
  company: string,
  location: string,
  startDate: string,
  endDate: string,
  description: string,
  tech: string[]
};

export default function Experience() {
  const { classes } = useStyles();
  return (
    <Container pt={"lg"}>
      <Title order={1} my={"lg"}>Experience</Title>
      {experiences.map((experience: IExperience) => (
        <Paper bottom={50} radius="md" className={classes.comment} key={experience.company.trim()}>
          <Group>
            <Avatar src="" color="green" alt="logo" radius="xl">{experience.company.charAt(0)}</Avatar>
            <div>
              <Text size="md" fw="bold" span>
                {experience.title} at {experience.company}. <Text size="sm" color="dimmed" span>{experience.location}</Text>
              </Text>
              <Text size="sm" color="dimmed">
                {experience.endDate ? `${experience.startDate} - ${experience.endDate}` : `Since ${experience.startDate}`}
              </Text>
            </div>
          </Group>
          <TypographyStylesProvider className={classes.body}>
            {/* <div className={classes.content} dangerouslySetInnerHTML={{ __html: body }} /> */}
            {experience.description}
            <div style={{ marginTop: 5 }}>
              {experience.tech.map(skill => <Badge key={skill} style={{marginRight: 5}}>{skill}</Badge>)}
            </div>
          </TypographyStylesProvider>
        </Paper>
      ))}
    </Container>
  );
}