function aladdin_0x4f48(_0x33dd8c,_0x1de4c6){const _0x10882b=aladdin_0x1088();return aladdin_0x4f48=function(_0x4f48c2,_0x41bbba){_0x4f48c2=_0x4f48c2-0x101;let _0x1a96a9=_0x10882b[_0x4f48c2];return _0x1a96a9;},aladdin_0x4f48(_0x33dd8c,_0x1de4c6);}const aladdin_0x325119=aladdin_0x4f48;(function(_0x3eacb4,_0x53a3fb){const _0x35efbf=aladdin_0x4f48,_0x527ef6=_0x3eacb4();while(!![]){try{const _0x5d030d=parseInt(_0x35efbf(0x10a))/0x1+-parseInt(_0x35efbf(0x109))/0x2*(-parseInt(_0x35efbf(0x10e))/0x3)+parseInt(_0x35efbf(0x116))/0x4+parseInt(_0x35efbf(0x113))/0x5+parseInt(_0x35efbf(0x102))/0x6*(-parseInt(_0x35efbf(0x115))/0x7)+parseInt(_0x35efbf(0x10d))/0x8+-parseInt(_0x35efbf(0x108))/0x9;if(_0x5d030d===_0x53a3fb)break;else _0x527ef6['push'](_0x527ef6['shift']());}catch(_0x2b4f03){_0x527ef6['push'](_0x527ef6['shift']());}}}(aladdin_0x1088,0xafc13));const {EmbedBuilder,Collection,PermissionsBitField}=require(aladdin_0x325119(0x10b)),ms=require('ms'),client=require('..'),config=client['config'],db=client['db'],prefix=client[aladdin_0x325119(0x110)],cooldown=new Collection();function aladdin_0x1088(){const _0xc86db2=['points','3160073XhsgJH','243100lBcZQs','.points','6RSLMPu','get','user-','madd','req','.temp','17726121Fuxdpn','1405586akttIU','827653coujEq','discord.js','bot','1488872RZbhqa','3bhKihn','temp','prefix','set','author','6817845zOmnIO'];aladdin_0x1088=function(){return _0xc86db2;};return aladdin_0x1088();}client['on']('messageCreate',async _0x49422c=>{const _0x47ad3f=aladdin_0x325119;if(_0x49422c['author'][_0x47ad3f(0x10c)])return;const _0x169957=await db[_0x47ad3f(0x103)](_0x47ad3f(0x104)+_0x49422c[_0x47ad3f(0x112)]['id']);!_0x169957?await db['set'](_0x47ad3f(0x104)+_0x49422c[_0x47ad3f(0x112)]['id'],{'points':0x0,'temp':0x1,'chests':0x0}):(await db['add']('user-'+_0x49422c[_0x47ad3f(0x112)]['id']+'.temp',0x1),_0x169957[_0x47ad3f(0x10f)]>=config[_0x47ad3f(0x114)][_0x47ad3f(0x106)]&&(await db['add'](_0x47ad3f(0x104)+_0x49422c[_0x47ad3f(0x112)]['id']+_0x47ad3f(0x101),config[_0x47ad3f(0x114)][_0x47ad3f(0x105)]),await db[_0x47ad3f(0x111)](_0x47ad3f(0x104)+_0x49422c['author']['id']+_0x47ad3f(0x107),0x0)));});