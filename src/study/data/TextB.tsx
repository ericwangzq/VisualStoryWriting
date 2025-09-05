import { Entity, Location } from "../../model/Model";

export const textB = `一个雪花纷飞的冬日早晨，杰克跳下床，从窗口向外望去，看到世界被厚厚的闪闪发光的雪覆盖着。完美的滑雪橇雪！

他匆忙穿上雪裤和夹克，然后冲出门外，连妈妈的话"别忘了戴帽子！"都没听完。

但杰克已经到了山坡上。他深吸一口气，开始攀登，拖着雪橇跟在后面。他爬得越来越高，直到终于到达山顶。当他向下看时，这座山对8岁的杰克来说感觉如此巨大，就像一座山峰。

等不了一秒钟，他战略性地放置雪橇，然后坐了上去。呼！

他滑下山坡的速度如此之快，帽子直接从头上飞了下来。
他飞速经过所有正在爬山的孩子们。
他飞速经过在山底等待的父母们。但他没有放慢速度。
他越来越快，撞进了干草堆。
他从雪橇上飞了出去，飞向空中。他在天空中翱翔，飞过一群嘈杂的鹅。`

export const dataTextB : {locations: Location[], entities: Entity[], actions: any[]} = {
    locations: [
        {
            "name": "杰克的家",
            "emoji": "🏠"
        },
        {
            "name": "山坡",
            "emoji": "⛰️"
        },
        {
            "name": "山底",
            "emoji": "🏞️"
        },
        {
            "name": "The Hay Bales",
            "emoji": "🌾"
        },
        {
            "name": "The Sky",
            "emoji": "☁️"
        }
    ],
    entities: [
        {
            "name": "杰克",
            "emoji": "👦",
            "properties": [
                {
                    "name": "兴奋",
                    "value": 9
                },
                {
                    "name": "冒险",
                    "value": 8
                },
                {
                    "name": "精力充沛",
                    "value": 10
                }
            ]
        },
        {
            "name": "雪",
            "emoji": "❄️",
            "properties": [
                {
                    "name": "闪闪发光",
                    "value": 8
                },
                {
                    "name": "厚厚的",
                    "value": 7
                },
                {
                    "name": "寒冷",
                    "value": 9
                }
            ]
        },
        {
            "name": "雪橇",
            "emoji": "🛷",
            "properties": [
                {
                    "name": "快速",
                    "value": 9
                },
                {
                    "name": "光滑",
                    "value": 8
                },
                {
                    "name": "轻便",
                    "value": 7
                }
            ]
        },
        {
            "name": "山坡",
            "emoji": "⛰️",
            "properties": [
                {
                    "name": "陡峭",
                    "value": 8
                },
                {
                    "name": "巨大",
                    "value": 7
                },
                {
                    "name": "白雪皑皑",
                    "value": 9
                }
            ]
        },
        {
            "name": "帽子",
            "emoji": "🎩",
            "properties": [
                {
                    "name": "温暖",
                    "value": 7
                },
                {
                    "name": "多彩",
                    "value": 6
                },
                {
                    "name": "轻盈",
                    "value": 5
                }
            ]
        },
        {
            "name": "干草堆",
            "emoji": "🌾",
            "properties": [
                {
                    "name": "柔软",
                    "value": 6
                },
                {
                    "name": "保护",
                    "value": 8
                },
                {
                    "name": "堆叠",
                    "value": 7
                }
            ]
        },
        {
            "name": "鹅群",
            "emoji": "🦢",
            "properties": [
                {
                    "name": "嘈杂",
                    "value": 8
                },
                {
                    "name": "飞翔",
                    "value": 9
                },
                {
                    "name": "群体",
                    "value": 7
                }
            ]
        },
        {
            name: "父母",
            emoji: "👨‍👩‍👦",
            properties: [
                {
                    name: "等待",
                    value: 7
                },
                {
                    name: "观看",
                    value: 8
                },
                {
                    name: "微笑",
                    value: 9
                }
            ]
        },
        {
            name: "孩子们",
            emoji: "🧒",
            properties: [
                {
                    name: "攀爬",
                    value: 8
                },
            ]
        }
    ],
    actions: [
        {
            "name": "jumped up",
            "source": "Jack",
            "target": "Jack",
            "location": "Jack's House",
            "passage": "One snowy winter morning, Jack jumped up and looked out his window to see the world covered in thick sparkling snow."
        },
        {
            "name": "looked out",
            "source": "Jack",
            "target": "Jack",
            "location": "Jack's House",
            "passage": "One snowy winter morning, Jack jumped up and looked out his window to see the world covered in thick sparkling snow."
        },
        {
            "name": "threw on",
            "source": "Jack",
            "target": "Jack",
            "location": "Jack's House",
            "passage": "He threw on his snow pants and jacket, then dashed outside before his mom could even finish saying, \"don’t forget your hat!"
        },
        {
            "name": "dashed outside",
            "source": "Jack",
            "target": "Jack",
            "location": "Jack's House",
            "passage": "He threw on his snow pants and jacket, then dashed outside before his mom could even finish saying, \"don’t forget your hat!"
        },
        {
            "name": "breathe in",
            "source": "Jack",
            "target": "Jack",
            "location": "The Hill",
            "passage": "He took a deep breath in and began his climb, dragging his sled behind him."
        },
        {
            "name": "climb",
            "source": "Jack",
            "target": "hill",
            "location": "The Hill",
            "passage": "He took a deep breath in and began his climb, dragging his sled behind him."
        },
        {
            "name": "drag",
            "source": "Jack",
            "target": "sled",
            "location": "The Hill",
            "passage": "He took a deep breath in and began his climb, dragging his sled behind him."
        },
        {
            "name": "climbed higher",
            "source": "Jack",
            "target": "hill",
            "location": "The Hill",
            "passage": "He climbed higher and higher until he finally reached the top."
        },
        {
            "name": "reached top",
            "source": "Jack",
            "target": "hill",
            "location": "The Hill",
            "passage": "He climbed higher and higher until he finally reached the top."
        },
        {
            "name": "looked down",
            "source": "Jack",
            "target": "hill",
            "location": "The Hill",
            "passage": "As he looked down, the hill felt so large to the 8-year-old Jack that it seemed like a mountain."
        },
        {
            "name": "positioned sled",
            "source": "Jack",
            "target": "sled",
            "location": "The Hill",
            "passage": "Without waiting another second, he positioned his sled strategically and loaded himself on. WOOSH!"
        },
        {
            "name": "loaded himself",
            "source": "Jack",
            "target": "Jack",
            "location": "The Hill",
            "passage": "Without waiting another second, he positioned his sled strategically and loaded himself on. WOOSH!"
        },
        {
            "name": "zoomed down",
            "source": "Jack",
            "target": "hill",
            "location": "The Hill",
            "passage": "He zoomed down the hill so fast that his hat flew right off his head."
        },
        {
            "name": "flew off",
            "source": "hat",
            "target": "hat",
            "location": "The Hill",
            "passage": "He zoomed down the hill so fast that his hat flew right off his head."
        },
        {
            "name": "zoomed past",
            "source": "Jack",
            "target": "children",
            "location": "The Hill",
            "passage": "He zoomed past all the children climbing the hill."
        },
        {
            "name": "zoomed past",
            "source": "Jack",
            "target": "parents",
            "location": "The Bottom of the Hill",
            "passage": "He zoomed past the parents waiting at the bottom of the hill."
        },
        {
            "name": "zoomed",
            "source": "Jack",
            "target": "hill",
            "location": "The Hill",
            "passage": "He zoomed faster and faster, and crashed into the hay bales."
        },
        {
            "name": "crashed",
            "source": "Jack",
            "target": "hay bales",
            "location": "The Hay Bales",
            "passage": "He zoomed faster and faster, and crashed into the hay bales."
        },
        {
            "name": "flew off",
            "source": "Jack",
            "target": "Jack",
            "location": "The Hay Bales",
            "passage": "He flew off his sled and into the air."
        },
        {
            "name": "into the air",
            "source": "Jack",
            "target": "Jack",
            "location": "The Sky",
            "passage": "He flew off his sled and into the air."
        },
        {
            "name": "soared",
            "source": "Jack",
            "target": "Jack",
            "location": "The Sky",
            "passage": "He soared through the sky, flying past a flock of noisy geese."
        },
        {
            "name": "flying past",
            "source": "Jack",
            "target": "geese",
            "location": "The Sky",
            "passage": "He soared through the sky, flying past a flock of noisy geese."
        }
    ]
};