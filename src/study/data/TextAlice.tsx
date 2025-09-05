import { Entity, Location } from "../../model/Model";


export const textAlice = `爱丽丝开始对坐在河岸上姐姐身边感到非常厌倦，无事可做：她曾经一两次偷看姐姐正在读的书，但书里没有图片或对话，"一本书有什么用呢，"爱丽丝想，"如果没有图片或对话？"

所以她在心里考虑着（尽她所能，因为炎热的天气让她感到非常困倦和愚钝），制作雏菊花环的乐趣是否值得起身去采摘雏菊的麻烦，突然一只粉红眼睛的白兔跑过她身边。

这本身并没有什么_特别_了不起的；爱丽丝也不认为听到兔子对自己说"哦，天哪！哦，天哪！我要迟到了！"有什么_特别_不寻常的（当她后来想起这件事时，她意识到她应该对此感到奇怪，但当时这一切似乎都很自然）；但是当兔子真的_从马甲口袋里掏出一块手表_，看了看，然后匆忙离开时，爱丽丝跳了起来，因为她突然想到，她以前从未见过兔子有马甲口袋或手表可以掏出来，出于强烈的好奇心，她跑过田野追赶它，幸运的是，她正好及时看到它跳进了树篱下一个大兔子洞。
\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`;


export const dataTextAlice : {locations: Location[], entities: Entity[], actions: any[]} = {
    entities: [
        {
            "name": "爱丽丝",
            "emoji": "👧",
            "properties": [
                {
                    "name": "好奇",
                    "value": 8
                },
                {
                    "name": "困倦",
                    "value": 6
                },
                {
                    "name": "无聊",
                    "value": 7
                }
            ]
        },
        {
            "name": "姐姐",
            "emoji": "👩",
            "properties": [
                {
                    "name": "阅读",
                    "value": 7
                }
            ]
        },
        {
            "name": "书",
            "emoji": "📖",
            "properties": [
                {
                    "name": "无图片",
                    "value": 10
                },
                {
                    "name": "无对话",
                    "value": 10
                }
            ]
        },
        {
            "name": "雏菊花环",
            "emoji": "🌼",
            "properties": [
                {
                    "name": "愉悦",
                    "value": 5
                }
            ]
        },
        {
            "name": "白兔",
            "emoji": "🐇",
            "properties": [
                {
                    "name": "焦虑",
                    "value": 9
                },
                {
                    "name": "非凡",
                    "value": 7
                }
            ]
        },
        {
            "name": "手表",
            "emoji": "⌚",
            "properties": [
                {
                    "name": "不寻常",
                    "value": 8
                }
            ]
        },
        {
            "name": "兔子洞",
            "emoji": "🕳️",
            "properties": [
                {
                    "name": "巨大",
                    "value": 7
                }
            ]
        }
    ],
    locations: [
        {
            "name": "河岸",
            "emoji": "🏞️"
        },
        {
            "name": "田野",
            "emoji": "🌾"
        },
        {
            "name": "树篱",
            "emoji": "🌳"
        }
    ],
    actions: [
        {
            "name": "sit by",
            "source": "Alice",
            "target": "Sister",
            "location": "bank",
            "passage": "Alice was beginning to get very tired of sitting by her sister on the bank."
        },
        {
            "name": "peep into",
            "source": "Alice",
            "target": "Book",
            "location": "bank",
            "passage": "once or twice she had peeped into the book her sister was reading."
        },
        {
            "name": "consider making",
            "source": "Alice",
            "target": "Daisy-chain",
            "location": "bank",
            "passage": "she was considering in her own mind... whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies."
        },
        {
            "name": "run by",
            "source": "White Rabbit",
            "target": "Alice",
            "location": "bank",
            "passage": "when suddenly a White Rabbit with pink eyes ran close by her."
        },
        {
            "name": "say to",
            "source": "White Rabbit",
            "target": "itself",
            "location": "unknown",
            "passage": "nor did Alice think it so very much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh dear! I shall be late!'."
        },
        {
            "name": "take out",
            "source": "White Rabbit",
            "target": "Watch",
            "location": "unknown",
            "passage": "but when the Rabbit actually took a watch out of its waistcoat-pocket."
        },
        {
            "name": "look at",
            "source": "White Rabbit",
            "target": "Watch",
            "location": "unknown",
            "passage": "and looked at it."
        },
        {
            "name": "hurry on",
            "source": "White Rabbit",
            "target": "unknown",
            "location": "unknown",
            "passage": "and then hurried on."
        },
        {
            "name": "run after",
            "source": "Alice",
            "target": "White Rabbit",
            "location": "field",
            "passage": "burning with curiosity, she ran across the field after it."
        },
        {
            "name": "pop down",
            "source": "White Rabbit",
            "target": "Rabbit-hole",
            "location": "hedge",
            "passage": "and fortunately was just in time to see it pop down a large rabbit-hole under the hedge."
        }
    ]
};