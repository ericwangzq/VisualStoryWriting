import { Entity, Location } from "../../model/Model";

export const textD = `安娜坐在海滩上，看着海浪拍打海岸。风吹着她的头发，但她并不在意。她喜欢大海的声音。这帮助她忘记烦恼，至少暂时如此。她一直在想她的哥哥大卫，他住在很远的地方。他们已经几周没有交谈了，她很想念他。

大卫在城市里，坐在办公桌前，盯着电脑。经过一天漫长的工作，他很累。他的工作很有压力，在这个嘈杂的大城市里，他经常感到孤独。他想给安娜打电话，但他担心她可能太忙了。他知道她正在经历艰难的时期，他不想增加她的烦恼。

与此同时，他们的朋友艾玛在山里，沿着小径徒步旅行。她喜欢大自然的宁静。树木高大，空气清新。当她到达山顶时，她想起了安娜和大卫。他们过去总是一起做所有事情，但现在他们都在不同的地方。她希望他们能很快重聚，哪怕只是一小会儿。`

export const dataTextD : {locations: Location[], entities: Entity[], actions: any[]} = {
    locations: [
        {
          "name": "海滩",
          "emoji": "🏖️"
        },
        {
          "name": "城市",
          "emoji": "🏙️"
        },
        {
          "name": "山脉",
          "emoji": "🏞️"
        }
      ],
    entities: [
        {
          "name": "安娜",
          "emoji": "👩",
          "properties": [
            {
              "name": "深思",
              "value": 8
            },
            {
              "name": "平静",
              "value": 7
            },
            {
              "name": "怀念",
              "value": 6
            }
          ]
        },
        {
          "name": "大卫",
          "emoji": "👨‍💼",
          "properties": [
            {
              "name": "疲惫",
              "value": 9
            },
            {
              "name": "孤独",
              "value": 7
            },
            {
              "name": "体贴",
              "value": 6
            }
          ]
        },
        {
          "name": "艾玛",
          "emoji": "🚶‍♀️",
          "properties": [
            {
              "name": "冒险",
              "value": 8
            },
            {
              "name": "平和",
              "value": 7
            },
            {
              "name": "希望",
              "value": 6
            }
          ]
        },
        {
          "name": "电脑",
          "emoji": "💻",
          "properties": [
            {
              "name": "分心",
              "value": 8
            },
            {
              "name": "压力",
              "value": 7
            },
            {
              "name": "孤立",
              "value": 6
            }
          ]
        },
        {
          "name": "海浪",
          "emoji": "🌊",
          "properties": [
            {
              "name": "平静",
              "value": 8
            },
            {
              "name": "舒缓",
              "value": 7
            },
            {
              "name": "清爽",
              "value": 6
            }
          ]
        },
        {
          "name": "风",
          "emoji": "💨",
          "properties": [
            {
              "name": "清爽",
              "value": 8
            },
            {
              "name": "顽皮",
              "value": 7
            },
            {
              "name": "振奋",
              "value": 6
            }
          ]
        }
      ],
    actions: [
        {
          "name": "坐着",
          "source": "Anna",
          "target": "Anna",
          "location": "Beach",
          "passage": "Anna sat on the beach, watching the waves crash against the shore."
        },
        {
          "name": "观看",
          "source": "Anna",
          "target": "Waves",
          "location": "Beach",
          "passage": "Anna sat on the beach, watching the waves crash against the shore."
        },
        {
          "name": "吹头发",
          "source": "Wind",
          "target": "Anna",
          "location": "Beach",
          "passage": "The wind blew her hair around, but she didn’t mind."
        },
        {
          "name": "坐着",
          "source": "David",
          "target": "David",
          "location": "City",
          "passage": "David was in the city, sitting at his desk, staring at his computer."
        },
        {
          "name": "凝视",
          "source": "David",
          "target": "Computer",
          "location": "City",
          "passage": "David was in the city, sitting at his desk, staring at his computer."
        },
        {
          "name": "想要打电话",
          "source": "David",
          "target": "Anna",
          "location": "City",
          "passage": "He wanted to call Anna, but he was afraid she might be too busy."
        },
        {
          "name": "徒步上山",
          "source": "Emma",
          "target": "Emma",
          "location": "Mountains",
          "passage": "Meanwhile, their friend Emma was in the mountains, hiking up a trail."
        },
        {
          "name": "到达山顶",
          "source": "Emma",
          "target": "Emma",
          "location": "Mountains",
          "passage": "As she reached the top of the hill, she thought about Anna and David."
        },
        {
          "name": "想起",
          "source": "Emma",
          "target": "Anna",
          "location": "Mountains",
          "passage": "As she reached the top of the hill, she thought about Anna and David."
        },
        {
          "name": "想起",
          "source": "Emma",
          "target": "David",
          "location": "Mountains",
          "passage": "As she reached the top of the hill, she thought about Anna and David."
        }
      ]
};