import { writable } from "svelte/store";

export const Projects = writable([
    {
        name: 'File Manager',
        banner: 'https://filemanager.nandanarafi.my.id/uploads/1683960643_filemanagerposter.png',
        url: 'https://filemanager.nandanarafi.my.id',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis ad architecto rem non! Reprehenderit mollitia omnis dolor!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum eius veniam et quaerat natus impedit, autem aliquid ea voluptates soluta. Modi quo exercitationem, adipisci illum iusto vel tempora neque.`,
        stacks: [1, 10, 5],
    },
    {
        name: 'Last FM Profile Viewer',
        banner: 'https://filemanager.nandanarafi.my.id/uploads/1684652538_c.png',
        url: 'https://lastfm.nandanarafi.my.id',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptate modi veritatis ad architecto rem non! Reprehenderit mollitia omnis dolor!
        Lorem, veniam et quaerat natus impedit, autem aliquid ea vel tempora neque.`,
        stacks: [0, 1],
    },
    {
        name: 'Svelte Music Player',
        banner: 'https://filemanager.nandanarafi.my.id/uploads/1684654089_image.png',
        url : 'https://github.com/nanandr/music-player-svelte',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing cum nesciunt necessitatibus tenetur dignissimos deleniti laboriosam. Enim veritatis ad architecto rem non! Reprehenderit mollitia omnis dolor! Modi quo exercitationem, adipisci illum iusto vel tempora neque.`,
        stacks: [2],            
    },
    {
        name: 'Notes++',
        banner: 'https://filemanager.nandanarafi.my.id/uploads/1684654403_Screenshot_20230209-125643_Notes.png',
        url: 'https://github.com/nanandr/notes-sqlite',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam. Enim veritatis ad architecto rem non! Reprehenderit mollitia omnis dolor!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
        stacks: [3, 4, 6],
    },
]);