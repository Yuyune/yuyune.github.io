(function(){"use strict";var t={9606:function(t,s,i){var n=i(6369),a=i(6265),e=i.n(a);let o={};const l=e().create(o);l.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,s){t.axios=l,window.axios=l,Object.defineProperties(t.prototype,{axios:{get(){return l}},$axios:{get(){return l}}})},n.ZP.use(Plugin);Plugin;var r=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[t.$route.meta.showNav?s("div",{staticClass:"main"},[s("nav",{directives:[{name:"show",rawName:"v-show",value:t.serch,expression:"serch"}]},[s("div",{staticClass:"tabmain"},[s("router-link",{attrs:{to:"/"}},[s("div",{staticClass:"tabtext"},[s("span",[t._v("发现")])])]),s("router-link",{attrs:{to:"/radio"}},[s("div",{staticClass:"tabtext"},[s("span",[t._v("音乐电台")])])])],1),s("router-link",{attrs:{to:"/search"}},[s("div",{staticClass:"tabtext",on:{click:function(s){t.serch=!1}}},[s("span",{staticClass:"iconfont serch"},[t._v("")])])])],1)]):t._e(),s("router-view",{style:{marginBottom:t.song?"60rem":"0"},attrs:{songId:t.song?.id,playing:t.playing},on:{"music-play":function(s){t.song=s},"music-play-list":function(s){t.songlist=s},"srech-back":function(s){t.serch=!0,t.back()}}}),s("audio",{ref:"audio",attrs:{src:t.songSrc,autoplay:""},on:{play:function(s){t.playing=!0},pause:function(s){t.playing=!1},durationchange:function(s){t.duration=s.target.duration},timeupdate:function(s){t.currentTime=s.target.currentTime}}}),t.song?s("div",{staticClass:"musicplay",on:{click:function(s){t.showPlayList=!1}}},[s("MusicPlay",{attrs:{song:t.song,playing:t.playing,duration:t.duration,currentTime:t.currentTime},on:{"music-pause":function(s){return t.$refs.audio.pause()},"music-play":function(s){return t.$refs.audio.play()},"toggle-showPlayList":function(s){t.showPlayList=!t.showPlayList}},nativeOn:{click:function(s){t.showPlayPage=!0}}})],1):t._e(),t.song&&t.showPlayPage?s("div",{staticClass:"showPlayPage"},[s("PlayDetails",{attrs:{song:t.song,playing:t.playing,duration:t.duration,currentTime:t.currentTime,model:t.model,audio:t.$refs.audio},on:{"music-pause":function(s){return t.$refs.audio.pause()},"music-play":function(s){return t.$refs.audio.play()},"update-time":function(s){t.$refs.audio.currentTime=s},"toggle-showPlayList":function(s){t.showPlayList=!t.showPlayList},"change-model":t.changeModel,"change-song":t.changeSong}})],1):t._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showPlayList,expression:"showPlayList"}],staticClass:"showplaylist"},[s("PlayList",{attrs:{songlist:t.songlist,songId:t.song?.id,playing:t.playing},on:{"music-play":function(s){t.song=s},"toggle-showPlayList":function(s){t.showPlayList=!t.showPlayList}}})],1)],1)},c=[],u=function(){var t=this,s=t._self._c;return s("div",{staticClass:"songplay"},[s("div",{staticClass:"song-text"},[s("div",{staticClass:"songimg"},[t.song?.picUrl?s("img",{class:{playing:t.playing},attrs:{src:t.song?.picUrl,alt:""}}):s("img",{class:{playing:t.playing},attrs:{src:t.song?.al?.picUrl,alt:""}})]),s("h3",[t._v(" "+t._s(t.song?.name)+" . "),t.song?.song?s("span",[t._v(t._s(t.song?.song?.album?.artists["0"]?.name))]):s("span",[t._v(t._s(t.song?.ar["0"]?.name))])])]),s("div",{staticClass:"music-colr"},[s("div",{staticClass:"musi-play"},[s("div",{staticClass:"songplay"},[t.playing?s("span",{staticClass:"iconfont pasue",attrs:{title:"暂停"},on:{click:function(s){return s.stopPropagation(),t.$emit("music-pause")}}},[t._v("")]):s("span",{staticClass:"iconfont play",attrs:{title:"播放"},on:{click:function(s){return s.stopPropagation(),t.$emit("music-play")}}},[t._v("")]),s("canvas",{ref:"canvas",attrs:{id:"canvas",width:"60",height:"60"}})])]),s("div",{staticClass:"musilist"},[s("div",{staticClass:"list"},[s("span",{staticClass:"iconfont musilist",on:{click:function(s){return s.stopPropagation(),t.$emit("toggle-showPlayList")}}},[t._v("")])])])])])},g=[],m={props:{song:Object,playing:Boolean,duration:Number,currentTime:Number},computed:{},methods:{upadebar(t){var s=this.$refs.canvas,i=s.getContext("2d");i.clearRect(0,0,60,60),i.lineCap="round",i.strokeStyle="#2ba0fb",i.lineWidth=2,i.beginPath(),i.arc(20,20,16,-Math.PI/2,-Math.PI/2+2*t*Math.PI),i.stroke()}},watch:{currentTime(t){this.upadebar(t/this.duration*1)}}},d=m,p=i(1001),h=(0,p.Z)(d,u,g,!1,null,null,null),f=h.exports,v=function(){var t=this,s=t._self._c;return s("div",{staticClass:"playpage"},[t.song?.picUrl?s("div",{staticClass:"backgr",style:t.song&&`background-image: url(${t.song.picUrl})`}):s("div",{staticClass:"backgr",style:t.song&&`background-image: url(${t.song?.al?.picUrl})`}),s("div",{staticClass:"header"},[s("div",{staticClass:"close"},[s("span",{staticClass:"iconfont close",on:{click:function(s){t.$parent.showPlayPage=!1}}},[t._v("")])]),s("div",{staticClass:"song-text"},[s("h3",{staticClass:"name"},[t._v(t._s(t.song?.name))]),t.song?.song?s("p",[t._v(t._s(t.song?.song?.album?.artists["0"]?.name))]):s("p",[t._v(t._s(t.song?.ar["0"]?.name))])]),t._m(0)]),t.showLyric?s("section",{staticClass:"songcar",on:{click:function(s){t.showLyric=!1}}},[s("div",{staticClass:"msong-disc"},[s("div",{staticClass:"msong-turn"},[s("div",{staticClass:"song-rollwarp"},[s("div",{staticClass:"song-img",class:{playing:t.playing}},[t.song?.picUrl?s("img",{class:{playing:t.playing},attrs:{src:`${t.song?.picUrl}?imageView&thumbnail=360y360`,alt:""}}):s("img",{class:{playing:t.playing},attrs:{src:`${t.song?.al?.picUrl}?imageView&thumbnail=360y360`,alt:""}})])]),t._m(1)]),s("div",{staticClass:"needle"},[s("div",{staticClass:"needle-ab",class:{playing:t.playing}})])])]):s("section",{staticClass:"musiclyric",on:{click:function(s){t.showLyric=!0}}},[s("div",{staticClass:"lyriccar"},[t.musiclyric?s("MusicLyric",{attrs:{song:t.song,musiclyric:t.musiclyric,currentTime:t.currentTime,audio:t.audio}}):t._e()],1)]),s("footer",{staticClass:"footer"},[s("div",{staticClass:"music-play"},[s("ProgressBar",{attrs:{duration:t.duration,currentTime:t.currentTime},on:{"update-time":function(s){return t.$emit("update-time",s)}}}),s("div",{staticClass:"music-btn"},[s("div",{staticClass:"music-model",on:{click:function(s){return t.$emit("change-model")}}},[s("span",{directives:[{name:"show",rawName:"v-show",value:"顺"===t.model,expression:"model === '顺'"}],staticClass:"iconfont current"},[t._v("")]),s("span",{directives:[{name:"show",rawName:"v-show",value:"随"===t.model,expression:"model === '随'"}],staticClass:"iconfont random"},[t._v("")]),s("span",{directives:[{name:"show",rawName:"v-show",value:"单"===t.model,expression:"model === '单'"}],staticClass:"iconfont single"},[t._v("")])]),s("div",{staticClass:"music-check"},[s("span",{staticClass:"iconfont prv",on:{click:function(s){return t.$emit("change-song","prev")}}},[t._v("")]),s("div",{staticClass:"play-music"},[t.playing?s("span",{staticClass:"iconfont pause",on:{click:function(s){return s.stopPropagation(),t.$emit("music-pause")}}},[t._v("")]):s("span",{staticClass:"iconfont play",on:{click:function(s){return s.stopPropagation(),t.$emit("music-play")}}},[t._v("")])]),s("span",{staticClass:"iconfont next",on:{click:function(s){return t.$emit("change-song","next")}}},[t._v("")])]),s("div",{staticClass:"list"},[s("span",{staticClass:"iconfont musilist",on:{click:function(s){return t.$emit("toggle-showPlayList")}}},[t._v("")])])])],1)])])},y=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"share"},[s("span",{staticClass:"iconfont share"},[t._v("")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"song-lgour"},[s("div",{staticClass:"song-light"})])}],C=function(){var t=this,s=t._self._c;return t.musiclyric?s("div",{staticClass:"songly"},[t.texts?s("ul",{ref:"ul",staticClass:"lry"},t._l(t.texts,(function(i,n){return s("li",{key:n,ref:"li",refInFor:!0,staticClass:"text"},[t._v(" "+t._s(i?.text)+" ")])})),0):t._e()]):t._e()},_=[],b={props:{song:Object,playing:Boolean,currentTime:Number,musiclyric:Object},data(){return{texts:null,index:0,offsetHeight:"",ontimeupdates:""}},methods:{songlyric:function(){var t=this.musiclyric?.lrc?.lyric;let s=t.split("\n"),i=s.filter((t=>t)).map((t=>{let{groups:s}=t.match(/\[(?<mm>\d{2}):(?<ss>\d{2}\.\d{2,3})\](?<text>.*)/);return{time:60*s.mm+1*s.ss,text:s.text.trim()}}));this.texts=i},findCurrentLyric:function(t,s){var i=[...t].reverse(),n=i.findIndex((t=>t.time<s));return{index:i.length-1-n,text:i[n]?.text}},ontimeupdate:function(){this.ontimeupdates=this.findCurrentLyric(this.texts,this.currentTime)},move:function(){this.$refs.li.forEach(((t,s)=>{s===this.ontimeupdates.index?t.style.color="red":t.style.color=""})),this.$refs.ul.style.transform=`translateY(${-30*this.ontimeupdates.index+150}rem)`}},mounted(){this.musiclyric&&this.songlyric()},watch:{currentTime:function(){this.ontimeupdate(),this.move()},musiclyric:function(t){t&&this.songlyric()}}},w=b,I=(0,p.Z)(w,C,_,!1,null,null,null),k=I.exports,A=function(){var t=this,s=t._self._c;return s("div",{staticClass:"music-controls"},[s("span",{staticClass:"star"},[t._v(t._s(t.newCurrentTime))]),s("div",{staticClass:"contro"},[s("label",[s("input",{staticClass:"bar",attrs:{type:"range",name:"buffer",id:"",min:"0",max:t.duration},domProps:{value:t.tmpCurrentTime},on:{input:function(s){t.draging=!0,t.updateBar(s.target.value,t.duration)},change:function(s){t.draging=!1,t.$emit("update-time",s.target.value)}}}),s("div",{staticClass:"buffer"},[s("span",{ref:"span",staticClass:"bar"})])])]),s("span",{staticClass:"end"},[t._v(t._s(t.totaltime))])])},x=[],P={props:{duration:Number,currentTime:Number},data:function(){return{draging:!1,tmpCurrentTime:this.currentTime,newwidth:0,newCurrentTime:"00:00",updatetime:0,totaltime:String(Math.floor(this.duration/60)).padStart(2,"0")+":"+String(Math.floor(this.duration%60)).padStart(2,"0")}},methods:{updateBar(t,s){let i=Math.ceil(t/s*100)+"%";this.$refs.span.style.width=i}},mounted(){let t=Math.ceil(this.currentTime/this.duration*100)+"%";this.$refs.span.style.width=t},watch:{currentTime:function(t){this.draging||(this.tmpCurrentTime=t,this.updateBar(this.tmpCurrentTime,this.duration)),this.newCurrentTime=String(Math.floor(t/60)).padStart(2,"0")+":"+String(Math.floor(t%60)).padStart(2,"0")},updatetime(t){this.tmpCurrentTime=t}}},S=P,N=(0,p.Z)(S,A,x,!1,null,null,null),T=N.exports,M={components:{MusicLyric:k,ProgressBar:T},props:{song:Object,playing:Boolean,duration:Number,currentTime:Number,model:String,audio:HTMLAudioElement},data:function(){return{showLyric:!0,draging:!1,newwidth:0,newCurrentTime:"00:00",totaltime:String(Math.floor(this.duration/60)).padStart(2,"0")+":"+String(Math.floor(this.duration%60)).padStart(2,"0"),musiclyric:null}},created(){this.axios.get("https://apis.netstart.cn/music/lyric?",{params:{id:this.song?.id}}).then((t=>{this.musiclyric=t.data}))},watch:{song:function(t){this.axios.get("https://apis.netstart.cn/music/lyric?",{params:{id:t.id}}).then((t=>{this.musiclyric=t.data}))}}},L=M,O=(0,p.Z)(L,v,y,!1,null,null,null),j=O.exports,R=function(){var t=this,s=t._self._c;return s("div",{staticClass:"playlist",on:{click:function(s){return s.stopPropagation(),t.$emit("toggle-showPlayList")}}},[s("div",{staticClass:"listpage"},[s("div",{staticClass:"carr"},[s("h3",{staticClass:"tit"},[t._v("播放列表")]),s("ul",{staticClass:"list"},t._l(t.songlist,(function(i){return s("li",{key:i.id,staticClass:"song-list",style:{color:i?.id===t.songId?"#03c862":""},on:{click:function(s){return t.$emit("music-play",i)}}},[s("div",{staticClass:"carr-cred"},[s("img",i?.picUrl?{attrs:{src:i?.picUrl,alt:""}}:{attrs:{src:i?.al?.picUrl,alt:""}})]),s("div",{staticClass:"hotsong-item"},[s("div",{staticClass:"hotsg"},[s("div",{staticClass:"f-thid"},[t._v(t._s(i.name))]),s("div",{staticClass:"f-info",style:{color:i?.id===t.songId?"#03c862":""}},[t._v(" "+t._s(i?.name)+" · "),s("span",i?.song?[t._v(t._s(i?.song?.album?.artists["0"]?.name))]:[t._v(t._s(i?.ar["0"]?.name))])])]),i.id!==t.songId?s("div",{staticClass:"hotauto"},[s("span",{staticClass:"hots"})]):s("div",{staticClass:"hotauto active",class:{playing:t.playing}},[s("span"),s("span"),s("span"),s("span")])])])})),0)])])])},B=[],$={props:{songlist:[Array,Object],songId:[Number,String],playing:Boolean}},U=$,Z=(0,p.Z)(U,R,B,!1,null,null,null),E=Z.exports,D={components:{MusicPlay:f,PlayDetails:j,PlayList:E},data(){return{song:JSON.parse(localStorage.getItem("song")),playing:!1,duration:0,currentTime:Number(localStorage.getItem("currentTime"))||0,showPlayPage:!1,showPlayList:!1,songlist:JSON.parse(localStorage.getItem("songlist"))||[],models:["顺","随","单"],model:JSON.parse(localStorage.getItem("model"))||"顺",serch:!0}},mounted(){this.$refs.audio.currentTime=this.currentTime},methods:{changeModel:function(){var t=this.models.findIndex((t=>t===this.model));this.model=t===this.models.length-1?this.models[0]:this.models[t+1]},changeSong:function(t){switch(this.model){case"顺":var s=this.songlist.findIndex((t=>t.id===this.song.id));this.song="next"===t?s===this.songlist.length-1?this.songlist[0]:this.songlist[s+1]:0===s?this.songlist[this.songlist.length-1]:this.songlist[s-1];break;case"随":var i=this.songlist.filter((t=>t.id!==this.song.id));this.song=i[Math.floor(Math.random()*i.length)];break;case"单":this.$refs.audio.currentTime=0,this.$refs.audio.play();break}},back(){this.$router.replace("/")}},computed:{songSrc:function(){return this.song?`https://music.163.com/song/media/outer/url?id=${this.song.id}.mp3`:null}},watch:{currentTime:function(t){t==this.duration&&this.changeSong(this.model),localStorage.setItem("currentTime",JSON.stringify(t))},song:function(t){localStorage.setItem("song",JSON.stringify(t))},songlist:function(t){localStorage.setItem("songlist",JSON.stringify(t))},playing:function(t){localStorage.setItem("playing",JSON.stringify(t))},model:function(t){localStorage.setItem("model",JSON.stringify(t))}}},Y=D,F=(0,p.Z)(Y,r,c,!1,null,null,null),G=F.exports,J=i(2631),z=function(){var t=this,s=t._self._c;return s("div",{staticClass:"home"},[s("div",{staticClass:"m-home"},[s("h2",[t._v("歌单推荐")]),s("div",{staticClass:"sone-car"},[s("div",{staticClass:"card-list"},t._l(t.personalizeds,(function(t){return s("HomeCard",{key:t.id,attrs:{item:t}})})),1)]),s("div",{staticClass:"billboard"},[s("div",{staticClass:"title"},[s("h2",{staticClass:"hot",class:{show:"hot"===t.showtitle},on:{click:function(s){t.showtitle="hot"}}},[t._v(" 热歌榜 ")]),s("h2",{staticClass:"new",class:{show:"new"===t.showtitle},on:{click:function(s){t.showtitle="new"}}},[t._v(" 新歌榜 ")]),s("h2",{staticClass:"eura",class:{show:"eura"===t.showtitle},on:{click:function(s){t.showtitle="eura"}}},[t._v(" 欧美榜 ")])]),"hot"===t.showtitle?s("section",[s("div",{staticClass:"sone-item"},[s("div",{staticClass:"song-list"},t._l(t.hotsongs,(function(i,n){return s("HotSong",{key:i.id,attrs:{hotsong:i,i:n,songId:t.songId,playing:t.playing},on:{"music-play":function(s){return t.$emit("music-play",s)},"music-play-list":function(s){return t.$emit("music-play-list",t.hotsongs)}}})})),1)])]):"new"===t.showtitle?s("section",[s("div",{staticClass:"sone-item"},[s("div",{staticClass:"song-list"},t._l(t.newsongs,(function(i,n){return s("SongItem",{key:i.id,attrs:{song:i,i:n,songId:t.songId,playing:t.playing},on:{"music-play":function(s){return t.$emit("music-play",s)},"music-play-list":function(s){return t.$emit("music-play-list",t.newsongs)}}})})),1)])]):s("section",[s("div",{staticClass:"sone-item"},[s("div",{staticClass:"song-list"},t._l(t.eurpamersong,(function(i,n){return s("EuropeAmerica",{key:i.id,attrs:{song:i,i:n,songId:t.songId,playing:t.playing},on:{"music-play":function(s){return t.$emit("music-play",s)},"music-play-list":function(s){return t.$emit("music-play-list",t.eurpamersong)}}})})),1)])])])])])},V=[],Q=(i(7658),function(){var t=this,s=t._self._c;return s("a",{staticClass:"music-car",on:{click:function(s){return s.preventDefault(),t.$router.push({path:"/songlist",query:{id:t.item.id}})}}},[s("div",{staticClass:"rem-img"},[s("img",{attrs:{src:`${t.item.picUrl}?imageView=1&type=webp&thumbnail=370x0`,alt:""}}),s("span",[t._v(t._s(t.listMusic))])]),s("p",[t._v(t._s(t.item.name))])])}),H=[],W={props:{item:Object},computed:{listMusic:function(){return this.item.playCount>1e8?Math.round(this.item.playCount/1e7)/10+"亿":this.item.playCount>1e5?Math.round(this.item.playCount/1e3)/10+"万":this.item.playCount}}},q=W,X=(0,p.Z)(q,Q,H,!1,null,null,null),K=X.exports,tt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"song-item",style:{color:t.song?.id===t.songId?"#03c862":""},attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.$emit("music-play",t.song),t.$emit("music-play-list")}}},[s("div",{staticClass:"hot-cred",style:{color:t.song?.id===t.songId?"#03c862":""}},[t._v(" "+t._s(t.i+1)+" ")]),s("div",{staticClass:"sgfr"},[s("div",{staticClass:"sgchfl"},[s("div",{staticClass:"f-bd"},[t._v(t._s(t.song.name))]),s("div",{staticClass:"f-thide",style:{color:t.song?.id===t.songId?"#03c862":""}},[t._v(" "+t._s(t.song.song.album.artists["0"].name)+" - "+t._s(t.song.song.album.name)+" ")])]),t.song.id!==t.songId?s("div",{staticClass:"sgchfr"},[s("span",{staticClass:"u-hm"})]):s("div",{staticClass:"sgchfr active",class:{playing:t.playing}},[s("span"),s("span"),s("span"),s("span")])])])},st=[],it={props:{song:Object,songId:[String,Number],playing:Boolean,i:Number}},nt=it,at=(0,p.Z)(nt,tt,st,!1,null,null,null),et=at.exports,ot=function(){var t=this,s=t._self._c;return s("a",{staticClass:"hotsong",style:{color:t.hotsong?.id===t.songId?"#03c862":""},attrs:{href:""},on:{click:function(s){s.preventDefault(),t.$emit("music-play",t.hotsong),t.$emit("music-play-list")}}},[s("div",{staticClass:"hot-cred",style:{color:t.hotsong?.id===t.songId?"#03c862":""}},[t._v(t._s(t.i+1)+" ")]),s("div",{staticClass:"hotsong-item"},[s("div",{staticClass:"hotsg"},[s("div",{staticClass:"f-thid"},[t._v(t._s(t.hotsong.name))]),s("div",{staticClass:"f-info",style:{color:t.hotsong?.id===t.songId?"#03c862":""}},[t._v(" "+t._s(t.hotsong.ar["0"].name)+" - "+t._s(t.hotsong.al.name)+" ")])]),t.hotsong.id!==t.songId?s("div",{staticClass:"hotauto"},[s("span",{staticClass:"hots"})]):s("div",{staticClass:"hotauto active",class:{playing:t.playing}},[s("span"),s("span"),s("span"),s("span")])])])},lt=[],rt={props:{hotsong:Object,i:Number,songId:[Number,String],playing:Boolean}},ct=rt,ut=(0,p.Z)(ct,ot,lt,!1,null,null,null),gt=ut.exports,mt=function(){var t=this,s=t._self._c;return s("a",{staticClass:"hotsong",style:{color:t.song?.id===t.songId?"#03c862":""},attrs:{href:""},on:{click:function(s){s.preventDefault(),t.$emit("music-play",t.song),t.$emit("music-play-list")}}},[s("div",{staticClass:"hot-cred",style:{color:t.song?.id===t.songId?"#03c862":""}},[t._v(t._s(t.i+1)+" ")]),s("div",{staticClass:"hotsong-item"},[s("div",{staticClass:"hotsg"},[s("div",{staticClass:"f-thid"},[t._v(t._s(t.song.name))]),s("div",{staticClass:"f-info",style:{color:t.song?.id===t.songId?"#03c862":""}},[t._v(" "+t._s(t.song.ar["0"].name)+" - "+t._s(t.song.al.name)+" ")])]),t.song.id!==t.songId?s("div",{staticClass:"hotauto"},[s("span",{staticClass:"hots"})]):s("div",{staticClass:"hotauto active",class:{playing:t.playing}},[s("span"),s("span"),s("span"),s("span")])])])},dt=[],pt={props:{song:Object,songId:[String,Number],playing:Boolean,i:Number}},ht=pt,ft=(0,p.Z)(ht,mt,dt,!1,null,null,null),vt=ft.exports,yt={components:{HomeCard:K,SongItem:et,HotSong:gt,EuropeAmerica:vt},props:{songId:[String,Number],playing:Boolean},data:function(){return{personalizeds:[],newsongs:[],hotsongs:[],eurpamersong:[],showtitle:"hot"}},created(){Promise.all([this.axios.get("https://apis.netstart.cn/music/personalized",{params:{limit:6}}),this.axios.get("https://apis.netstart.cn/music/personalized/newsong")]).then((([t,s])=>{this.personalizeds=t.data.result,this.newsongs=s.data.result})),this.axios.get("https://apis.netstart.cn/music/playlist/detail?id=3778678").then((t=>{this.hotsongs=t.data.playlist.tracks.slice(0,20)})),this.axios.get("https://apis.netstart.cn/music/playlist/track/all?id=2809513713",{params:{limit:20}}).then((t=>{this.eurpamersong=t.data.songs}))}},Ct=yt,_t=(0,p.Z)(Ct,z,V,!1,null,null,null),bt=_t.exports,wt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"u-height"},[t.loading?s("section",{staticClass:"loader"},[t._m(0)]):t._e(),t.loading?t._e():s("div",{staticClass:"root"},[s("section",{staticClass:"pylst"},[s("span",{staticClass:"iconfont back",on:{click:function(s){return t.$emit("srech-back")}}},[t._v("")]),s("div",{staticClass:"pylst_header",style:t.songlist&&`background-image: url(${t.songlist.coverImgUrl})`},[s("div",{staticClass:"plhead-warp"},[s("div",{staticClass:"plhead-fl"},[s("img",{staticClass:"u-img",attrs:{src:t.songlist?.coverImgUrl,alt:""}}),s("span",{staticClass:"lsth-icon"},[t._v("歌单")]),s("span",{staticClass:"u-earp"},[t._v(t._s(t.listMusic))])]),s("div",{staticClass:"plhead-fr"},[s("h2",{staticClass:"listhd"},[t._v(t._s(t.songlist?.name))]),s("div",{staticClass:"listhd-auth"},[s("a",{staticClass:"listhd-link",attrs:{href:""}},[s("div",{staticClass:"u-avatar"},[s("img",{staticClass:"auth-img",attrs:{src:t.songlist?.creator?.avatarUrl,alt:""}}),s("span",{staticClass:"ava-icon"})]),t._v(" "+t._s(t.songlist?.creator?.nickname)+" ")])])])])])]),s("div",{staticClass:"songlist"},[s("h3",{staticClass:"smtitle"},[t._v("歌曲列表")]),t._l(t.songlist?.tracks,(function(i,n){return s("SongListMusic",{key:i.id,staticClass:"sglist",attrs:{i:n,song:i,songId:t.songId,playing:t.playing},on:{"music-play":function(s){return t.$emit("music-play",s)},"music-play-list":function(s){return t.$emit("music-play-list",t.songlist?.tracks)}}})}))],2),s("div",{staticClass:"n-newcomm"},[s("h3",{staticClass:"smtitle"},[t._v("精彩评论")]),t._l(t.songlistcomments,(function(t,i){return s("SongListComment",{key:i,staticClass:"sglist",attrs:{songlistcomment:t}})}))],2)])])},It=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"loading"},[s("img",{attrs:{src:i(6053),alt:""}})])}],kt=function(){var t=this,s=t._self._c;return s("li",{staticClass:"hotsong",style:{color:t.song?.id===t.songId?"#03c862":""},on:{click:function(s){s.stopPropagation(),t.$emit("music-play",t.song),t.$emit("music-play-list")}}},[s("div",{staticClass:"hot-cred",style:{color:t.song?.id===t.songId?"#03c862":""}},[t._v(t._s(t.i+1))]),s("div",{staticClass:"hotsong-item"},[s("div",{staticClass:"hotsg"},[s("div",{staticClass:"f-thid"},[t._v(t._s(t.song.name))]),s("div",{staticClass:"f-info",style:{color:t.song?.id===t.songId?"#03c862":""}},[t._v(" "+t._s(t.song.ar["0"].name)+" - "+t._s(t.song.al.name)+" ")])]),t.song.id!==t.songId?s("div",{staticClass:"hotauto"},[s("span",{staticClass:"hots"})]):s("div",{staticClass:"hotauto active",class:{playing:t.playing}},[s("span"),s("span"),s("span"),s("span")])])])},At=[],xt={props:{song:Object,i:Number,songId:[String,Number],playing:Boolean}},Pt=xt,St=(0,p.Z)(Pt,kt,At,!1,null,null,null),Nt=St.exports,Tt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"comment"},[s("div",{staticClass:"cmt-head"},[s("a",{staticClass:"userphoto",attrs:{href:"#"}},[s("img",{attrs:{src:t.songlistcomment?.user?.avatarUrl,alt:""}}),null!==t.songlistcomment?.user?.experts?s("span",{staticClass:"ava-icon"}):t._e()])]),s("div",{staticClass:"cmd-warp"},[s("div",{staticClass:"cmd-header"},[s("div",{staticClass:"cmt-meta"},[s("span",{staticClass:"cmt-user"},[s("a",{staticClass:"nickname",attrs:{href:"#"}},[t._v(" "+t._s(t.songlistcomment?.user?.nickname)+" ")])]),s("div",{staticClass:"cmt-time"},[s("span",[t._v(" "+t._s(t.updateTime))])])]),s("div",{staticClass:"cmt-like"},[s("span",{staticClass:"likearea"},[s("span",{staticClass:"count"},[t._v(t._s(t.songlistcomment?.likedCount))]),s("i",{staticClass:"likeicn"},[s("svg",{staticClass:"u-svg u-svg-unzancmt",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"}},[s("path",{attrs:{fill:"#999",d:"m25.857 14.752c-.015.059-1.506 5.867-2.932 8.813-1.162 2.402-3 2.436-3.099 2.436h-12.826v-13c3 0 5.728-4 5.728-7.275 0-3.725 1.433-3.725 2.142-3.725 1.327 0 1.978 1.345 1.978 4 0 2.872-.832 4.525-.839 4.537-.161.31-.155.682.027.981.181.299.5.482.849.482h6.942c.922 0 1.551.215 1.866.64.467.626.286 1.705.164 2.112m-23.857 10.248v-10c0-1.795.659-1.981.855-2h2.145v13h-2.173c-.829 0-.827-.648-.827-1m25.309-13.54c-.713-.969-1.886-1.46-3.482-1.46h-5.519c.26-.932.519-2.285.519-4 0-5.221-2.507-6-4-6-1.909 0-4.185.993-4.185 5.725 0 2.206-1.923 5.275-3.815 5.275h-4-.011c-1.034.011-2.816.862-2.816 4v10.02c0 1.198.675 2.979 2.827 2.979h16.971.035c.364 0 3.224-.113 4.894-3.564 1.514-3.127 3.01-8.942 3.056-9.14.071-.23.664-2.289-.474-3.836"}})])])])])]),s("div",{staticClass:"cmt-content"},[0!==t.songlistcomment?.beReplied.length?s("span",{staticClass:"cmt-text"},[t._v(" 回复 "),s("a",{staticClass:"att",attrs:{href:"#"}},[t._v("@"+t._s(t.songlistcomment?.beReplied[0]?.user?.nickname))]),t._v(": ")]):t._e(),s("span",{staticClass:"cmt-text"},[t._v(t._s(t.songlistcomment?.content))])]),0!==t.songlistcomment?.beReplied.length?s("div",{staticClass:"cmt-relied"},[s("span",{staticClass:"relied-user"},[t._v(t._s(t.songlistcomment?.beReplied[0]?.user?.nickname)+" ")]),t._v(" : "),s("span",{staticClass:"relied-cnt"},[t._v(t._s(t.songlistcomment?.beReplied[0]?.content))])]):t._e()])])},Mt=[],Lt={props:{songlistcomment:Object},data:function(){return{time:this.songlistcomment?.timeStr}},computed:{updateTime:function(){return this.time.slice(0,4)+"年"+this.time.slice(5,7)+"月"+this.time.slice(8)+"日"}},watch:{time:function(t,s){console.log(t,s),t=s.slice(0,4)+"年"+s.slice(5,7)+"月"+s.slice(8)+"日"}}},Ot=Lt,jt=(0,p.Z)(Ot,Tt,Mt,!1,null,null,null),Rt=jt.exports,Bt={components:{SongListMusic:Nt,SongListComment:Rt},props:{songId:[String,Number],playing:Boolean},data:function(){return{songlist:null,loading:!1,songlistcomments:null}},computed:{listMusic:function(){return this.songlist?.playCount>1e8?Math.round(this.songlist?.playCount/1e7)/10+"亿":this.songlist?.playCount>1e5?Math.round(this.songlist?.playCount/1e3)/10+"万":this.songlist?.playCount}},methods:{getSongList:function(t){this.loading=!0,Promise.all([this.axios.get("https://apis.netstart.cn/music/playlist/detail",{params:{id:t}}),this.axios.get("https://apis.netstart.cn/music/comment/playlist",{params:{id:t}})]).then((([t,s])=>{this.songlist=t.data.playlist,this.songlistcomments=s.data.hotComments,this.loading=!1}))}},created:function(){this.getSongList(this.$route.query.id)},beforeRouteUpdate(t,s,i){this.getSongList(t.query.id),i()}},$t=Bt,Ut=(0,p.Z)($t,wt,It,!1,null,null,null),Zt=Ut.exports;n.ZP.use(J.ZP);const Et=[{path:"/",component:bt,meta:{showNav:!0}},{path:"/radio",component:()=>i.e(443).then(i.bind(i,4103)),meta:{showNav:!0}},{path:"/search",component:()=>i.e(443).then(i.bind(i,4175))},{path:"/songlist",component:Zt}],Dt=new J.ZP({routes:Et});var Yt=Dt;n.ZP.config.productionTip=!1,new n.ZP({router:Yt,render:t=>t(G)}).$mount("#app")},6053:function(t){t.exports="data:image/gif;base64,R0lGODlhKAAoAIABANM6Mf///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI2QURFODRFRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI2QURFODRGRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjZBREU4NENGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjZBREU4NERGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJCgABACwAAAAAKAAoAAACeIyPqcvtD6OctNoD8rUZ7Np9VChKZAmdqKOuTOsqcIzMtGHfuaxxfbRrBGu/UfExXCRxxwRsGdg9m0IqpgmVYq1KbnTrMXmnYeAYzCtf1em2E11lf+VkFpxIP+f37td93dfF9zboVwhIaHfItJjoiBd4IzlJWalQAAAh+QQJCgABACwAAAAAKAAoAAACfIyPqcvtD6OctNqLs94WeB55AAiJ5GOeTaoubJu8nBzQGm0zuYF/0l7zIYAxocvIQzqAvVHROVRGoYemgqm0PpfZLjX53YqnV2nVWw5j1ejxkQ1Pc+Nu8FxeD4bJea2uzRf4hidotwJ4RvenmEg42IfoaFioB2N5iZmZUAAAIfkECQoAAQAsAAAAACgAKAAAAn+Mj6nL7Q+jnLRaCPK1GezafVTIaRIJmhE6qpg7sY98wg692g3+egnNm9mAup6C6EslD8hL8zcsGp4I6sI6jS6PWu42EAR3od8wVlyWor1s8m1chV/l2fQ3bm/j33m3n3F2tvfHREdYp1d4p5iIePgYqBbZB2goKIKZqbnJ+VAAACH5BAUKAAEALAAAAAAoACgAAAJ8jI+py+0PIwRUWkbB3Sjz731bKFpkGZ1mJaktm8KX29CT/Ng57ug9XwPeNC/iSLjwBY1DEFKhxDwTLl/0UH1eDVkmlNf9eqng8thqFquX606aTT6/pfJ6OznH5u/cfQBtF8cnSOgWSDcYBmeYqOWniFiod4hSaXmJmWlRAAA7"}},s={};function i(n){var a=s[n];if(void 0!==a)return a.exports;var e=s[n]={id:n,loaded:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.loaded=!0,e.exports}i.m=t,function(){var t=[];i.O=function(s,n,a,e){if(!n){var o=1/0;for(u=0;u<t.length;u++){n=t[u][0],a=t[u][1],e=t[u][2];for(var l=!0,r=0;r<n.length;r++)(!1&e||o>=e)&&Object.keys(i.O).every((function(t){return i.O[t](n[r])}))?n.splice(r--,1):(l=!1,e<o&&(o=e));if(l){t.splice(u--,1);var c=a();void 0!==c&&(s=c)}}return s}e=e||0;for(var u=t.length;u>0&&t[u-1][2]>e;u--)t[u]=t[u-1];t[u]=[n,a,e]}}(),function(){i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,{a:s}),s}}(),function(){i.d=function(t,s){for(var n in s)i.o(s,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})}}(),function(){i.f={},i.e=function(t){return Promise.all(Object.keys(i.f).reduce((function(s,n){return i.f[n](t,s),s}),[]))}}(),function(){i.u=function(t){return"js/about.b0e66b23.js"}}(),function(){i.miniCssF=function(t){return"css/about.db93c3a4.css"}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={},s="vue2-music:";i.l=function(n,a,e,o){if(t[n])t[n].push(a);else{var l,r;if(void 0!==e)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var g=c[u];if(g.getAttribute("src")==n||g.getAttribute("data-webpack")==s+e){l=g;break}}l||(r=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",s+e),l.src=n),t[n]=[a];var m=function(s,i){l.onerror=l.onload=null,clearTimeout(d);var a=t[n];if(delete t[n],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(t){return t(i)})),s)return s(i)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),r&&document.head.appendChild(l)}}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){i.p=""}(),function(){var t=function(t,s,i,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var e=function(e){if(a.onerror=a.onload=null,"load"===e.type)i();else{var o=e&&("load"===e.type?"missing":e.type),l=e&&e.target&&e.target.href||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+l+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=o,r.request=l,a.parentNode.removeChild(a),n(r)}};return a.onerror=a.onload=e,a.href=s,document.head.appendChild(a),a},s=function(t,s){for(var i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var a=i[n],e=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(e===t||e===s))return a}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){a=o[n],e=a.getAttribute("data-href");if(e===t||e===s)return a}},n=function(n){return new Promise((function(a,e){var o=i.miniCssF(n),l=i.p+o;if(s(o,l))return a();t(n,l,a,e)}))},a={143:0};i.f.miniCss=function(t,s){var i={443:1};a[t]?s.push(a[t]):0!==a[t]&&i[t]&&s.push(a[t]=n(t).then((function(){a[t]=0}),(function(s){throw delete a[t],s})))}}(),function(){var t={143:0};i.f.j=function(s,n){var a=i.o(t,s)?t[s]:void 0;if(0!==a)if(a)n.push(a[2]);else{var e=new Promise((function(i,n){a=t[s]=[i,n]}));n.push(a[2]=e);var o=i.p+i.u(s),l=new Error,r=function(n){if(i.o(t,s)&&(a=t[s],0!==a&&(t[s]=void 0),a)){var e=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+s+" failed.\n("+e+": "+o+")",l.name="ChunkLoadError",l.type=e,l.request=o,a[1](l)}};i.l(o,r,"chunk-"+s,s)}},i.O.j=function(s){return 0===t[s]};var s=function(s,n){var a,e,o=n[0],l=n[1],r=n[2],c=0;if(o.some((function(s){return 0!==t[s]}))){for(a in l)i.o(l,a)&&(i.m[a]=l[a]);if(r)var u=r(i)}for(s&&s(n);c<o.length;c++)e=o[c],i.o(t,e)&&t[e]&&t[e][0](),t[e]=0;return i.O(u)},n=self["webpackChunkvue2_music"]=self["webpackChunkvue2_music"]||[];n.forEach(s.bind(null,0)),n.push=s.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(9606)}));n=i.O(n)})();
//# sourceMappingURL=app.bbf0f154.js.map