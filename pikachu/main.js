!function(){
    var duration=50;
    function writeCode(prefix,code,fn){
        let container=document.querySelector('#code')
        let styleTag=document.querySelector('#styleTag')
        let n=0;
        let id=setTimeout(function run(){
            n+=1
            container.innerHTML=code.substring(0,n)
            styleTag.innerHTML=code.substring(0,n)
            //console.log(container.scrollHeight)
            //console.log(container.scrollTop)
            container.scrollTop=container.scrollHeight
            //console.log(container.scrollTop)
            if(n<code.length){
                id= setTimeout(run,duration)             
            }else{
                fn && fn.call()
            }
        },duration)    
    }
    css=`
/*首先，准备皮卡丘的皮*/ 
.preview{
    height: 100%;
    width: 100%; 
    display: flex;
}
.main{
    position: relative;
    height: 100%;
    width: 100%; 
    background-color: #fee433;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main .pikachu{
    background:#fee433;
    min-width: 600px;
    min-height:400px;
    
    position: relative;
    z-index: -1;
}
/*然后，我们开始画眼睛*/ 
.pikachu .eye{
    background:#2e2e2e;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    position: absolute;
    top:106px;
    
}
.pikachu .eye::after{
    content:'';
    width: 22px;
    height:22px;
    border-radius: 50%;
    background-color: #ffffff; 
    position: absolute;
    top:5px;
    left:12px;  
}
.pikachu .eye.left{
    left:134px;
}
.pikachu .eye.right{
    left:388px;
}
.pikachu .cheek{
    background:#fc0d1c;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border:2px solid black;
    position: absolute;;
    top:199px;    
}
.pikachu .cheek.left{
    left:86px;
}
.pikachu .cheek.right{
    left:418px;
}
.pikachu .nose{
    width:0;
    height:0;
    border-radius: 50%;
    border-style: solid;
    border-color: #2e2e2e transparent transparent;
    border-width:12px; 
    position: absolute;;
    top:137px;
    left:280px;
}
.pikachu .mustache{
    height: 25px;
    width: 80px;
    border:2px solid black;
    position: absolute;
    border-top: none;
    top:162px;
    left:293px;
    background-color: #fee433;
}
.pikachu .mustache.left{
    border-right: none;
    border-bottom-left-radius: 40px 25px;
    margin-left:-80px;
    transform: rotate(-20deg)
}
.pikachu .mustache.right{
    border-left: none;
    border-bottom-right-radius: 40px 25px;
    margin-left:0px;
    transform: rotate(20deg)
}
.pikachu .lipWrapper{
    width: 120px;
    height: 118px;
    /* border:1px solid red; */
    position: absolute;
    bottom:110px;
    left:290px;
    margin-left:-58px;
    z-index:-1; 
    overflow: hidden;       
}
.pikachu .lipWrapper .lip{
    width:120px;
    height:1000px;
    background: #990513;
    border-radius: 120px/500px;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
.pikachu .lipWrapper .lip::after{
    content:'';
    position: absolute;
    bottom: -25px;
    width: 120px;
    height: 120px;
    background: #fc4a62;
    border-radius: 50%;
}`
    writeCode('',css,()=>{})
    $('.actions').on('click','button',function(e){
        let $button=$(e.currentTarget)
        let speed=$button.attr('data-speed')
        // console.log(speed)
        $button.addClass('active')
        .siblings('.active').removeClass('active')
    switch(speed){
        case 'slow':
            duration=100
            break;
        case 'normal':
            duration=50
            break;
        case 'fast':
            duration=10
            break;
    }
    })
}.call()