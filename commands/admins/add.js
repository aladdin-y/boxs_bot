const aladdin_0x537ece=aladdin_0x4189;(function(_0x18d493,_0x45b001){const _0x2ff679=aladdin_0x4189,_0x2c2e55=_0x18d493();while(!![]){try{const _0x5642e7=-parseInt(_0x2ff679(0x171))/0x1*(parseInt(_0x2ff679(0x17c))/0x2)+parseInt(_0x2ff679(0x18f))/0x3*(parseInt(_0x2ff679(0x17d))/0x4)+parseInt(_0x2ff679(0x181))/0x5*(-parseInt(_0x2ff679(0x182))/0x6)+-parseInt(_0x2ff679(0x189))/0x7*(parseInt(_0x2ff679(0x179))/0x8)+-parseInt(_0x2ff679(0x17a))/0x9+parseInt(_0x2ff679(0x18e))/0xa*(-parseInt(_0x2ff679(0x188))/0xb)+parseInt(_0x2ff679(0x18d))/0xc;if(_0x5642e7===_0x45b001)break;else _0x2c2e55['push'](_0x2c2e55['shift']());}catch(_0x4a22fb){_0x2c2e55['push'](_0x2c2e55['shift']());}}}(aladdin_0x519c,0x395b2));const {Client,GatewayIntentBits,Partials,EmbedBuilder,Collection,ButtonBuilder,ActionRowBuilder,ButtonStyle,SlashCommandBuilder}=require('discord.js'),client=require(aladdin_0x537ece(0x16d)),config=client[aladdin_0x537ece(0x178)],db=client['db'];function aladdin_0x519c(){const _0x3fcb8c=['setColor','reply','5EtqBdr','user-','لا\x20يمكنك\x20اضافه\x20نقاط\x20لنفسك','set','guild','setDescription','get','config','1064gfFAdS','4164759xNddMo','add','86722whDcPL','23620OnICNL','split','forEach','mentions','204455mXFHjA','36cfDLqw','user','roles','cache','first','members','2981GiFJfe','20153CSVdbi','.points','\x20نقاط\x20الى\x20<@','globalName','18673908xJYsai','7250dvXtWX','93BbbjRX','setTitle','color','displayAvatarURL','تحديد\x20الشخص\x20الذي\x20تريد\x20الزياده\x20له','member','isNaN','اضافه\x20نقاط','setFooter','تم\x20اضافه\x20','content','الرجاء\x20وضع\x20رقم\x20صالح','../..','exports'];aladdin_0x519c=function(){return _0x3fcb8c;};return aladdin_0x519c();}function aladdin_0x4189(_0x44864e,_0x51a6b6){const _0x519ce9=aladdin_0x519c();return aladdin_0x4189=function(_0x418929,_0x4bf246){_0x418929=_0x418929-0x16c;let _0x10e768=_0x519ce9[_0x418929];return _0x10e768;},aladdin_0x4189(_0x44864e,_0x51a6b6);}module[aladdin_0x537ece(0x16e)]={'name':aladdin_0x537ece(0x17b),'description':'Check\x20bot\x27s\x20ping.','aliases':[],'cooldown':0xbb8,'userPerms':[],'botPerms':[],'run':async(_0x588068,_0x1748cb,_0x16976d)=>{const _0x4a7fec=aladdin_0x537ece;let _0x42c70a=_0x1748cb[_0x4a7fec(0x180)][_0x4a7fec(0x187)][_0x4a7fec(0x186)]()||_0x1748cb[_0x4a7fec(0x175)][_0x4a7fec(0x187)][_0x4a7fec(0x185)][_0x4a7fec(0x177)](_0x1748cb[_0x4a7fec(0x199)][_0x4a7fec(0x17e)]('\x20')[0x1]),_0x5c3670=_0x1748cb[_0x4a7fec(0x194)],_0x1acab3=![];config[_0x4a7fec(0x184)][_0x4a7fec(0x17f)](_0x51f4d8=>{const _0x2ba727=_0x4a7fec;if(_0x5c3670['roles'][_0x2ba727(0x185)]['has'](_0x51f4d8))_0x1acab3=!![];});if(_0x1acab3==![])return _0x1748cb['reply']('انت\x20لست\x20اداري');if(!_0x42c70a)return _0x1748cb[_0x4a7fec(0x170)]({'content':_0x4a7fec(0x193),'ephemeral':!![]});if(_0x42c70a['user']['id']==_0x5c3670[_0x4a7fec(0x183)]['id'])return _0x1748cb['reply']({'content':_0x4a7fec(0x173),'ephemeral':!![]});const _0x5b4bac=await db[_0x4a7fec(0x177)](_0x4a7fec(0x172)+_0x42c70a[_0x4a7fec(0x183)]['id']),_0x5458fe=_0x16976d[0x1];if(Number[_0x4a7fec(0x195)](+_0x5458fe)||!_0x5458fe)return _0x1748cb['reply']({'content':_0x4a7fec(0x16c),'ephemeral':!![]});const _0x2e76e6=new EmbedBuilder()[_0x4a7fec(0x16f)](config[_0x4a7fec(0x191)])[_0x4a7fec(0x190)](_0x4a7fec(0x196))['setThumbnail'](_0x42c70a[_0x4a7fec(0x183)]['displayAvatarURL']({'dynamic':!![],'size':0x400}))[_0x4a7fec(0x176)](_0x4a7fec(0x198)+_0x5458fe+_0x4a7fec(0x18b)+_0x42c70a[_0x4a7fec(0x183)]['id']+'>')['setTimestamp']()[_0x4a7fec(0x197)]({'text':_0x5c3670['user'][_0x4a7fec(0x18c)],'iconURL':_0x5c3670[_0x4a7fec(0x183)][_0x4a7fec(0x192)]({'dynamic':!![],'size':0x400})});!_0x5b4bac?(await db[_0x4a7fec(0x174)](_0x4a7fec(0x172)+_0x42c70a[_0x4a7fec(0x183)]['id'],{'points':_0x5458fe,'temp':0x1,'chests':0x0}),_0x1748cb['reply']({'embeds':[_0x2e76e6]})):(await db[_0x4a7fec(0x17b)](_0x4a7fec(0x172)+_0x42c70a[_0x4a7fec(0x183)]['id']+_0x4a7fec(0x18a),_0x5458fe),_0x1748cb['reply']({'embeds':[_0x2e76e6]}));}};