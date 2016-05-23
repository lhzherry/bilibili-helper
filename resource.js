var version = "v" + chrome.app.getDetails().version;
	var general = "#bofqi.wide .player{width:980px}.arc-toolbar .helper{padding:0 14px;border-right:none;position:relative;font-size:10px;cursor:pointer;transition:.2s all ease-in;border-left:1px solid transparent;border-right:1px solid transparent}.arc-toolbar .helper:hover{color:#00a1d6}@media screen and (max-width: 1400px) {.arc-toolbar .block{padding: 0 12px}}.arc-toolbar .helper .t{height:80px}.arc-toolbar .helper .t .icon{width:60px;height:60px;display:inline-block;background-image:url(" + chrome.extension.getURL("imgs/helper-neko.png") + ");background-size:600px 60px;position:absolute;top:10px;left:0;-webkit-animation:moving-neko 10s steps(3, end) infinite;-webkit-animation-fill-mode:forwards}.arc-toolbar .helper:hover .icon{-webkit-animation:eating-neko 1s steps(9, end) infinite}.arc-toolbar .helper .info{position:absolute;cursor:default;transition:.2s all ease-in;opacity:0;box-shadow:rgba(0,0,0,0.16) 0 2px 4px;position:absolute;background:#fff;top:70px;left:-1px;z-index:100;cursor:default;line-height:normal;width:310px;border:1px solid #e5e9ef;border-top:0;border-radius:0 0 4px 4px;pointer-events:none;}.arc-toolbar .helper.active{border-radius:4px 0 0 0;border-left:1px solid #e5e9ef;border-right:1px solid #e5e9ef;box-shadow:rgba(0,0,0,0.16) 0 2px 4px;}.arc-toolbar .helper.active .info{opacity:1;pointer-events:auto;top:80px}.arc-toolbar .helper .info .main{padding:12px;line-height:24px;font-size:12px;color:#444;}.arc-toolbar .helper .info .main .section h3{font-weight:500}.arc-toolbar .helper .info .main .section p{color:#666}.arc-toolbar .helper .info .main .section p span{margin-right:8px;font-size:12px}.arc-toolbar .helper .info .main .hidden{display:none!important}.arc-toolbar .helper .info .main .section a.b-btn{padding:4px 6px;line-height:14px;display:inline-block;margin:4px}.arc-toolbar .helper .info .main .section.query > p > div{margin-left:4px;}.arc-toolbar .helper .info .main .section.query .b-input{width:260px;}.arc-toolbar .helper .info .main .section.query .b-slt{padding:2px 7px;width:256px;position:relative}.arc-toolbar .helper .info .main .section.query .b-slt .txt{margin-top:-3px;width:230px;text-align:left}.arc-toolbar .helper .info .main .section.query .b-slt .kw{color:#f25d8e;margin-right:0;font-weight:bold;vertical-align:baseline}.arc-toolbar .helper .info .main .section.query .b-slt .list{width:100%;max-height:200px;margin-top:4px}.arc-toolbar .helper .info .main .section.query .b-slt .list li{width:260px}.arc-toolbar .helper .info .version{height:30px;line-height:30px;width:100%;text-align:center;border-top:solid 1px #ddd;color:#444}.arc-toolbar .helper .version .setting{display:inline-block;margin-left:24px;height:18px;width:40px;line-height:18px;}#helper_aera{width:240px;float:right;padding:0px 10px;}.titleNumber{cursor:pointer;text-decoration:underline;color:#1184B4;}#loading-notice{position:absolute;z-index:1000;left:50%;top:50%;width:260px;height:32px;margin-top:-66px;margin-left:-130px;line-height:20px;font-size:15px;background-image:url(" + chrome.extension.getURL("imgs/loading.gif") + ");background-repeat:no-repeat;background-position:6px 16px;padding-top:100px;text-align:center;background-color:#fff;border-radius:2px;box-shadow:0 1px 2px rgba(0,0,0,.3);transition:all .2s ease-in;}#loading-notice:hover{box-shadow:0 5px 10px rgba(0,0,0,.3);}#cancel-replacing{margin-left:20px;font-size:12px;border:solid 1px #7E0000;padding:2px 5px;vertical-align:bottom;border-radius:1px;cursor:pointer;color:#fff;background-color:#910000;background-image:-webkit-gradient(linear,0 0,0 bottom,from(#CF0000),to(#910000));background-repeat:no-repeat;}#cancel-replacing:hover{background-position-y:-8px}#cancel-replacing:active{background-position-y:-8px;box-shadow:inset 1px 1px 2px rgba(0,0,0,.2),inset 0 4px 4px rgba(0,0,0,.15);}@-webkit-keyframes eating-neko{from{background-position-x:0px}to{background-position-x:-540px}}@-webkit-keyframes moving-neko{0%{background-position-x:180px}50%{background-position-x:360px}100%{background-position-x:180px}}#quiz_helper{position:relative;overflow: hidden;}#quiz_helper.hide{height:0;}#quiz-control-panel .quiz_helper{position:relative;margin-bottom:29px;}#quiz-control-panel .quiz_helper span{position: absolute;top: 6px;left: 0px;color: #222;}#quiz-control-panel input.error{border-color:#FF6767;}#quiz-control-panel input{width: 80%;display: block;border: 1px solid #aaa;border-radius: 7px;margin: 0 0 0 40px;padding: 5px;box-sizing: border-box;}#quiz-control-panel .quiz_helper .rate{width: 130px;display: inline;text-align: center;height: 29px;line-height: 29px;}#quiz-control-panel .quiz_helper .rate:after{content:'\u4f7f\u7528\u65b9\u5411\u952e\u201c\u2190\u201d\u548c\u201c\u2192\u201d\u8fdb\u884c\u5fae\u8c03';font-size:10px;position:absolute;left:0;top:22px;}#quiz-control-panel .quiz_helper .msg{font-size:10px;position:absolute;left:40px;top:32px;color:#6F6D6D;}#quiz_helper >*.hide{position:absolute;top:0;display:none;}#quiz-control-panel .bet_toggle{position: absolute;top:1px;right:-10px;padding:0 5px;color: #FFFFFF;background-color:#aaa;border-radius: 4px;cursor: pointer;}#quiz-control-panel .bet_toggle.on{background-color:#4fc1e9;}.bet-buy-btns{overflow:hidden;height:27px;transition: all cubic-bezier(.22,.58,.12,.98) .4s;}.bet-buy-btns.hide{height:0;}.live-room-body.player-full-win #room-left-sidebar{display:block;transform: translate(-60px,0);}.live-room-body.player-full-win .sidebar-left-open #room-left-sidebar{transform: translate(160px,0);}.live-room-body.player-full-win #room-left-sidebar .toggle-btn{transform:translate(60px,0);}.live-room-body.player-full-win .sidebar-left-open #room-left-sidebar .toggle-btn{transform:rotate(90deg) translate(80px,-60px);}#gift-panel .version{color:#444;font-size:12px;}#gift-panel .version a{outline:0;color:#4fc1e9;text-decoration:none;cursor:pointer;}#gift-panel .version a:hover{color:#f25d8e;}.quiz-panel{overflow:hidden;margin:10px 0 0;}.quiz-panel h4{font-size:17px;margin:0;float:left;}.quiz-panel .blue-box h4{float:left;}.quiz-panel .red-box h4{float:right;}.quiz-panel .blue-box .rate{float:right;border:1px solid #4FC1E9;}.quiz-panel .red-box .rate{float:left;}.quiz-panel .rate{background-color:rgba(255,255,255,0.25);display:block;width:14px;text-align:center;height:21px;line-height:23px;border:1px solid rgba(255,255,255,0.5);padding:0 5px 0 3px;border-radius:8px;cursor:pointer;font-family:-webkit-pictograph;}.quiz-panel .red-box .rate{border:1px solid #FD9CCC;}.quiz-panel .count{overflow:hidden;padding:5px;border-bottom:1px solid #E2E2E2;position:relative;}.quiz-panel .count:last-child{border-bottom:none;}.quiz-panel .blue-box{overflow:hidden;border-radius:8px;width:90px;float:left;border:1px solid #4FC1E9;border-left:5px solid #4FC1E9;color:#4C4C4C;}.quiz-panel .red-box{overflow:hidden;border-radius:8px;width:90px;float:right;border:1px solid #FD9CCC;border-right:5px solid #FD9CCC;color:#4C4C4C;}#quiz-control-panel .quiz_helper .rate_n{right:0px;top:0;left:auto;position:absolute;width:20px;line-height:33px;text-align:center;margin-bottom:7px;}#quiz_helper .sum-sbox{}#quiz_helper .sum-sbox .blue-sum-sbox{}#quiz_helper .sum-sbox .red-sum-sbox{}.blue-box .wait{color:#4FC1E9;background-color:rgba(79,193,233,0.15);}.red-box .wait{background-color:rgba(253,156,204,0.15);color:#FD9CCC;}.quiz-panel .success{color: #FFFFFF;background-color:#64D07D;}.quiz-panel .success .rate{border-color:#ffffff;}.quiz-panel .error{color:#FFFFFF;background-color:#E74E8F;}.quiz-panel .count.run{background-image: -webkit-gradient(linear,0 0,100% 100%,color-stop(.25,#B6E2C1),color-stop(.25,transparent),color-stop(.5,transparent),color-stop(.5,#B6E2C1),color-stop(.75,#B6E2C1),color-stop(.75,transparent),to(transparent));-webkit-animation: move 3s linear infinite;background-size: 50px 50px;}.quiz-panel .error .rate{border-color:#ffffff;}.quiz-panel .hide{height:0;padding:0;border:none;}@-webkit-keyframes move{0%{background-position:0 0;}100% {background-position: 50px 50px;}}#quiz_helper .count .menu{width: 90px;height:33px;position:absolute;margin:-5px;background-color:rgba(255,254,254,0.5);border-radius:4px;overflow: hidden;transition:all ease-in-out .6s;}#quiz_helper .count .menu span{cursor:pointer;float:left;width:23px;height:23px;padding:0;background-color:#FF4B4B;border-radius:25%;transition:all .3s;margin:5px 5px 5px 0;}#quiz_helper .blue-box .count .menu span{float:right;margin:5px 0px 5px 5px;}#quiz_helper .count .menu span:hover{background-color:#FF0000;}#quiz_helper .count .menu span:first-child{margin:5px;}#quiz_helper .blue-box .count .menu{right:-85px;}#quiz_helper .red-box .count .menu{left:-85px;}#quiz_helper .blue-box .count:hover .menu{right: 5px;}#quiz_helper .red-box .count:hover .menu{left: 5px;}#quiz_helper .count .menu .cancel{background-image: url(chrome-extension://kpbnombpnpcffllnianjibmpadjolanh/imgs/menu-icon.png);background-repeat: no-repeat;background-position:-16px 5px;background-size: 127px;}#quiz_helper .count .menu .run{background-image: url(chrome-extension://kpbnombpnpcffllnianjibmpadjolanh/imgs/menu-icon.png);background-repeat:no-repeat;background-position:-55px 5px;background-size: 127px;}#quiz_helper .count .menu .reset{background-image:url(chrome-extension://kpbnombpnpcffllnianjibmpadjolanh/imgs/menu-icon.png);background-repeat: no-repeat;background-position:-36px 5px;background-size: 127px;}#quiz_helper .count .menu .delete{background-image:url(chrome-extension://kpbnombpnpcffllnianjibmpadjolanh/imgs/menu-icon.png);background-repeat:no-repeat;background-position:-16px 5px;background-size: 127px;}#head-info-panel .treasure-info{padding:10px;background-color:#fff;position:absolute;right:calc(100% + 5px);width:38px;border-radius:5px;border:1px solid #ddd;box-sizing:border-box;}#head-info-panel .treasure-info a{outline:0;color:#4fc1e9;text-decoration:none;cursor:pointer;display:inline-block;}#head-info-panel .treasure-info a:hover{color:#f25d8e;}";
var abplayer = "@font-face{font-family:bilibili-helper;src:url(" + chrome.extension.getURL("bilibili-helper.woff") + ");font-weight:400;font-style:normal}[class*=\" icon-\"],[class^=icon-]{font-family:bilibili-helper;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased}.icon-font-style:before{content:\"\\e60a\"}.icon-color-mode:before{content:\"\\f065\"}.icon-comment:before{content:\"\\f02b\"}.icon-gear:before{content:\"\\f02f\"}.icon-screen-full:before{content:\"\\f066\"}.icon-screen-normal:before{content:\"\\f067\"}.icon-screen:before{content:\"\\e600\"}.icon-tv:before{content:\"\\e609\"}.icon-play:before{content:\"\\e602\"}.icon-pause:before{content:\"\\e603\"}.icon-volume-high:before{content:\"\\e604\"}.icon-volume-medium:before{content:\"\\e605\"}.icon-volume-low:before{content:\"\\e606\"}.icon-volume-mute:before{content:\"\\e607\"}.icon-volume-mute2:before{content:\"\\e608\"}.icon-loop:before{content:\"\\e601\"}.ABP-Unit{font-family:Helvetica,Arial,\"Source Han Sans CN\",\"Hiragino Sans GB\",\"Microsoft Yahei\",\"Microsoft Jhenghei\",STHeiti,verdana,sans-serif;position:relative;color:#444;background:#fff;font-size:16px;outline:0}.ABP-Unit.ABP-FullScreen{top:0;left:0;right:0;bottom:0;width:auto!important;height:auto!important;position:fixed;z-index:100000}.ABP-Unit .ABP-Player{position:relative;width:-webkit-calc(100% - 300px);width:calc(100% - 300px);height:100%}.ABP-Unit.ABP-FullScreen .ABP-Player,.ABP-Unit.ABP-Mini .ABP-Player,.ABP-Unit.ABP-WideScreen .ABP-Player{width:100%}.ABP-Unit .ABP-Video{position:absolute;overflow:hidden;top:0;left:0;right:0;bottom:43px;background:#000;outline:0;cursor:pointer}.ABP-Unit .ABP-Video.ABP-HideCursor{cursor:none}.ABP-Unit.ABP-FullScreen .ABP-Video{bottom:0}.ABP-Unit.ABP-Mini .ABP-Video{bottom:22px}.ABP-Unit .ABP-Video video{width:100%;height:100%}.ABP-Unit .ABP-Video .ABP-Container{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);position:absolute;display:block;overflow:hidden;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform-origin:0 0;margin:0;border:0;top:0;left:0;bottom:0;right:0;touch-callout:none;-webkit-user-select:none}.ABP-Unit .ABP-Video .ABP-Container .cmt{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);position:absolute;margin-top:3px;color:#fff;font-family:\"Helvetica Neue\",Helvetica,\"Nimbus Sans L\",Arial,\"Liberation Sans\",\"PingFang SC\",\"Hiragino Sans GB\",\"Source Han Sans CN\",\"Source Han Sans SC\",\"Microsoft YaHei\",\"Wenquanyi Micro Hei\",\"WenQuanYi Zen Hei\",\"ST Heiti\",SimHei,\"WenQuanYi Zen Hei Sharp\",sans-serif;font-size:25px;font-weight:500;text-decoration:none;-webkit-text-size-adjust:none;line-height:100%;letter-spacing:0;word-break:keep-all;white-space:pre}.ABP-Unit .ABP-Video .ABP-Container .cmt::after{content:attr(content);display:inline-block;position:absolute;left:0;vertical-align:middle;color:#000;-webkit-text-stroke:2px #000;z-index:-1}.ABP-Unit .ABP-Video .ABP-Container .cmt.noshadow::after{content:\"\";display:none}.ABP-Unit .ABP-Video .ABP-Container .cmt.rshadow::after{-webkit-text-stroke:1px #fff}.ABP-Unit .ABP-Bottom{-webkit-transition:opacity .1s linear;transition:opacity .1s linear}.ABP-Unit.ABP-FullScreen .ABP-Bottom{opacity:0}.ABP-Unit.ABP-FullScreen .ABP-Bottom:hover{opacity:1}#ABP-Tooltip{position:absolute;font-size:10px;height:14px;color:#444;line-height:14px;background:rgba(255,255,255,.9);padding:2px 4px;white-space:nowrap;border-radius:2px;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.4);box-shadow:0 3px 6px rgba(0,0,0,.4);pointer-events:none;-webkit-user-select:none}.ABP-Unit .ABP-Text{position:absolute;bottom:0;left:0;right:0;background:#fff;height:20px;padding:0;border:1px solid #ececec}.ABP-Unit.ABP-Mini .ABP-Text{display:none}.ABP-Unit .button,.ABP-Unit .button-group{position:absolute;color:#a2a2a2;width:25px;text-align:center;line-height:20px;top:0;bottom:0;cursor:pointer;-webkit-transition:opacity .1s linear,color .1s linear;transition:opacity .1s linear,color .1s linear}.ABP-Unit .ABP-FullScreenGroup .ABP-Web-FullScreen{position:absolute;top:-22px;height:20px;outline:#ececec solid 1px;outline-bottom:none;background:#fff;opacity:0;margin-bottom:1px;pointer-events:none}.ABP-Unit.ABP-FullScreen .ABP-FullScreenGroup .ABP-Web-FullScreen{display:none}.ABP-Unit .ABP-FullScreenGroup .ABP-Web-FullScreen::after{content:\" \";position:absolute;left:0;bottom:-2px;height:2px;width:100%}.ABP-Unit .ABP-FullScreenGroup:hover .ABP-Web-FullScreen{opacity:1;pointer-events:auto}.ABP-Unit .button.on{color:#585858}.ABP-Unit .button:hover{color:#f45a8d}.ABP-Unit .button:active{outline:#0085b3 solid 1px;color:#fff;cursor:pointer;background-color:#00a1d8}.ABP-Unit .ABP-CommentStyle{width:80px;border-right:solid 1px #ececec}.ABP-Unit .ABP-CommentStyle .button,.ABP-Unit .ABP-CommentStyle .button-group{width:40px}.ABP-Unit .ABP-CommentStyle .ABP-Comment-FontGroup{left:0}.ABP-Unit .ABP-CommentStyle .ABP-Comment-Color-Display{position:absolute;width:12px;height:12px;top:4px;left:14px;background-color:#FFF}.ABP-Unit .ABP-CommentStyle .ABP-Comment-FontGroup .ABP-Comment-FontOption{width:200px;height:140px;background:rgba(255,255,255,.9);position:absolute;padding:10px;left:5px;bottom:25px;border-radius:5px;-webkit-box-shadow:0 0 10px rgba(0,0,0,.2);box-shadow:0 0 10px rgba(0,0,0,.2);-webkit-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out;pointer-events:none;z-index:1;opacity:0;cursor:auto}.ABP-Unit .ABP-CommentStyle .ABP-Comment-FontOption .style-title{margin:0;text-align:left;color:#666;font-weight:700;font-size:12px}.ABP-Unit .ABP-CommentStyle .ABP-Comment-FontOption .style-option{position:relative;display:inline-block;vertical-align:middle;height:40px;line-height:64px;width:56px;font-size:10px;border-radius:5px;margin:4px 2px;border:2px solid;cursor:pointer;-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out}.ABP-Unit .ABP-CommentStyle .ABP-Comment-FontOption .style-option:hover{color:#666}.ABP-Unit .ABP-CommentStyle .ABP-Comment-FontOption .style-option.on{color:#FFF;background-color:#666;border-color:#666}.ABP-Unit .ABP-CommentStyle .ABP-Comment-FontOption .style-option::after{position:absolute;left:0;top:0;width:100%;line-height:30px}.ABP-Unit .ABP-CommentStyle .ABP-Comment-FontOption .style-select[name=commentFontSize] .style-option[value=\"18\"]::after{content:\"A\";font-size:18px}.ABP-Unit .ABP-CommentStyle .ABP-Comment-FontOption .style-select[name=commentFontSize] .style-option[value=\"25\"]::after{content:\"A\";font-size:25px}.ABP-Unit .ABP-CommentStyle .ABP-Comment-FontOption .style-select[name=commentMode] .style-option::after{content:\"\\258a\\258a\\258a\";font-size:6px;line-height:8px}.ABP-Unit .ABP-CommentStyle .ABP-Comment-FontOption .style-select[name=commentMode] .style-option[value=\"5\"]::after{top:4px}.ABP-Unit .ABP-CommentStyle .ABP-Comment-FontOption .style-select[name=commentMode] .style-option[value=\"1\"]::after{white-space:pre;content:\"\\25c0 \\258a\\258a\\258a        \\A        \\25c0 \\258a\\258a\\258a\";font-size:6px;line-height:8px;top:6px}.ABP-Unit .ABP-CommentStyle .ABP-Comment-FontOption .style-select[name=commentMode] .style-option[value=\"4\"]::after{top:16px}.ABP-Unit .ABP-CommentStyle .ABP-Comment-ColorGroup{left:40px}.ABP-Unit .ABP-CommentStyle .ABP-Comment-ColorGroup .ABP-Comment-ColorOption{width:347px;height:170px;background:rgba(255,255,255,.9);position:absolute;left:5px;bottom:25px;border-radius:5px;-webkit-box-shadow:0 0 10px rgba(0,0,0,.2);box-shadow:0 0 10px rgba(0,0,0,.2);-webkit-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out;pointer-events:none;z-index:1;opacity:0;cursor:auto}.ABP-Unit .ABP-CommentStyle .ABP-Comment-ColorGroup.on .ABP-Comment-ColorOption,.ABP-Unit .ABP-CommentStyle .ABP-Comment-FontGroup.on .ABP-Comment-FontOption{pointer-events:auto;opacity:1}.ABP-Unit .ABP-Text input.ABP-Comment-Input{position:absolute;color:#666;width:-webkit-calc(100% - 148px);width:calc(100% - 148px);-webkit-box-shadow:inset 0 5px 10px rgba(0,0,0,.07);box-shadow:inset 0 5px 10px rgba(0,0,0,.07);height:16px;border:0;left:80px;outline:0;padding:2px 4px;-webkit-transition:-webkit-box-shadow .2s ease-in-out;transition:box-shadow .2s ease-in-out}.ABP-Unit .ABP-Text input.ABP-Comment-Input:focus{-webkit-box-shadow:inset 0 5px 5px rgba(0,0,0,.1);box-shadow:inset 0 5px 5px rgba(0,0,0,.1)}.ABP-Unit .ABP-Text input.ABP-Comment-Input[disabled]{background-color:#ddd;-webkit-box-shadow:none;box-shadow:none}.ABP-Unit .ABP-Text input.ABP-Comment-Input[disabled]+.ABP-Comment-Send{background-color:#0085b3;opacity:.3}.ABP-Unit .ABP-Text .ABP-Comment-Send{position:absolute;color:#fff;font-size:12px;text-align:center;right:-1px;width:60px;height:20px;line-height:22px;border:1px solid #0085b3;border-top:none;cursor:pointer;background-color:#00a1d8;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.ABP-Unit .ABP-Text .ABP-Comment-Send:hover{background-color:#00ace3}.ABP-Unit .ABP-Text .ABP-Comment-Send:active{background-color:#00a1d8;-webkit-box-shadow:inset 0 0 5px #0085b3;box-shadow:inset 0 0 5px #0085b3}.ABP-Unit .ABP-Control{position:absolute;bottom:21px;left:0;right:0;background:#fff;border:1px solid #ececec;height:20px;-webkit-user-select:none;font-size:14px}.ABP-Unit.ABP-Mini .ABP-Control{bottom:0}.ABP-Unit .ABP-Control .button.ABP-Play{width:35px}.ABP-Unit .ABP-Control .ABP-Play{left:0}.ABP-Unit .ABP-Control .ABP-FullScreenGroup{right:0}.ABP-Unit .ABP-Control .ABP-CommentGroup{top:0;right:75px;bottom:0}.ABP-Unit .ABP-Control .ABP-CommentGroup .ABP-CommentOption{width:120px;height:70px;padding:10px;background:rgba(255,255,255,.9);position:absolute;left:-68px;bottom:25px;border-radius:5px;-webkit-box-shadow:0 0 10px rgba(0,0,0,.2);box-shadow:0 0 10px rgba(0,0,0,.2);-webkit-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out;pointer-events:none;opacity:0}.ABP-Unit .ABP-Control .ABP-CommentGroup .ABP-CommentOption .label{margin:0;text-align:left;color:#666;font-weight:700;font-size:12px}.ABP-Unit .ABP-Control .ABP-CommentGroup .ABP-CommentOption .opacity-bar,.ABP-Unit .ABP-Control .ABP-CommentGroup .ABP-CommentOption .scale-bar{position:relative;height:10px;margin-bottom:8px}.ABP-Unit .ABP-Control .ABP-CommentGroup .ABP-CommentOption .scale-bar{width:90px}.ABP-Unit .ABP-Control .ABP-CommentGroup .ABP-CommentOption .prop-checkbox{position:absolute;top:18px;right:12px;width:16px;height:16px;border-radius:5px;background-color:#ccc;border:2px solid #949494;cursor:pointer;-webkit-transition:all .1s ease-in-out;transition:all .1s ease-in-out}.ABP-Unit .ABP-Control .ABP-CommentGroup .ABP-CommentOption .prop-checkbox:hover{background-color:#ddd}.ABP-Unit .ABP-Control .ABP-CommentGroup .ABP-CommentOption .prop-checkbox.on{border-color:#00a0d8;background-color:#ddd}.ABP-Unit .ABP-Control .ABP-CommentGroup .ABP-CommentOption .prop-checkbox.on::after{content:\"\";background-color:#00a0d8;position:absolute;left:2px;top:2px;border-radius:2px;width:12px;height:12px}.ABP-Unit .ABP-Control .ABP-CommentGroup .ABP-CommentOption .opacity-bar .bar,.ABP-Unit .ABP-Control .ABP-CommentGroup .ABP-CommentOption .scale-bar .bar{width:100%;top:2px;left:0}.ABP-Unit .ABP-Control .ABP-CommentGroup .ABP-CommentOption::after{content:\" \";position:absolute;left:0;bottom:-5px;height:5px;width:100%}.ABP-Unit .ABP-Control .ABP-CommentGroup:active .ABP-CommentShow.on+.ABP-CommentOption,.ABP-Unit .ABP-Control .ABP-CommentGroup:hover .ABP-CommentShow.on+.ABP-CommentOption{pointer-events:auto;opacity:1;cursor:default}.ABP-Unit.ABP-FullScreen .ABP-Control .ABP-CommentGroup,.ABP-Unit.ABP-Mini .ABP-Control .ABP-CommentGroup{right:50px}.ABP-Unit .ABP-Control .ABP-Volume{top:0;right:165px;bottom:0}.ABP-Unit.ABP-FullScreen .ABP-Control .ABP-Volume{right:140px}.ABP-Unit.ABP-Mini .ABP-Control .ABP-Volume{right:75px}.ABP-Unit .ABP-Control .ABP-Loop{top:0;right:50px;bottom:0}.ABP-Unit.ABP-FullScreen .ABP-Control .ABP-Loop,.ABP-Unit.ABP-Mini .ABP-Control .ABP-Loop{right:25px}.ABP-Unit .ABP-Control .ABP-WideScreen{top:0;right:25px;bottom:0}.ABP-Unit.ABP-FullScreen .ABP-Control .ABP-WideScreen,.ABP-Unit.ABP-Mini .ABP-Control .ABP-WideScreen{display:none}.ABP-Unit .ABP-Control .progress-bar{position:absolute;overflow:hidden;cursor:default;top:0;bottom:0;left:35px;background:#fff;border-left:1px solid #ececec;width:-webkit-calc(100% - 295px);width:calc(100% - 295px)}.ABP-Unit.ABP-FullScreen .ABP-Control .progress-bar{width:-webkit-calc(100% - 270px);width:calc(100% - 270px)}.ABP-Unit.ABP-Mini .ABP-Control .progress-bar{width:-webkit-calc(100% - 200px);width:calc(100% - 200px)}.ABP-Unit .ABP-Control .volume-bar{position:absolute;top:0;right:93px;bottom:0;width:80px}.ABP-Unit.ABP-FullScreen .ABP-Control .volume-bar{right:68px}.ABP-Unit.ABP-Mini .ABP-Control .volume-bar{display:none}.ABP-Unit .ABP-Control .bar{cursor:pointer;width:-webkit-calc(100% - 20px);width:calc(100% - 20px);position:absolute;left:10px;top:7px;bottom:0;height:6px;background:#949494;border-radius:6px}.ABP-Unit .ABP-Control .bar::after{content:\"\";width:100%;height:18px;background-color:rgba(255,255,255,0);position:absolute;top:-6px;left:0}.ABP-Unit .ABP-Control .bar .dark,.ABP-Unit .ABP-Control .bar .load{position:absolute;height:0;height:100%;border-radius:6px}.ABP-Unit .ABP-Control .bar .load{background:#00a0d8}.ABP-Unit .ABP-Control .bar .dark{background:#007bb1}.ABP-Unit .ABP-Control .bar .dark:before{position:absolute;top:-3px;right:-6px;width:12px;height:12px;background-color:#fff;border-radius:12px;-webkit-box-shadow:0 0 1px rgba(0,0,0,.5);box-shadow:0 0 1px rgba(0,0,0,.5);content:\"\";cursor:pointer}.ABP-Unit .ABP-Control .bar .dark::after{position:absolute;right:-3px;width:6px;height:6px;background-color:#009fd6;border-radius:6px;-webkit-box-shadow:inset 0 0 1px rgba(0,0,0,.5);box-shadow:inset 0 0 1px rgba(0,0,0,.5);content:\"\";cursor:pointer}.ABP-Unit .ABP-Control .time-label{width:86px;font-size:11px;position:absolute;right:184px;text-align:center;line-height:22px;height:20px}.ABP-Unit.ABP-FullScreen .time-label{right:162px}.ABP-Unit.ABP-Mini .time-label{right:94px}.ABP-Unit .ABP-Control .time-jump{position:absolute;right:188px;height:15px;width:74px;outline:0;border:1px solid #ccc;text-align:center}.ABP-Unit.ABP-Mini .ABP-Control .time-jump{right:96px}.ABP-Unit.ABP-FullScreen .ABP-Control .time-jump{right:163px}.ABP-Unit .ABP-Popup{position:absolute;background:rgba(255,255,255,.9);color:#666;font-weight:700;font-size:12px;border-radius:5px;left:10px;padding:5px 10px;bottom:52px}.ABP-Unit .ABP-Comment-List{position:absolute;top:0;right:0;width:299px;height:-webkit-calc(100% - 2px);height:calc(100% - 2px);border:1px solid #ccc;border-left:none}.ABP-Unit.ABP-FullScreen .ABP-Comment-List,.ABP-Unit.ABP-Mini .ABP-Comment-List,.ABP-Unit.ABP-WideScreen .ABP-Comment-List{display:none}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Title{width:100%;background:#f8f8f8;color:#6a6a6a;height:24px;line-height:24px;font-size:13px;border-bottom:solid 1px #ccc}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Title *{position:absolute;text-indent:6px;-webkit-transition:background .1s linear;transition:background .1s linear}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Title :hover{background:#cde2fe}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Title .asc::after{position:absolute;right:0;content:\"\\25b2\"}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Title .desc::after{position:absolute;right:0;content:\"\\25bc\"}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Title .cmt-time{width:45px}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Title .cmt-content{left:45px;width:155px}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Title .cmt-date{left:200px;width:99px}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Container{width:100%;height:-webkit-calc(100% - 25px);height:calc(100% - 25px);font-size:12px;line-height:24px;color:#666;overflow-y:scroll}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Container::-webkit-scrollbar{width:10px;height:10px;margin:0}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Container::-webkit-scrollbar-button{width:0;height:0}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Container::-webkit-scrollbar-track{background:0 0}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Container::-webkit-scrollbar-thumb{background:#ccc;border-radius:10px;min-height:20px}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Container::-webkit-scrollbar-thumb:hover{background:#aaa}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Container-Inner{padding:0;margin:0}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Container li{position:relative;display:block;height:24px;overflow:hidden;cursor:default;-webkit-transition:background .1s linear;transition:background .1s linear}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Container li:hover{background:#cbe0ff}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Container li *{display:inline-block;position:relative;overflow:hidden;height:24px}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Container li .cmt-time{text-align:center;width:50px}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Container li .cmt-content{width:155px}.ABP-Unit .ABP-Comment-List .ABP-Comment-List-Container li .cmt-date{width:84px}@font-face{font-family:\"\\9ED1\\4F53\";src:local('SimHei')}@font-face{font-family:\"\\5B8B\\4F53\";src:local('SimSun')}@font-face{font-family:\"\\534E\\6587\\6977\\4F53\";src:local('SimKai')}@font-face{font-family:\"\\5E7C\\5706\";src:local('YouYuan')}@font-face{font-family:\"\\5FAE\\8F6F\\96C5\\9ED1\";src:local('Microsoft YaHei')}";
var colpick = ".colpick{position:absolute;width:346px;height:170px;overflow:hidden;display:none;font-family:Arial,Helvetica,sans-serif;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;}.colpick_color{position:absolute;left:7px;top:7px;width:156px;height:156px;overflow:hidden;outline:1px solid #aaa;cursor:crosshair;}.colpick_color_overlay1{position:absolute;left:0;top:0;width:156px;height:156px;-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(GradientType=1,startColorstr='#ffffff', endColorstr='#00ffffff')\";background:-moz-linear-gradient(left,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);background:-webkit-gradient(linear,left top,right top,color-stop(0%,rgba(255,255,255,1)),color-stop(100%,rgba(255,255,255,0)));background:-webkit-linear-gradient(left,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);background:-o-linear-gradient(left,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);background:-ms-linear-gradient(left,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);background:linear-gradient(to right,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=1,startColorstr='#ffffff',endColorstr='#00ffffff');}.colpick_color_overlay2{position:absolute;left:0;top:0;width:156px;height:156px;-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#00000000', endColorstr='#000000')\";background:-moz-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,rgba(0,0,0,0)),color-stop(100%,rgba(0,0,0,1)));background:-webkit-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);background:-o-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);background:-ms-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);background:linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000',endColorstr='#000000',GradientType=0 );}.colpick_selector_outer{background:none;position:absolute;width:11px;height:11px;margin:-6px 0 0 -6px;border:1px solid black;border-radius:50%;}.colpick_selector_inner{position:absolute;width:9px;height:9px;border:1px solid white;border-radius:50%;}.colpick_hue{position:absolute;top:6px;left:175px;width:19px;height:156px;border:1px solid #aaa;cursor:ns-resize;}.colpick_hue_arrs{position:absolute;left:-8px;width:35px;height:7px;margin:-7px 0 0 0;}.colpick_hue_larr{position:absolute;width:0;height:0;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:7px solid #858585;}.colpick_hue_rarr{position:absolute;right:0;width:0;height:0;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:7px solid #858585;}.colpick_new_color{position:absolute;left:207px;top:6px;width:60px;height:27px;background:#f00;border:1px solid #8f8f8f;}.colpick_current_color{position:absolute;left:277px;top:6px;width:60px;height:27px;background:#f00;border:1px solid #8f8f8f;}.colpick_field,.colpick_hex_field{position:absolute;height:20px;width:60px;overflow:hidden;background:#f3f3f3;color:#b8b8b8;font-size:12px;border:1px solid #bdbdbd;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;}.colpick_rgb_r{top:40px;left:207px;}.colpick_rgb_g{top:67px;left:207px;}.colpick_rgb_b{top:94px;left:207px;}.colpick_hsb_h{top:40px;left:277px;}.colpick_hsb_s{top:67px;left:277px;}.colpick_hsb_b{top:94px;left:277px;}.colpick_hex_field{width:68px;left:207px;top:121px;}.colpick_focus{border-color:#999;}.colpick_field_letter{position:absolute;width:12px;height:20px;line-height:20px;padding-left:4px;background:#efefef;border-right:1px solid #bdbdbd;font-weight:bold;color:#777;}.colpick_field input,.colpick_hex_field input{position:absolute;right:11px;margin:0;padding:0;height:20px;line-height:20px;background:transparent;border:none;font-size:12px;font-family:Arial,Helvetica,sans-serif;color:#555;text-align:right;outline:none;}.colpick_hex_field input{right:4px;}.colpick_field_arrs{position:absolute;top:0;right:0;width:9px;height:21px;cursor:ns-resize;}.colpick_field_uarr{position:absolute;top:5px;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid #959595;}.colpick_field_darr{position:absolute;bottom:5px;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #959595;}.colpick_submit{position:absolute;left:207px;top:149px;width:130px;height:22px;line-height:22px;background:#efefef;text-align:center;color:#555;font-size:12px;font-weight:bold;border:1px solid #bdbdbd;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;}.colpick_submit:hover{background:#f3f3f3;border-color:#999;cursor:pointer;}.colpick_full_ns .colpick_submit,.colpick_full_ns .colpick_current_color{display:none;}.colpick_full_ns .colpick_new_color{width:130px;height:25px;}.colpick_full_ns .colpick_rgb_r,.colpick_full_ns .colpick_hsb_h{top:42px;}.colpick_full_ns .colpick_rgb_g,.colpick_full_ns .colpick_hsb_s{top:73px;}.colpick_full_ns .colpick_rgb_b,.colpick_full_ns .colpick_hsb_b{top:104px;}.colpick_full_ns .colpick_hex_field{top:135px;}.colpick_rgbhex .colpick_hsb_h,.colpick_rgbhex .colpick_hsb_s,.colpick_rgbhex .colpick_hsb_b{display:none;}.colpick_rgbhex{width:282px;}.colpick_rgbhex .colpick_field,.colpick_rgbhex .colpick_submit{width:68px;}.colpick_rgbhex .colpick_new_color{width:34px;border-right:none;}.colpick_rgbhex .colpick_current_color{width:34px;left:240px;border-left:none;}.colpick_rgbhex_ns .colpick_submit,.colpick_rgbhex_ns .colpick_current_color{display:none;}.colpick_rgbhex_ns .colpick_new_color{width:68px;border:1px solid #8f8f8f;}.colpick_rgbhex_ns .colpick_rgb_r{top:42px;}.colpick_rgbhex_ns .colpick_rgb_g{top:73px;}.colpick_rgbhex_ns .colpick_rgb_b{top:104px;}.colpick_rgbhex_ns .colpick_hex_field{top:135px;}.colpick_hex .colpick_hsb_h,.colpick_hex .colpick_hsb_s,.colpick_hex .colpick_hsb_b,.colpick_hex .colpick_rgb_r,.colpick_hex .colpick_rgb_g,.colpick_hex .colpick_rgb_b{display:none;}.colpick_hex{width:206px;height:201px;}.colpick_hex .colpick_hex_field{width:72px;height:25px;top:168px;left:80px;}.colpick_hex .colpick_hex_field div,.colpick_hex .colpick_hex_field input{height:25px;line-height:25px;}.colpick_hex .colpick_new_color{left:9px;top:168px;width:30px;border-right:none;}.colpick_hex .colpick_current_color{left:39px;top:168px;width:30px;border-left:none;}.colpick_hex .colpick_submit{left:164px;top:168px;width:30px;height:25px;line-height:25px;}.colpick_hex_ns .colpick_submit,.colpick_hex_ns .colpick_current_color{display:none;}.colpick_hex_ns .colpick_hex_field{width:80px;}.colpick_hex_ns .colpick_new_color{width:60px;border:1px solid #8f8f8f;}.colpick_dark{background:#161616;border-color:#2a2a2a;}.colpick_dark .colpick_color{outline-color:#333;}.colpick_dark .colpick_hue{border-color:#555;}.colpick_dark .colpick_field,.colpick_dark .colpick_hex_field{background:#101010;border-color:#2d2d2d;}.colpick_dark .colpick_field_letter{background:#131313;border-color:#2d2d2d;color:#696969;}.colpick_dark .colpick_field input,.colpick_dark .colpick_hex_field input{color:#7a7a7a;}.colpick_dark .colpick_field_uarr{border-bottom-color:#696969;}.colpick_dark .colpick_field_darr{border-top-color:#696969;}.colpick_dark .colpick_focus{border-color:#444;}.colpick_dark .colpick_submit{background:#131313;border-color:#2d2d2d;color:#7a7a7a;}.colpick_dark .colpick_submit:hover{background-color:#101010;border-color:#444;}";
var ad_fade = "#indexgg1,#indexgg2,#indexgg3,#indexgg4,#indexgg5,#indexgg6,#indexc2,.gg-ads,#topgg,.r-gg1,#listgg1,#listb1,#listb2,#listb3,#alistads,#googlegg,#arcgg3,#contgg1,.ad,clear.ad_top,#bdad,div[class^=\"ad-\"],#taobaoid,.baidu-search-block{opacity:.2}#indexgg1:hover,#indexgg2:hover,#indexgg3:hover,#indexgg4:hover,#indexgg5:hover,#indexgg6:hover,#indexc2:hover,.gg-ads:hover,#topgg:hover,.r-gg1:hover,#listgg1:hover,#listb1:hover,#listb2:hover,#listb3:hover,#alistads:hover,#googlegg:hover,#arcgg3:hover,#contgg1:hover,.ad:hover,iframe[src=\"http://www.bilibili.com/bdad.html\"]:hover,iframe#cproIframe1:hover,iframe#cproIframe2:hover,iframe#cproIframe3:hover,iframe#cproIframe4:hover,.ad_top:hover,#bdad:hover,div[class^=\"ad-\"]:hover,#taobaoid:hover{opacity:1}";
var ad_kill = "#indexgg1,#indexgg2,#indexgg3,#indexgg4,#indexgg5,#indexgg6,#indexc2,.gg-ads,#topgg,.r-gg1,#listgg1,#listb1,#listb2,#listb3,#alistads,#googlegg,#arcgg3,#contgg1,.ad,iframe[src=\"http://www.bilibili.com/bdad.html\"],clear.ad_top,#bdad,div[class^=\"ad-\"],#taobaoid,.baidu-search-block{display:none!important}";
var ad_mode = ".scontent{padding:0px!important;height:0px}.player-wrapper,.v_info,.container-top,.container-row,#hotbox,#index_online,.common,.rat,#special,#bofqi,.z-l,.z-r,.mobile,.c-link,.footer,.info,.upinfo,.alist,.s_center,.index-tjbox,.iv{display:none!important}.videobox{box-shadow:none!important;background:transparent!important}#indexgg1,#indexgg2,#indexgg3,#indexgg4,#indexgg5,#indexgg6,#indexc2,.gg-ads,#topgg,.r-gg1,#listgg1,#listb1,#listb2,#listb3,#alistads,#googlegg,#arcgg3,#contgg1,.ad,iframe[src=\"http://www.bilibili.com/bdad.html\"],clear#bdad,div[class^=\"ad-\"],#taobaoid{display:block!important;opacity:1!important}";
var defaultOptions = {
	"ad": "keep",
	"ad_opacity": 0.1,
	"contextmenu": "on",
	"crx_update": "{}",
	"dlquality": "mp4",
	"dynamic": "on",
	"enabled": false,
	"html5": "off",
	"indexversion": "new",
	"lastDyn": 0,
	"playerConfig": "{\"volume\":1,\"opacity\":0.8,\"scale\":1,\"prop\":true}",
	"rel_search": "without",
	"replace": "on",
	"updates": 0,
	"version": 0,
	"doSign":"on",
	"autoTreasure":"on",
	"danmu":"on",
	"liveNotification":"on"
};
var cidCache = {};
if(localStorage.getItem('cidCache') != null) {
	try {
        cidCache = JSON.parse(localStorage.getItem('cidCache'));
    } catch (e) {
        localStorage.setItem('cidCache', null);
    }
}
function getOption(key) {
	if (localStorage.getItem(key) === null) {
		localStorage.setItem(key, defaultOptions[key]);
	}
	return localStorage.getItem(key);
}

function setOption(key, value, pushcss) {
	localStorage.setItem(key, value);
	if (pushcss) updateAll();
	return true;
}

function getCSS(url) {
	var bilibili_helper_css = general + colpick + abplayer;
	var adType = getOption("ad");
	if (url.indexOf("topic") >= 0) adType = "kill";
	switch (adType) {
		case "fade":
			ad_fade = "#indexgg1,#indexgg2,#indexgg3,#indexgg4,#indexgg5,#indexgg6,#indexc2,.gg-ads,#topgg,.r-gg1,#listgg1,#listb1,#listb2,#listb3,#alistads,#googlegg,#arcgg3,#contgg1,.ad,clear.ad_top,#bdad,div[class^=\"ad-\"],#taobaoid{opacity:" + getOption("ad_opacity") + ";-webkit-transition:all .1s linear}#indexgg1:hover,#indexgg2:hover,#indexgg3:hover,#indexgg4:hover,#indexgg5:hover,#indexgg6:hover,#indexc2:hover,.gg-ads:hover,#topgg:hover,.r-gg1:hover,#listgg1:hover,#listb1:hover,#listb2:hover,#listb3:hover,#alistads:hover,#googlegg:hover,#arcgg3:hover,#contgg1:hover,.ad:hover,iframe[src=\"http://www.bilibili.com/bdad.html\"]:hover,iframe#cproIframe1:hover,iframe#cproIframe2:hover,iframe#cproIframe3:hover,iframe#cproIframe4:hover,.ad_top:hover,#bdad:hover,div[class^=\"ad-\"]:hover,#taobaoid:hover{opacity:1}";
			bilibili_helper_css += ad_fade;
			break;
		case "kill":
			bilibili_helper_css += ad_kill;
			break;
	}
	return bilibili_helper_css;
}

function clearStorage() {
	var storageItems = Object.keys(localStorage);
	for (var i = 0; i < storageItems.length; i++) {
		if (typeof defaultOptions[storageItems[i]] == 'undefined') {
			localStorage.removeItem(storageItems[i]);
		}
	}
}

clearStorage();
