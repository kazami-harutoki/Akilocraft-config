// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

// // client_scripts/oei_sync.js
// let dynamicOeiConfig = null;

// // 接收服务端发送的配置
// ClientEvents.customPacket('oei_config_update', event => {
//     dynamicOeiConfig = event.data;
//     console.log('OEI配置已从服务端更新');
// });

// // 提供基础配置，服务端配置优先
// ClientEvents.highPriorityAssets(event => {
//     const baseConfig = {
//         "replacements": [
//             // 基础配置，用于离线情况
//             {"target": "minecraft:iron_ingot", "replacement": "minecraft:copper_ingot"}
//         ]
//     };
    
//     // 如果收到了服务端配置，使用服务端的；否则使用基础配置
//     event.addJson("oei:replacements/raw_materials.json", 
//         dynamicOeiConfig || baseConfig
//     );
// });