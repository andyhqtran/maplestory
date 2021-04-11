import { gql, request } from 'graphql-request';
import { InferGetStaticPropsType } from 'next';
import React, { useMemo, useState } from 'react';
import { useEffectOnce } from 'react-use';
import { Box } from '~/components/Box';
import { Button } from '~/components/Button';

import { Container } from '~/components/Container';
import { Header } from '~/components/Header';
import { Tabs } from '~/components/Tabs/Tabs';
import { TabsItem } from '~/components/Tabs/TabsItem';
import { TaskCard } from '~/components/TaskCard';
import { Text } from '~/components/Text';
import { useWeeklies } from '~/hooks/useWeeklies';
import { DefaultLayout } from '~/layouts/DefaultLayout';
import { Boss, Event, Task } from '~/types/graphcms';

export const getStaticProps = async () => {
  const query = gql`
    {
      bosses {
        id
        image {
          url(transformation: { image: { resize: { width: 100, height: 100, fit: crop } } })
        }
        mesos
        name
        recurrence
      }
      events {
        id
        image {
          height
          url(transformation: { image: { resize: { width: 100, height: 100, fit: crop } } })
          width
        }
        name
        recurrence
      }
      tasks {
        id
        image {
          height
          name
          url(transformation: { image: { resize: { width: 100, height: 100, fit: crop } } })
          width
        }
        name
        recurrence
      }
    }
  `;

  const data: {
    bosses: Pick<Boss, 'id' | 'image' | 'mesos' | 'name' | 'recurrence'>[];
    events: Pick<Event, 'id' | 'image' | 'name' | 'recurrence'>[];
    tasks: Pick<Task, 'id' | 'image' | 'name' | 'recurrence'>[];
  } = await request('https://api-us-west-2.graphcms.com/v2/ckkd8kujwo19i01z51x2dc4n2/master', query);

  return {
    props: {
      ...data,
    },
    revalidate: 1,
  };
};

export default function HomePage({ bosses, events, tasks }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isMounted, setIsMounted] = useState(false);
  const [recurrence, setRecurrence] = useState('daily');
  const { weeklies, onToggleWeekly } = useWeeklies();

  console.log(bosses);
  useEffectOnce(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  });

  const filteredBosses = useMemo(() => {
    return bosses.filter((boss) => boss.recurrence.toLowerCase() === recurrence);
  }, [bosses, recurrence]);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => event.recurrence.toLowerCase() === recurrence);
  }, [events, recurrence]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => task.recurrence.toLowerCase() === recurrence);
  }, [tasks, recurrence]);

  return (
    <>
      <Header>
        <Text as='h1' css={{ mr: 8, color: '$gray800' }} size='heading-12-uppercase'>
          Tracker
        </Text>
        <Text as='p' css={{ color: '$gray600' }} size='body-12'>
          A tool to help keep track of all your recurring MapleStory tasks.
        </Text>
      </Header>
      <Container>
        <Box as='section' css={{ my: 48 }}>
          <Text as='h3' css={{ mb: 12 }} size='heading-12-uppercase'>
            Recurrence filter
          </Text>
          <Tabs css={{ mb: 24 }}>
            <TabsItem isSelected={recurrence === 'daily'} onClick={() => setRecurrence('daily')}>
              Daily
            </TabsItem>
            <TabsItem isSelected={recurrence === 'weekly'} onClick={() => setRecurrence('weekly')}>
              Weekly
            </TabsItem>
            <TabsItem isSelected={recurrence === 'monthly'} onClick={() => setRecurrence('monthly')}>
              Monthly
            </TabsItem>
          </Tabs>

          <Text as='h3' css={{ mb: 12 }} size='heading-12-uppercase'>
            Tasks
          </Text>
          <Box css={{ display: 'flex' }}>
            <Box css={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: 24, mr: 24 }}>
              {filteredBosses?.map((boss) => (
                <TaskCard
                  {...boss}
                  description={boss?.mesos && `${boss?.mesos?.toLocaleString()} mesos`}
                  key={boss.id}
                />
              ))}
            </Box>
            <Box
              css={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridGap: 24,
                alignContent: 'start',
                alignItems: 'start',
                mr: 24,
              }}
            >
              {filteredTasks?.map((task) => (
                <TaskCard {...task} key={task.id} />
              ))}
            </Box>
            <Box css={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: 24, mr: 24 }}>
              {filteredEvents?.map((event) => (
                <TaskCard {...event} key={event.id} />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

HomePage.layout = DefaultLayout;
