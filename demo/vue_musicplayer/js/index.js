var app = new Vue({
    el:"#vapp",
    data:{
        query:'',
        musicList:[],
        url:'',
        cover:'',
        names:'',
        lyrics:'',
     
        },
    methods:{
        seachMusic:function(){
            var that =this;
            axios.get("https://autumnfish.cn/search?keywords="+this.query)
            .then(
                function(response){
                that.musicList = response.data.result.songs;
                // console.log(that.musicList);
                
            })
            .catch(function(err){
                console.log(err);
            });
        },
        playMusic:function(id,song,name){
            this.names =song+'-'+name;
            var that =this;
            axios.get('https://autumnfish.cn/song/url?id='+id)
            .then(function(response){
                // console.log(response);
                that.url =response.data.data[0].url;
                 
               
                
            },function(err){console.log(err);})
            axios.get('https://autumnfish.cn/song/detail?ids='+id)
            .then(function(response){
                // console.log(response);
                that.cover =response.data.songs[0].al.picUrl;
                // console.log(that.cover);
                if(that.cover){document.getElementById("bodys").style.backgroundImage = "url("+that.cover+")";}
            },function(err){console.log(err);
            })
            axios.get("https://autumnfish.cn/lyric?id="+id).then(function(response){
                console.log(response);
             that.lyrics = response.data.lrc.lyric.split("\n");
            
            }).catch(function(error){
                console.log(error);
            });
            
        },
    
    }
        
})
