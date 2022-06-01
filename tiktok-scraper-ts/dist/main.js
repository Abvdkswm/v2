var W=Object.create;var w=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var O=Object.getOwnPropertyNames;var q=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var T=i=>w(i,"__esModule",{value:!0}),a=(i,r)=>w(i,"name",{value:r,configurable:!0});var j=(i,r)=>{for(var o in r)w(i,o,{get:r[o],enumerable:!0})},$=(i,r,o,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of O(r))!D.call(i,e)&&(o||e!=="default")&&w(i,e,{get:()=>r[e],enumerable:!(n=_(r,e))||n.enumerable});return i},b=(i,r)=>$(T(w(i!=null?W(q(i)):{},"default",!r&&i&&i.__esModule?{get:()=>i.default,enumerable:!0}:{value:i,enumerable:!0})),i),J=(i=>(r,o)=>i&&i.get(r)||(o=$(T({}),r,1),i&&i.set(r,o),o))(typeof WeakMap!="undefined"?new WeakMap:0);var K={};j(K,{Music:()=>f,TTScraper:()=>c,TikTokResult:()=>v,User:()=>p,Video:()=>g,fetchAllVideosFromUser:()=>P,fetchMusic:()=>F,fetchUser:()=>Y,fetchVideo:()=>G,fetchVideoNoWaterMark:()=>H});var y=b(require("node-fetch")),L=b(require("cheerio")),S=b(require("http")),E=b(require("https"));var p=class{constructor(r,o,n,e,t,u,s,h,l,I,M,k,A,C,x){this.id=r,this.uniqueId=o,this.nickname=n,this.avatar=e,this.signature=t,this.createdAt=u,this.verified=s,this.secretUID=h,this.bioLink=l,this.privateAccount=I,this.isUnderAge18=M,this.followers=k,this.following=A,this.hearts=C,this.videos=x}};a(p,"User");var v=class{constructor(r,o,n,e,t,u,s,h,l,I){this.author=r,this.video=o,this.audio=n,this.shareCount=e,this.likesCount=t,this.commentCount=u,this.playCount=s,this.createdAt=h,this.tiktokLink=l,this.thumbnail=I}};a(v,"TikTokResult");var g=class{constructor(r,o,n,e,t,u,s,h,l,I,M,k,A,C,x,V,N){this.id=r,this.description=o,this.createdAt=n,this.height=e,this.width=t,this.duration=u,this.resolution=s,this.shareCount=h,this.likesCount=l,this.commentCount=I,this.playCount=M,this.downloadURL=k,this.cover=A,this.dynamicCover=C,this.playURL=x,this.format=V,this.author=N}};a(g,"Video");var f=class{constructor(r,o,n,e,t,u,s,h,l){this.id=r,this.title=o,this.playURL=n,this.coverLarge=e,this.coverThumb=t,this.author=u,this.duration=s,this.original=h,this.album=l}};a(f,"Music");var m=require("fs"),R=require("process"),U=b(require("miniget")),c=class{async requestWebsite(r,o){let n=new S.default.Agent({keepAlive:!0,maxSockets:20}),e=new E.default.Agent({keepAlive:!0,maxSockets:20}),t={agent:l=>l.protocol=="http:"?n:e,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.62"}},s=await(await(0,y.default)(`${r}`,o||t)).text();return L.load(s,{xmlMode:!0})}handleHTMLContent(r){let o=r,n=o.split("window['SIGI_STATE']=")[1].indexOf(";window['SIGI_RETRY']=");return JSON.parse(o.split("window['SIGI_STATE']=")[1].slice(0,n))}async video(r){if(!r)throw new Error("A video URL must be provided");let n=(await this.requestWebsite(r))("#SIGI_STATE").text(),e=JSON.parse(n),t=e.ItemList.video.list[0];return new g(e.ItemModule[t].video.id,e.ItemModule[t].desc,new Date(Number(e.ItemModule[t].createTime)*1e3).toLocaleDateString(),Number(e.ItemModule[t].video.height),Number(e.ItemModule[t].video.width),Number(e.ItemModule[t].video.duration),e.ItemModule[t].video.ratio,e.ItemModule[t].stats.shareCount,e.ItemModule[t].stats.diggCount,e.ItemModule[t].stats.commentCount,e.ItemModule[t].stats.playCount,e.ItemModule[t].video.downloadAddr.trim(),e.ItemModule[t].video.cover,e.ItemModule[t].video.dynamicCover,e.ItemModule[t].video.playAddr.trim(),e.ItemModule[t].video.format,e.ItemModule[t].nickname)}async user(r){if(!r)throw new Error("Please enter a username");let n=(await this.requestWebsite(`https://www.tiktok.com/@${r}`))("#SIGI_STATE").text(),e=JSON.parse(n),t=e.UserModule.users[r];return new p(t.id,t.uniqueId,t.nickname,t.avatarLarger,t.signature.trim(),new Date(t.createTime*1e3).toLocaleDateString(),t.verified,t.secUid,t?.bioLink?.link,t.privateAccount,t.isUnderAge18,e.UserModule.stats[r].followerCount,e.UserModule.stats[r].followingCount,e.UserModule.stats[r].heart,e.UserModule.stats[r].videoCount)}async getAllVideosFromUser(r){if(!r)throw new Error("You must provide a username!");let n=(await this.requestWebsite(`https://www.tiktok.com/@${r}`))("#SIGI_STATE").text(),e=JSON.parse(n),t=[],{ItemList:u}=e;return u["user-post"].list.forEach(s=>{t.push(new g(e.ItemModule[s].video.id,e.ItemModule[s].desc,new Date(Number(e.ItemModule[s].createTime)*1e3).toLocaleDateString(),Number(e.ItemModule[s].video.height),Number(e.ItemModule[s].video.width),Number(e.ItemModule[s].video.duration),e.ItemModule[s].video.ratio,e.ItemModule[s].stats.shareCount,e.ItemModule[s].stats.diggCount,e.ItemModule[s].stats.commentCount,e.ItemModule[s].stats.playCount,e.ItemModule[s].video.downloadAddr.trim(),e.ItemModule[s].video.cover,e.ItemModule[s].video.dynamicCover,e.ItemModule[s].video.playAddr.trim(),e.ItemModule[s].video.format))}),t}async getMusic(r){if(!r)throw new Error("You must provide a link!");let n=(await this.requestWebsite(r))("#SIGI_STATE").text(),e=JSON.parse(n),t=e.ItemList.video.list[0];return new f(e.ItemModule[t].music.id,e.ItemModule[t].music.title,e.ItemModule[t].music.playUrl,e.ItemModule[t].music.coverLarge,e.ItemModule[t].music.coverThumb,e.ItemModule[t].music.authorName,Number(e.ItemModule[t].music.duration),e.ItemModule[t].music.original,e.ItemModule[t].music.album)}async downloadAllVideosFromUser(r,o){if(!r)throw new Error("Please enter a username!");let n=await this.getAllVideosFromUser(r);if(!n)throw new Error("No Videos were found for this username. Either the videos are private or the user has not videos");if(!o.path){if(o.path=`${__dirname}/../${r}`,(0,m.existsSync)(o.path)){console.log("A folder with this username exists, that is unusual!");try{(0,m.unlinkSync)(o.path)}catch(e){console.log(`[ERROR] Could not remove ${o.path}
 Error Message: ${e.message}`),(0,R.exit)(1)}}(0,m.existsSync)(o.path)||(0,m.mkdirSync)(o.path)}if(!o.watermark){for(let[e,t]of n.entries()){console.log(`Downloading Video: ${t.description?t.description:t.id}, [${e+1}/${n.length}]`);let u=await this.noWaterMark(t.id);if(!u){console.log(`Could not fetch ${t.description?t.description:t.id} with no watermark`);continue}(0,U.default)(u).pipe((0,m.createWriteStream)(`${o.path}/${t.id}_${t.resolution}.${t.format}`))}return}for(let[e,t]of n.entries())console.log(`Downloading Video: ${t.description?t.description:t.id}, [${e+1}/${n.length}]`),(0,U.default)(t.downloadURL).pipe((0,m.createWriteStream)(`${o.path}/${t.id}_${t.resolution}.${t.format}`))}async noWaterMark(r){let o="";r.startsWith("https")?o=(await this.video(r)).id:o=r;let e=await(await(0,y.default)("https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id="+o)).json();if(!e)throw new Error("There was an Error retrieveing this video without watermark!");let t=e.aweme_detail.video.download_addr.uri;if(!t)throw new Error("There was an Error retrieveing this video without watermark!");return`https://api-h2.tiktokv.com/aweme/v1/play/?video_id=${t}`}};a(c,"TTScraper");async function G(i){if(!i)throw new Error("You must provide a Tiktok video url!");return await new c().video(i)}a(G,"fetchVideo");async function Y(i){if(!i)throw new Error("You must provide a username!");return await new c().user(i)}a(Y,"fetchUser");async function P(i){if(!i)throw new Error("You must provide a username!");return await new c().getAllVideosFromUser(i)}a(P,"fetchAllVideosFromUser");async function F(i){if(!i)throw new Error("You must provide a Tiktok video url!");return await new c().getMusic(i)}a(F,"fetchMusic");async function H(i){if(!i)throw new Error("You must provide a Tiktok video url!");return await new c().noWaterMark(i)}a(H,"fetchVideoNoWaterMark");module.exports=J(K);0&&(module.exports={Music,TTScraper,TikTokResult,User,Video,fetchAllVideosFromUser,fetchMusic,fetchUser,fetchVideo,fetchVideoNoWaterMark});