import Dexie from 'dexie';

import { MSClass } from '~/constants/maplestory';

type Character = {
  avatar: string;
  class: keyof typeof MSClass;
  id: number;
  name: string;
};

type Settings = {
  name: string;
  status: boolean;
};

type Task = {
  characterId: Character['id'];
  completedDate: Date;
  id: number;
  name: string;
  recurrence: 'Daily' | 'Monthly' | 'Weekly';
};

class MapleStoryDatabase extends Dexie {
  characters!: Dexie.Table<Partial<Character>, number>;
  settings!: Dexie.Table<Partial<Settings>, string>;
  tasks!: Dexie.Table<Partial<Task>, number>;

  constructor() {
    super('MapleStoryDatabase');

    this.version(1).stores({
      characters: '++id,name,avatar,class,classBranch',
      settings: 'name,status',
      tasks: '++id,name,recurrence,characterId,completedDate',
    });
  }
}

export const maplestoryDatabase = new MapleStoryDatabase();

maplestoryDatabase.on('populate', () => {
  maplestoryDatabase.settings.put({ name: 'sidebar', status: true });
});
