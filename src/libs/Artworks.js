import { writable } from "svelte/store";

export const Artworks = writable([
    {
        type: 'image',
        url: 'https://filemanager.nandanarafi.my.id/uploads/1686932147_Screenshot_20230616-175111_Sketchbook.png',
    },
    {
        type: 'image',
        url: 'https://filemanager.nandanarafi.my.id/uploads/1686138901_IMG_20230521_155720_116.jpg',
    },
    {
        type: 'image',
        url: 'https://filemanager.nandanarafi.my.id/uploads/1687771147_95a1a0e6-a11f-4f89-adbe-78e4ad26805f.png',
    },
    {
        type: 'video',
        url: 'https://filemanager.nandanarafi.my.id/uploads/1686138721_akm0001-0180.mp4',
    },
    {
        type: 'image',
        url: 'https://filemanager.nandanarafi.my.id/uploads/1686137974_sketch1678465591648.png',
    },
    // {
    //     type: 'image',
    //     url: 'https://filemanager.nandanarafi.my.id/uploads/1686138483_20230217_223432.jpg',
    // },
    // {
    //     type: 'image',
    //     url: 'https://filemanager.nandanarafi.my.id/uploads/1686138500_20230429_191448.png',
    // },
]);