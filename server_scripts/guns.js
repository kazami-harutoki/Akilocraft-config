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