/*
重要提醒
本脚本对子弹的自动化生产里使用了农夫乐事的火药袋('cratedelight:gunpowder_bag')
无农夫乐事情况下请自行替换为其他物品，如TNT('minecraft:tnt')

机械动力：哨戒动力臂 0.1.0 - 机动机械师枪包
MC版本1.20.1
机械动力6.0.8
KJS 1.6.5
KJS create 1.3.0

作者 Rain4ky
*/
ServerEvents.recipes((event) => {
    const create=event.recipes.create;   //机械动力

    //动力锯新增弹壳配方
    create.cutting(Item.of('sentrymechanicalarm:unfinished_ammo', '{AmmoId:"create_armorer:gas_pistol_ammo"}'),'create:copper_sheet');
    create.cutting(Item.of('sentrymechanicalarm:unfinished_ammo', '{AmmoId:"create_armorer:rbapb"}'),'create:copper_sheet');
    create.cutting(Item.of('sentrymechanicalarm:unfinished_ammo', '{AmmoId:"create_armorer:40m40mhe"}'),'create:copper_sheet');
    create.cutting(Item.of('sentrymechanicalarm:unfinished_ammo', '{AmmoId:"create_armorer:slap"}'),'create:copper_sheet');
    create.cutting(Item.of('sentrymechanicalarm:unfinished_ammo', '{AmmoId:"create_armorer:gernade"}'),'create:copper_sheet');

    //气动手枪弹
    const gas_pistol_ammo=Item.of('sentrymechanicalarm:unfinished_ammo', '{AmmoId:"create_armorer:gas_pistol_ammo"}');
    create.sequenced_assembly(
        Item.of('tacz:ammo', 30,'{AmmoId:"create_armorer:gas_pistol_ammo"}'),
        gas_pistol_ammo,
        [
            create.deploying(gas_pistol_ammo,[gas_pistol_ammo,'create:copper_sheet']),
            create.deploying(gas_pistol_ammo,[gas_pistol_ammo,'create:copper_sheet']),
            create.deploying(gas_pistol_ammo,[gas_pistol_ammo,'create:copper_sheet']),
            create.deploying(gas_pistol_ammo,[gas_pistol_ammo,'minecraft:gunpowder']),
            create.pressing(gas_pistol_ammo,gas_pistol_ammo)
        ]
    ).transitionalItem(gas_pistol_ammo).loops(1);
    //气动榴弹
    const gernade=Item.of('sentrymechanicalarm:unfinished_ammo', '{AmmoId:"create_armorer:gernade"}');
    create.sequenced_assembly(  
        Item.of('tacz:ammo', 20,'{AmmoId:"create_armorer:gernade"}'),
        gernade,
        [
            create.deploying(gernade,[gernade,'create:copper_sheet']),
            create.deploying(gernade,[gernade,'create:copper_sheet']),
            create.deploying(gernade,[gernade,'minecraft:tnt']),
            create.deploying(gernade,[gernade,'minecraft:redstone_block']),
            create.pressing(gernade,gernade)
        ]
    ).transitionalItem(gernade).loops(1);
    //次口径脱壳穿甲弹
    const slap=Item.of('sentrymechanicalarm:unfinished_ammo', '{AmmoId:"create_armorer:slap"}');
    create.sequenced_assembly(
        Item.of('tacz:ammo', 20 ,'{AmmoId:"create_armorer:slap"}'),
        slap,
        [
            create.deploying(slap,[slap,'create:copper_sheet']),
            create.deploying(slap,[slap,'create:iron_sheet']),
            create.deploying(slap,[slap,'create:iron_sheet']),
            create.deploying(slap,[slap,'minecraft:gunpowder']),
            create.pressing(slap,slap)
        ]
    ).transitionalItem(slap).loops(1);
    //40mm 高爆弹
    const mhe=Item.of('sentrymechanicalarm:unfinished_ammo', '{AmmoId:"create_armorer:40m40mhe"}');
    create.sequenced_assembly(
        Item.of('tacz:ammo', 12 ,'{AmmoId:"create_armorer:40mmhe"}'),
        mhe,
        [
            create.deploying(mhe,[mhe,'minecraft:netherite_scrap']),
            create.deploying(mhe,[mhe,'minecraft:copper_block']),
            create.deploying(mhe,[mhe,'cratedelight:gunpowder_bag']),
            create.deploying(mhe,[mhe,'minecraft:redstone_block']),
            create.pressing(mhe,mhe)
        ]
    ).transitionalItem(mhe).loops(1);
    //凸缘钝头穿甲弹
    const rbapb=Item.of('sentrymechanicalarm:unfinished_ammo', '{AmmoId:"create_armorer:rbapb"}');
    create.sequenced_assembly(
        Item.of('tacz:ammo', 10,'{AmmoId:"create_armorer:rbapb"}'),
        rbapb,
        [
            create.deploying(rbapb,[rbapb,'create:copper_sheet']),
            create.deploying(rbapbe,[rbapb,'create:copper_sheet']),
            create.deploying(rbapb,[rbapb,'minecraft:gunpowder']),
            create.pressing(rbapb,rbapb)
        ]
    ).transitionalItem(rbapb).loops(1);
});