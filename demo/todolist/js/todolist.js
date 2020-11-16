//作者：梁建 日期：2020-3-2 内容：练习本地存储 项目:前端临时计划1
//bug 子选项和父选项名字相同是会在孙选项加载信息，解决办法利用开头拼接识别符。并禁止输入此类识别符。
$(function(){
   //第一部分！！！！！！！！！
   localStorage.removeItem(undefined);
    load1();
    // getSlide();
    $('#title1').on('keydown',function(event){
        // keyCode驼峰名中间要大写 console.log(event.keyCode);得到ASCII码。
        if(event.keyCode===13){
            //这个是任意数量仅空格不能输入replace(/\s+/g," ")，以后学习正则时候会知道
            //||这个或等于shift+\
            if($(this).val().replace(/\s+/g," ")===" "||$(this).val()===""){
            alert('请输入内容！')
            }else{
                var local = getData1(); //获得本地数据
                local.push({title:$(this).val(), done:false});
                saveData1(local);
                 load1();load();load3();
                 $(this).val("");
            }
           
        }
        
    })
   

    function load1(){
        var data =getData1();
        //并集用逗号表示
        $('.one ol,.one ul').empty();
        var complete1 =0;
        var going1 =0;

        $.each(data,function(i,ele){
            //data[i]=ele,所以用ele更简单
           if(data[i].done){
            $('.one ul ').prepend("<li><input type='checkbox' checked='checked'></input><p>"+ ele.title +"</p><a herf='javascript:;' id="+i+"></a></li>");
           complete1++;}else{
            $('.one ol ').prepend("<li><input type='checkbox'></input><p>"+ ele.title +"</p><a herf='javascript:;' id="+i+"></a></li>");
           
            going1++;}
            
        })
        $('#todocount1').text(going1);
        $('#donecount1').text(complete1);
    }
    function getData1(){
      var data = localStorage.getItem('前端临时计划1');
      //如果不加判断返回一个空数组，那么新建的title因为不是数组而无法使用，报错在第14行。
      if(data!=null) {return JSON.parse(data);}else{
          return [];
      }
    }
    function saveData1(data){
        localStorage.setItem('前端临时计划1',JSON.stringify(data));
    }
    $('.one ol,.one ul').on('mousedown','a',function(){

        $(this).parents('section').find('p').removeClass();
        $(this).siblings('p').addClass('current');
        load();load3();
        
        
        
    })
    $('.one ol,.one ul').on('mousedown','a',function(){
        if($('.two').find('ul').html()==""&$('.two').find('ol').html()==""){


            var data = getData1();
            var index = $(this).attr('id');
            data.splice(index,1);
            saveData1(data);
            load1();
            }else {
                return false;
            }   
    })
    console.log($('.two').find('ul,ol').html()); 
    $('.one ol,.one ul').on('click','input',function(){
        var data =getData1();
        //自定义属性为attr,固有属性为prop,在前头添加为prepend。
        var index = $(this).siblings('a').attr('id');
        //checked勾上为真，否则为false。
        data[index].done=$(this).prop('checked');
        saveData1(data);
        load1();
    })

    //第二部分！！！！！！！！！！！！！
    $('.one ol,.one ul').on('click','p',function(){
        
        $(this).parents('section').find('p').removeClass();
        $(this).addClass('current');
        load();load3();
    })
   load();
    $('#title').on('keydown',function(event){
        // keyCode驼峰名中间要大写 console.log(event.keyCode);得到ASCII码。
        if(event.keyCode===13){
            //这个是任意数量仅空格不能输入replace(/\s+/g," ")，以后学习正则时候会知道
            //||这个或等于shift+\
            if($(this).val().replace(/\s+/g," ")===" "||$(this).val()===""){
            alert('请输入内容！')
            }else{
                var local = getData(); //获得本地数据
                local.push({title:$(this).val(), done:false});
                saveData(local);
                 load();load3()
                 $(this).val("");
            }
           
        }
        
    })

    function load(){
        var data =getData();
        //并集用逗号表示
        $('.two ol,.two ul').empty();
        var complete =0;
        var going =0;

        $.each(data,function(i,ele){
            //data[i]=ele,所以用ele更简单
           if(data[i].done){
            $('.two ul ').prepend("<li><input type='checkbox' checked='checked'></input><p>"+ ele.title +"</p><a herf='javascript:;' id="+i+"></a></li>");
           complete++;}else{
            $('.two ol ').prepend("<li><input type='checkbox'></input><p>"+ ele.title +"</p><a herf='javascript:;' id="+i+"></a></li>");
           
            going++;}
            
        })
        $('#todocount').text(going);
        $('#donecount').text(complete);
    }
    
    
    function getData(){
      var data = localStorage.getItem($('.current').html());
      //如果不加判断返回一个空数组，那么新建的title因为不是数组而无法使用，报错在第14行。
      if(data!=null) {return JSON.parse(data);}else{
          return [];
      }
    }
    function saveData(data){
        localStorage.setItem($('.current').html(),JSON.stringify(data));
    }
    $('.two ol,.two ul').on('mousedown','a',function(){
        $(this).parents('section').find('p').removeClass();
        $(this).siblings('p').addClass('current2');
        load3();
        
       
        
    })
    $('.two ol,.two ul').on('mouseup','a',function(){
        if($('.three').find('ul').html()==""&$('.three').find('ol').html()==""){
            var data = getData();
            var index = $(this).attr('id');
            data.splice(index,1);
            saveData(data);
            load();load3()
        }else {
            return false;
        }
    })
    $('.two ol,.two ul').on('click','input',function(){
        var data =getData();
        //自定义属性为attr,固有属性为prop,在前头添加为prepend。
        var index = $(this).siblings('a').attr('id');
        //checked勾上为真，否则为false。
        data[index].done=$(this).prop('checked');
        saveData(data);
        load();
        
    })


    //第三部分！！！！！！！！！！！！！！！！！！！！！
    $('.two ol,.two ul').on('click','p',function(){
        
        $(this).parents('section').find('p').removeClass();
        $(this).addClass('current2');
        load3();
    })
   load3();
    $('#title3').on('keydown',function(event){
        // keyCode驼峰名中间要大写 console.log(event.keyCode);得到ASCII码。
        if(event.keyCode===13){
            //这个是任意数量仅空格不能输入replace(/\s+/g," ")，以后学习正则时候会知道
            //||这个或等于shift+\
            if($(this).val().replace(/\s+/g," ")===" "||$(this).val()===""){
            alert('请输入内容！')
            }else{
                var local = getData3(); //获得本地数据
                local.push({title:$(this).val(), done:false});
                saveData3(local);
                 load3();
                 $(this).val("");
            }
           
        }
        
    })

    function load3(){
        var data =getData3();
        //并集用逗号表示
        $('.three ol,.three ul').empty();
        var complete3 =0;
        var going3 =0;

        $.each(data,function(i,ele){
            //data[i]=ele,所以用ele更简单
           if(data[i].done){
            $('.three ul ').prepend("<li><input type='checkbox' checked='checked'></input><p>"+ ele.title +"</p><a herf='javascript:;' id="+i+"></a></li>");
           complete3++;}else{
            $('.three ol ').prepend("<li><input type='checkbox'></input><p>"+ ele.title +"</p><a herf='javascript:;' id="+i+"></a></li>");
           
            going3++;}
            
        })
        $('#todocount3').text(going3);
        $('#donecount3').text(complete3);
    }
    
    
    function getData3(){
      var data = localStorage.getItem($('.current2').html());
      //如果不加判断返回一个空数组，那么新建的title因为不是数组而无法使用，报错在第14行。
      if(data!=null) {return JSON.parse(data);}else{
          return [];
      }
    }
    function saveData3(data){
        localStorage.setItem($('.current2').html(),JSON.stringify(data));
    }
    $('.three ol,.three ul').on('click','a',function(){
        var data = getData3();
        var index = $(this).attr('id');
        data.splice(index,1);
        saveData3(data);
        load3();
    })
    $('.three ol,.three ul').on('click','input',function(){
        var data =getData3();
        //自定义属性为attr,固有属性为prop,在前头添加为prepend。
        var index = $(this).siblings('a').attr('id');
        //checked勾上为真，否则为false。
        data[index].done = $(this).prop('checked');
        saveData3(data);
        load3();
        
    })
   // (function clearUF(){
        localStorage.removeItem(undefined);
    //}())
//   function getSlide(){
//       if($('.s2 ol,.s2 ul')){
//           $('.s2').stop().slideup();
//       }
//   }

})







































/*$(function() {
    // alert(11);
    // 1. 按下回车 把完整数据 存储到本地存储里面
    // 存储的数据格式  var 前端临时计划1 = [{title: "xxx", done: false}]
    load();
    $("#title").on("keydown", function(event) {
        if (event.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请输入您要的操作");
            } else {
                // 先读取本地存储原来的数据
                var local = getDate();
                // console.log(local);
                // 把local数组进行更新数据 把最新的数据追加给local数组
                local.push({ title: $(this).val(), done: false });
                // 把这个数组local 存储给本地存储
                saveDate(local);
                // 2. 前端临时计划1 本地存储数据渲染加载到页面
                load();
                $(this).val("");
            }
        }
    });
    // 3. 前端临时计划1 删除操作
    $("ol, ul").on("click", "a", function() {
        // alert(11);
        // 先获取本地存储
        var data = getDate();
        console.log(data);
        // 修改数据
        var index = $(this).attr("id");
        console.log(index);
        data.splice(index, 1);
        // 保存到本地存储
        saveDate(data);
        // 重新渲染页面
        load();
    });
    // 4. 前端临时计划1 正在进行和已完成选项操作
    $("ol, ul").on("click", "input", function() {
        // alert(11);
        // 先获取本地存储的数据
        var data = getDate();
        // 修改数据
        var index = $(this).siblings("a").attr("id");
        console.log(index);
        // data[?].done = ?
        data[index].done = $(this).prop("checked");
        console.log(data);

        // 保存到本地存储
        saveDate(data);
        // 重新渲染页面
        load();
    });
    // 读取本地存储的数据 
    function getDate() {
        var data = localStorage.getItem("前端临时计划1");
        if (data !== null) {
            // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    // 保存本地存储数据
    function saveDate(data) {
        localStorage.setItem("前端临时计划1", JSON.stringify(data));
    }
    // 渲染加载数据
    function load() {
        // 读取本地存储的数据
        var data = getDate();
        console.log(data);
        // 遍历之前先要清空ol里面的元素内容
        $("ol, ul").empty();
        var todoCount = 0; // 正在进行的个数
        var doneCount = 0; // 已经完成的个数
        // 遍历这个数据
        $.each(data, function(i, n) {
            // console.log(n);
            if (n.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                todoCount++;
            }

        });
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);

    }

})*/