// priority: 0

// Visit the wiki for more info - https://kubejs.com/
//本文件放在server_scripts文件夹里
console.info('Hello, World! (Loaded server scripts)')

const OEI_Replacements=
[
    {
        //菜板
        "matchItems":
            [
                "kaleidoscope_cookery:chopping_board"
            ],
        "resultItems": "farmersdelight:cutting_board"
    }
]

//注意，OEI使用json文件，不再使用kubejs
//此处仅为方便调试使用
// ServerEvents.highPriorityData(event => {
//     event.addJson("oei:replacements/raw_materials.json", OEI_Replacements);
// });

// ServerEvents.tags('item', event => {
//     event.add('#forge:raw_fishes/tropical_fish','farmersdelight:salmon_slice');
//     event.add('#forge:raw_fishes/tropical_fish','farmersdelight:cod_slice');
// });

ServerEvents.recipes(event =>{
    const create=event.recipes.create;   //机械动力
    const farmersdelight=event.recipes.farmersdelight;  //农夫乐事

    //移除不必要的配方
    event.remove([
        {id:"refurbished_furniture:dough"}, //面团
        {id:"farmersdelight:bread_from_smoking"},   //面包
        {id:"kaleidoscope_cookery:tomato_seeds_from_tomato"},   //番茄-番茄种子,配方重复
        {id:"minecraft:flour_from_3_wheat"},
        {id:"farmersdelight:cutting/beef"},
        {id:"kaleidoscope_cookery:chopping_board/raw_cow_offal"},
        {id:"farmersdelight:wheat_dough_from_water"},
        {id:"kaleidoscope_cookery:chopping_board/cooked_cow_offal"},
        {id:"kaleidoscope_cookery:chopping_board/raw_pork_belly"},
        {id:"kaleidoscope_cookery:chopping_board/bone_from_cod"},
        {id:"kaleidoscope_cookery:chopping_board/bone_from_salmon"},
        {id:"farmersdelight:cooked_mutton_chops"},
        {id:"kaleidoscope_cookery:chopping_board/cooked_lamb_chops"},
        {id:"farmersdelight:cooked_mutton_chops_from_campfire_cooking"},
        {id:"farmersdelight:cooked_mutton_chops_from_smoking"},
        {id:"kaleidoscope_cookery:chopping_board/raw_lamb_chops"},
        {id:"kaleidoscope_cookery:chopping_board/raw_lamb_chops"},
        {id:"kaleidoscope_cookery:chopping_board/raw_cut_small_meats_from_chicken"},
        {id:"kaleidoscope_cookery:chopping_board/cooked_cut_small_meats_from_chicken"},
        {id:"kaleidoscope_cookery:chopping_board/raw_cut_small_meats_from_rabbit"},
        {id:"kaleidoscope_cookery:chopping_board/cooked_cut_small_meats_from_rabbit"},
        {id:"farmersdelight:cutting/porkchop"},
        {id:"kaleidoscope_cookery:chopping_board/cooked_pork_belly"},
        {id:"kaleidoscope_cookery:chopping_board/sashimi_from_tropical_fish"},
        {id:"kaleidoscope_cookery:chopping_board/sashimi_from_cod"},
        {id:"kaleidoscope_cookery:chopping_board/sashimi_from_salmon"}
    ]);

    //移除原版牛杂配方,刀切牛肉同时获得森罗物语.牛杂和农夫乐事.牛肉饼
    farmersdelight.cutting(
        'minecraft:beef',
        ['#aetherdelight:knives'],//虽然但是这个tag居然包含了Mr家具的刀
        ['kaleidoscope_cookery:raw_cow_offal','farmersdelight:minced_beef']
    );
    //熟牛肉->熟牛杂*2
    farmersdelight.cutting(
        'minecraft:cooked_beef',
        ['#aetherdelight:knives'],
        Item.of('kaleidoscope_cookery:cooked_cow_offal',2)
    );
    //修改配方，使刀切猪肉时有30%概率获得森罗物语.油脂,同时获得五花肉和培根
    farmersdelight.cutting(
        'minecraft:porkchop',
        ['#aetherdelight:knives'],//虽然但是这个tag居然包含了Mr家具的刀
        ['farmersdelight:bacon','kaleidoscope_cookery:raw_pork_belly',Item.of('kaleidoscope_cookery:oil').withChance(0.3)]
    );
    //熟猪肉->熟五花肉,注意没有熟培根
    farmersdelight.cutting(
        'minecraft:cooked_porkchop',
        ['#aetherdelight:knives'],
        Item.of('kaleidoscope_cookery:cooked_pork_belly',2)
    );
    //热带鱼->刺身+骨粉
    farmersdelight.cutting(
        'minecraft:tropical_fish',
        ['#aetherdelight:knives'],
        [Item.of('kaleidoscope_cookery:sashimi',2),'minecraft:bone_meal']
    )

    //移植Mr配方 羽毛->线
    farmersdelight.cutting(
        'minecraft:feather',
        '#aetherdelight:knives',
        'minecraft:string'
    );
    //移植Mr配方 面包->面包片
    farmersdelight.cutting(
        'minecraft:bread',
        '#aetherdelight:knives',
        'refurbished_furniture:bread_slice'
    );

    //移植森罗物语配方 兔肉->切制小肉x2
    farmersdelight.cutting(
        'minecraft:rabbit',
        ['#aetherdelight:knives'],
        Item.of('kaleidoscope_cookery:raw_cut_small_meats',2)
    );
    farmersdelight.cutting(
        'minecraft:cooked_rabbit',
        ['#aetherdelight:knives'],
        Item.of('kaleidoscope_cookery:cooked_cut_small_meats',2)
    );
    // (切石机)青色染色玻璃板->眼睛.科技眼镜
    event.stonecutting('glasses:glasses_9','minecraft:cyan_stained_glass_pane');

    //(工作台)纸+铁板+3x铁棒->永无止境音乐会.谱架
    event.shaped(Item.of('ywzj_midi:music_stand_block',1),
    [
        ' p ',
        ' i ',
        'mmm'
    ],
    {
        p:'minecraft:paper',
        i:'create:iron_sheet',
        m:'createaddition:iron_rod'
    });
    //(工作台)8x青铜板+线->永无止境音乐会.镲
    event.shaped(
        Item.of('ywzj_midi:cymbal',1),
        [
            'bbb',
            'bsb',
            'bbb'
        ],
        {
            b:'alloyed:bronze_sheet',
            s:'minecraft:string'
        }
    )

    //(洗涤)皮革->毛发
    create.splashing(['ultramarine:fur',Item.of('ultramarine:fur').withChance(0.5)],'minecraft:leather');

    //(洗涤)森罗物语.油脂->群青.油脂
    create.splashing('ultramarine:grease','kaleidoscope_cookery:oil');

    //修改配方 白色蜡烛=蜡烛+白色染料,蜡烛=线+群青.油脂
    event.remove({id:"minecraft:white_candle"});
    event.shaped(
        'minecraft:candle',
        [
            ' s ',
            ' g ',
            '   '
        ],
        {
            g:'ultramarine:grease',
            s:'minecraft:string'
        }
    );
    event.shapeless('minecraft:white_candle',['minecraft:candle','minecraft:white_dye'])

    //(加热动力搅拌器)铁锭+水->群青.粗赤铁
    create.mixing('ultramarine:raw_hematite',[Fluid.of('minecraft:water',100),'minecraft:iron_ingot']).heated();
    //(加热动力搅拌器)炭+群青.粗赤铁->粗铁
    create.mixing(Item.of('minecraft:raw_iron',3),['#minecraft:coals',Item.of('ultramarine:raw_hematite',3)]).heated();
    
    //(熔炉)[深层]菱美矿->白松石
    event.smelting('ultramarine:magnesite','ultramarine:magnesite_ore').xp(0.2)
    event.smelting('ultramarine:magnesite','ultramarine:deepslate_magnesite_ore').xp(0.2)
    //(熔炉)下界钴矿石->粗钴
    event.smelting('ultramarine:raw_cobalt','ultramarine:nether_cobalt_ore').xp(2)
    //(熔炉)[深层]玉矿->玉
    event.smelting('ultramarine:jade','ultramarine:jade_ore').xp(1)
    event.smelting('ultramarine:jade','ultramarine:deepslate_jade_ore').xp(1)
    //(熔炉)[深层]赤铁矿->粗赤铁
    event.smelting('ultramarine:raw_hematite','ultramarine:hematite_ore').xp(0.7)
    event.smelting('ultramarine:raw_hematite','ultramarine:deepslate_hematite_ore').xp(0.7)
    //(熔炉)机械动力.纸浆->群青.宣纸
    event.smelting('ultramarine:xuan_paper','create:pulp')
    
    {//永无止境音乐会
        //(动力合成)木板+木棍+群青.毛发->音乐会.小提琴弓
        create.mechanical_crafting('ywzj_midi:violin_bow_item',[
            '    p',
            '   s ',
            '  s  ',
            ' s   ',
            'pf   '
        ],{
            p:'#minecraft:planks',
            s:'minecraft:stick',
            f:'ultramarine:fur'
        });
        //(动力合成)木板+木棍+群青.毛发->音乐会.中提琴弓
        create.mechanical_crafting('ywzj_midi:viola_bow_item',[
            '    p',
            '   s ',
            '  s  ',
            ' sf  ',
            'pf   '
        ],{
            p:'#minecraft:planks',
            s:'minecraft:stick',
            f:'ultramarine:fur'
        });
        //(动力合成)木板+木棍+群青.毛发->音乐会.大提琴弓
        create.mechanical_crafting('ywzj_midi:cello_bow_item',[
            '    p',
            '   s ',
            '  sf ',
            ' sf  ',
            'pf   '
        ],{
            p:'#minecraft:planks',
            s:'minecraft:stick',
            f:'ultramarine:fur'
        });
        //(动力合成)木板+木棍+群青.毛发->音乐会.低音提琴弓
        create.mechanical_crafting('ywzj_midi:double_bass_bow_item',[
            '    p',
            '   sf',
            '  sf ',
            ' sf  ',
            'pf   '
        ],{
            p:'#minecraft:planks',
            s:'minecraft:stick',
            f:'ultramarine:fur'
        });
        //(动力合成)去皮云杉原木+铁线->音乐会.小提琴
        create.mechanical_crafting('ywzj_midi:violin',[
            '    p',
            '  pp ',
            'ppppi',
            'sppi ',
            ' sp  '
        ],{
            s:'minecraft:stripped_spruce_log',
            i:'createaddition:iron_wire',
            p:'minecraft:spruce_planks'
        });
        //(动力合成)去皮云杉原木+铁线->音乐会.中提琴
        create.mechanical_crafting('ywzj_midi:viola',[
            '    p',
            '  pp ',
            'spppi',
            'sppi ',
            ' ss  '
        ],{
            s:'minecraft:stripped_spruce_log',  //去皮云杉原木
            i:'createaddition:iron_wire',
            p:'minecraft:spruce_planks'
        });
        //(动力合成)去皮云杉原木+铁线->音乐会.大提琴
        create.mechanical_crafting('ywzj_midi:cello',[
            '    p',
            '  pp ',
            'ssppi',
            'spsi ',
            ' ss  '
        ],{
            s:'minecraft:stripped_spruce_log',  //去皮云杉原木
            i:'createaddition:iron_wire',
            p:'minecraft:spruce_planks'
        });
        //(动力合成)去皮云杉原木+云杉木板+铁线->音乐会.低音提琴
        create.mechanical_crafting('ywzj_midi:double_bass',[
            '    p',
            '  sp ',
            'sspsi',
            'spsi ',
            ' ss  '
        ],{
            s:'minecraft:stripped_spruce_log',  //去皮云杉原木
            i:'createaddition:iron_wire',
            p:'minecraft:spruce_planks'
        });
    }
});
