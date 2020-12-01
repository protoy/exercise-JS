//需要获得点击节点的过程项个数（深度）  lastCheckedNode  {children:[{}],depth}
//与所选导入节点的过程项个数 对比
var lastCheckedNode = {
    depth: 1,
    structureType: '01',
    id: 1,
    children: [
        {
            depth: 2,
            structureType: '01',
            id: 2,
            children: [
                {
                    depth: 3,
                    structureType: '02',//过程步骤时时结束计数
                    id: 3,
                    children:[undefined],
                }
        ],
        }
    ],
}
var depthCount = 0
var arr = []
function traversal(Node) {
    if(Node.children && Node.structureType === '01'){ //子节点存在且为过程项 开始循环，否则直接输出depth
        for(item in Node.children) {    //遍历lastcheckedNode的子节点
            traversal(Node.children[item])
        }
    }else{
        arr.push(Node.depth)
    }
}

arr = arr.sort
depthCount = arr[arr.length-1]