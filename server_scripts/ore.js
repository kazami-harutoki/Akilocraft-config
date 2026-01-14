ServerEvents.recipes(event=>{
    //placement参考值https://www.mcmod.cn/post/3606.html
    //priority参考值https://www.mcmod.cn/item/626381.html

    const coe=event.recipes.createoreexcavation;
    const main_world=['forge:is_overworld'];
    //赤铁矿~参考铁
    coe.vein('{"text":"粗赤铁"}','ultramarine:raw_hematite')
        .biomeWhitelist('minecraft:is_overworld')
        .placement(128,8,Date.now() % 100000001)
        .priority(10)
        .id("kubejs:hematite_vein");
    coe.drilling('ultramarine:raw_hematite','kubejs:hematite_vein',600).stress(256).id("kubejs:hematite_ore_vein");

    //玉~参考钻石
    //需要水
    coe.vein('{"text":"玉"}','ultramarine:jade')
        .biomeWhitelist('minecraft:is_overworld')
        .placement(256,64,Date.now() % 100000002)
        .priority(2)
        .id("kubejs:jade_vein");
    coe.drilling('ultramarine:jade','kubejs:jade_vein',1200).stress(512).fluid('minecraft:water 100').id("kubejs:jade_ore_vein");

    //白松石(菱镁矿)~参考青金石
    coe.vein('{"text":"白松石"}','ultramarine:magnesite')
        .biomeWhitelist('minecraft:is_overworld')
        .placement(128,8,Date.now() % 100000003)
        .priority(10)
        .id("kubejs:magnesite_vein");
    coe.drilling('ultramarine:magnesite','kubejs:magnesite_vein',1200).stress(256).id("kubejs:magnesite_ore_vein");

    //下界钴矿石~钻石/远古残骸
    //不能用铁钻头
    coe.vein('{"text":"粗钴"}','ultramarine:raw_cobalt')
        .biomeWhitelist('minecraft:is_nether')
        .placement(256,96,Date.now() % 100000004)
        .priority(3)
        .id("kubejs:cobalt_vein");
    coe.drilling('ultramarine:raw_cobalt','kubejs:cobalt_vein',2400).stress(1024).drill(['createoreexcavation:diamond_drill','createoreexcavation:netherite_drill']).id("kubejs:cobalt_ore_vein");
});