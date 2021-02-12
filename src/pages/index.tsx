import { gql, request } from 'graphql-request';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { useMemo, useState } from 'react';
import { useEffectOnce, useLocalStorage } from 'react-use';
import { v4 as uuidv4 } from 'uuid';

import { CharacterCard } from '~/components/CharacterCard';
import { Container } from '~/components/Container';
import { Header } from '~/components/Header';
import { Text } from '~/components/Text';
import { useCharacters } from '~/hooks/useCharacters';
import { useWeeklies } from '~/hooks/useWeeklies';
import { Boss, Event, Task } from '~/types/graphcms';

export const getStaticProps = async () => {
  const query = gql`
    {
      bosses {
        id
        image {
          height
          url
          width
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

          <section>
            <Text as='h2' variant='heading-50'>
              Characters
            </Text>
            {isMounted && activeCharacter?.name}
            {isMounted && activeCharacter?.id}
            <div style={{ display: 'flex' }}>
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
            </div>
            <button onClick={() => createCharacter(testCharacter)}>Add new character</button>
          </section>

          <section>
            <button onClick={() => setRecurrence('daily')}>View daily</button>
            <button onClick={() => setRecurrence('weekly')}>View weekly</button>
            <button onClick={() => setRecurrence('monthly')}>View monthly</button>
            <div style={{ display: 'flex' }}>
              <div>
                {filteredBosses?.map((boss) => (
                  <div key={boss.id} onClick={() => activeCharacter && onToggleWeekly(boss.name, activeCharacter.id)}>
                    {isMounted && activeCharacter && weeklies?.[boss.name]?.includes(activeCharacter.id) && (
                      <>&#10003;</>
                    )}
                    {boss.name}
                  </div>
                ))}
              </div>
              <div>
                {filteredEvents?.map((boss) => (
                  <div key={boss.id}>{boss.name}</div>
                ))}
              </div>
              <div>
                {filteredTasks?.map((boss) => (
                  <div key={boss.id}>{boss.name}</div>
                ))}
              </div>
            </div>
          </section>
        </Container>
      </main>
      <footer></footer>
    </>
  );
}
