/** No enc ?, beli :v**/
(function(_0x5b9a93,_0x30b186){const _0x319514=_0x337b,_0x5959aa=_0x5b9a93();while(!![]){try{const _0x1a255b=-parseInt(_0x319514(0x1f7))/0x1*(parseInt(_0x319514(0x22a))/0x2)+-parseInt(_0x319514(0x1f8))/0x3+parseInt(_0x319514(0x205))/0x4+parseInt(_0x319514(0x203))/0x5*(-parseInt(_0x319514(0x201))/0x6)+-parseInt(_0x319514(0x1df))/0x7+-parseInt(_0x319514(0x1f6))/0x8+parseInt(_0x319514(0x1e0))/0x9;if(_0x1a255b===_0x30b186)break;else _0x5959aa['push'](_0x5959aa['shift']());}catch(_0x153ccd){_0x5959aa['push'](_0x5959aa['shift']());}}}(_0x220c,0x7965d),((async()=>{const _0x279088=_0x337b;require('./config');const {useMultiFileAuthState:_0x423ba0,DisconnectReason:_0x45a92d,generateForwardMessageContent:_0x4ec571,prepareWAMessageMedia:_0x4dfbd8,generateWAMessageFromContent:_0x439237,generateMessageID:_0xa72389,downloadContentFromMessage:_0x1a9111,makeInMemoryStore:_0x4e06e7,jidDecode:_0x571a5d,proto:_0x2fd4df}=require('@adiwajshing/baileys'),_0x478fe5=require('pino'),_0x58ac06=require('ws'),_0xb68e8f=require(_0x279088(0x1d1)),_0x4af03e=require('fs'),_0x548dea=require(_0x279088(0x1cb)),_0x5138a7=require('child_process'),_0x386a11=require(_0x279088(0x1ee)),_0x1f755f=require('syntax-error'),_0x14f6b9=require(_0x279088(0x215)),_0x22df19=require('os');let _0xbcf911=require('./lib/simple');var _0x1bd06c;try{_0x1bd06c=require('lowdb');}catch(_0x9b4a22){_0x1bd06c=require(_0x279088(0x1c5));}const {Low:_0x1b9613,JSONFile:_0x1ed409}=_0x1bd06c,_0x5cf6b3=require(_0x279088(0x231));global[_0x279088(0x1ec)]=(_0x47440c,_0x2e7655='/',_0x55924b={},_0xdd8d4)=>(_0x47440c in global[_0x279088(0x1ff)]?global[_0x279088(0x1ff)][_0x47440c]:_0x47440c)+_0x2e7655+(_0x55924b||_0xdd8d4?'?'+new URLSearchParams(Object[_0x279088(0x1ea)]({..._0x55924b,..._0xdd8d4?{[_0xdd8d4]:global[_0x279088(0x221)][_0x47440c in global[_0x279088(0x1ff)]?global[_0x279088(0x1ff)][_0x47440c]:_0x47440c]}:{}})):''),global[_0x279088(0x1c2)]={'start':new Date()};const _0x3d6039=process[_0x279088(0x233)][_0x279088(0x1f2)]||0xbb8;global[_0x279088(0x1de)]=new Object(_0x548dea(process[_0x279088(0x1ca)][_0x279088(0x237)](0x2))[_0x279088(0x1f9)](![])[_0x279088(0x1f4)]()),global['prefix']=new RegExp('^['+(opts['prefix']||_0x279088(0x1ef))['replace'](/[|\\{}()[\]^$+*?.\-\^]/g,_0x279088(0x1e1))+']'),global['db']=new _0x1b9613(/https?:\/\//['test'](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/[_0x279088(0x1ce)](opts['db'])?new _0x5cf6b3(opts['db']):new _0x1ed409((opts['_'][0x0]?opts['_'][0x0]+'_':'')+_0x279088(0x1dd))),global[_0x279088(0x1d8)]=global['db'],global[_0x279088(0x1d0)]=async function _0x405279(){const _0xa1d70c=_0x279088;if(global['db'][_0xa1d70c(0x1d5)])return new Promise(_0x20f7f5=>setInterval(function(){const _0x424c94=_0xa1d70c;!global['db'][_0x424c94(0x1d5)]?(clearInterval(this),_0x20f7f5(global['db']['data']==null?global[_0x424c94(0x1d0)]():global['db'][_0x424c94(0x20c)])):null;},0x1*0x3e8));if(global['db'][_0xa1d70c(0x20c)]!==null)return;global['db'][_0xa1d70c(0x1d5)]=!![],await global['db'][_0xa1d70c(0x230)](),global['db']['READ']=![],global['db'][_0xa1d70c(0x20c)]={'users':{},'chats':{},'stats':{},'msgs':{},'sticker':{},...global['db']['data']||{}},global['db'][_0xa1d70c(0x222)]=_0x386a11[_0xa1d70c(0x222)](global['db']['data']);},loadDatabase();const _0x47766f=''+(opts['_'][0x0]||_0x279088(0x1c8));global[_0x279088(0x206)]=!_0x4af03e[_0x279088(0x1fb)](_0x47766f);const {state:_0x32450e,saveState:_0x411eec,saveCreds:_0xeb9305}=await _0x423ba0(_0x47766f),_0x33e03e={'printQRInTerminal':!![],'syncFullHistory':!![],'markOnlineOnConnect':!![],'connectTimeoutMs':0xea60,'defaultQueryTimeoutMs':0x0,'keepAliveIntervalMs':0x2710,'generateHighQualityLinkPreview':!![],'patchMessageBeforeSending':_0x49e02f=>{const _0x57d94c=_0x279088,_0x48d06a=!!(_0x49e02f[_0x57d94c(0x22c)]||_0x49e02f[_0x57d94c(0x1cf)]||_0x49e02f['listMessage']);return _0x48d06a&&(_0x49e02f={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x49e02f}}}),_0x49e02f;},'auth':_0x32450e,'browser':[_0x279088(0x20e),_0x279088(0x1c3),''],'logger':_0x478fe5({'level':_0x279088(0x1f3)}),'version':[0x2,0x915,0x3]};global['conn']=_0xbcf911[_0x279088(0x1e6)](_0x33e03e);if(!opts[_0x279088(0x1ce)]){if(global['db'])setInterval(async()=>{const _0x4094f7=_0x279088;if(global['db'][_0x4094f7(0x20c)])await global['db'][_0x4094f7(0x238)]();if(!opts[_0x4094f7(0x22e)]&&(global[_0x4094f7(0x223)]||{})[_0x4094f7(0x212)])tmp=[_0x22df19['tmpdir'](),_0x4094f7(0x22e)],tmp['forEach'](_0x258861=>_0x5138a7[_0x4094f7(0x20f)](_0x4094f7(0x212),[_0x258861,_0x4094f7(0x1c4),'3','-type','f',_0x4094f7(0x204)]));},0x1e*0x3e8);}async function _0x55341d(_0x26924c){const _0x3c3739=_0x279088,{connection:_0x5876d4,lastDisconnect:_0x467f38}=_0x26924c;global[_0x3c3739(0x1c2)][_0x3c3739(0x225)]=new Date();_0x467f38&&_0x467f38[_0x3c3739(0x1f5)]&&_0x467f38[_0x3c3739(0x1f5)][_0x3c3739(0x226)]&&_0x467f38[_0x3c3739(0x1f5)][_0x3c3739(0x226)]['statusCode']!==_0x45a92d[_0x3c3739(0x1db)]&&conn['ws'][_0x3c3739(0x1d3)]!==_0x58ac06[_0x3c3739(0x1c9)]&&console['log'](global[_0x3c3739(0x21e)](!![]));if(global['db'][_0x3c3739(0x20c)]==null)await loadDatabase();if(_0x26924c['receivedPendingNotifications'])conn[_0x3c3739(0x1e8)](_0x3c3739(0x1d4),{'text':'Bot\x20connection\x20update✔️'},{'quoted':null});}process['on'](_0x279088(0x228),console[_0x279088(0x1f5)]);const _0x4806fd=_0x3ba69e=>{const _0x20d0c4=_0x279088;_0x3ba69e=require[_0x20d0c4(0x1d2)](_0x3ba69e);let _0x2483a5,_0x5eaf8f=0x0;do{if(_0x3ba69e in require[_0x20d0c4(0x1e2)])delete require[_0x20d0c4(0x1e2)][_0x3ba69e];_0x2483a5=require(_0x3ba69e),_0x5eaf8f++;}while((!_0x2483a5||(Array['isArray'](_0x2483a5)||_0x2483a5 instanceof String)?!(_0x2483a5||[])['length']:typeof _0x2483a5==_0x20d0c4(0x20b)&&!Buffer[_0x20d0c4(0x219)](_0x2483a5)?!Object[_0x20d0c4(0x1c6)](_0x2483a5||{})[_0x20d0c4(0x1d7)]:!![])&&_0x5eaf8f<=0xa);return _0x2483a5;};let _0x207f27=!![];global[_0x279088(0x21e)]=function(_0x506e31){const _0x57f1ab=_0x279088;let _0x5ca3a5=_0x4806fd('./handler');if(_0x506e31){try{global[_0x57f1ab(0x1e7)]['ws'][_0x57f1ab(0x216)]();}catch{}global['conn']={...global[_0x57f1ab(0x1e7)],..._0xbcf911[_0x57f1ab(0x1e6)](_0x33e03e)};}return!_0x207f27&&(conn['ev'][_0x57f1ab(0x1d9)](_0x57f1ab(0x208),conn[_0x57f1ab(0x214)]),conn['ev'][_0x57f1ab(0x1d9)](_0x57f1ab(0x1da),conn[_0x57f1ab(0x1e9)]),conn['ev']['off'](_0x57f1ab(0x21c),conn[_0x57f1ab(0x21f)]),conn['ev']['off'](_0x57f1ab(0x217),conn[_0x57f1ab(0x1dc)]),conn['ev'][_0x57f1ab(0x1d9)](_0x57f1ab(0x1e5),conn[_0x57f1ab(0x22b)])),conn[_0x57f1ab(0x21d)]='Selamat\x20datang\x20@user\x20di\x20group\x20@subject\x20utamakan\x20baca\x20desk\x20ya\x20\x0a@desc',conn['bye']=_0x57f1ab(0x207),conn[_0x57f1ab(0x235)]=_0x57f1ab(0x1c7),conn[_0x57f1ab(0x1f0)]='@user\x20sekarang\x20bukan\x20admin!',conn[_0x57f1ab(0x214)]=_0x5ca3a5[_0x57f1ab(0x214)][_0x57f1ab(0x229)](conn),conn['participantsUpdate']=_0x5ca3a5[_0x57f1ab(0x1e9)]['bind'](conn),conn[_0x57f1ab(0x21f)]=_0x5ca3a5[_0x57f1ab(0x1fa)][_0x57f1ab(0x229)](conn),conn[_0x57f1ab(0x1dc)]=_0x55341d[_0x57f1ab(0x229)](conn),conn[_0x57f1ab(0x22b)]=_0xeb9305[_0x57f1ab(0x229)](conn),conn['ev']['on']('messages.upsert',conn[_0x57f1ab(0x214)]),conn['ev']['on'](_0x57f1ab(0x1da),conn[_0x57f1ab(0x1e9)]),conn['ev']['on'](_0x57f1ab(0x21c),conn[_0x57f1ab(0x21f)]),conn['ev']['on']('connection.update',conn['connectionUpdate']),conn['ev']['on'](_0x57f1ab(0x1e5),conn[_0x57f1ab(0x22b)]),_0x207f27=![],!![];};let _0x3402cb=_0xb68e8f[_0x279088(0x236)](__dirname,_0x279088(0x21b)),_0x19578b=_0x423bf1=>/\.js$/[_0x279088(0x1ce)](_0x423bf1);global[_0x279088(0x21b)]={};for(let _0x4fb5ac of _0x4af03e['readdirSync'](_0x3402cb)[_0x279088(0x200)](_0x19578b)){try{global[_0x279088(0x21b)][_0x4fb5ac]=require(_0xb68e8f[_0x279088(0x236)](_0x3402cb,_0x4fb5ac));}catch(_0x177f9f){conn[_0x279088(0x22d)][_0x279088(0x1f5)](_0x177f9f),delete global[_0x279088(0x21b)][_0x4fb5ac];}}console[_0x279088(0x1e4)](Object[_0x279088(0x1c6)](global['plugins'])),global['reload']=(_0x2eaf59,_0x278a49)=>{const _0x45f8d7=_0x279088;if(_0x19578b(_0x278a49)){let _0x28ef7a=_0xb68e8f[_0x45f8d7(0x236)](_0x3402cb,_0x278a49);if(_0x28ef7a in require[_0x45f8d7(0x1e2)]){delete require[_0x45f8d7(0x1e2)][_0x28ef7a];if(_0x4af03e[_0x45f8d7(0x1fb)](_0x28ef7a))conn[_0x45f8d7(0x22d)][_0x45f8d7(0x1c1)]('re\x20-\x20require\x20plugin\x20\x27'+_0x278a49+'\x27');else return conn[_0x45f8d7(0x22d)][_0x45f8d7(0x1fe)](_0x45f8d7(0x234)+_0x278a49+'\x27'),delete global[_0x45f8d7(0x21b)][_0x278a49];}else conn['logger'][_0x45f8d7(0x1c1)](_0x45f8d7(0x22f)+_0x278a49+'\x27');let _0x43dd9e=_0x1f755f(_0x4af03e[_0x45f8d7(0x1f1)](_0x28ef7a),_0x278a49);if(_0x43dd9e)conn[_0x45f8d7(0x22d)]['error'](_0x45f8d7(0x1d6)+_0x278a49+'\x27\x0a'+_0x43dd9e);else try{global[_0x45f8d7(0x21b)][_0x278a49]=require(_0x28ef7a);}catch(_0x286a8e){conn['logger'][_0x45f8d7(0x1f5)](_0x286a8e);}finally{global[_0x45f8d7(0x21b)]=Object[_0x45f8d7(0x20a)](Object['entries'](global[_0x45f8d7(0x21b)])[_0x45f8d7(0x218)](([_0x279d75],[_0x1e7232])=>_0x279d75['localeCompare'](_0x1e7232)));}}},Object['freeze'](global[_0x279088(0x1eb)]),_0x4af03e[_0x279088(0x227)](_0xb68e8f[_0x279088(0x236)](__dirname,_0x279088(0x21b)),global[_0x279088(0x1eb)]),global[_0x279088(0x21e)]();async function _0x204e87(){const _0x423b84=_0x279088;let _0x56ce41=await Promise[_0x423b84(0x211)]([_0x5138a7['spawn'](_0x423b84(0x1cc)),_0x5138a7[_0x423b84(0x20f)](_0x423b84(0x224)),_0x5138a7[_0x423b84(0x20f)](_0x423b84(0x1cc),['-hide_banner','-loglevel','error',_0x423b84(0x1cd),_0x423b84(0x210),_0x423b84(0x1ed),'1','-f',_0x423b84(0x1e3),'-']),_0x5138a7[_0x423b84(0x20f)](_0x423b84(0x220)),_0x5138a7[_0x423b84(0x20f)](_0x423b84(0x209)),_0x5138a7['spawn']('gm'),_0x5138a7[_0x423b84(0x20f)]('find',['--version'])][_0x423b84(0x20d)](_0x117f0d=>{return Promise['race']([new Promise(_0x77c27b=>{_0x117f0d['on']('close',_0x261c26=>{_0x77c27b(_0x261c26!==0x7f);});}),new Promise(_0x4c9703=>{const _0x4eb32a=_0x337b;_0x117f0d['on'](_0x4eb32a(0x1f5),_0x4cee22=>_0x4c9703(![]));})]);})),[_0x126855,_0x49e5d0,_0x156641,_0xb9a71c,_0x3c7664,_0x5e4641,_0x549509]=_0x56ce41;console['log'](_0x56ce41);let _0x240434=global[_0x423b84(0x223)]={'ffmpeg':_0x126855,'ffprobe':_0x49e5d0,'ffmpegWebp':_0x156641,'convert':_0xb9a71c,'magick':_0x3c7664,'gm':_0x5e4641,'find':_0x549509};Object['freeze'](global[_0x423b84(0x223)]);if(!_0x240434[_0x423b84(0x1cc)])conn[_0x423b84(0x22d)][_0x423b84(0x1fe)](_0x423b84(0x202));if(_0x240434[_0x423b84(0x1cc)]&&!_0x240434[_0x423b84(0x21a)])conn[_0x423b84(0x22d)][_0x423b84(0x1fe)](_0x423b84(0x1fd));if(!_0x240434['convert']&&!_0x240434[_0x423b84(0x209)]&&!_0x240434['gm'])conn['logger'][_0x423b84(0x1fe)](_0x423b84(0x213));}_0x204e87()['then'](()=>conn['logger']['info'](_0x279088(0x232)))['catch'](_0x279088(0x1fc));})()));function _0x337b(_0x2f4673,_0x58f445){const _0x220c46=_0x220c();return _0x337b=function(_0x337b05,_0x34e47a){_0x337b05=_0x337b05-0x1c1;let _0x4c854a=_0x220c46[_0x337b05];return _0x4c854a;},_0x337b(_0x2f4673,_0x58f445);}function _0x220c(){const _0x182211=['sort','isBuffer','ffmpegWebp','plugins','message.delete','welcome','reloadHandler','onDelete','convert','APIKeys','chain','support','ffprobe','connect','output','watch','uncaughtException','bind','159836UTSyVf','credsUpdate','buttonsMessage','logger','tmp','requiring\x20new\x20plugin\x20\x27','read','./lib/mongoDB','Quick\x20Test\x20Done','env','deleted\x20plugin\x20\x27','promote','join','slice','write','info','timestamp','Safari','-amin','./lib/lowdb','keys','@user\x20sekarang\x20admin!','sessions','CONNECTING','argv','yargs/yargs','ffmpeg','-filter_complex','test','templateMessage','loadDatabase','path','resolve','readyState','62813958616959@s.whatsapp.net','READ','syntax\x20error\x20while\x20loading\x20\x27','length','DATABASE','off','group-participants.update','loggedOut','connectionUpdate','database.json','opts','469735gEPobH','9553923gxbHmv','\x5c$&','cache','webp','log','creds.update','makeWASocket','conn','sendMessage','participantsUpdate','entries','reload','API','-frames:v','lodash','‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\x5c-','demote','readFileSync','PORT','silent','parse','error','333200RNITJo','2MZpdyp','1695867bEZtSY','exitProcess','delete','existsSync','done','Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)','warn','APIs','filter','18JQnXen','Please\x20install\x20ffmpeg\x20for\x20sending\x20videos\x20(pkg\x20install\x20ffmpeg)','1030955fKxfNA','-delete','3552604wmVeZh','isInit','Selamat\x20tinggal\x20@user\x20👋','messages.upsert','magick','fromEntries','object','data','map','BOTCAHX','spawn','color','all','find','Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)','handler','pino','close','connection.update'];_0x220c=function(){return _0x182211;};return _0x220c();}
