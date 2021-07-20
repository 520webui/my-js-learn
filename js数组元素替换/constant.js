const kv = new Map();
kv.set("珠海广珠场", "珠海");
kv.set("湛江西一场", "湛江西");
kv.set("江门深茂场", "江门");
kv.set("长沙南武广场", "长沙南");
kv.set("邵阳怀邵衡场", "邵阳");
kv.set("邵阳娄邵场", "邵阳");
kv.set("铜仁铜玉场", "铜仁");
kv.set("怀化南怀邵衡场", "怀化南");
kv.set("佛山西城际场", "佛山西");

const constant = {
    address: (source) => kv.get(source) ? kv.get(source) : source
}

export default constant;