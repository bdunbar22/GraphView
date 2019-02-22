const characters = {
    nodes: [
        {
            id: "Grand Empress",
            label: "Grand Empress Dowager",
            color: "coral"
        },
        {
            id: "Emperor",
            label: "Emperor",
            color: "gold"
        },
        {
            id: "Empress Yan",
            label: "Empress Yan",
            color: "coral"
        },
        {
            id: "Noble Consort Yue",
            label: "Noble Consort Yue",
            color: "coral"
        },
        {
            id: "Consort Jing",
            label: "Consort Jing",
            color: "coral"
        },
        {
            id: "Consort Chen",
            label: "Consort Chen",
            color: "coral"
        },
        {
            id: "Lin Shu",
            label: "Lin Shu\n(Su Zhe)\n(Mei Changsu)",
            color: "turquoise"
        },
        {
            id: "Xiao Jingyan",
            label: "Xiao Jingyan\nPrince Jing",
            color: "gold"
        },
        {
            id: "Mu Nihuang",
            label: "Princess Mu Nihuang",
            color: "deepskyblue"
        },
        {
            id: "Xiao Jingxuan",
            label: "Xiao Jingxuan\nCrown Prince",
            color: "gold"
        },
        {
            id: "Xiao Jingyu",
            label: "Xiao Jingyu\nPrince Qi",
            color: "gold"
        },
        {
            id: "Xiao Jinghuan",
            label: "Xiao Jinghuan\nPrince Yu",
            color: "gold"
        },
        {
            id: "Li Yang",
            label: "Li Yang\nGrand Princess",
            color: "coral"
        },
        {
            id: "Jin Yang",
            label: "Jin Yang\nGrand Princess",
            color: "coral"
        },
        {
            id: "Prince Ji",
            label: "Prince Ji",
            color: "gold"
        },
        {
            id: "Xiao Tingsheng",
            label: "Xiao Tingsheng",
            color: "gold"
        },
        {
            id: "Xie Yu",
            label: "Marquis Xie Yu",
            color: "tan" 
        },
        {
            id: "Yan Que",
            label: "Marquis Yan Que",
            color: "tan"
        },
        {
            id: "Xiao Jingrui",
            label: "Xiao Jingrui",
            color: "deepskyblue"
        },
        {
            id: "Yan Yujin",
            label: "Yan Yujin",
            color: "tan"
        },
        {
            id: "Mu Qing",
            label: "Prince Mu Qing",
            color: "deepskyblue"
        },
        {
            id: "Meng Zhi",
            label: "Meng Zhi\nCommander Meng",
            color: "green"
        },
        {
            id: "Xia Dong",
            label: "Xia Dong",
            color: "green"
        },
        {
            id: "Xia Jiang",
            label: "Xia Jiang",
            color: "green"
        },
        {
            id: "Shen Zhui",
            label: "Shen Zhui",
            color: "green"
        },
        {
            id: "Cai Quan",
            label: "Cai Quan",
            color: "green"
        },
        {
            id: "Lin Chen",
            label: "Lin Chen\nLangya Hall Master",
            color: "turquoise"
        },
        {
            id: "Qin Banruo",
            label: "Qin Banruo",
            color: "black"
        },
        {
            id: "Jun Niang",
            label: "Jun Niang",
            color: "black"
        },
        {
            id: "Zhuo Dingfeng",
            label: "Zhuo Dingfeng",
            color: "black"
        },
        {
            id: "Fei Liu",
            label: "Fei Liu",
            color: "turquoise"
        },
        {
            id: "Gong Yu",
            label: "Gong Yu",
            color: "turquoise"
        },
        {
            id: "Sir Shisan",
            label: "Sir Shisan",
            color: "turquoise"
        },
        {
            id: "Wei Zheng",
            label: "Wei Zheng",
            color: "turquoise"
        },
        {
            id: "Li Gang",
            label: "Li Gang",
            color: "turquoise"
        },
        {
            id: "Zhen Ping",
            label: "Zhen Ping",
            color: "turquoise"
        },
        {
            id: "Tong Lu",
            label: "Tong Lu",
            color: "turquoise"
        },
        {
            id: "Baili Qi",
            label: "Baili Qi",
            color: "turquoise"
        },
        {
            id: "Gao Zhan",
            label: "Eunuch Gao Zhan",
            color: "black"
        },
        {
            id: "Xie Bi",
            label: "Xie Bi",
            color: "tan"
        },
        {
            id: "Lin Xie",
            label: "Lin Xie",
            color: "black"
        }
    ],
    edges: [
        { from: "Grand Empress", to: "Emperor", label: "grandmother of" },
        { from: "Grand Empress", to: "Li Yang", label: "grandmother of" },
        { from: "Grand Empress", to: "Jin Yang", label: "grandmother of" },
        { from: "Grand Empress", to: "Prince Ji", label: "grandmother of" },
        { from: "Emperor", to: "Empress Yan", label: "husband of" },
        { from: "Emperor", to: "Noble Consort Yue", label: "husband of" },
        { from: "Emperor", to: "Consort Jing", label: "husband of" },
        { from: "Emperor", to: "Consort Chen", label: "husband of" },
        { from: "Consort Jing", to: "Xiao Jingyan", label: "mother of" },
        { from: "Consort Chen", to: "Xiao Jingyu", label: "mother of" },
        { from: "Xiao Jingyu", to: "Xiao Tingsheng", label: "father of" },
        { from: "Noble Consort Yue", to: "Xiao Jingxuan", label: "mother of" },
        { from: "Empress Yan", to: "Xiao Jinghuan", label: "mother of" },
        { from: "Xiao Jingyan", to: "Lin Shu", label: "friend of", dashes: true, arrows: 'to;from' },
        { from: "Yan Que", to: "Yan Yujin", label: "father of" },
        { from: "Xie Yu", to: "Xiao Jingrui", label: "father of" },
        { from: "Li Yang", to: "Xiao Jingrui", label: "father of" },
        { from: "Empress Yan", to: "Yan Que", label: "sister of" },
    ],
};

module.exports = characters;