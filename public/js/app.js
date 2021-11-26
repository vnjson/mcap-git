(function () {
  'use strict';

  var e = [],
      t = [];

  function n(n, r) {
    if (n && "undefined" != typeof document) {
      var a,
          s = !0 === r.prepend ? "prepend" : "append",
          d = !0 === r.singleTag,
          i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];

      if (d) {
        var u = e.indexOf(i);
        -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
      } else a = c();

      65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
    }

    function c() {
      var e = document.createElement("style");
      if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
      var a = "prepend" === s ? "afterbegin" : "beforeend";
      return i.insertAdjacentElement(a, e), e;
    }
  }

  var css$g = "\r\n#vnjson__tree{\r\n\r\n  background: wheat;\r\n  width: 375px;\r\n  height: 1081px;\r\n\r\n}\r\n\r\n\r\n.vnjson__tree-header{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  background: #445;\r\n  color: wheat;\r\n  font-family: Arial;\r\n  font-size: 16px;\r\n  user-select: none;\r\n\r\n}\r\n.vnjson__tree-header--tab{\r\n  padding: 0 15px;\r\n  transition: 0.3s;\r\n  font-weight: 600;\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n.vnjson__tree-header--tab:hover{\r\n  background: #223;\r\n  cursor: pointer;\r\n}\r\n.debug-active{\r\n  background: #223;\r\n}\r\n\r\n.debug__color-input{\r\n  background-color: #f5deb3;\r\n  border-style: unset;\r\n  cursor: pointer;\r\n  outline: unset;\r\n  width: 60px;\r\n  padding: 2.5px;\r\n  text-transform: lowercase;\r\n  margin-left: 3px;\r\n}\r\n.wrapper #vnjson__tree .vnjson__tree-header .vnjson__tree-color-picker .huebee{\r\n  left: -270px !important;\r\n  top: 40px !important;\r\n\r\n\r\n}\r\n.wrapper #vnjson__tree .vnjson__tree-header .vnjson__tree-color-picker .huebee .huebee__container{\r\n  width: 320px !important;\r\n}\r\n/*\r\n.vnjson__tree-coords{\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n}\r\n*/\r\n.vnjson__tree-header span{\r\n  font-size: 12px;\r\n  font-family: Arial;\r\n  color: wheat;\r\n}\r\n\r\n.vnjson__cursor-left,\r\n.vnjson__cursor-top{\r\n  display: inline-block;\r\n  width: 25px;\r\n  text-align: end;\r\n}\r\n\r\n#root{\r\n  cursor: pointer;\r\n}\r\n#root:hover{\r\n  color: skyblue;\r\n}\r\n\r\n.jstree-ocl{\r\n pointer-events: none;\r\n} \r\n.jstree-anchor{\r\n  pointer-events: none;\r\n}\r\n\r\n\r\n/*score*/\r\n.stream__score{\r\n\r\n  background: wheat;\r\n  padding: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  padding-top: 10px;\r\n  border-top: 1px solid 778;\r\n}\r\n.stream__score--item{\r\n  border: 1px dashed rgba(0,0,0,0.5);\r\n  padding: 5px;\r\n  white-space: nowrap;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n\r\n.stream__score--param {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 3px 0;\r\n  font-size: 15px;\r\n}\r\n.stream__score--param span:first-child{\r\n  padding-left: 10px;\r\n\r\n}\r\n.stream__score--param span:last-child{\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  padding-right: 10px;\r\n  color: darkcyan;\r\n}\r\n.stream__score--param:nth-child(2n){\r\n  background: rgba(200,200,200,0.5);\r\n}\r\n/*reload*/\r\n.browser-reload{\r\n  width: 375px;\r\n  height: 312px;\r\n\r\n  background: wheat;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgIDxwYXRoIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiIGQ9Ik0yIDEyQzIgMTYuOTcgNi4wMyAyMSAxMSAyMUMxMy4zOSAyMSAxNS42OCAyMC4wNiAxNy40IDE4LjRMMTUuOSAxNi45QzE0LjYzIDE4LjI1IDEyLjg2IDE5IDExIDE5QzQuNzYgMTkgMS42NCAxMS40NiA2LjA1IDcuMDVDMTAuNDYgMi42NCAxOCA1Ljc3IDE4IDEySDE1TDE5IDE2SDE5LjFMMjMgMTJIMjBDMjAgNy4wMyAxNS45NyAzIDExIDNDNi4wMyAzIDIgNy4wMyAyIDEyWiIgLz4NCjwvc3ZnPg==);\r\n  background-repeat: no-repeat;\r\n  background-size: 50%;\r\n  background-position: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 32px;\r\n  color: gray;\r\n  cursor: pointer;\r\n  user-select: none;\r\n \r\n}\r\n\r\n\r\n/*logger*/\r\n#debug-logger{\r\n  background: wheat;\r\n  width: 1024px;\r\n  height: 280px;\r\n  overflow: auto;\r\n  padding: 0;\r\n  padding-bottom: 15px;\r\n  /*position: absolute;\r\n  top: 768px;*/\r\n  margin: 0;\r\n}\r\n\r\n.log-boolean,\r\n.log-undefined {\r\n  color: magenta;\r\n}\r\n.log-object,\r\n.log-string {\r\n  color: #778;\r\n}\r\n.log-number {\r\n  color: cyan;\r\n}\r\n\r\n.error-boolean,\r\n.error-undefined {\r\n  color: magenta;\r\n}\r\n.error-object,\r\n.error-string {\r\n  color: red;\r\n}\r\n.error-number {\r\n  color: cyan;\r\n}\r\n.warn-boolean,\r\n.warn-undefined {\r\n  color: magenta;\r\n}\r\n.warn-object,\r\n.warn-string {\r\n  color: #e58a00;\r\n}\r\n.warn-number {\r\n  color: cyan;\r\n}\r\n#debug-logger{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n#debug-logger span {\r\n\r\n\r\n  width: 100%;\r\n  display: block;\r\n  padding: 10px 15px;\r\n}\r\n#debug-logger span:nth-child(2n){\r\n  background: rgba(0,0,0,0.03);\r\n}\r\n/**/\r\n\r\n#debug__vnjson--show{\r\n  height: 718px;\r\n  font-family: Consolas, Arial;\r\n  overflow: auto;\r\n  font-size: 16px;\r\n  position: relative;\r\n  border: 1px solid rgba(0,0,0,0.1);\r\n}\r\n#vnjson__tree-root{\r\n  position: absolute;\r\n  top: 0;\r\n  width: 301px;\r\n\r\n}\r\n#vnjson__tree-vnjson{\r\n  position: absolute;\r\n  top: 0;\r\n  display: none;\r\n  width: 100%;\r\n}\r\n\r\n#vnjson__tree-score{\r\n  position: absolute;\r\n  top: 0;\r\n  display: none;\r\n  width: 100%;\r\n}\r\n\r\n.json-document{\r\n  padding-top: 0;\r\n}\r\n\r\n\r\n/*qr*/\r\n#vnjson__tree-qr{\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  display: none;\r\n  width: 100%;\r\n  padding: 15px;\r\n}\r\n\r\n#debug__qrcode{\r\n\r\n  margin-top: 25px;\r\n\r\n}\r\n#debug__qrcode--text{\r\n  padding: 3px 5px;\r\n  height: 30px;\r\n  background: cornsilk;\r\n  width: 75%;\r\n}\r\n#debug__qrcode img{\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n#debug__qrcode--generate{\r\n  height: 30px;\r\n  width: 22%;\r\n}\r\n#debug__html-code{\r\n  margin-top: 15px;\r\n  width: 310px;\r\n  padding: 10px;\r\n  min-height: 200px;\r\n  word-break: break-all;\r\n  background: cornsilk;\r\n  overflow-x: hidden;\r\n  outline: unset;\r\n  border: unset;\r\n  resize: none;\r\n}\r\n#debug__copy-to-clipboard{\r\n\r\n}\r\n\r\n.debug__terminal{\r\n  height: 33px;\r\n  background: burlywood;\r\n  display: flex;\r\n\r\n}\r\n.debug__terminal-tilda{\r\n  padding-top: 15px;\r\n  padding-right: 10px;\r\n  padding-left: 10px;\r\n  color: #582282;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  cursor: pointer;\r\n}\r\n.debug__terminal-tilda:active{\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n.debug__terminal-input{\r\n  outline: none;\r\n  border: unset;\r\n  background-color: transparent;\r\n  width: 90%;\r\n  caret-color: magenta;\r\n  font-size: 16px;\r\n  font-family: Consolas;\r\n  flex: 1;\r\n  padding-left: 5px;\r\n  color: #582282;\r\n}\r\n.debug__terminal-input::-webkit-input-placeholder { \r\n  color: #ffd5aa;\r\n  padding: 3px 5px;\r\n}\r\n.debug__terminal-input::input-placeholder { \r\n  color: #ffd5aa;\r\n  padding: 3px 5px;\r\n}\r\n\r\n";
  n(css$g,{});

  function tree () {
    this.on('init', scene => {
      //localStorage.clear();
      var _labels = $('#vnjson__tree-root  .scene ul.jstree-children li a.jstree-anchor').toArray();

      _labels.map(node => {
        $(node).removeClass('jstree-clicked');
      });

      _labels.map(node => {
        let sceneName = $(node).parent().parent().parent().attr('id');
        let labelName = $(node).text(); // console.log(sceneName,labelName, this.current.labelName)

        if (labelName === this.current.labelName && sceneName === this.current.sceneName) {
          $(node).addClass('jstree-clicked');
          var node_id = $(node).parent().attr('id');
          const jState = `{"state":{"core":{"open":["$items","$root","beginning"],"scroll":{"left":0,"top":0},"selected":["${node_id}"]}},"ttl":false,"sec":1634790070560}`;
          localStorage.setItem('tree', jState);
        }
      }); //this.exec({clear: 'all'})

    });
    var data = [];

    for (let scene in this.TREE) {
      let labels = Object.keys(this.TREE[scene]).filter(l => {
        let exclude = l !== 'html' && l !== 'embed' && l !== 'data' && l !== 'store' && l !== 'assets' && l !== 'package' && l !== 'characters';
        return exclude;
      });
      let node = {
        text: scene,
        id: scene,
        state: {
          opened: true,
          selected: false,
          disabled: true
        },
        children: labels,
        li_attr: {
          class: 'scene'
        },
        a_attr: {
          id: scene,
          class: 'scene-item'
        }
      };
      data.push(node);
    }

    var $vnjs = this;
    $("#vnjson__tree-root").jstree({
      core: {
        data
      },
      //state: { "key" : "tree" },
      plugins: ["state"]
    });
    $('#vnjson__tree-root').on("changed.jstree", function (e, data) {
      let {
        action,
        node
      } = data; // $vnjs.exec({clear: 'all'})

      if (action !== "deselect_all") {
        let sceneName = node.parent;
        let labelName = node.text;
        let ctx = $vnjs.TREE[sceneName]['$init'][0];
        $vnjs.exec(ctx);
        $vnjs.exec({
          jump: [sceneName, labelName].join('.')
        });
      }
    });
    /**
     * reload
     */

    $('.browser-reload').on('click', () => {
      location.reload(true);
    });
  }

  function log () {
    const $tpl = $(`<pre id="debug-logger"></pre>`);
    $('.game').append($tpl);
    var logger = document.getElementById("debug-logger");

    function outputHtml(output) {
      logger.innerHTML += output;
      logger.scrollTop = logger.scrollHeight;
    }

    console.clear = function () {
      logger.innerHTML = "";
    };

    console.log = function () {
      var output = "",
          arg,
          i;

      for (i = 0; i < arguments.length; i++) {
        arg = arguments[i];
        output += "<span class=\"log-" + typeof arg + "\">";

        if (typeof arg === "object" && typeof JSON === "object" && typeof JSON.stringify === "function") {
          output += JSON.stringify(arg);
        } else {
          output += arg;
        }

        output += "</span>";
      }

      outputHtml(output);
    };

    console.info = console.log;

    console.error = function () {
      var output = "",
          arg,
          i;

      for (i = 0; i < arguments.length; i++) {
        arg = arguments[i];
        output += "<span class=\"error-" + typeof arg + "\">";

        if (typeof arg === "object" && typeof JSON === "object" && typeof JSON.stringify === "function") {
          output += JSON.stringify(arg);
        } else {
          output += arg;
        }

        output += "</span>";
      }

      outputHtml(output);
    };

    console.warn = function () {
      var output = "",
          arg,
          i;

      for (i = 0; i < arguments.length; i++) {
        arg = arguments[i];
        output += "<span class=\"warn-" + typeof arg + "\">";

        if (typeof arg === "object" && typeof JSON === "object" && typeof JSON.stringify === "function") {
          output += JSON.stringify(arg);
        } else {
          output += arg;
        }

        output += "</span>";
      }

      outputHtml(output);
    };

    window.addEventListener('error', function (e) {
      e.preventDefault();
      console.error(e.message);
      return true;
    }, true); //logger.scrollTop = 99999999999; 

    /**
     * Terminal
     */

    var $terminal = $(`
    <div class="debug__terminal">
        <span class="debug__terminal-tilda">~</span>
        <input spellcheck="false" class="debug__terminal-input" placeholder="key: value"/>
    </div>
    `);
    $($terminal).insertAfter($tpl);

    function evaluate() {
      let data = $('.debug__terminal-input').val().split(':');

      if (data.length > 1) {
        var param = data[1].trim();
        if (param === 'false') param = false;
        if (param === 'true') param = true;
        $vnjs.emit(data[0], param);
      } else {
        $vnjs.emit('$', data[0]);
      }

      $('.debug__terminal-input').val('');
    }

    $('.debug__terminal-tilda').on('mousedown', function (e) {
      e.preventDefault();
      evaluate();
    });
    $(document).on('keypress', function (e) {
      //setCaretPosition($('.debug__terminal-input').val().length)
      if (e.which == 13) {
        e.preventDefault();
        evaluate();
      }
    });
    /*
    function setCaretPosition(caretPos) {
        var elem =  document.querySelector('.debug__terminal-input')
    
        if(elem != null) {
            if(elem.createTextRange) {
                var range = elem.createTextRange();
                range.move('character', caretPos);
                range.select();
            }
            else {
                if(elem.selectionStart) {
                    elem.focus();
                    elem.setSelectionRange(caretPos, caretPos);
                }
                else
                    elem.focus();
            }
        }
    }
    */
  }

  var scoreTpl = "<div class=\"stream__score\">\r\n <div class=\"stream__score--item\">\r\n    <h5>логика</h5>\r\n    <div class=\"stream__score--param\">\r\n      <span>мозговой_штурм</span><span class=\"stream__score--msh\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>критическое_мышление</span><span class=\"stream__score--km\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>рефлексивное_мышление</span> <span class=\"stream__score--rm\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>стратегическое_мышление</span> <span class=\"stream__score--sm\">0</span>     \r\n    </div>\r\n </div>\r\n\r\n\r\n <div class=\"stream__score--item\">\r\n    <h5>творчество</h5>\r\n    <div class=\"stream__score--param\">\r\n      <span>интуиция</span><span class=\"stream__score--ti\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>креативность</span><span class=\"stream__score--tk\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>оригинальность</span> <span class=\"stream__score--to\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>продуктивность</span> <span class=\"stream__score--tp\">0</span>     \r\n    </div>\r\n </div>\r\n\r\n <div class=\"stream__score--item\">\r\n    <h5>эмоции</h5>\r\n    <div class=\"stream__score--param\">\r\n      <span>понимание_эмоций</span><span class=\"stream__score--ep\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>выражение_эмоций</span><span class=\"stream__score--ev\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>восприятие_эмоций</span> <span class=\"stream__score--eve\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>управление_эмоциями</span> <span class=\"stream__score--ey\">0</span>     \r\n    </div>\r\n </div>\r\n\r\n\r\n <div class=\"stream__score--item\">\r\n    <h5>общение</h5>\r\n    <div class=\"stream__score--param\">\r\n      <span>кругозор</span><span class=\"stream__score--oki\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>лидерство</span><span class=\"stream__score--oli\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>адекватность</span> <span class=\"stream__score--oai\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>чувство_юмора</span> <span class=\"stream__score--och\">0</span>     \r\n    </div>\r\n </div>\r\n<!---->\r\n\r\n <div class=\"stream__score--item\">\r\n    <h5>теория</h5>\r\n    <div class=\"stream__score--param\">\r\n      <span>понимание</span><span class=\"stream__score--t2p\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>умение_доказать</span><span class=\"stream__score--t2y\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>умение_объяснить</span> <span class=\"stream__score--t2yo\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>доклады_презентации</span> <span class=\"stream__score--t2d\">0</span>     \r\n    </div>\r\n </div>\r\n\r\n\r\n <div class=\"stream__score--item\">\r\n    <h5>практика</h5>\r\n    <div class=\"stream__score--param\">\r\n      <span>работа_в_команде</span><span class=\"stream__score--prk\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>работа_на_занятии</span><span class=\"stream__score--prz\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>работа_самостоятельно</span> <span class=\"stream__score--prs\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>качество_и_время_работы</span> <span class=\"stream__score--pkvr\">0</span>     \r\n    </div>\r\n </div>\r\n\r\n <div class=\"stream__score--item\">\r\n    <h5>прилежание</h5>\r\n    <div class=\"stream__score--param\">\r\n      <span>упорство</span><span class=\"stream__score--p2y\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>аккуратность</span><span class=\"stream__score--p2a\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>внимательность</span> <span class=\"stream__score--p2v\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>самоорганизация</span> <span class=\"stream__score--p2s\">0</span>     \r\n    </div>\r\n </div>\r\n\r\n <div class=\"stream__score--item\">\r\n    <h5>квалификация</h5>\r\n    <div class=\"stream__score--param\">\r\n      <span>специализация</span><span class=\"stream__score--k2s\">0</span>     \r\n    </div>\r\n    <div class=\"stream__score--param\">\r\n      <span>универсальность</span><span class=\"stream__score--k2y\">0</span>     \r\n    </div>\r\n </div>\r\n\r\n</div>\r\n";

  function score () {
    $('#vnjson__tree-score').append(scoreTpl);
    setScore.call(this);
    this.on('setScore', ctx => {
      setScore.call(this);
    });
  }

  function setScore() {
    if (this.debug && this.current.data.score) {
      var {
        логика,
        творчество,
        эмоции,
        общение,
        теория,
        практика,
        прилежание,
        квалификация
      } = this.current.data.score;
      $('.stream__score--msh').html(логика['мозговой_штурм']);
      $('.stream__score--km').html(логика['критическое_мышление']);
      $('.stream__score--rm').html(логика['рефлексивное_мышление']);
      $('.stream__score--sm').html(логика['стратегическое_мышление']);
      $('.stream__score--ti').html(творчество['интуиция']);
      $('.stream__score--tk').html(творчество['креативность']);
      $('.stream__score--to').html(творчество['оригинальность']);
      $('.stream__score--tp').html(творчество['продуктивность']);
      $('.stream__score--ep').html(эмоции['понимание_эмоций']);
      $('.stream__score--ev').html(эмоции['выражение_эмоций']);
      $('.stream__score--eve').html(эмоции['восприятие_эмоций']);
      $('.stream__score--ey').html(эмоции['управление_эмоциями']);
      $('.stream__score--oki').html(общение['кругозор']);
      $('.stream__score--oli').html(общение['лидерство']);
      $('.stream__score--oai').html(общение['адекватность']);
      $('.stream__score--och').html(общение['чувство_юмора']);
      $('.stream__score--t2p').html(теория['понимание']);
      $('.stream__score--t2y').html(теория['умение_доказать']);
      $('.stream__score--t2yo').html(теория['умение_объяснить']);
      $('.stream__score--t2d').html(теория['доклады_презентации']);
      $('.stream__score--prk').html(практика['работа_в_команде']);
      $('.stream__score--prz').html(практика['работа_на_занятии']);
      $('.stream__score--prs').html(практика['работа_самостоятельно']);
      $('.stream__score--pkvr').html(практика['качество_и_время_работы']);
      $('.stream__score--p2y').html(прилежание['упорство']);
      $('.stream__score--p2a').html(прилежание['аккуратность']);
      $('.stream__score--p2v').html(прилежание['внимательность']);
      $('.stream__score--p2s').html(прилежание['самоорганизация']);
      $('.stream__score--k2s').html(квалификация['специализация']);
      $('.stream__score--k2y').html(квалификация['универсальность']);
    }
  }

  var asideTpl = "<div id=\"vnjson__tree\">\r\n  <div class=\"vnjson__tree-header\">\r\n    <div class=\"vnjson__tree-header--tab debug-active\" data-id=\"vnjson__tree-root\">labels</div>\r\n    <div class=\"vnjson__tree-header--tab\" data-id=\"vnjson__tree-vnjson\">vn.json</div>\r\n    <div class=\"vnjson__tree-header--tab\" data-id=\"vnjson__tree-score\">score</div>\r\n    <div class=\"vnjson__tree-header--tab\" data-id=\"vnjson__tree-qr\">qr</div>\r\n    <div class=\"vnjson__tree-color-picker\"><input class=\"debug__color-input\" value=\"#f5deb3\"></div>\r\n    \r\n  <!--  \r\n\r\n    <div class=\"vnjson__tree-coords\">\r\n      <span>left: <span class=\"vnjson__cursor-left\">0</span>px</span>\r\n      <span>top: <span class=\"vnjson__cursor-top\">0</span>px</span>\r\n    </div>  -->\r\n\r\n  </div>\r\n\r\n  <div id=\"debug__vnjson--show\">\r\n    <div id=\"vnjson__tree-root\"></div>\r\n    <div id=\"vnjson__tree-vnjson\">\r\n      <pre id=\"json-renderer\"></pre>\r\n    </div>\r\n    <div id=\"vnjson__tree-score\"></div>\r\n    <div id=\"vnjson__tree-qr\">\r\n      <input id=\"debug__qrcode--text\" type=\"text\" value=\"https://github.com/vnjson/mcap-man\" spellcheck=\"false\" placeholder=\"Введите ссылку\">\r\n      <button id=\"debug__qrcode--generate\">qr-code</button>\r\n      <div id=\"debug__qrcode\"></div>\r\n      <div id=\"debug__clipboard-container\"></div>\r\n    </div>\r\n   \r\n  </div>\r\n<div class=\"browser-reload\"></div>\r\n</div>\r\n";

  function debug () {
    if (this.debug) {
      this.on('postload', _ => {
        tree.call(this);
        score.call(this);
        aside();
      });
      var $aside = $(asideTpl);
      $($aside).appendTo('.wrapper');
      log();
      console.log('|  vnjson.js@' + this.version + '  [ window ] development: 1400x1080 | production: 1024x768');
      /**
       * Что бы отображалось в консоле data
       */

      this.on('player-load', name => {
        if (store.get(name)) {
          this.current.data = store.get(name);
          var _obj = { ...this.current.data
          };
          delete _obj.score;
          delete _obj.player;
          console.log('<i style="background: #000000;padding: 3px 3px; color: #f4f5e9;">| data |</i> ' + JSON.stringify(_obj));
        }
      });
      this.on('preload', () => {
        console.log('<i style="background: darkcyan;padding: 3px 10px; color: #f4f5e9;">preload</i>');
      });
      this.on('load', asset => {
        console.log('  ' + JSON.stringify(asset));
      });
      this.on('postload', () => {
        console.log('<i style="background: darkcyan;padding: 3px 10px; color: #f4f5e9;">postload</i>');
      });
      this.on('screenInit', screen => {
        console.log('<i style="background: #3872c9;padding: 3px 10px; color: #f4f5e9;">screen</i>  ' + screen);
      });
      this.on('init', () => {
        if (this.current.index !== 0) {
          console.log('<i style="background: #582282;padding: 3px 10px; color: #f4f5e9">jump</i>  ' + this.current.sceneName + '.' + this.current.labelName + '.' + this.current.index);
        } else {
          console.log('<i style="background: #582282;padding: 3px 10px; color: #f4f5e9">jump</i>  ' + this.current.sceneName + '.' + this.current.labelName);
        }
      });
    }
  }

  function aside() {
    var prev = 'vnjson__tree-root';
    $('.vnjson__tree-header').on('click', '.vnjson__tree-header--tab', function () {
      $('.vnjson__tree-header--tab').toArray().map(tab => {
        $(tab).removeClass('debug-active');
      });
      let id = $(this).data('id');
      $('#' + prev).hide();
      $('#' + id).fadeIn();
      prev = id;
      $(this).addClass('debug-active');

      if (id === 'vnjson__tree-qr') {
        $('#debug__qrcode--text').focus();
      }
    });
    $('#json-renderer').jsonViewer($vnjs.TREE, {
      collapsed: true,
      rootCollapsable: false,
      withQuotes: false,
      withLinks: false
    });
    /*
     * color-picker
     */

    new Huebee('.debug__color-input', {
      notation: 'hex',
      saturations: 4
    });
    $('.vnjson__tree-color-picker').on('click', '.huebee__canvas', function () {
      copyToClipboard(document.querySelector(".debug__color-input"));
    });
    /**
     * qr-code
     */

    const qrcode = new QRCode("debug__qrcode");
    const qrcodeText = document.getElementById("debug__qrcode--text");
    $('#debug__qrcode--generate').on('mousedown', function (e) {
      qrcode.makeCode(qrcodeText.value);
      outputImgCode();
    });
    $(document).on('keypress', function (e) {
      if (e.which == 13) {
        qrcode.makeCode(qrcodeText.value);
        outputImgCode();
      }
    });

    function outputImgCode() {
      setTimeout(() => {
        $('#debug__clipboard-container').html('');
        const tpl = `<div>
				<p>используйте html - plugin для вставки кода в новелу</p>
      			<button id="debug__copy-to-clipboard">copy</button>
      		</div>`;
        $('#debug__clipboard-container').append(tpl);
        const str = $('#debug__qrcode').html();
        const wrapper = $('<textarea id="debug__html-code" spellcheck="false"></textarea>');
        wrapper.text(str.split('</canvas>')[1]);
        $('#debug__clipboard-container').append(wrapper);
      }, 100);
      $('#debug__clipboard-container').on("click", '#debug__copy-to-clipboard', function () {
        copyToClipboard(document.getElementById("debug__html-code"));
      });
    } //outputImgCode()

    /*
     * clipboard
     */


    function copyToClipboard(elem) {
      var targetId = "_hiddenCopyText_";
      var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
      var origSelectionStart, origSelectionEnd;

      if (isInput) {
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
      } else {
        target = document.getElementById(targetId);

        if (!target) {
          var target = document.createElement("textarea");
          target.style.position = "absolute";
          target.style.left = "-9999px";
          target.style.top = "0";
          target.id = targetId;
          document.body.appendChild(target);
        }

        target.textContent = elem.textContent;
      }

      var currentFocus = document.activeElement;
      target.focus();
      target.setSelectionRange(0, target.value.length);
      var succeed;

      try {
        succeed = document.execCommand("copy");
      } catch (e) {
        succeed = false;
      }

      if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
      }

      if (isInput) {
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
      } else {
        target.textContent = "";
      }

      return succeed;
    }
  }

  function assetsLoader$1 () {
    var getAssets = _ => {
      this.emit('preload');
      var i = 0;

      var load = _ => {
        var asset = this.current.assets[i];

        if (/\.mp3|\.wav|\.ogg/i.test(asset.url)) {
          var sound = new Howl({
            src: asset.url
          });
          sound.on('load', _ => {
            this.$store[asset.name] = sound;

            if (this.current.assets.length - 1 >= ++i) {
              this.emit('load', asset);
              load();
            } else {
              this.emit('postload');
            }
          });
        } else if (/\.png|\.jpg|\.jpeg|\.webp|\.gif/i.test(asset.url)) {
          if (this.TREE.$root.hasOwnProperty('package')) {
            if (this.TREE.$root.package.hasOwnProperty('preload')) {
              if (this.current.assets.length - 1 >= ++i) {
                if (this.TREE.$root.package.preload) {
                  let img = new Image();
                  img.src = asset.url;

                  img.onload = () => {
                    this.$store[asset.name] = img;
                    this.emit('load', asset);
                    load();
                  };
                } else {
                  this.$store[asset.name] = asset.url;
                  load();
                }
              } else {
                this.emit('postload');
              }
            }
          }
        } else {
          ++i;
          load();
          console.warn(asset.url + ' Format not supported');
        }
      };

      load();
    };

    var setAllAssets = () => {
      for (let [scene, body] of Object.entries(this.TREE)) {
        this.current.assets = this.current.assets.concat(body.assets);
      }

      if (this.current.assets.length > 0) {
        getAssets();
      } else {
        setTimeout(() => {
          this.emit('preload');
          this.emit('load');
          this.emit('postload');
        }, 0);
      }
    };
    /*
    this.on('preload', scene=>{
    
      var assets = this.TREE[this.current.sceneName].assets;
      this.current.assets = this.current.assets.concat(assets);
    
      this.emit('setAssets');
    })
    
    */


    this.on('setTree', _ => {
      setAllAssets();
    });
  }

  var css$f = "#screen {\r\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAL0lEQVR4AWM8ZsOAF1BNAasXA8PvbSASjUYo+L0NXS9EnJAVhE0gqGCEuIFgXAAA5aUvR45cttUAAAAASUVORK5CYII=);\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.screen {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  /*transition: background-image 0.5s;*/\r\n  background-repeat: no-repeat;\r\n}\r\n";
  n(css$f,{});

  function screen () {
    var prevScreen = null;
    this.on('screen', id => {
      if (prevScreen && prevScreen !== id) {
        $('#' + prevScreen).fadeOut();
        prevScreen = id;
        $('#' + id).fadeIn();
      } else {
        prevScreen = id;
        $('#' + id).fadeIn();
      }

      this.$store.$screen = $('#' + id);
      this.emit('screenInit', id);
    });
  }

  var css$e = "#loader {\r\n  background: black;\r\n  z-index: 9999;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.loader {\r\n  color: wheat;\r\n  font-family: Consolas, Menlo, Monaco, monospace;\r\n  font-weight: bold;\r\n  font-size: 100px;\r\n  opacity: 0.8;\r\n}\r\n.loader span {\r\n  display: inline-block;\r\n  animation: pulse 0.4s alternate infinite ease-in-out;\r\n}\r\n.loader span:nth-child(2) {\r\n  animation-delay: 0.4s;\r\n}\r\n\r\n@keyframes pulse {\r\n  to {\r\n    transform: scale(0.8);\r\n    opacity: 0.5; \r\n  } \r\n}\r\n";
  n(css$e,{});

  var tpl$a = "<div id=\"loader\">\r\n    <div class=\"loader\"><span>{</span><span>}</span></div>\r\n</div>";

  var $tpl$2 = $(tpl$a);
  $('#screen').append($tpl$2);
  function loaderScreen () {
    this.on('preload', () => {
      $tpl$2.css('display', 'flex');
    });
    this.on('load', () => {});
    this.on('postload', () => {
      $tpl$2.fadeOut();
    });
  }

  var tpl$9 = "<div id=\"stream\" class=\"screen\">\r\n  \r\n</div>";

  function streamScreen () {
    $('#screen').append(tpl$9);
    this.$store.$stream = $('#stream');
  }

  var css$d = ".component canvas{\r\n  width: 1024px !important;\r\n  height: 768px !important;\r\n}";
  n(css$d,{});

  var tpl$8 = "<div id=\"zim\" class=\"screen\">\r\n\r\n</div>";

  function zimScreen () {
    $('#screen').append(tpl$8);
  }

  var css$c = "i {\r\n  font-style: normal; \r\n}\r\n\r\n.cyan {\r\n  color: cyan; \r\n}\r\n\r\n.red {\r\n  color: red; \r\n}\r\n\r\n.green {\r\n  color: lightgreen; \r\n}\r\n\r\n.orange{\r\n  color: orange;\r\n}";
  n(css$c,{});

  var css$b = ".dialog-box {\r\n  z-index: 7000;\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  line-height: 32px;\r\n  height: 200px;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  cursor: pointer;\r\n  display: block;\r\n  padding-top: 10px;\r\n  padding-left: 10px;\r\n  word-spacing: 10px;\r\n  display: none;\r\n  top: unset; }\r\n\r\n.dialog-box__name {\r\n  color: wheat;\r\n  font-size: 22px;\r\n  width: 100%;\r\n  font-weight: bold;\r\n  padding: 10px; }\r\n\r\n.dialog-box__reply {\r\n  color: wheat;\r\n  font-size: 22px;\r\n  padding: 10px;\r\n  width: 90%; \r\n}\r\n\r\n";
  n(css$b,{});

  var tpl$7 = "<div class=\"dialog-box component\">\r\n    <div class=\"dialog-box__name\"></div>\r\n    <div class=\"dialog-box__reply\"></div>\r\n\r\n</div>";

  function dialogBox () {
    const $tpl = $(tpl$7);
    this.$store.$stream.append($tpl); //this.current.dialogBox = false

    /*
    * Вешаем клик на диалоговое окно
    */

    $tpl.on('mousedown', e => {
      this.next();
    });
    this.on('character', (character, reply) => {
      /*
      if(!this.current.dialogBox){
        console.error('[ dialog-box ] is not displayed')
      }*/
      $tpl.find('.dialog-box__name').html(character.name).css({
        color: character.nameColor
      });
      $tpl.find('.dialog-box__reply').html(reply).css({
        color: character.replyColor
      });
    });
    this.on('dialog-box', param => {
      if (param === 'clear') {
        //this.current.dialogBox = false
        $tpl.find('.dialog-box__name').empty();
        $tpl.find('.dialog-box__reply').empty();
      } else if (param) {
        //this.current.dialogBox = true
        $tpl.show();
      } else {
        //this.current.dialogBox = false
        $tpl.hide();
      }
    });
  }

  var css$a = ".stream__hands {\r\n    position: absolute;\r\n    z-index: 9999;\r\n    opacity: 0.8;\r\n    top: unset;\r\n    right: 0;\r\n    bottom: 10px;\r\n    display: none; \r\n    height: 185px;\r\n\r\n  }\r\n.stream__hands .stream__hand {\r\n    width: 95px;\r\n    height: 95px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGZmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTExLTA1VDEyOjM5OjM0KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTExLTA1VDEyOjM5OjM0KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMS0wNVQxMjozOTozNCswMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0ZDZhODRkYi1kYWE5LTE3NDYtOWYxZS1iMjE4ODRiZDRmNTkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphMmY2NzgyMy03MTY2LTRhNGYtOGMyMC04N2FlNzQ5YzJmZTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MmI1MTYxMC1kMjQ0LTkzNGYtYjBmNS1jMjk1ZjJlNzY5OTQiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MmI1MTYxMC1kMjQ0LTkzNGYtYjBmNS1jMjk1ZjJlNzY5OTQiIHN0RXZ0OndoZW49IjIwMjEtMTEtMDVUMTI6Mzk6MzQrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGQ2YTg0ZGItZGFhOS0xNzQ2LTlmMWUtYjIxODg0YmQ0ZjU5IiBzdEV2dDp3aGVuPSIyMDIxLTExLTA1VDEyOjM5OjM0KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZWIwNzk3Mi1hMTdlLTA0NGYtYWIxYi04MDExN2JmYWYzODM8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6BgqWgAAAF1klEQVR4nOVb247TMBA9YzvOZcWyVYWQeOEBxHfzA7zwzCfwD0gIgQQS0E1308Q3Hrr2Ote2CFiSHqlSktpJ5oxnMh57yDmHcwZ76Bd4aJw9ASI+efPmjcvzHF++fMHV1RX8sZQSQtw35Zxju91is9mAcw4iAgAYY7BarXBxcQHnHL5//46qqsA5B2OHuT7VHKfaExGUUrDWIs9zvH//HsYYEBFev35NgwTc3t7CWou6rlvHl5eXLQKEEFBKIUmSlnDGGGRZhjzP4ZxDmqYwxoBzDs75bwvknAMR9f4P5wQQqPVfrJQkSaC1hlIqXB8kgDEGxhiIqHX89evXlgCcc1RVhZubmyC8cw7GGBhjUJYlnHMoyxK73e4o4aeI8MITUUsAay2IAGcBh+E+ngTfd5IArz0pJd6+fRu03u1krYWUEmmawjmHpmnQNE1o5x+cJEl4aF3X0FqDiFqEGGPCsb/uyfTP5pzDOQchBGQqQz+jNRhjaGqFRjUtxRljsF6vkec5rLXh3pMExMM+TVMwxiCEQJqmrU7OOUgpkSQJAKBpGtR13WPYmwcRYbfbQd+9cOwPrLXhuDua/DXGWCAgzdJAgFZqkgD/foyx000AAKSU2G63+PjxY48AIUQYIUqpoN3u/Twp3iHFgk4REJuBJ4BzDpGI0M8aAyIGrTS00YEAf48XL15gvV4HwQ+agJQyaJaIUBQFPnz4gHfv3mGOWK1WeP78OTabTU+5HqMjwDc81YH9TyAiaK3vnCUNfopbBNzc3EBrjd1uB2stjDEnf5v/Jwghwqg2xqBpmh4JLQJ+/PgBKSWur6+D04htdG5IkgRZlu0d5p1iuyO6Nya8xofsZW7wznRKia0R8OjRI6RpCqVUGP5zNoEYQggkSTJtAo8fP0ZRFKiqahEExM58jIBRE3DOwdl5ExDDK7MrT2sEbDabMBHK8gwyu4/25o6jCNhut6jrGlVVIU1TyLQ9DZ4zxghomQDnHEKIEHpiGaN/Ei0C9gwBzlk0dY26rqGUeqh3+6PwUe5BJwjsidBaQysFY/Q/ecG/jbHJ0GieaqzD0tAjYC8vdX7LwEkj4Fxw9gQs4yN/BBhjrRR+uP5A7/PPcfJX4FzQMgHPjk9FH7ui878i1vpYTnC+0v0hLJ6AQ8Fc7yvgG1trYa2ddT4gyzIURRGSO03THM4JLgmxLxvDogkwxkApBaXU6EhedCB0fX2Nb9++oSzLsDw2mRCJMZZBmROOkWE0KbqEOMCHv/GyexctE/DLYcD9XoE5J0WllOErQESDCyQHTWDuONkEloqj9gcc02FecOG3nw9wMHZGOcFjZBgcAT4r7Le+zBXeqd/vc9in/WO0CPDOwm+Umvu6QKxE54bnNYv2AXF+wzkbtsrEWHQo7CdDRAQpUwy5vIUTwMC5ABGDlBk474u7+Djg3u5d53yPnhNcSgR4Dwei/WbOeDuvxyABS4RSCnVdH7c6vET4zPBZZYXjT/kZL4xMr3CPEuAzwnOPBGObHwrqek7QR0tXV1cQQuDVq1d49uzZXcUGcGi/wH6YhbPJh8fPJSKkaRoSF3ESo7sVn4hCkYZzDhcXFyiKIrT1iY+nT5+iLEsAe4Wqu/qCUQL8yzDGQpHEer3Gy5cvAwFtQfpC/S4BjDEURdETeqjQgTGGqqpwe3sL5xxWqxUuLy+DkL59WZao6xpCiOO2yeV5DiFEYJExBqVUqAH62wTEWvdC+NR2l4DdbhcIEEK0+vn21tqw6y1JEhhjpkfAkydPQqmc1vpuFuXw8+fPAUH3oaYXYKiiq7XlLkK8DT/O03lNMcYg5b42SGsdynHie8cJ28+fP+PTp09B6O7zfNWY7ztKQFwz5Bv7ffbdgqi4AKH7UL/VTko5SEBsp3HRlM/beyJ826qqegT4oi0AYeo+Nspih350xUis1aHvZ3yt/x/gHBvs1yVvqDYoDliGAphuHWE86xuKZON79d51qaHvsTiDQGgaZ0/ALy4XCMLKcyfBAAAAAElFTkSuQmCC);\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    z-index: 100;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.stream__hands .stream__hand-left {\r\n    width: 60px;\r\n    height: 60px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-repeat: no-repeat; \r\n}\r\n.stream__hands .stream__hand-right {\r\n    width: 60px;\r\n    height: 60px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-repeat: no-repeat; \r\n}\r\n";
  n(css$a,{});

  var tpl$6 = "<div class=\"stream__hands component\">\r\n    <div class=\"stream__hand\">\r\n        <div class=\"stream__hand-left\"></div>\r\n    </div>\r\n    <div class=\"stream__hand\">\r\n        <div class=\"stream__hand-right\"></div>\r\n    </div>\r\n</div>";

  function hands () {
    const $tpl = $(tpl$6);
    this.$store.$stream.append($tpl);
    this.on('hand-left', id => {
      if (id) {
        $tpl.show();
        $tpl.find('.stream__hand-left').css('background-image', `url('${this.getAssetByName(id).url}')`);
      } else {
        $tpl.find('.stream__hand-left').css('background-image', "unset");
      }
    });
    this.on('hand-right', id => {
      if (id) {
        $tpl.show();
        $tpl.find('.stream__hand-right').css('background-image', `url('${this.getAssetByName(id).url}')`);
      } else {
        $tpl.find('.stream__hand-right').css('background-image', "unset");
      }
    });
    this.on('hands', data => {
      if (data) {
        $tpl.show();
      } else {
        $tpl.hide();
      }
    });
  }

  var css$9 = ".screen__cloud {\r\n  width: 500px;\r\n  background: wheat;\r\n  padding: 30px;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-content: center;\r\n  align-items: center;\r\n  z-index: 1000;\r\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);\r\n  transform: translate(-50%, 0);\r\n  top: 10%; }\r\n  .screen__cloud .tag {\r\n    padding: 10px 15px;\r\n    font-size: 18px;\r\n    margin: 10px;\r\n    display: inline-flex;\r\n    background: #444;\r\n    cursor: pointer;\r\n    color: #34d1a2;\r\n    transition: 0.3s;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); }\r\n    .screen__cloud .tag:hover {\r\n      background: #000;\r\n      color: darkcyan; }\r\n";
  n(css$9,{});

  var tpl$5 = "<div class=\"screen__cloud component center\"></div>";

  function cloud () {
    var $tpl = $(tpl$5);
    this.$store.$stream.append($tpl);
    this.on('cloud', param => {
      $tpl.empty();
      $tpl.css('display', 'flex');

      if (param) {
        if (param.css) {
          $tpl.css(param.css);
        }

        Object.keys(param.tags).map(label => {
          let item = `<div class="tag sound-hover" data-label=${label}>${param.tags[label]}</div>`;
          $tpl.append(item);
        });
        let $vnjs = this;
        $tpl.on('click', '.tag', function () {
          let label = $(this).data('label');
          $vnjs.exec({
            jump: label
          });
        });
      } else {
        $tpl.hide();
      }
    });
  }

  function stopAll() {
    Object.values(this.$store).map(asset => {
      if (asset.hasOwnProperty("_muted")) {
        asset.stop();
      }
    });
  }

  function audio () {
    stopAll.call(this);

    var audio = data => {
      if (typeof data === 'string') {
        this.$store[data].play();
      } else if (typeof data === 'object') {
        this.$store[data.name].rate(data.speed || 1);
        this.$store[data.name].loop(data.loop || false);
        this.$store[data.name].volume(data.volume || 1);
        this.$store[data.name][data.action]();
      } else {
        stopAll.call(this);
      }
    };

    this.on('audio', audio);
    this.on('sound', data => {
      this.$store[data].play();
    });
  }

  //https://api.jquery.com/animate/

  /*
  	не умеет анимировать свойства 
    вроде 45deg, и т.д
   */
  function animate () {
    this.on('animate', data => {
      let {
        selector,
        duration,
        css
      } = data;
      console.log(data);
      $(selector).animate(css, duration);
      $(selector).css('color', 'red');
    });
  }

  var css$8 = ".stream__menu-menu {\r\n  width: 80%;\r\n  padding: 10px;\r\n  background: black;\r\n  flex-direction: column;\r\n  display: none;\r\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);\r\n  overflow: auto;\r\n  max-height: 95%;\r\n}\r\n  .stream__menu-menu .stream__menu-quetion {\r\n    background: rgba(70, 70, 70, 0.7);\r\n    width: 100%;\r\n    min-height: 40px;\r\n    font-size: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 10px 20px;\r\n    color: wheat;\r\n    transition: 0.1s;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-bottom: 10px;\r\n  }\r\n  .stream__menu-menu .stream__menu-item {\r\n    margin-bottom: 10px;\r\n    background: rgba(120, 120, 120, 0.7);\r\n    width: 100%;\r\n    min-height: 40px;\r\n    font-size: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: wheat;\r\n    transition: 0.1s;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis; }\r\n    .stream__menu-menu .stream__menu-item span {\r\n      padding: 10px 20px;\r\n      display: flex;\r\n      flex: 1; }\r\n    .stream__menu-menu .stream__menu-item:hover {\r\n      cursor: pointer;\r\n      background: rgba(200, 100, 100, 0.8); }\r\n    .stream__menu-menu .stream__menu-item span {\r\n      white-space: nowrap;\r\n      overflow: hidden;\r\n      text-overflow: ellipsis; }\r\n.stream__menu-menu .stream__menu-item:last-child{\r\n  margin-bottom: 0;\r\n}";
  n(css$8,{});

  var tpl$4 = "<div class=\"stream__menu-menu component center\"></div>";

  function menu () {
    var $tpl = $(tpl$4);
    this.$store.$stream.append($tpl);
    this.on('menu', menu);

    function menu(menuObj) {
      var onClickObj = null;
      $tpl.html('');

      for (var [label, menuItem] of Object.entries(menuObj)) {
        var character = this.getCharacterById(label);

        if (character) {
          var str = null;

          if (label === '$') {
            character.name = '';
          }

          if (character.name !== '') {
            str = `<div class="stream__menu-quetion">
                          <span style='color:${character.nameColor}; padding-right: 20px;'>${character.name}:</span>
                          <span style='color:${character.replyColor}; '>${menuItem}</span>
                    </div>`;
          } else {
            str = `<div class="stream__menu-quetion">
                          <span style='color:${character.replyColor};'>${menuItem}</span>
                    </div>`;
          }

          $('.stream__menu-menu').append(str);
        } else {
          let str = null;

          if (/disabled/i.test(label)) {
            str = `<div data-label="${label}" class="stream__menu-item disabled"><span class="sound-hover">${menuItem}</span></div>`;
          } else if (label === 'onClick') {
            onClickObj = menuItem;
          } else if (label === 'css') {
            $tpl.css(menuItem);
          } else {
            str = `<div data-label="${label}" class="stream__menu-item"><span class="sound-hover">${menuItem}</span></div>`;
          }

          $('.stream__menu-menu').append($(str));
        }
      }

      var $vnjs = this;

      function onClickMenuHandler(label) {
        if (menuObj.hasOwnProperty('onClick')) {
          $vnjs.exec(onClickObj);
        }
      }

      function clickHundler() {
        let label = $(this).data('label');

        if (label === 'next') {
          onClickMenuHandler();
          setTimeout(() => {
            $vnjs.exec({
              next: true
            });
          }, 0);
        } else {
          onClickMenuHandler();
          setTimeout(() => {
            $vnjs.exec({
              jump: label
            });
          }, 0);
        }

        $tpl.hide();
        $tpl.off("click", clickHundler);
      }

      $tpl.css({
        display: 'flex'
      });
      $tpl.on("click", ".stream__menu-item", clickHundler);
    }
  }

  var css$7 = ".main-menu {\r\n  width: 50%;\r\n  padding: 10px;\r\n  background-color: transparent;\r\n\r\n  flex-direction: column;\r\n  display: none;\r\n  /*box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);*/\r\n  overflow: auto;\r\n  max-height: 95%;\r\n}\r\n  .main-menu__item--quetion {\r\n    background: rgba(70, 70, 70, 0.7);\r\n    width: 100%;\r\n    min-height: 50px;\r\n    font-size: 26px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 10px 20px;\r\n    color: white;\r\n    transition: 0.1s;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-bottom: 10px;\r\n    box-shadow: 3px 3px 10px rgba(0,0,0,0.5);\r\n  }\r\n  .main-menu__item {\r\n    margin-bottom: 20px;\r\n    background-color: #333;\r\n    width: 100%;\r\n    min-height: 50px;\r\n    font-size: 26px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: #34d1a2;\r\n    transition: 0.1s;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    box-shadow: 3px 3px 10px rgba(0,0,0,0.7);\r\n  }\r\n    .main-menu__item span {\r\n      padding: 20px 20px;\r\n      padding-left: 50px;\r\n      display: flex;\r\n      flex: 1;\r\n      /*display: flex;\r\n      justify-content: center;*/\r\n    }\r\n    .main-menu__item:hover {\r\n      cursor: pointer;\r\n      color: darkcyan;\r\n      background: rgba(0, 0, 0, 0.7); }\r\n    .main-menu__item span {\r\n      white-space: nowrap;\r\n      overflow: hidden;\r\n      text-overflow: ellipsis; }\r\n.main-menu__item:last-child{\r\n  margin-bottom: 0;\r\n}\r\n\r\n.main-menu__item.disabled{\r\n  opacity: 0.6;\r\n}";
  n(css$7,{});

  var tpl$3 = "<div class=\"main-menu component center\"></div>";

  function mainMenu () {
    var $tpl = $(tpl$3);
    this.$store.$stream.append($tpl);
    this.on('main-menu', menu);

    function menu(menuObj) {
      var onClickObj = null;
      $tpl.html('');

      for (var [label, menuItem] of Object.entries(menuObj)) {
        var character = this.getCharacterById(label);

        if (character) {
          var str = null;

          if (label === '$') {
            character.name = '';
          }

          if (character.name !== '') {
            str = `<div class="main-menu__item--quetion">
                          <span style='color:${character.nameColor}; padding-right: 20px;'>${character.name}:</span>
                          <span style='color:${character.replyColor}; '>${menuItem}</span>
                    </div>`;
          } else {
            str = `<div class="main-menu__item--quetion">
                          <span style='color:${character.replyColor};'>${menuItem}</span>
                    </div>`;
          }

          $('.main-menu').append(str);
        } else {
          let str = null;

          if (/disabled/i.test(label)) {
            str = `<div data-label="${label}" class="main-menu__item disabled"><span class="sound-hover">${menuItem}</span></div>`;
          } else if (label === 'onClick') {
            onClickObj = menuItem;
          } else if (label === 'css') {
            $tpl.css(menuItem);
          } else {
            str = `<div data-label="${label}" class="main-menu__item"><span class="sound-hover">${menuItem}</span></div>`;
          }

          $('.main-menu').append($(str));
        }
      }

      var $vnjs = this;

      function onClickMenuHandler(label) {
        if (menuObj.hasOwnProperty('onClick')) {
          $vnjs.exec(onClickObj);
        }
      }

      function clickHundler() {
        let label = $(this).data('label');

        if (label === 'next') {
          onClickMenuHandler();
          setTimeout(() => {
            $vnjs.exec({
              next: true
            });
          }, 0);
        } else {
          onClickMenuHandler();
          setTimeout(() => {
            $vnjs.exec({
              jump: label
            });
          }, 0);
        }

        $tpl.hide();
        $tpl.off("click", clickHundler);
      }

      $tpl.css({
        display: 'flex'
      });
      $tpl.on("click", ".main-menu__item", clickHundler);
    }
  }

  var css$6 = ".stream__term-board {\r\n  width: 808px;\r\n  height: 480px;\r\n  padding: 25px;\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAygAAAHgCAIAAADBst5WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTE0VDE2OjI1OjM3KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0xNFQxNzo0MDoyMyswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMC0xNFQxNzo0MDoyMyswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YWYwZDI3YjMtYzhiZC01ZTRhLTlkYjgtMjMwMmNhNjk2MWZkIiB4bXBNTTpEb2N1bWVudElEPSJh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BQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAkOHgE+d5nqaptXbwyQAAGfM8z/N88LEHDq+5zavVahzHWuthJwMAxLTWhmFocyv9IZPmMOFVa51bu31yumvtqO9r7YoNLwDgIVa32+l8fX409nNrh9pROkx4TdM89v3Pf/KZubSu2OsCAB4Fu2ka+n7s+2k6zLHjYcLr5Pz8p59+4vOf/bW+66afwIEoAEBeLaWVMk3zyfn6IAP3Da9ay3Zq99e79a51w7L2XXegJAQAuGC11FZaN9dxVfuh7P3s4L7hdbaZP3ljde2FZ5aLo5NXX6q1ep4RAHjE1K6f1/fruNxzzr7htZvatePhqSuLaZrObr/diju8AIBHTWut9mMdxj03vQ5z1LiddqWUOi5VFwDw6PlO4ex9rOfN9QAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBABzY2HfLseu7+pGPDO37rUYAAD7i7vl2vZvOt1P/4T0u4QUAcDBdrXNrL71+58797WLsVkf99/87HC8XTzxxfbubbt66Oa/bUZ37xVjH/geNAwDgB+lrnVqrpcyttVZq/dC/wz9+7T9/+4/+onT9537nc888+9zXv/zeN//9zdWV6xe0WgCAh1otpW1282LsPlJdpZThtXfe+7dvvP349eu/9wfPfeLFX3zpH/7ulbdvXd0uL2KhAACPguXYP7izvpXSlXJ81F9e9GPfDYuj4XixOF6N//LP//TW2++8+9Ybj1+7PB45agQA+PE9eJ6xr2U3t9dunS+Pujunm/r4U4+31mqpZS637q9//cVP/Mpnnv726eaiVwsA8NBb9PX2+fTX//re2VQWu/Oh1lpK6Wp35fKVbjUdr5ZdmYfu/5xJAgDwI+q7OnZ1ddR3UymtG0optdZW2snZyTzNX32zvH57vZvmi14nAMBDr3Z1mubNyWkrrbb5e+/x2k27Ns/fPtvc2/WtCS8AgL3VWud5mHa1zK3W/wXr4h1fCs8q0wAAAABJRU5ErkJggg==);\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  position: absolute;\r\n  top: 5%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  display: none; }\r\n  .stream__term-board pre {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n    margin: 0; }\r\n    .stream__term-board pre code {\r\n      padding: 25px;\r\n      font-size: 24px;\r\n      height: 100%;\r\n      width: 100%;\r\n      position: absolute;\r\n      top: 0;\r\n      overflow-x: auto;\r\n      font-family: Minecraft; }\r\n      .stream__term-board pre code img {\r\n        height: 100%; }\r\n\r\n\r\n\r\n/* term theme */\r\n.stream__term-board pre code{\r\n  font-family: Consolas;\r\n  font-size: 20px;\r\n  color: darkcyan;\r\n}\r\n.hljs-bullet{\r\n  color: darkcyan;\r\n}\r\n.hljs-attr{\r\n  color: brown;\r\n}\r\n.stream__term-board pre code .hljs-reply{\r\n  color: brown;\r\n}\r\n.hljs-string{\r\n  color: darkolivegreen;\r\n}\r\n.hljs-property{\r\n  color: goldenrod;\r\n}\r\n.hljs-comment{\r\n  color: gray;\r\n}";
  n(css$6,{});

  var tpl$2 = "<div class=\"stream__term-board component\">\r\n    <pre><code></code></pre>\r\n</div>\r\n";

  document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();
  });
  /**/

  function term () {
    var $tpl = $(tpl$2);
    this.$store.$stream.append($tpl);
    this.on('term', param => {
      if (param) {
        var data = this.getDataByName(param);

        if (/\./.test(param)) {
          if (!data) {
            console.error('Data file not found');
            console.warn(this.current.sceneName + '.' + this.current.labelName + '.' + this.current.index);
          } else {
            let str = param.split('.');
            let langName = str[1];
            $tpl.find('pre code').css('overflow', 'auto');
            var html = hljs.highlight(data.body, {
              language: langName
            }).value;
            $tpl.find('pre code').html(html);
            $tpl.find('pre code .hljs-string').toArray().map(str => {
              if ($(str).html() === '$:') {
                $(str).addClass('hljs-reply');
              }
            });
            $($tpl).fadeIn();
          }
        } else {
          if (param === 'clear') {
            $tpl.find('pre code').empty();
          } else {
            let img = $(`<img src=${this.getAssetByName(param).url} />`);
            $tpl.find('pre code').empty();
            $tpl.find('pre code').css('overflow', 'hidden');
            $tpl.find('pre code').append(img);
            $($tpl).fadeIn();
          }
        }
      } else {
        $($tpl).hide();
      }
    });
  }

  var css$5 = ".stream__show-left {\r\n  position: absolute;\r\n  left: 50px;\r\n  top: 119px;\r\n  width: 260px;\r\n  height: 450px;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center;\r\n  z-index: 9999; }\r\n\r\n.stream__show-center {\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  top: 119px;\r\n  width: 260px;\r\n  height: 450px;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center;\r\n  z-index: 9999; }\r\n\r\n.stream__show-right {\r\n  position: absolute;\r\n  right: 50px;\r\n  top: 119px;\r\n  width: 260px;\r\n  height: 450px;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center;\r\n  z-index: 9999; }\r\n";
  n(css$5,{});

  function show () {
    let $left = $('<div class="stream__show-left component"></div>');
    let $right = $('<div class="stream__show-right component"></div>');
    let $center = $('<div class="stream__show-center component"></div>');
    let $show = $('<div class="stream__show-show component"></div>');
    this.$store.$stream.append($left);
    this.$store.$stream.append($right);
    this.$store.$stream.append($center);
    /*
    
    .stream__show-show.component
     */

    this.on('left', id => {
      if (id) {
        $left.hide();
        $left.css('background-image', `url('${this.getAssetByName(id).url}')`).fadeIn();
      } else {
        $left.fadeOut();
      }
    });
    this.on('center', id => {
      if (id) {
        $center.hide();
        $center.css('background-image', `url('${this.getAssetByName(id).url}')`).fadeIn();
      } else {
        $center.fadeOut();
      }
    });
    this.on('right', id => {
      if (id) {
        $right.hide();
        $right.css('background-image', `url('${this.getAssetByName(id).url}')`).fadeIn();
      } else {
        $right.fadeOut();
      }
    });
    this.on('show', param => {
      if (param) {
        $show.css('background-image', `url('${this.getAssetByName(id).url}')`).css(param.css).fadeIn();
      } else {
        $show.fadeOut();
      }
    });
  }

  function scene () {
    this.on('scene', id => {
      if (typeof id === 'object') {
        this.$store.$screen.css('opacity', 0);
        this.$store.$screen.css({
          'background-image': `url(${id.url})`
        });
        this.$store.$screen.css('opacity', 1);
      } else if (typeof id === 'string') {
        this.$store.$screen.css('opacity', 0);
        this.$store.$screen.css({
          'background-image': `url('${this.getAssetByName(id).url}')`
        });
        this.$store.$screen.css('opacity', 1);
      } else {
        this.$store.$screen.css({
          'background-image': `unset`
        });
      }
    });
  }

  var menuItemSound = "menu-item.mp3";

  function soundHover () {
    var itemSound = new Howl({
      src: './assets/' + menuItemSound,
      volume: 0.1
    });
    $('#screen').on('mouseover', '.sound-hover', function () {
      itemSound.play();
    });
  }

  function clear () {
    this.on('clear', param => {
      if (param === 'all') {
        $('.component').toArray().map(function (component) {
          $(component).hide();
        });
        this.exec({
          scene: false,
          'dialog-box': 'clear'
        });
        Object.values(this.$store).map(asset => {
          if (asset.hasOwnProperty("_muted")) {
            asset.stop();
          }
        });
      }
    });
  }

  function data$1 () {
    this.on('player-load', name => {
      if (store.get(name)) {
        this.current.data = store.get(name);
      }
    });
    this.on('set-data', data => {
      for (let key in data) {
        this.current.data[key] = data[key];
      }

      store.set(this.current.data.player.name, this.current.data);
    });
    this.on('clear-data-all', data => {
      localStorage.clear();
    });
    this.on('clear-data', data => {
      store.remove(this.current.data.player.name);
      this.current.data = {
        score: this.current.data.score,
        player: this.current.data.player
      };
    });
    this.on('switch', data => {
      for (let equal in data) {
        let param = equal.split('===');

        if (this.current.data[param[0]] === param[1]) {
          this.exec(data[equal]);
        }
      }
    });
  }

  var css$4 = "\r\n\r\n.stream__qa{\r\n  display: none;\r\n  z-index: 8888;\r\n  width: 60%;\r\n  flex-direction: column;\r\n}\r\n\r\n.stream__qa--item{\r\n\r\n  color: white;\r\n  cursor: pointer;\r\n  color: wheat;\r\n  transition: 0.1s;\r\n  margin-bottom: 10px;\r\n  border-style: solid;\r\n  border-width: 3px;\r\n  border-color: black;\r\n  color: white;\r\n  background: grey;\r\n}\r\n.stream__qa--item:last-child{\r\n  margin-bottom: 0;\r\n}\r\n.stream__qa--item:hover {\r\n  background: rgba(100, 200, 100, 0.7);\r\n}\r\n\r\n.stream__qa--quetion{\r\n  background: rgba(0,0,0,0.7);\r\n  pointer-events: none;\r\n  text-overflow: unset;\r\n  height: auto;\r\n  white-space: unset;\r\n}\r\n.stream__qa--quetion span{\r\n  text-overflow: unset;\r\n  height: auto;\r\n  overflow: auto;\r\n  white-space: unset;\r\n  line-height: 28px;\r\n\r\n}\r\n.stream__qa--item span{\r\n  padding: 7px 20px;\r\n  display: block;\r\n}\r\n.stream__qa--item .stream__qa--name{\r\n  padding: unset;\r\n  display: none;\r\n}\r\n/*\r\n.stream__qa--name:after{\r\n  content: \" :\"\r\n}\r\n*/\r\n.stream__qa--reply{\r\n  padding: unset;\r\n  padding-left: 20px;\r\n}";
  n(css$4,{});

  var tpl$1 = "<div class=\"stream__qa component center\"></div>";

  class Score {
    constructor() {
      this.логика = {
        мозговой_штурм: 0,
        критическое_мышление: 0,
        рефлексивное_мышление: 0,
        стратегическое_мышление: 0
      };
      this.творчество = {
        интуиция: 0,
        креативность: 0,
        оригинальность: 0,
        продуктивность: 0
      };
      this.эмоции = {
        понимание_эмоций: 0,
        выражение_эмоций: 0,
        восприятие_эмоций: 0,
        управление_эмоциями: 0
      };
      this.общение = {
        кругозор: 0,
        лидерство: 0,
        адекватность: 0,
        чувство_юмора: 0
      };
      this.теория = {
        понимание: 0,
        умение_доказать: 0,
        умение_объяснить: 0,
        доклады_презентации: 0
      };
      this.практика = {
        работа_в_команде: 0,
        работа_на_занятии: 0,
        работа_самостоятельно: 0,
        качество_и_время_работы: 0
      };
      this.прилежание = {
        упорство: 0,
        аккуратность: 0,
        внимательность: 0,
        самоорганизация: 0
      };
      this.квалификация = {
        специализация: 0,
        универсальность: 0
      };
    }

  }

  function clearData() {
    if (this.current.data.score) {
      this.current.data.score = new Score();
      store.set(this.current.data.player.name, this.current.data);
      this.emit('setScore');
    }
  }

  function qa () {
    if (!this.current.data.score) {
      this.current.data.score = new Score();
    }

    var $tpl = $(tpl$1);
    this.$store.$stream.append($tpl);

    var setScore = data => {
      for (let key in data) {
        for (let param in data[key]) {
          this.current.data.score[key][param] += data[key][param];
        }
      }

      store.set(this.current.data.player.name, this.current.data);
      this.emit('setScore');
    };

    this.on('оценка', data => {
      if (data === 'reset') {
        clearData.call(this);
        this.current.data.score = new Score();
      } else {
        setScore(data);
      }
    });

    var qaHandler = data => {
      $tpl.empty();

      for (var [label, menuItem] of Object.entries(data)) {
        var str = null;
        var character = this.getCharacterById(label);

        if (character) {
          str = `
          <div class="stream__qa--item stream__qa--quetion">
              <span class="stream__qa--name" style="color: ${character.nameColor};">${character.name}</span>
              <span class="stream__qa--reply" style="color: ${character.replyColor};">${menuItem}</span>
          </div>`;
          $('.stream__qa').append(str);
        } else {
          str = `<div class="stream__qa--item" data-score=${JSON.stringify(menuItem)}><span class="sound-hover">${label}</span></div>`;
          $('.stream__qa').append(str);
        }
      }

      $tpl.css('display', 'flex');
      let $vnjs = this;

      function clickHundler() {
        let data = $(this).data('score');
        setScore(data);
        $('.stream__qa').off("click", clickHundler);
        $('.stream__qa').hide();
        $vnjs.exec({
          next: true
        });
      }

      $(".stream__qa").on("click", ".stream__qa--item", clickHundler);
    };

    this.on('qa', data => {
      if (data === 'reset') {
        clearData.call(this);
      } else if (data) {
        qaHandler(data);
      } else {
        $(".stream__qa").hide();
      }
    });
  }

  function assetsLoader (_assets) {
    var i = 0;

    var load = _ => {
      var asset = _assets[i];

      if (_assets.length > i) {
        if (/\.png|\.jpg|.webp/i.test(asset.url)) {
          let img = new Image();
          img.src = asset.url;

          img.onload = () => {
            this.$store[asset.name] = asset.url;
            load();
          };
        }

        if (/\.mp3|\.wav|\.ogg/i.test(asset.url)) {
          var sound = new Howl({
            src: asset.url
          });
          sound.on('load', _ => {
            this.$store[asset.name] = sound;
            load();
          });
        }

        ++i;
      } else {
        this.current.assets = this.current.assets.concat(_assets);
        this.emit('postloadAssetsInlcudeScene');
      }
    };

    load();
  }

  function loadScene () {
    var obj = {};
    window.obj = obj; //var loaded = false

    var pathName = null;
    this.on('load-scene', url => {
      this.exec({
        screen: "loader"
      });

      if (obj[url]) {
        this.exec({
          jump: pathName,
          clear: 'all'
        });
        this.exec({
          screen: "stream"
        });
      } else {
        fetch(url).then(r => r.json()).then(r => init(r));

        var init = data => {
          pathName = data.package.sceneName + "." + data.package.labelName;
          this.TREE[data.package.sceneName] = data.sceneBody;
          assetsLoader.call(this, data.sceneBody.assets);
          this.on('postloadAssetsInlcudeScene', () => {
            this.exec({
              screen: "stream"
            });
            this.exec({
              clear: 'all'
            });
            this.exec({
              jump: pathName
            });
            obj[url] = true;
          });
        };
      }
    });
  }

  var css$3 = ".screen-stream__slide{\r\n  position: absolute;\r\n  display: none;\r\n  top: 5%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5);\r\n  z-index: 2000;\r\n}";
  n(css$3,{});

  const $tpl$1 = $(`<img class="screen-stream__slide component"/>`);
  function slide () {
    this.$store.$stream.append($tpl$1);
    this.on('slide', id => {
      $tpl$1.attr('src', null);

      if (typeof id === 'string') {
        $tpl$1.attr('src', this.getAssetByName(id).url).show();
      } else if (typeof id === 'object') {
        /*
         * id.name
         * id.css
         * id.url
         */
        if (id.hasOwnProperty('css')) {
          $tpl$1.css(id.css);
          $tpl$1.attr('src', id.name).show();
        }

        if (id.hasOwnProperty('url')) {
          $tpl$1.attr('src', id.url).fadeIn();
        } else {
          $tpl$1.attr('src', this.getAssetByName(id.name).url).show();
        }
        /*
        .css(id.css)
         */

      } else {
        $tpl$1.attr('src', null).hide();
      }
    });
  }

  var css$2 = ".stream__stage{\r\n  margin: 1% 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  background: #333;\r\n  width: 70%;\r\n  padding: 5px;\r\n  height: 548px;\r\n  overflow: auto;\r\n}\r\n.stream__stage li{\r\n  list-style-type: none;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  display: block;\r\n}\r\n.stream__stage li:last-child{\r\n  margin-bottom: 0px;\r\n}\r\n.stage-children li:not(.stage-child){\r\n  display: none;\r\n}\r\n.stage-parent{\r\n  padding: 5px;\r\n  background: rgba(0, 0, 0, 0.1);\r\n  margin-bottom: 5px;\r\n}\r\n/*Том*/\r\n.stage-vol{\r\n  padding: 10px;\r\n  transition: 0.3s;\r\n  background: #000;\r\n  color: darkcyan;\r\n}\r\n.stage-vol:hover{\r\n  color: #34d1a2;\r\n  background: rgba(0, 0, 0, 0.7);\r\n}\r\n.stage-children{\r\n  padding-left: 20px;\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n/*Глава*/\r\n.stage-child{\r\n  color: darkcyan;\r\n  padding: 10px;\r\n  transition: 0.3s;\r\n  background: #000;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.stage-child:hover{\r\n  color: #34d1a2;\r\n  background: rgba(0, 0, 0, 0.7);\r\n}\r\n";
  n(css$2,{});

  var icoContent = "data:image/jpeg;base64,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bmcAAAAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAFo4QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQAAAAAAAACAAE4QklNBAIAAAAAAAQAAAAAOEJJTQQwAAAAAAACAQE4QklNBC0AAAAAAAYAAQAAAAI4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQQeAAAAAAAEAAAAADhCSU0EGgAAAAADSwAAAAYAAAAAAAAAAAAAADwAAAA8AAAACwQRBDUENwAgBDgEPAQ1BD0EOAAtADEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAADwAAAA8AAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAAA8AAAAAFJnaHRsb25nAAAAPAAAAAZzbGljZXNWbExzAAAAAU9iamMAAAABAAAAAAAFc2xpY2UAAAASAAAAB3NsaWNlSURsb25nAAAAAAAAAAdncm91cElEbG9uZwAAAAAAAAAGb3JpZ2luZW51bQAAAAxFU2xpY2VPcmlnaW4AAAANYXV0b0dlbmVyYXRlZAAAAABUeXBlZW51bQAAAApFU2xpY2VUeXBlAAAAAEltZyAAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3Ag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b3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTEtMDVUMTk6NTE6MzErMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMTEtMDVUMTk6NTE6MzErMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTExLTA1VDE5OjUxOjMxKzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmMxMzJjNDExLWMwYTUtMjg0MS1iYjgxLTRjZDA2ZmZlMDU2MSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjIyZTVhYzcxLTdiYzgtMDc0YS1hMTNkLWM2MWZiMWUzYTk5NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjFiYzdhZjBhLTUwNjktYmQ0Ni05ZmU0LWRjNmMzNDFhZDEwYyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYmM3YWYwYS01MDY5LWJkNDYtOWZlNC1kYzZjMzQxYWQxMGMiIHN0RXZ0OndoZW49IjIwMjEtMTEtMDVUMTk6NTE6MzErMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzEzMmM0MTEtYzBhNS0yODQxLWJiODEtNGNkMDZmZmUwNTYxIiBzdEV2dDp3aGVuPSIyMDIxLTExLTA1VDE5OjUxOjMxKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkFCOEEzMTkwMjI5NTE4Q0E5RjI4MURCNjA3RTYwRkUxPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/7gAOQWRvYmUAZEAAAAAB/9sAhAACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwMAQMDAwUEBQkGBgkNCgkKDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAA8ADwDAREAAhEBAxEB/90ABAAI/8QBogAAAAcBAQEBAQAAAAAAAAAABAUDAgYBAAcICQoLAQACAgMBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAIBAwMCBAIGBwMEAgYCcwECAxEEAAUhEjFBUQYTYSJxgRQykaEHFbFCI8FS0eEzFmLwJHKC8SVDNFOSorJjc8I1RCeTo7M2F1RkdMPS4ggmgwkKGBmElEVGpLRW01UoGvLj88TU5PRldYWVpbXF1eX1ZnaGlqa2xtbm9jdHV2d3h5ent8fX5/c4SFhoeIiYqLjI2Oj4KTlJWWl5iZmpucnZ6fkqOkpaanqKmqq6ytrq+hEAAgIBAgMFBQQFBgQIAwNtAQACEQMEIRIxQQVRE2EiBnGBkTKhsfAUwdHhI0IVUmJy8TMkNEOCFpJTJaJjssIHc9I14kSDF1STCAkK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";

  const $tpl = $(`<ul class="stream__stage component"></ul>`);
  function content () {
    this.$store.$stream.append($tpl);
    this.on('content', data => {
      if (typeof data === 'string') {
        console.log('hide: ', data);
      } else if (typeof data === 'object') {
        renderTree.call(this, data);
      } else {
        $tpl.hide();
      }
    });
    $('.stream__hands').on('mouseover', '.stream__hand-right', function () {
      $(this).css('opacity', 0.5);
    });
    $('.stream__hands').on('mouseout', '.stream__hand-right', function () {
      $(this).css('opacity', 1);
    });
    $('.stream__hand-right').css('background-image', `url(${icoContent})`);
    $('.stream__hands').on('click', '.stream__hand-right', e => {
      if (this.TREE.$root.content) {
        this.exec({
          jump: '$root.content'
        });
      }
      /*
      else{
        console.warn('Scene: { ' +'$root.content'+ ' } not found')
      }*/

    });
  }

  function renderTree(data) {
    const $vnjs = this;
    $tpl.empty();
    $tpl.fadeIn();
    data.map(item => {
      var $parent = $(`<li class="stage-parent"><div class="stage-vol stage-item sound-hover"></div><ul class="stage-children"></ul></li>`);
      Object.keys(item).map((key, i) => {
        if (i === 0) {
          $parent.find('.stage-vol').html(item[key]).attr('data-label', key);

          if (/disabled/i.test(key)) {
            $parent.addClass('disabled');
          }
        } else {
          let $str = $(`<li class="stage-child stage-item sound-hover" data-label="${key}">${item[key]}<li>`);

          if (/disabled/i.test(key)) {
            $str.addClass('disabled');
          }

          $parent.find('ul').append($str);
        }
      });
      $tpl.append($parent);
    });

    function clickHandler() {
      let label = $(this).data('label');
      $tpl.hide();
      $vnjs.exec({
        jump: label
      });
      $tpl.off('click', clickHandler);
    }

    $tpl.on('click', '.stage-item', clickHandler);
  }

  var icoPlay = "data:image/jpeg;base64,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AABDcHRuYm9vbAAAAAAAQ2xicmJvb2wAAAAAAFJnc01ib29sAAAAAABDcm5DYm9vbAAAAAAAQ250Q2Jvb2wAAAAAAExibHNib29sAAAAAABOZ3R2Ym9vbAAAAAAARW1sRGJvb2wAAAAAAEludHJib29sAAAAAABCY2tnT2JqYwAAAAEAAAAAAABSR0JDAAAAAwAAAABSZCAgZG91YkBv4AAAAAAAAAAAAEdybiBkb3ViQG/gAAAAAAAAAAAAQmwgIGRvdWJAb+AAAAAAAAAAAABCcmRUVW50RiNSbHQAAAAAAAAAAAAAAABCbGQgVW50RiNSbHQAAAAAAAAAAAAAAABSc2x0VW50RiNQeGxAUgAAAAAAAAAAAAp2ZWN0b3JEYXRhYm9vbAEAAAAAUGdQc2VudW0AAAAAUGdQcwAAAABQZ1BDAAAAAExlZnRVbnRGI1JsdAAAAAAAAAAAAAAAAFRvcCBVbnRGI1JsdAAAAAAAAAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAAAAAEGNyb3BXaGVuUHJpbnRpbmdib29sAAAAAA5jcm9wUmVjdEJvdHRvbWxvbmcAAAAAAAAADGNyb3BSZWN0TGVmdGxvbmcAAAAAAAAADWNyb3BSZWN0UmlnaHRsb25nAAAAAAAAAAtjcm9wUmVjdFRvcGxvbmcAAAAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAFo4QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAA0sAAAAGAAAAAAAAAAAAAAA8AAAAPAAAAAsEEQQ1BDcAIAQ4BDwENQQ9BDgALQAxAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAA8AAAAPAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAABAAAAABAAAAAAAAbnVsbAAAAAIAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAAPAAAAABSZ2h0bG9uZwAAADwAAAAGc2xpY2VzVmxMcwAAAAFPYmpjAAAAAQAAAAAABXNsaWNlAAAAEgAAAAdzbGljZUlEbG9uZwAAAAAAAAAHZ3JvdXBJRGxvbmcAAAAAAAAABm9yaWdpbmVudW0AAAAMRVNsaWNlT3JpZ2luAAAADWF1dG9HZW5lcmF0ZWQAAAAAVHlwZWVudW0AAAAKRVNsaWNlVHlwZQAAAABJbWcgAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAADwAAAAAUmdodGxvbmcAAAA8AAAAA3VybFRFWFQAAAABAAAAAAAAbnVsbFRFWFQAAAABAAAAAAAATXNnZVRFWFQAAAABAAAAAAAGYWx0VGFnVEVYVAAAAAEAAAAAAA5jZWxsVGV4dElzSFRNTGJvb2wBAAAACGNlbGxUZXh0VEVYVAAAAAEAAAAAAAlob3J6QWxpZ25lbnVtAAAAD0VTbGljZUhvcnpBbGlnbgAAAAdkZWZhdWx0AAAACXZlcnRBbGlnbmVudW0AAAAPRVNsaWNlVmVydEFsaWduAAAAB2RlZmF1bHQAAAALYmdDb2xvclR5cGVlbnVtAAAAEUVTbGljZUJHQ29sb3JUeXBlAAAAAE5vbmUAAAAJdG9wT3V0c2V0bG9uZwAAAAAAAAAKbGVmdE91dHNldGxvbmcAAAAAAAAADGJvdHRvbU91dHNldGxvbmcAAAAAAAAAC3JpZ2h0T3V0c2V0bG9uZwAAAAAAOEJJTQQoAAAAAAAMAAAAAj/wAAAAAAAAOEJJTQQRAAAAAAABAQA4QklNBBQAAAAAAAQAAAACOEJJTQQMAAAAAASCAAAAAQAAADwAAAA8AAAAtAAAKjAAAARmABgAAf/Y/+0ADEFkb2JlX0NNAAL/7gAOQWRvYmUAZIAAAAAB/9sAhAAMCAgICQgMCQkMEQsKCxEVDwwMDxUYExMVExMYEQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAQ0LCw0ODRAODhAUDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAA8ADwDASIAAhEBAxEB/90ABAAE/8QBPwAAAQUBAQEBAQEAAAAAAAAAAwABAgQFBgcICQoLAQABBQEBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAEEAQMCBAIFBwYIBQMMMwEAAhEDBCESMQVBUWETInGBMgYUkaGxQiMkFVLBYjM0coLRQwclklPw4fFjczUWorKDJkSTVGRFwqN0NhfSVeJl8rOEw9N14/NGJ5SkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2N0dXZ3eHl6e3x9fn9xEAAgIBAgQEAwQFBgcHBgU1AQACEQMhMRIEQVFhcSITBTKBkRShsUIjwVLR8DMkYuFygpJDUxVjczTxJQYWorKDByY1wtJEk1SjF2RFVTZ0ZeLys4TD03Xj80aUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9ic3R1dnd4eXp7fH/9oADAMBAAIRAxEAPwDikklOms23V1AwbHNbP9YhqctJABJ2Athr4JLey2fVyjJf027HfUKoYctpJO6JlzP3VR6h0bIxGi+sjJxHatvr1Ef8J+4jTWxc7jmYiQli4xxY/cHCMkTtwy+X/Bc9JJJBtKSSSSU//9DikfA/p2P/AMbX/wBU1AR8D+nY/wDxtf8A1bU5jy/zc/7svyT9d/5ZzO36T+AUOn9UzOnvLqHj03fTqfrW4fy2onXf+WMz/jP4KhKJ3YcEI5OVxRnESiccLEtf0HbOH0zq8vwCMPOOrsR5hjz/AMC9ZOTjX4tppyGOrsH5rhCENCCO2oI7fct7pWdb1R7OlZ9f2qt0hl0TZVAnc6z9xJjn7vKxMgfdwR1lGZ/XYof1J/5SP9SbgpKd1YrusrDt4rc5od4gGAVBBt8Q4eLpXF/g/M//0eKR8H+nY3/HV/8AVtQEXDcG5lDjoG2sJPwcCnMeX+bn/dl+Ta67/wAsZn/GfwVZmLa6n7Q4bKAQDY7vJ/wbf8ItfO6bnX/WDINWN6rS8WNdYIq2kfTc791SyMrA6dYbLHDqfU26NJ/mKj+7Uxvs9qcQ0cfNVhwY8Q9yZxw9MDcvl/S/Rx/38jUxOhuNX2vPf9kwxqHO0seP+Dr/AJSlkdarqpdidJq+zUO0faf51/j7vzVQzc7JzrjblPNjuwPA8mN/Nagf6n4oX2Zo8tLIRPmZcZGscUf5iB8v8rL+tNXZJJJBtv8A/9Likkkk5Dbf1fqb8cYz8qw1ARtnsPNVOEkkmLD7NH2eCr9Xt8Pzf1uFSSSSTKpJJJJT/9k4QklNBCEAAAAAAFcAAAABAQAAAA8AQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAAAAUAEEAZABvAGIAZQAgAFAAaABvAHQAbwBzAGgAbwBwACAAMgAwADIAMAAAAAEAOEJJTQQGAAAAAAAHAAQAAAABAQD/4Q17aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTEtMDZUMTA6NDA6MzUrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMTEtMDZUMTA6NDA6MzUrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTExLTA2VDEwOjQwOjM1KzAzOjAwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZDMxMzVjMGYtMWYyMi05ZDQ5LTgzYTAtMDFjZjMzY2YzZTUxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmQzMTM1YzBmLTFmMjItOWQ0OS04M2EwLTAxY2YzM2NmM2U1MSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQzMTM1YzBmLTFmMjItOWQ0OS04M2EwLTAxY2YzM2NmM2U1MSI+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkFCOEEzMTkwMjI5NTE4Q0E5RjI4MURCNjA3RTYwRkUxPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDMxMzVjMGYtMWYyMi05ZDQ5LTgzYTAtMDFjZjMzY2YzZTUxIiBzdEV2dDp3aGVuPSIyMDIxLTExLTA2VDEwOjQwOjM1KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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";

  function voice () {
    var prev = null;
    this.on('voicePlay', data => {
      if (data) {
        if (prev) {
          this.$store[prev].stop();
        }

        prev = data;
        this.$store[data].play();
      } else {
        this.$store[data].stop();
      }
    });
    this.on('$voice', data => {
      if (data) {
        $('.stream__hand-left').css('background-image', `url(${icoPlay})`);
      } else {
        this.emit('hand-left', false);
        this.$store[prev].stop();
        prev = null;
      }

      if (prev) {
        this.$store[prev].stop();
        prev = null;
      }

      prev = data;
    });
    this.on('exec', ctx => {
      if (!this.ctx.$voice && prev) {
        this.$store[prev].stop();
        this.emit('hand-left', false);
        prev = null;
      }
    });
    $('.stream__hands').on('mouseover', '.stream__hand-left', function () {
      $(this).css('opacity', 0.5);
    });
    $('.stream__hands').on('mouseout', '.stream__hand-left', function () {
      $(this).css('opacity', 1);
    });
    $('.stream__hands').on('click', '.stream__hand-left', e => {
      if (this.ctx.$voice) {
        this.emit('voicePlay', this.ctx.$voice);
      }
    });
  }

  function embed () {
    this.on('postload', () => {
      var embed = this.TREE.$root.embed;

      if (embed) {
        for (let event in embed) {
          eventRegistration$1.call(this, event, embed[event]);
        }
      }
    });
  }

  function eventRegistration$1(event, tpl) {
    var $tpl = $(tpl);
    $tpl.hide().addClass("component").css('background-color', 'white');
    this.$store.$stream.append($tpl);
    this.on(event, data => {
      if (data) {
        $tpl.fadeIn();
      } else {
        const $src = $tpl;
        $tpl.remove();
        $src.hide();
        this.$store.$stream.append($tpl);
      }
    });
  }

  function html () {
    this.on('postload', () => {
      var htmlChunk = this.TREE.$root.html;

      if (htmlChunk) {
        for (let event in htmlChunk) {
          eventRegistration.call(this, event, htmlChunk[event]);
        }
      }
    });
  }

  function eventRegistration(event, tpl) {
    var $tpl = $(tpl);
    $tpl.hide().addClass("component");
    this.$store.$stream.append($tpl);
    this.on(event, data => {
      if (typeof data === 'object') {
        $tpl.css(data.css);
        $tpl.fadeIn();
      } else if (data) {
        $tpl.fadeIn();
      } else {
        $tpl.hide();
      }
    });
  }

  var data = { webhook:"https://discord.com/api/webhooks/910560991065022496/winfPoEA0HiM61rGFLv9F_RUoO2BZAwRlk1tS15cOCBfWvvzgJsicCAiOPpNWF0klFTg",
    avatar_url:"https://avatars.githubusercontent.com/u/17809187?s=200&v=4" };
  var webhook = data.webhook;
  var avatar_url = data.avatar_url;

  function discordLog () {
    function sendMessage(params, url) {
      const request = new XMLHttpRequest();
      request.open("POST", url);
      request.setRequestHeader('Content-type', 'application/json');
      request.send(JSON.stringify(params));
    }

    this.on('discord-log', msg => {
      var content = null;

      if (typeof msg === 'string') {
        content = this.TREE.$root.package.name + ' [ ' + this.current.sceneName + '.' + this.current.labelName + ' ]  ' + msg;
      } else {
        content = this.TREE.$root.package.name + ' [ ' + this.current.sceneName + '.' + this.current.labelName + ' ]';
      }

      const params = {
        username: $vnjs.current.data.player.name,
        avatar_url,
        content
      };
      sendMessage(params, webhook);
    });
  }

  var css$1 = ".status-bar{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(0,0,0,0.7);\r\n  color: gray;\r\n  width: 100%;\r\n  height: 4%;\r\n  z-index: 9999;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 5px 15px;\r\n  display: none;\r\n}\r\n.status-bar__status--ready,\r\n.status-bar__status--help{\r\n  display: inline-flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  margin-right: 10px;\r\n}\r\n.status-bar__status--ready span{\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  background-color: gray;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n}\r\n\r\n.status-bar__status--help span{\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  background-color: gray;\r\n  display: i gray;\r\n  margin-right: 10px;\r\n}\r\n\r\n.status-bar__status--ready.status-active span{\r\n    background-color: lightgreen;\r\n}\r\n.status-bar__status--ready.status-active {\r\n   color: white;\r\n}\r\n.status-bar__status--help.status-active span{\r\n    background-color: red;\r\n}\r\n.status-bar__status--help.status-active{\r\n  color: white;\r\n}\r\n/*\r\n.status-bar__item:hover{\r\n  color: white;\r\n}\r\n.status-bar__status--ready:hover span{\r\n    background-color: lightgreen;\r\n}\r\n.status-bar__status--help:hover span{\r\n    background-color: red;\r\n}\r\n*/\r\n\r\n.status-bar__image-containter{\r\n  position: absolute;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  top: 40px;\r\n  right: 0;\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n.status-bar__player-name{\r\n  padding-left: 10px;\r\n}\r\n.status-bar__player{\r\n  display: flex;\r\n  align-items: center;\r\n}";
  n(css$1,{});

  var tpl = "<div class=\"status-bar component\">\r\n  <div class=\"status-bar__player\"><img id=\"status-bar__player-logo\"><span class=\"status-bar__player-name\"></span></div>\r\n  <div class=\"status-bar__status\">\r\n      <span class=\"status-bar__item status-bar__status--ready\"><span></span>Готов</span>\r\n      <span class=\"status-bar__item status-bar__status--help\"><span></span>Помощь</span>\r\n      <div class=\"status-bar__image-containter\"></div>\r\n  </div>\r\n\r\n</div>";

  var readyImg = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%20%20%3Cpath%20fill%3D%22%2300ff00%22%20d%3D%22M12%202C6.5%202%202%206.5%202%2012S6.5%2022%2012%2022%2022%2017.5%2022%2012%2017.5%202%2012%202M10%2017L5%2012L6.41%2010.59L10%2014.17L17.59%206.58L19%208L10%2017Z%22%20%2F%3E%3C%2Fsvg%3E";

  var helpImg = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%20%20%3Cpath%20fill%3D%22red%22%20d%3D%22M15.07%2C11.25L14.17%2C12.17C13.45%2C12.89%2013%2C13.5%2013%2C15H11V14.5C11%2C13.39%2011.45%2C12.39%2012.17%2C11.67L13.41%2C10.41C13.78%2C10.05%2014%2C9.55%2014%2C9C14%2C7.89%2013.1%2C7%2012%2C7A2%2C2%200%200%2C0%2010%2C9H8A4%2C4%200%200%2C1%2012%2C5A4%2C4%200%200%2C1%2016%2C9C16%2C9.88%2015.64%2C10.67%2015.07%2C11.25M13%2C19H11V17H13M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12C22%2C6.47%2017.5%2C2%2012%2C2Z%22%20%2F%3E%3C%2Fsvg%3E";

  var playerImg = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%20%20%20%3Cpath%20fill%3D%22gray%22%20d%3D%22M12%2C19.2C9.5%2C19.2%207.29%2C17.92%206%2C16C6.03%2C14%2010%2C12.9%2012%2C12.9C14%2C12.9%2017.97%2C14%2018%2C16C16.71%2C17.92%2014.5%2C19.2%2012%2C19.2M12%2C5A3%2C3%200%200%2C1%2015%2C8A3%2C3%200%200%2C1%2012%2C11A3%2C3%200%200%2C1%209%2C8A3%2C3%200%200%2C1%2012%2C5M12%2C2A10%2C10%200%200%2C0%202%2C12A10%2C10%200%200%2C0%2012%2C22A10%2C10%200%200%2C0%2022%2C12C22%2C6.47%2017.5%2C2%2012%2C2Z%22%20%2F%3E%3C%2Fsvg%3E";

  function statusBar () {
    const $tpl = $(tpl);
    this.$store.$stream.append($tpl);
    this.on('status-bar', param => {
      if (param) {
        $tpl.css('display', 'flex');
      } else {
        $tpl.hide();
      }
    });

    function clearStatus() {
      $('.status-bar__image-containter').css('background-image', `unset`);
      $('.status-bar__item').toArray().map(el => {
        $(el).removeClass('status-active');
      });
    }

    var readyStatus = false;
    $('.status-bar__status--ready').on('click', function () {
      clearStatus();

      if (readyStatus) {
        readyStatus = false;
      } else {
        helpStatus = false;
        readyStatus = true;
        $(this).addClass('status-active');
        $('.status-bar__image-containter').css('background-image', `url(${readyImg})`);
      }
    });
    var helpStatus = false;
    $('.status-bar__status--help').on('click', function () {
      clearStatus();

      if (helpStatus) {
        helpStatus = false;
      } else {
        readyStatus = false;
        helpStatus = true;
        $(this).addClass('status-active');
        $('.status-bar__image-containter').css('background-image', `url(${helpImg})`);
      }
    });
    this.on('player-load', name => {
      $('#status-bar__player-logo').attr('src', playerImg);
      $('.status-bar__player-name').html(this.current.data.player.name);
    });
  }

  function mcPlayer () {
    new Date().toLocaleDateString();

    try {
      window.mcefQuery({
        request: "info",
        persistent: true,
        onSuccess: response => {
          this.current.data.player = JSON.parse(response);
          this.emit('player-load', this.current.data.player.name);
        }
      });
    } catch (err) {
      this.current.data.player = {
        name: 'mcap_uknown__' + new Date().toLocaleDateString(),
        uuid: new Date().toLocaleString()
      };
      this.emit('player-load', this.current.data.player.name);
    }
  }

  const event = "zim-intro";
  function init$1() {
    window.frame = new Frame('zim', 1024, 768, light, dark);
    frame.on("ready", function () {
      var stage = frame.stage;
      frame.width;
      frame.height; //frame.outerColor = frame.grey;
      // frame.color = frame.lighter;
      // ~~~~~~~~~ COLUMN 1 ~~~~~~~~~~

      /*
        new Label("ZIM COMPONENTS").pos(50, 50, stage).alp(.5);
      
        var button = new Button({
          backgroundColor:frame.pink,
          rollBackgroundColor:frame.blue,
          corner:0,
          gradient:.1
        }).pos(50, 150, stage);
        button.on("click", function() {pane.show();});
      
        var pane = new Pane({
          width:400,
          height:300,
          close:true,
          displayClose:false,
          draggable:true,
          titleBar:"Pane"
        });*/

      /**
       * NEXT
       */

      var checkBox = new CheckBox({
        label: "next",
        startChecked: false
      }).pos(50, 250, stage);
      checkBox.on("change", function () {
        $vnjs.exec({
          next: true
        });
      });
      /*
        var radio = new RadioButtons({
          size:40,
          buttons:["Radio 1", "Radio 2", "Radio 3", "Radio 4"]
        }).pos(60, 360, stage);
        radio.selectedIndex = 1;
        radio.on("change", function() {
          indicator.selectedIndex = radio.selectedIndex;
          stage.update();
        });
      
        var indicator = new Indicator({
          backdropColor:frame.grey,
          backgroundColor:frame.light,
          foregroundColor:frame.pink,
          num:4,
          width:250,
          interactive:true
        }).pos(50, 650, stage);
        indicator.selectedIndex = 1;
        indicator.on("change", function() {
          radio.selectedIndex = indicator.selectedIndex;
          stage.update();
        });
      
      
        // ~~~~~~~~~ COLUMN 2 ~~~~~~~~~~
      
      
          var dial = new Dial({backgroundColor:frame.blue}).loc(400, 180);
        dial.on("change", function() {
          slider.currentValue = dial.currentValue;
          stage.update();
        });
      
        var stepper = new Stepper({continuous:true, stepperType:"number", min:1, max:9})
          .pos(500, 155, stage).sca(.5);
        stepper.on("change", function() {
          pad.selectedIndex = stepper.selectedIndex;
          stage.update();
        });
      
        var slider = new Slider({
          step:1,
          useTicks:true
        }).center().mov(0,-80);
        slider.on("change", function() {
          dial.currentValue = slider.currentValue;
          stage.update();
        });
      
        var waiter = new Waiter({backgroundColor:frame.pink, corner:0}).show();
        timeout(2, function () {
          waiter.hide();
        })
      
        var win = new Window({
          height:220,
          padding:10,
          scrollBarDrag:true
        }).pos(360, 480, stage);
        win.add(new Label({text:"Window\n0\n1\n2\n3\n4\n5\n6\n7\n8", color:frame.light}));
      */
      // ~~~~~~~~~ COLUMN 3 ~~~~~~~~~~

      /*
        var backing = new Rectangle(400,70,frame.green)
          .pos(stageW-400, 0, stage)
        var tabs = new Tabs({corner:20, width:300})
          .pos(backing.x+50, 10, stage);
        tabs.on("change", function() {
          textArea.text = "TextArea\nTab " + tabs.text;
        });
      
        var pad = new Pad().pos(780, 120, stage);
        pad.selectedIndex = 0;
        pad.on("change", function() {
          stepper.selectedIndex = pad.selectedIndex;
          stage.update();
        });
      
        var colorPicker = new ColorPicker({
          colors:[frame.pink, frame.blue, frame.green, frame.yellow, frame.orange, frame.red],
          greyPicker:false,
          alphaPicker:false,
          buttonBar:false,
          cols:6,
          width:300
        })
          .center()
          .mov(310);
        colorPicker.selectedColor = frame.green;
        colorPicker.on("change", function() {
          backing.color = colorPicker.selectedColor;
          stage.update();
        });
      
      */
      // stage.update(); // this is needed to show any changes
    });
  }

  function zimIntro () {
    this.on(event, data => {
      if (window.frame) frame.dispose();

      if (data) {
        setTimeout(() => {
          init$1.call(this);
          this.exec({
            screen: 'zim'
          });
        }, 0);
      } else {
        window.frame = null;
        this.exec({
          screen: 'stream'
        });
      }
    });
  }

  /*embed*/

  function plugins () {
    this.use(debug);
    this.use(assetsLoader$1);
    /*screens*/

    this.use(screen);
    this.use(streamScreen);
    this.use(loaderScreen);
    this.use(zimScreen);
    /*components*/

    this.use(scene);
    this.use(show);
    this.use(audio);
    this.use(animate);
    this.use(menu);
    this.use(mainMenu);
    this.use(term);
    this.use(cloud);
    this.use(soundHover);
    this.use(clear);
    this.use(dialogBox);
    this.use(hands);
    this.use(data$1);
    this.use(qa);
    this.use(loadScene);
    this.use(slide);
    this.use(content);
    this.use(voice);
    this.use(embed);
    this.use(html);
    this.use(discordLog);
    this.use(statusBar);
    this.use(mcPlayer);
    /*zim*/

    this.use(zimIntro);
  }

  var css = "/**\r\n * Здесь можно переопределять стили\r\n * что бы не лезть в плагины\r\n */\r\n\r\n\r\n*{}";
  n(css,{});

  /**
   * Загрузка игры
   */

  fetch(`scenes/vn.json`).then(r => r.json()).then(tree => init(tree)).catch(err => console.error('Invalid script', err.message));

  function init(tree) {
    var debug = false;

    if (tree.$root.hasOwnProperty('package')) {
      debug = tree.$root.package.debug || false;
    }
    /*
      conf: {
        debug: true,
        $: {id: '$', name: 'Автор', replyColor: 'red'} //default character
      }
     */


    window.$vnjs = new Vnjson({
      debug: debug
    });
    plugins.call($vnjs);
    $vnjs.setTree(tree);
    $vnjs.on('postload', () => {
      $vnjs.exec({
        screen: 'stream'
      });
      $vnjs.exec({
        jump: '$root.$init'
      });
    });
    $vnjs.on('init', () => {
      $vnjs.exec();
    });
  }

})();
