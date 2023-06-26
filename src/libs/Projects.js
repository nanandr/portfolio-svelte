import { writable } from "svelte/store";

export const Projects = writable([
    // {
    //     name: 'RPL Vote',
    //     banner: '',
    //     url: {
    //         github: '',
    //         web: '',
    //     },
    //     text: 'An upcoming project made for making vote easier',
    //     stacks: [1, 2, 5],
    // },
    {
        name: 'File Manager',
        banner: 'https://filemanager.nandanarafi.my.id/uploads/1683960643_filemanagerposter.png',
        url: {
            github: 'https://github.com/nanandr/file-manager-laravel',
            web: 'https://filemanager.nandanarafi.my.id',
        },
        text: `A web application for users to manage their files efficiently. Key features: recycle bin, minimalist user interface, nested folders, and file sharing.`,
        stacks: [1, 10, 5],
    },
    {
        name: 'Last FM Profile Viewer',
        banner: 'https://filemanager.nandanarafi.my.id/uploads/1684652538_c.png',
        url: {
            github: 'https://github.com/nanandr/lastfm-react',
            web: 'https://lastfm.nandanarafi.my.id',
        },
        text: `Made using LastFM API, this web application tracks users scrobble activity in real time and generate charts automatically.`,
        stacks: [0, 1],
    },
    {
        name: 'Svelte Music Player',
        banner: 'https://filemanager.nandanarafi.my.id/uploads/1684654089_image.png',
        url : {
            github: 'https://github.com/nanandr/music-player-svelte',
        },
        text: `A simple music player made using svelte.`,
        stacks: [2],            
    },
    {
        name: 'Notes++',
        banner: 'https://filemanager.nandanarafi.my.id/uploads/1684654403_Screenshot_20230209-125643_Notes.png',
        url: {
            github: 'https://github.com/nanandr/notes-sqlite',
        },
        text: `Write notes easier & more secure on your android phone.`,
        stacks: [3, 4, 6],
    },
]);