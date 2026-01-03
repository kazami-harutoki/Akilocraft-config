
//mordenwindows模组
//窗户可被破坏
ServerEvents.tags('block',event =>{
    event.add('minecraft:mineable/pickaxe','@mordenwindows');
});
//窗户破坏掉落
ServerEvents.blockLootTables(event=>{
    const modId = '@mordenwindows';
    const windows=Ingredient.of(modId).getItemIds()
    // 现代窗户模组，itemid比blockid多了_i后缀，遍历
    windows.forEach(Items=>{
        const itemid=Items.toString();
        // console.info(itemid)
        if (itemid.endsWith('_i')){
            // 提取blockid（移除_i后缀）
            const blockid = itemid.replace(/_i$/, '');
            event.addSimpleBlock(blockid, itemid);
        }
    })
});
