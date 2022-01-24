export class ToDoList {
  public static data = [
    {
      groupId: '1',
      groupName: 'My Day',
      icon: 'sun',
      items: [
        {
          itemId: '1',
          name: 'wake up',
          done: false
        },
        {
          itemId: '2',
          name: 'wake',
          done: true
        },
        {
          itemId: '3',
          name: 'up',
          done: false
        },
      ]
    },
    {
      groupId: '2',
      icon: 'building',
      groupName: 'Office',
      items: [
        {
          itemId: '1',
          name: 'wake up',
          done: false
        }
      ]
    },
    {
      groupId: '3',
      groupName: 'School',
      icon: 'school',
      items: [
        {
          itemId: '1',
          name: 'wake up',
          done: false
        }
      ]
    }];
}