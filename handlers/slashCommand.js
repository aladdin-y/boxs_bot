const aladdin_0x434b95=aladdin_0xd727;(function(_0x52dec9,_0x573389){const _0x3138dc=aladdin_0xd727,_0x28dec4=_0x52dec9();while(!![]){try{const _0x5b1026=-parseInt(_0x3138dc(0x17e))/0x1*(-parseInt(_0x3138dc(0x176))/0x2)+-parseInt(_0x3138dc(0x17f))/0x3+-parseInt(_0x3138dc(0x160))/0x4*(-parseInt(_0x3138dc(0x184))/0x5)+parseInt(_0x3138dc(0x166))/0x6+parseInt(_0x3138dc(0x161))/0x7+-parseInt(_0x3138dc(0x185))/0x8*(parseInt(_0x3138dc(0x17a))/0x9)+parseInt(_0x3138dc(0x15e))/0xa*(-parseInt(_0x3138dc(0x17b))/0xb);if(_0x5b1026===_0x573389)break;else _0x28dec4['push'](_0x28dec4['shift']());}catch(_0x3a0e3b){_0x28dec4['push'](_0x28dec4['shift']());}}}(aladdin_0x6e07,0x2af4a));const fs=require('fs'),chalk=require(aladdin_0x434b95(0x188)),{PermissionsBitField}=require('discord.js'),{Routes}=require(aladdin_0x434b95(0x175)),{REST}=require(aladdin_0x434b95(0x16f)),client=require('..'),config=client[aladdin_0x434b95(0x173)],AsciiTable=require('ascii-table'),table=new AsciiTable(aladdin_0x434b95(0x16d))[aladdin_0x434b95(0x170)](aladdin_0x434b95(0x182),'\x20Stats\x20')[aladdin_0x434b95(0x17c)]('∥','⩶','■','■'),TOKEN=config[aladdin_0x434b95(0x186)],CLIENT_ID=config[aladdin_0x434b95(0x15d)],rest=new REST({'version':'9'})[aladdin_0x434b95(0x171)](TOKEN);function aladdin_0xd727(_0x289b67,_0xa03748){const _0x6e077e=aladdin_0x6e07();return aladdin_0xd727=function(_0xd727a5,_0xc526b0){_0xd727a5=_0xd727a5-0x15d;let _0xe231a3=_0x6e077e[_0xd727a5];return _0xe231a3;},aladdin_0xd727(_0x289b67,_0xa03748);}function aladdin_0x6e07(){const _0x5cd714=['22887fYcQPo','default_member_permissions','red','\x20Slash\x20Commands\x20\x20','toString','25sVDUIL','24fSdGeC','token','endsWith','chalk','.js','CLIENT_ID','580330MeNNTe','resolve','25164nwWmab','2361891tdRbqx','name','forEach','put','yellow','1936260vySbZd','filter','applicationCommands','description','set','options','log','Aladdin\x20love\x20you','readdirSync','@discordjs/rest','setHeading','setToken','default_permission','config','addRow','discord-api-types/v9','732LEbKKU','split','slashCommands','Slash\x20Commands\x20•\x20Registered','100341MXzvjx','110btfUVL','setBorder','push','289ZVqCHr'];aladdin_0x6e07=function(){return _0x5cd714;};return aladdin_0x6e07();}module['exports']=_0x221415=>{const _0x33d510=aladdin_0x434b95,_0x596b4e=[];fs[_0x33d510(0x16e)]('./slashCommands/')[_0x33d510(0x163)](async _0x143ee0=>{const _0x15d62e=_0x33d510,_0xb1bbbf=fs[_0x15d62e(0x16e)]('./slashCommands/'+_0x143ee0+'/')[_0x15d62e(0x167)](_0x7ec50d=>_0x7ec50d[_0x15d62e(0x187)](_0x15d62e(0x189)));for(const _0x497c75 of _0xb1bbbf){const _0x186890=require('../slashCommands/'+_0x143ee0+'/'+_0x497c75);_0x596b4e[_0x15d62e(0x17d)]({'name':_0x186890[_0x15d62e(0x162)],'description':_0x186890[_0x15d62e(0x169)],'type':_0x186890['type'],'options':_0x186890[_0x15d62e(0x16b)]?_0x186890['options']:null,'default_permission':_0x186890[_0x15d62e(0x172)]?_0x186890[_0x15d62e(0x172)]:null,'default_member_permissions':_0x186890['default_member_permissions']?PermissionsBitField[_0x15d62e(0x15f)](_0x186890[_0x15d62e(0x180)])['toString']():null}),_0x186890[_0x15d62e(0x162)]?(_0x221415[_0x15d62e(0x178)][_0x15d62e(0x16a)](_0x186890['name'],_0x186890),table['addRow'](_0x497c75['split'](_0x15d62e(0x189))[0x0],'✅')):table[_0x15d62e(0x174)](_0x497c75[_0x15d62e(0x177)]('.js')[0x0],'⛔');}}),console[_0x33d510(0x16c)](chalk[_0x33d510(0x181)](table[_0x33d510(0x183)]())),((async()=>{const _0x4533b5=_0x33d510;try{await rest[_0x4533b5(0x164)](Routes[_0x4533b5(0x168)](CLIENT_ID),{'body':_0x596b4e}),console['log'](chalk[_0x4533b5(0x165)](_0x4533b5(0x179)));}catch(_0xd82e16){console['log'](_0xd82e16);}})());};