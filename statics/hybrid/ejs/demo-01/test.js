var data = { 
    'list': [
        { 
            'name': '张三',
            'age': 20
        }, 
        { 
            'name': '李四', 
            'age': 21 
        },
        { 
            'name': '张三',
            'age': 20
        }, 
        { 
            'name': '李四', 
            'age': 21 
        }
    ] 
};
var html = new EJS({ url: 'template.ejs' }).render(data);
document.getElementById('test').innerHTML = html;