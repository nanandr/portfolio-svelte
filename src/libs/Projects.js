import { writable } from "svelte/store";

export const Projects = writable([
    {
        name: 'File Manager',
        banner: 'https://filemanager.nandanarafi.my.id/uploads/1683960643_filemanagerposter.png',
        url: 'https://filemanager.nandanarafi.my.id',
        stacks: [1, 10, 5],
    },
    {
        name: 'Last FM Profile Viewer',
        banner: 'https://filemanager.nandanarafi.my.id/uploads/1684652538_c.png',
        url: 'https://lastfm.nandanarafi.my.id',
        stacks: [0, 1],
    },
    {
        name: 'Svelte Music Player',
        banner: 'https://filemanager.nandanarafi.my.id/uploads/1684654089_image.png',
        url : 'https://github.com/nanandr/music-player-svelte',
        stacks: [2],            
    },
    {
        name: 'Notes++',
        banner: 'https://filemanager.nandanarafi.my.id/uploads/1684654403_Screenshot_20230209-125643_Notes.png',
        url: 'https://github.com/nanandr/notes-sqlite',
        stacks: [3, 4, 6],
    },
]);