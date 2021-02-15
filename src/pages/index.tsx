import { gql, request } from 'graphql-request';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { useMemo, useState } from 'react';
import { useEffectOnce, useLocalStorage } from 'react-use';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '~/components/Box';
import { Button } from '~/components/Button';

import { CharacterCard } from '~/components/CharacterCard';
import { Container } from '~/components/Container';
import { Header } from '~/components/Header';
import { TaskCard } from '~/components/TaskCard';
import { Text } from '~/components/Text';
import { useCharacters } from '~/hooks/useCharacters';
import { useWeeklies } from '~/hooks/useWeeklies';
import { darkTheme } from '~/stitches.config';
import { Boss, Event, Task } from '~/types/graphcms';

export const getStaticProps = async () => {
  const query = gql`
    {
      bosses {
        id
        image {
          url(transformation: { image: { resize: { width: 100, height: 100, fit: crop } } })
        }
        name
        recurrence
      }
      events {
        id
        image {
          height
          url
          width
        }
        name
        recurrence
      }
      tasks {
        id
        image {
          height
          url
          width
        }
        name
        recurrence
      }
    }
  `;

  const data: {
    bosses: Pick<Boss, 'id' | 'image' | 'name' | 'recurrence'>[];
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
  const { activeCharacter, characters, createCharacter, deleteCharacter, setActiveCharacter } = useCharacters();
  const { weeklies, onToggleWeekly } = useWeeklies();

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

  const testCharacter = { name: 'Character', icon: ' IconName', id: uuidv4() };

  return (
    <>
      <Header />
      <main>
        <Container>
          <Text as='h1' css={{ mb: 16 }} variant='heading-70'>
            MapleStory Tracker
          </Text>
          <Text as='p' variant='body-24'>
            Next server reset is in: TIME
          </Text>

          <Box as='section'>
            <Text as='h2' variant='heading-50'>
              Characters
            </Text>
            {isMounted && activeCharacter?.name}
            {isMounted && activeCharacter?.id}
            <Box style={{ display: 'flex' }}>
              {isMounted ? (
                characters?.map((character) => {
                  const isActiveCharacter = activeCharacter?.id === character.id;
                  return (
                    <CharacterCard
                      css={{ mr: 12 }}
                      isActive={isActiveCharacter}
                      onClick={() => setActiveCharacter(character)}
                      onDelete={(event) => {
                        event.stopPropagation();
                        !isActiveCharacter && deleteCharacter(character.id);
                      }}
                      key={character.id}
                      {...character}
                    />
                  );
                })
              ) : (
                <>Loading...</>
              )}
            </Box>
            <Button onClick={() => createCharacter(testCharacter)}>Add new character</Button>
          </Box>
          <Text>Test</Text>
          <Box as='section'>
            <Box css={{ display: 'flex' }}>
              <Button onClick={() => setRecurrence('daily')}>View daily</Button>
              <Button onClick={() => setRecurrence('weekly')}>View weekly</Button>
              <Button onClick={() => setRecurrence('monthly')}>View monthly</Button>
            </Box>
            <Box css={{ display: 'flex' }}>
              <Box css={{ mr: 24 }}>
                {filteredBosses?.map((boss) => (
                  <TaskCard
                    {...boss}
                    css={{ mb: 16 }}
                    isSelected={isMounted && activeCharacter && weeklies?.[boss.name]?.includes(activeCharacter.id)}
                    key={boss.id}
                    onClick={() => activeCharacter && onToggleWeekly(boss.name, activeCharacter.id)}
                  />
                ))}
              </Box>
              <Box css={{ mr: 24 }}>
                {filteredEvents?.map((event) => (
                  <TaskCard
                    {...event}
                    css={{ mb: 16 }}
                    isSelected={isMounted && activeCharacter && weeklies?.[event.name]?.includes(activeCharacter.id)}
                    key={event.id}
                    onClick={() => activeCharacter && onToggleWeekly(event.name, activeCharacter.id)}
                  />
                ))}
              </Box>
              <Box>
                {filteredTasks?.map((task) => (
                  <TaskCard
                    {...task}
                    css={{ mb: 16 }}
                    isSelected={isMounted && activeCharacter && weeklies?.[task.name]?.includes(activeCharacter.id)}
                    key={task.id}
                    onClick={() => activeCharacter && onToggleWeekly(task.name, activeCharacter.id)}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </main>
      <footer></footer>
    </>
  );
}
