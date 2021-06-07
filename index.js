/** 
 * 该方法主要是通过 node 运行一个Cli进行模板生成
 * 
 * */
var inquirer = require('inquirer'); //该库主要是用于命令行
var fs = require('fs'); //文件操作
// 这里定义命令行的全部操作
const promptList = [{
    type: 'list',
    message: '请选择要复制模板类型:',
    name: 'type',
    choices: [
        "test1",
        "test2",
        "test3"
    ],
}, {
    type: 'input',
    message: '请输入创建的路径:',
    name: 'path',


}];
// 对应的文件路径
const templateList = {
    "test1": 'template/test1.vue',
    "test2": 'template/test2.vue',
    "test3": 'template/test3.vue',
};
// 命令号操作
inquirer.prompt(promptList).then((answers) => {
    console.log(templateList[answers.type])
    fs.readFile(templateList[answers.type], function(err, data) {
        if (err) {
            return console.error(err);
        }
        fs.writeFile(answers.path, data, (err, data) => {
            if (err) {
                return console.log(err);
            }
            console.log('模板创建成功！');
        })
    })
})