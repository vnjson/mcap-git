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

  var css$f = "\r\n#vnjson__tree{\r\n  position: absolute;\r\n  top: 0;\r\n  right: -301px;\r\n  background: wheat;\r\n  width: 301px;\r\n  height: 100%;\r\n\r\n}\r\n\r\n\r\n.vnjson__tree-header{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  background: #445;\r\n  color: wheat;\r\n  font-family: Arial;\r\n  font-size: 16px;\r\n  user-select: none;\r\n\r\n}\r\n.vnjson__tree-header--tab{\r\n  padding: 0 15px;\r\n  transition: 0.3s;\r\n  font-weight: 600;\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  align-content: center;\r\n}\r\n.vnjson__tree-header--tab:hover{\r\n  background: #223;\r\n  cursor: pointer;\r\n}\r\n.debug-active{\r\n  background: #223;\r\n}\r\n\r\ninput[type=\"color\"]{\r\n  background-color: #445;\r\n  border-style: unset;\r\n  cursor: pointer;\r\n}\r\n/*\r\n.vnjson__tree-coords{\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n}\r\n*/\r\n.vnjson__tree-header span{\r\n  font-size: 12px;\r\n  font-family: Arial;\r\n  color: wheat;\r\n}\r\n\r\n.vnjson__cursor-left,\r\n.vnjson__cursor-top{\r\n  display: inline-block;\r\n  width: 25px;\r\n  text-align: end;\r\n}\r\n\r\n#root{\r\n  cursor: pointer;\r\n}\r\n#root:hover{\r\n  color: skyblue;\r\n}\r\n\r\n.jstree-ocl, .jstree-anchor{\r\n  pointer-events: none;\r\n}\r\n\r\n\r\n/*score*/\r\n.stream__score{\r\n\r\n  background: wheat;\r\n  padding: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  padding-top: 10px;\r\n  border-top: 1px solid 778;\r\n}\r\n.stream__score--item{\r\n  border: 1px dashed rgba(0,0,0,0.5);\r\n  padding: 5px;\r\n  white-space: nowrap;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n\r\n.stream__score--param {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 3px 0;\r\n  font-size: 15px;\r\n}\r\n.stream__score--param span:first-child{\r\n  padding-left: 10px;\r\n\r\n}\r\n.stream__score--param span:last-child{\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  padding-right: 10px;\r\n  color: darkcyan;\r\n}\r\n.stream__score--param:nth-child(2n){\r\n  background: rgba(200,200,200,0.5);\r\n}\r\n/*reload*/\r\n.browser-reload{\r\n  width: 301px;\r\n  height: 312px;\r\n  position: absolute;\r\n  top: 768px;\r\n  right: 0px;\r\n  background: wheat;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 32px;\r\n  color: gray;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  border: 1px dashed gray;\r\n}\r\n\r\n\r\n/*logger*/\r\n#debug-logger{\r\n  background: wheat;\r\n  width: 100%;\r\n  height: 312px;\r\n  overflow: auto;\r\n  padding: 0;\r\n  padding-bottom: 30px;\r\n  position: absolute;\r\n  top: 768px;\r\n  margin: 0;\r\n}\r\n\r\n.log-boolean,\r\n.log-undefined {\r\n  color: magenta;\r\n}\r\n.log-object,\r\n.log-string {\r\n  color: #778;\r\n}\r\n.log-number {\r\n  color: cyan;\r\n}\r\n\r\n.error-boolean,\r\n.error-undefined {\r\n  color: magenta;\r\n}\r\n.error-object,\r\n.error-string {\r\n  color: red;\r\n}\r\n.error-number {\r\n  color: cyan;\r\n}\r\n.warn-boolean,\r\n.warn-undefined {\r\n  color: magenta;\r\n}\r\n.warn-object,\r\n.warn-string {\r\n  color: #e58a00;\r\n}\r\n.warn-number {\r\n  color: cyan;\r\n}\r\n#debug-logger{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n#debug-logger span {\r\n\r\n\r\n  width: 100%;\r\n  display: block;\r\n  padding: 10px 15px;\r\n}\r\n#debug-logger span:nth-child(2n){\r\n  background: rgba(0,0,0,0.03);\r\n}\r\n/**/\r\n\r\n#debug__vnjson--show{\r\n  height: 718px;\r\n  font-family: Consolas, Arial;\r\n  overflow: auto;\r\n  font-size: 16px;\r\n  position: relative;\r\n}\r\n#vnjson__tree-root{\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n\r\n}\r\n#vnjson__tree-vnjson{\r\n  position: absolute;\r\n  top: 0;\r\n  display: none;\r\n  width: 100%;\r\n}\r\n\r\n#vnjson__tree-score{\r\n  position: absolute;\r\n  top: 0;\r\n  display: none;\r\n  width: 100%;\r\n}\r\n\r\n.json-document{\r\n  padding-top: 0;\r\n}\r\n\r\n";
  n(css$f,{});

  var aside$1 = "<div id=\"vnjson__tree\">\r\n  <div class=\"vnjson__tree-header\">\r\n    <div class=\"vnjson__tree-header--tab debug-active\" data-id=\"vnjson__tree-root\">labels</div>\r\n    <div class=\"vnjson__tree-header--tab\" data-id=\"vnjson__tree-vnjson\">vn.json</div>\r\n    <div class=\"vnjson__tree-header--tab\" data-id=\"vnjson__tree-score\">score</div>\r\n    <div class=\"vnjson__tree-color-picker\"><input type=\"color\" value=\"#f5deb3\"></div>\r\n  <!--  \r\n\r\n    <div class=\"vnjson__tree-coords\">\r\n      <span>left: <span class=\"vnjson__cursor-left\">0</span>px</span>\r\n      <span>top: <span class=\"vnjson__cursor-top\">0</span>px</span>\r\n    </div>  -->\r\n\r\n  </div>\r\n\r\n  <div id=\"debug__vnjson--show\">\r\n    <div id=\"vnjson__tree-root\"></div>\r\n    <div id=\"vnjson__tree-vnjson\">\r\n      <pre id=\"json-renderer\"></pre>\r\n    </div>\r\n    <div id=\"vnjson__tree-score\"></div>\r\n\r\n   \r\n  </div>\r\n<div class=\"browser-reload\">reload</div>\r\n</div>\r\n";

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
    var $aside = $(aside$1);
    $aside.find('#root').on('click', () => {
      localStorage.clear();
      location.reload();
    });

    if (this.debug) {
      $($aside).insertAfter('.game');
    }

    $('#screen').mousemove(function (e) {
      let top = e.pageY.toFixed();
      let left = e.pageX.toFixed();
      $('.vnjson__cursor-left').html(left);
      $('.vnjson__cursor-top').html(top);
    });
    var data = [];

    for (let scene in this.TREE) {
      let labels = Object.keys(this.TREE[scene]).filter(l => {
        let exclude = l !== 'embed' && l !== 'data' && l !== 'store' && l !== 'assets' && l !== 'package' && l !== 'characters';
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
    /*
    
        $("#screen").on('dblclick', '.component', function(e) {
          $(this).hide()
        });*/

    $('.browser-reload').on('click', () => {
      location.reload(true);
    });
  }

  function log () {
    const $tpl = $(`<pre id="debug-logger"></pre>`);
    $('body').append($tpl);
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

  function debug () {
    if (this.debug) {
      this.on('postload', _ => {
        tree.call(this);
        score.call(this);
        aside();
      });
      log();
      this.on('preload', () => {
        console.log('|  vnjson.js@' + this.version + '  |  размер окна: 1325x1080');
        var _obj = { ...this.current.data
        };
        delete _obj.score;
        console.log('<i style="font-weight: 600; color: #cf08bb;">data:</i> ' + JSON.stringify(_obj));
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
    });
    $('#json-renderer').jsonViewer($vnjs.TREE, {
      collapsed: true,
      rootCollapsable: false,
      withQuotes: false,
      withLinks: false
    });
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
        } else if (/\.png|\.jpg|.webp/i.test(asset.url)) {
          let img = new Image();
          img.src = asset.url;

          img.onload = () => {
            this.$store[asset.name] = asset.url;

            if (this.current.assets.length - 1 >= ++i) {
              this.emit('load', asset);
              load();
            } else {
              this.emit('postload');
            }
          };
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
      getAssets();
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

  var css$e = "#screen {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAL0lEQVR4AWM8ZsOAF1BNAasXA8PvbSASjUYo+L0NXS9EnJAVhE0gqGCEuIFgXAAA5aUvR45cttUAAAAASUVORK5CYII=);\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.screen {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  transition: background-image 0.5s;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.layer {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(100, 100, 100, 0.9);\r\n  z-index: 2500;\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center; \r\n}\r\n";
  n(css$e,{});

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

  var css$d = "#loader {\r\n  background: black;\r\n  z-index: 9999;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center; }\r\n\r\n.loader {\r\n  color: wheat;\r\n  font-family: Consolas, Menlo, Monaco, monospace;\r\n  font-weight: bold;\r\n  font-size: 100px;\r\n  opacity: 0.8; }\r\n  .loader span {\r\n    display: inline-block;\r\n    animation: pulse 0.4s alternate infinite ease-in-out; }\r\n    .loader span:nth-child(2) {\r\n      animation-delay: 0.4s; }\r\n\r\n@keyframes pulse {\r\n  to {\r\n    transform: scale(0.8);\r\n    opacity: 0.5; \r\n  } \r\n}\r\n";
  n(css$d,{});

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

  var css$c = "#main-menu {\r\n  background: black;\r\n\r\n}\r\n\r\n#main-menu .main-menu__menu {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    flex-direction: column;\r\n\r\n}\r\n#main-menu .btn {\r\n    padding: 20px 30px;\r\n    color: wheat;\r\n    cursor: pointer;\r\n    font-size: 34px;\r\n    border: 4px solid wheat;\r\n    transition: 0.3s;\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n    width: 100%;\r\n    max-width: 500px;\r\n    line-height: 44px;\r\n    word-break: break-word;\r\n}\r\n#main-menu .btn:hover {\r\n      color: #f9f9f9;\r\n      border: 4px solid #f9f9f9;\r\n}";
  n(css$c,{});

  var tpl$9 = "<div id=\"main-menu\" class=\"screen\">\r\n  <div class=\"main-menu__menu\">\r\n\r\n  </div>\r\n</div>";

  function mainMenuScreen () {
    const $tpl = $(tpl$9);
    const $vnjs = this;
    this.$store.$screen = $tpl;
    $('#screen').append($tpl);
    this.on('main-menu', data => {
      this.exec({
        screen: 'main-menu'
      });
      var str = '';
      $tpl.find('.main-menu__menu').empty();

      for (var [label, menuItem] of Object.entries(data)) {
        if (/disabled/i.test(label)) {
          str = ` <div class="btn disabled" data-label="${label}">${menuItem}</div>`;
        } else {
          str = `<div class="btn" data-label="${label}">${menuItem}</div>`;
        }

        $tpl.find('.main-menu__menu').append(str);
      }
    });

    function clickHundler() {
      let label = $(this).data('label');
      $vnjs.exec({
        jump: label
      });
    }

    $tpl.find('.main-menu__menu').on("click", ".btn", clickHundler);
  }

  var tpl$8 = "<div id=\"stream\" class=\"screen\">\r\n  \r\n</div>";

  function streamScreen () {
    $('#screen').append(tpl$8);
    this.$store.$stream = $('#stream');
  }

  var css$b = ".component canvas{\r\n  width: 1024px !important;\r\n  height: 768px !important;\r\n}";
  n(css$b,{});

  var tpl$7 = "<div id=\"zim\" class=\"screen\">\r\n\r\n</div>";

  function zimScreen () {
    $('#screen').append(tpl$7);
  }

  var css$a = "i {\r\n  font-style: normal; \r\n}\r\n\r\n.cyan {\r\n  color: cyan; \r\n}\r\n\r\n.red {\r\n  color: red; \r\n}\r\n\r\n.green {\r\n  color: lightgreen; \r\n}\r\n\r\n.orange{\r\n  color: orange;\r\n}";
  n(css$a,{});

  var css$9 = ".dialog-box {\r\n  z-index: 7000;\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  line-height: 32px;\r\n  height: 200px;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  cursor: pointer;\r\n  display: block;\r\n  padding-top: 10px;\r\n  padding-left: 10px;\r\n  word-spacing: 10px;\r\n  display: none;\r\n  top: unset; }\r\n\r\n.dialog-box__name {\r\n  color: wheat;\r\n  font-size: 22px;\r\n  width: 100%;\r\n  font-weight: bold;\r\n  padding: 10px; }\r\n\r\n.dialog-box__reply {\r\n  color: wheat;\r\n  font-size: 22px;\r\n  padding: 10px;\r\n  width: 90%; \r\n}\r\n\r\n";
  n(css$9,{});

  var tpl$6 = "<div class=\"dialog-box component\">\r\n    <div class=\"dialog-box__name\"></div>\r\n    <div class=\"dialog-box__reply\"></div>\r\n\r\n</div>";

  function dialogBox () {
    const $tpl = $(tpl$6);
    this.$store.$stream.append($tpl);
    /*
    * Вешаем клик на диалоговое окно
    */

    $tpl.on('mousedown', e => {
      this.next();
    });
    this.on('character', (character, reply) => {
      $tpl.find('.dialog-box__name').html(character.name).css({
        color: character.nameColor
      });
      $tpl.find('.dialog-box__reply').html(reply).css({
        color: character.replyColor
      });
    });
    this.on('dialog-box', param => {
      if (param === 'clear') {
        $tpl.find('.dialog-box__name').empty();
        $tpl.find('.dialog-box__reply').empty();
      } else if (param) {
        $tpl.show();
      } else {
        $tpl.hide();
      }
    });
  }

  var css$8 = ".stream__hands {\r\n    position: absolute;\r\n    z-index: 9999;\r\n    opacity: 0.8;\r\n    top: unset;\r\n    right: 0;\r\n    bottom: 10px;\r\n    display: none; \r\n    height: 185px;\r\n\r\n  }\r\n.stream__hands .stream__hand {\r\n    width: 95px;\r\n    height: 95px;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGZmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTExLTA1VDEyOjM5OjM0KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTExLTA1VDEyOjM5OjM0KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMS0wNVQxMjozOTozNCswMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0ZDZhODRkYi1kYWE5LTE3NDYtOWYxZS1iMjE4ODRiZDRmNTkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphMmY2NzgyMy03MTY2LTRhNGYtOGMyMC04N2FlNzQ5YzJmZTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1MmI1MTYxMC1kMjQ0LTkzNGYtYjBmNS1jMjk1ZjJlNzY5OTQiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MmI1MTYxMC1kMjQ0LTkzNGYtYjBmNS1jMjk1ZjJlNzY5OTQiIHN0RXZ0OndoZW49IjIwMjEtMTEtMDVUMTI6Mzk6MzQrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGQ2YTg0ZGItZGFhOS0xNzQ2LTlmMWUtYjIxODg0YmQ0ZjU5IiBzdEV2dDp3aGVuPSIyMDIxLTExLTA1VDEyOjM5OjM0KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZWIwNzk3Mi1hMTdlLTA0NGYtYWIxYi04MDExN2JmYWYzODM8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6BgqWgAAAF1klEQVR4nOVb247TMBA9YzvOZcWyVYWQeOEBxHfzA7zwzCfwD0gIgQQS0E1308Q3Hrr2Ote2CFiSHqlSktpJ5oxnMh57yDmHcwZ76Bd4aJw9ASI+efPmjcvzHF++fMHV1RX8sZQSQtw35Zxju91is9mAcw4iAgAYY7BarXBxcQHnHL5//46qqsA5B2OHuT7VHKfaExGUUrDWIs9zvH//HsYYEBFev35NgwTc3t7CWou6rlvHl5eXLQKEEFBKIUmSlnDGGGRZhjzP4ZxDmqYwxoBzDs75bwvknAMR9f4P5wQQqPVfrJQkSaC1hlIqXB8kgDEGxhiIqHX89evXlgCcc1RVhZubmyC8cw7GGBhjUJYlnHMoyxK73e4o4aeI8MITUUsAay2IAGcBh+E+ngTfd5IArz0pJd6+fRu03u1krYWUEmmawjmHpmnQNE1o5x+cJEl4aF3X0FqDiFqEGGPCsb/uyfTP5pzDOQchBGQqQz+jNRhjaGqFRjUtxRljsF6vkec5rLXh3pMExMM+TVMwxiCEQJqmrU7OOUgpkSQJAKBpGtR13WPYmwcRYbfbQd+9cOwPrLXhuDua/DXGWCAgzdJAgFZqkgD/foyx000AAKSU2G63+PjxY48AIUQYIUqpoN3u/Twp3iHFgk4REJuBJ4BzDpGI0M8aAyIGrTS00YEAf48XL15gvV4HwQ+agJQyaJaIUBQFPnz4gHfv3mGOWK1WeP78OTabTU+5HqMjwDc81YH9TyAiaK3vnCUNfopbBNzc3EBrjd1uB2stjDEnf5v/Jwghwqg2xqBpmh4JLQJ+/PgBKSWur6+D04htdG5IkgRZlu0d5p1iuyO6Nya8xofsZW7wznRKia0R8OjRI6RpCqVUGP5zNoEYQggkSTJtAo8fP0ZRFKiqahEExM58jIBRE3DOwdl5ExDDK7MrT2sEbDabMBHK8gwyu4/25o6jCNhut6jrGlVVIU1TyLQ9DZ4zxghomQDnHEKIEHpiGaN/Ei0C9gwBzlk0dY26rqGUeqh3+6PwUe5BJwjsidBaQysFY/Q/ecG/jbHJ0GieaqzD0tAjYC8vdX7LwEkj4Fxw9gQs4yN/BBhjrRR+uP5A7/PPcfJX4FzQMgHPjk9FH7ui878i1vpYTnC+0v0hLJ6AQ8Fc7yvgG1trYa2ddT4gyzIURRGSO03THM4JLgmxLxvDogkwxkApBaXU6EhedCB0fX2Nb9++oSzLsDw2mRCJMZZBmROOkWE0KbqEOMCHv/GyexctE/DLYcD9XoE5J0WllOErQESDCyQHTWDuONkEloqj9gcc02FecOG3nw9wMHZGOcFjZBgcAT4r7Le+zBXeqd/vc9in/WO0CPDOwm+Umvu6QKxE54bnNYv2AXF+wzkbtsrEWHQo7CdDRAQpUwy5vIUTwMC5ABGDlBk474u7+Djg3u5d53yPnhNcSgR4Dwei/WbOeDuvxyABS4RSCnVdH7c6vET4zPBZZYXjT/kZL4xMr3CPEuAzwnOPBGObHwrqek7QR0tXV1cQQuDVq1d49uzZXcUGcGi/wH6YhbPJh8fPJSKkaRoSF3ESo7sVn4hCkYZzDhcXFyiKIrT1iY+nT5+iLEsAe4Wqu/qCUQL8yzDGQpHEer3Gy5cvAwFtQfpC/S4BjDEURdETeqjQgTGGqqpwe3sL5xxWqxUuLy+DkL59WZao6xpCiOO2yeV5DiFEYJExBqVUqAH62wTEWvdC+NR2l4DdbhcIEEK0+vn21tqw6y1JEhhjpkfAkydPQqmc1vpuFuXw8+fPAUH3oaYXYKiiq7XlLkK8DT/O03lNMcYg5b42SGsdynHie8cJ28+fP+PTp09B6O7zfNWY7ztKQFwz5Bv7ffbdgqi4AKH7UL/VTko5SEBsp3HRlM/beyJ826qqegT4oi0AYeo+Nspih350xUis1aHvZ3yt/x/gHBvs1yVvqDYoDliGAphuHWE86xuKZON79d51qaHvsTiDQGgaZ0/ALy4XCMLKcyfBAAAAAElFTkSuQmCC);\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    z-index: 100;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.stream__hands .stream__hand-left {\r\n    width: 60px;\r\n    height: 60px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-repeat: no-repeat; \r\n}\r\n.stream__hands .stream__hand-right {\r\n    width: 60px;\r\n    height: 60px;\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-repeat: no-repeat; \r\n}\r\n";
  n(css$8,{});

  var tpl$5 = "<div class=\"stream__hands component\">\r\n    <div class=\"stream__hand\">\r\n        <div class=\"stream__hand-left\"></div>\r\n    </div>\r\n    <div class=\"stream__hand\">\r\n        <div class=\"stream__hand-right\"></div>\r\n    </div>\r\n</div>";

  function hands () {
    const $tpl = $(tpl$5);
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

  var css$7 = ".screen__cloud {\r\n  width: 500px;\r\n  background: wheat;\r\n  padding: 30px;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-content: center;\r\n  align-items: center;\r\n  z-index: 1000;\r\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);\r\n  transform: translate(-50%, 0);\r\n  top: 10%; }\r\n  .screen__cloud .tag {\r\n    padding: 10px 15px;\r\n    font-size: 18px;\r\n    margin: 10px;\r\n    display: inline-flex;\r\n    background: #444;\r\n    cursor: pointer;\r\n    color: #34d1a2;\r\n    transition: 0.3s;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); }\r\n    .screen__cloud .tag:hover {\r\n      background: #000;\r\n      color: darkcyan; }\r\n";
  n(css$7,{});

  var tpl$4 = "<div class=\"screen__cloud component center\"></div>";

  function cloud () {
    var $tpl = $(tpl$4);
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

  var css$6 = ".stream__menu-menu {\r\n  width: 80%;\r\n  padding: 10px;\r\n  background: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  display: none;\r\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);\r\n  overflow: auto;\r\n  max-height: 95%;\r\n}\r\n  .stream__menu-menu .stream__menu-quetion {\r\n    background: rgba(70, 70, 70, 0.7);\r\n    width: 100%;\r\n    min-height: 40px;\r\n    font-size: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 10px 20px;\r\n    color: wheat;\r\n    transition: 0.1s;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis; }\r\n  .stream__menu-menu .stream__menu-item {\r\n    margin-bottom: 10px;\r\n    background: rgba(120, 120, 120, 0.7);\r\n    width: 100%;\r\n    min-height: 40px;\r\n    font-size: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: wheat;\r\n    transition: 0.1s;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis; }\r\n    .stream__menu-menu .stream__menu-item span {\r\n      padding: 10px 20px;\r\n      display: flex;\r\n      flex: 1; }\r\n    .stream__menu-menu .stream__menu-item:hover {\r\n      cursor: pointer;\r\n      background: rgba(200, 100, 100, 0.8); }\r\n    .stream__menu-menu .stream__menu-item span {\r\n      white-space: nowrap;\r\n      overflow: hidden;\r\n      text-overflow: ellipsis; }\r\n.stream__menu-menu .stream__menu-item:last-child{\r\n  margin-bottom: 0;\r\n}";
  n(css$6,{});

  var tpl$3 = "<div class=\"stream__menu-menu component center\"></div>";

  function menu () {
    var $tpl = $(tpl$3);
    this.$store.$stream.append($tpl);
    this.on('menu', menu);

    function menu(menuObj) {
      $tpl.empty();
      $tpl.css({
        display: 'flex'
      });

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
          } else if (/^_/i.test(label)) {
            str = `<div data-label="${label}" class="stream__menu-item"><span class="sound-hover">${menuItem}</span></div>`;
          } else {
            str = `<div data-label="${label}" class="stream__menu-item"><span class="sound-hover">${menuItem}</span></div>`;
          }

          $('.stream__menu-menu').append($(str));
        }
      }

      let $vnjs = this;

      function clickHundler() {
        let label = $(this).data('label');

        if (label === 'next') {
          $vnjs.exec({
            next: true
          });
        } else if (/^_/i.test(label)) {
          $vnjs.exec({
            target: label
          });
        } else {
          $vnjs.exec({
            jump: label
          });
        }

        $tpl.hide();
        $tpl.off("click", clickHundler);
      }

      $tpl.on("click", ".stream__menu-item", clickHundler);
    }
  }

  var css$5 = ".stream__term-board {\r\n  width: 808px;\r\n  height: 480px;\r\n  padding: 25px;\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAygAAAHgCAIAAADBst5WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTE0VDE2OjI1OjM3KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0xNFQxNzo0MDoyMyswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMC0xNFQxNzo0MDoyMyswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YWYwZDI3YjMtYzhiZC01ZTRhLTlkYjgtMjMwMmNhNjk2MWZkIiB4bXBNTTpEb2N1bWVudElEPSJh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BQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAEOEFABAivAAAQoQXAECI8AIACBFeAAAhwgsAIER4AQCECC8AgBDhBQAQIrwAAEKEFwBAiPACAAgRXgAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBAIQILwCAkOHgE+d5nqaptXbwyQAAGfM8z/N88LEHDq+5zavVahzHWuthJwMAxLTWhmFocyv9IZPmMOFVa51bu31yumvtqO9r7YoNLwDgIVa32+l8fX409nNrh9pROkx4TdM89v3Pf/KZubSu2OsCAB4Fu2ka+n7s+2k6zLHjYcLr5Pz8p59+4vOf/bW+66afwIEoAEBeLaWVMk3zyfn6IAP3Da9ay3Zq99e79a51w7L2XXegJAQAuGC11FZaN9dxVfuh7P3s4L7hdbaZP3ljde2FZ5aLo5NXX6q1ep4RAHjE1K6f1/fruNxzzr7htZvatePhqSuLaZrObr/diju8AIBHTWut9mMdxj03vQ5z1LiddqWUOi5VFwDw6PlO4ex9rOfN9QAAIcILACBEeAEAhAgvAIAQ4QUAECK8AABChBcAQIjwAgAIEV4AACHCCwAgRHgBABzY2HfLseu7+pGPDO37rUYAAD7i7vl2vZvOt1P/4T0u4QUAcDBdrXNrL71+58797WLsVkf99/87HC8XTzxxfbubbt66Oa/bUZ37xVjH/geNAwDgB+lrnVqrpcyttVZq/dC/wz9+7T9/+4/+onT9537nc888+9zXv/zeN//9zdWV6xe0WgCAh1otpW1282LsPlJdpZThtXfe+7dvvP349eu/9wfPfeLFX3zpH/7ulbdvXd0uL2KhAACPguXYP7izvpXSlXJ81F9e9GPfDYuj4XixOF6N//LP//TW2++8+9Ybj1+7PB45agQA+PE9eJ6xr2U3t9dunS+Pujunm/r4U4+31mqpZS637q9//cVP/Mpnnv726eaiVwsA8NBb9PX2+fTX//re2VQWu/Oh1lpK6Wp35fKVbjUdr5ZdmYfu/5xJAgDwI+q7OnZ1ddR3UymtG0optdZW2snZyTzNX32zvH57vZvmi14nAMBDr3Z1mubNyWkrrbb5e+/x2k27Ns/fPtvc2/WtCS8AgL3VWud5mHa1zK3W/wXr4h1fCs8q0wAAAABJRU5ErkJggg==);\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  position: absolute;\r\n  top: 5%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  display: none; }\r\n  .stream__term-board pre {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n    margin: 0; }\r\n    .stream__term-board pre code {\r\n      padding: 25px;\r\n      font-size: 24px;\r\n      height: 100%;\r\n      width: 100%;\r\n      position: absolute;\r\n      top: 0;\r\n      overflow-x: auto;\r\n      font-family: Minecraft; }\r\n      .stream__term-board pre code img {\r\n        height: 100%; }\r\n";
  n(css$5,{});

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
        if (/\./.test(param)) {
          let str = param.split('.');
          str[0];
          let langName = str[1];
          var data = this.getDataByName(param);

          if (data) {
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
          let img = $(`<img src=${this.getAssetByName(param).url} />`);
          $tpl.find('pre code').empty();
          $tpl.find('pre code').css('overflow', 'hidden');
          $tpl.find('pre code').append(img);
          $($tpl).fadeIn();
        }
      } else {
        $($tpl).hide();
      }
    });
  }

  var css$4 = ".inventar__wrapper {\r\n   background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf0AAAHgCAIAAAAg5iOaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTE0VDE2OjI0OjU0KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0xNFQxNzo0MDo0NiswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMC0xNFQxNzo0MDo0NiswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZDQwNDhiMzAtYWFjZC05MTRlLWE5Y2UtMjJlMWU0YTg1NjhhIiB4bXBNTTpEb2N1bWVudElEPSJh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);\r\n   width: 509px;\r\n   height: 480px;\r\n   z-index: 1000;\r\n   position: absolute;\r\n   top: 5%;\r\n   left: 50%;\r\n   transform: translateX(-50%);\r\n   background-repeat: no-repeat;\r\n   background-size: contain;\r\n   background-position: center;\r\n   display: none;\r\n}\r\n .inventar__wrapper .inventar__logo {\r\n   background-image: url(data:image/png;base64,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);\r\n   background-repeat: no-repeat;\r\n   background-size: cover;\r\n   background-position: center;\r\n   width: 120px;\r\n   height: 200px;\r\n   position: absolute;\r\n   left: 85px;\r\n   top: 20px;\r\n}\r\n .inventar__wrapper #inventar {\r\n   width: 471px;\r\n   height: 150px;\r\n   position: absolute;\r\n   bottom: 89px;\r\n   left: 19px;\r\n   display: flex;\r\n   flex-wrap: wrap;\r\n   align-items: flex-start;\r\n   justify-content: flex-start;\r\n   align-content: flex-start;\r\n   gap: 5px;\r\n}\r\n .inventar__wrapper .cards__sortable {\r\n   width: 471px;\r\n   height: 52px;\r\n   background: rgba(220,149,190,0.7);\r\n   position: absolute;\r\n   bottom: 19px;\r\n   left: 19px;\r\n   display: flex;\r\n   flex-wrap: wrap;\r\n   align-items: flex-start;\r\n   justify-content: flex-start;\r\n   align-content: flex-start;\r\n   display: none;\r\n   gap: 5px;\r\n}\r\n .inventar__wrapper .sortable-ghost {\r\n   opacity: 0;\r\n}\r\n .inventar__wrapper .equpment .inv__cell {\r\n   background-color: rgba(0,0,0,0.5);\r\n}\r\n .inventar__wrapper .equpment .inventar__cloth {\r\n   gap: 5px;\r\n   width: 52px;\r\n   height: 208px;\r\n   position: absolute;\r\n   left: 19px;\r\n   top: 19px;\r\n   display: flex;\r\n   flex-direction: column;\r\n}\r\n .inventar__wrapper .equpment .inventar__accessor {\r\n   gap: 5px;\r\n   width: 52px;\r\n   height: 208px;\r\n   position: absolute;\r\n   left: 220px;\r\n   top: 19px;\r\n   display: flex;\r\n   flex-direction: column;\r\n}\r\n .inventar__wrapper .equpment .inventar__equip {\r\n   gap: 5px;\r\n   width: 52px;\r\n   height: 208px;\r\n   position: absolute;\r\n   left: 274px;\r\n   top: 19px;\r\n   display: flex;\r\n   flex-direction: column;\r\n}\r\n .inventar__wrapper .equpment .inventar__craft {\r\n   gap: 5px;\r\n   width: 101px;\r\n   height: 102px;\r\n   position: absolute;\r\n   right: 72px;\r\n   top: 50px;\r\n   display: flex;\r\n   flex-wrap: wrap;\r\n}\r\n .inventar__wrapper .equpment .inventar__unity {\r\n   width: 50px;\r\n   height: 50px;\r\n   position: absolute;\r\n   right: 14px;\r\n   top: 78px;\r\n   display: flex;\r\n   justify-content: center;\r\n   align-items: center;\r\n}\r\n .inventar__wrapper .inv__cell {\r\n   width: 47.5px;\r\n   height: 47.5px;\r\n   cursor: grab;\r\n   background-repeat: no-repeat;\r\n   background-size: 80%;\r\n   background-position: center;\r\n}\r\n .inventar__wrapper .inv__cell:active {\r\n   cursor: grabbing;\r\n   cursor: -moz-grabbing;\r\n   cursor: -webkit-grabbing;\r\n}\r\n ";
  n(css$4,{});

  var tpl$1 = "  \r\n<div class=\"inventar__wrapper component\">\r\n\r\n   <div class=\"equpment\">\r\n      <div class=\"inventar__cloth\" data-type=\"cloth\"></div>\r\n      <div class=\"inventar__logo\"></div>\r\n      <div class=\"inventar__accessor\" data-type=\"accessor\"></div>\r\n      <div class=\"inventar__equip\" data-type=\"equip\"></div>\r\n      <div class=\"inventar__craft\" data-type=\"craft\"></div>\r\n      <div class=\"inventar__unity\" data-type=\"unity\"></div>\r\n   </div>\r\n\r\n   <div id=\"inventar\">\r\n\r\n   </div>\r\n   <div class=\"cards__sortable\">\r\n      <div class=\"inv__cell sortable-drag\"></div><div class=\"inv__cell sortable-drag\"></div><div class=\"inv__cell sortable-drag\"></div>\r\n      <div class=\"inv__cell sortable-drag\"></div><div class=\"inv__cell sortable-drag\"></div><div class=\"inv__cell sortable-drag\"></div>\r\n      <div class=\"inv__cell sortable-drag\"></div><div class=\"inv__cell sortable-drag\"></div><div class=\"inv__cell sortable-drag\"></div>\r\n   </div>\r\n </div>\r\n";

  var warnMsg = null;
  function inv () {
    var $tpl = $(tpl$1);
    this.$store.$stream.append($tpl);
    this.on('postload', () => {
      if (this.TREE.$items) {
        this.TREE.$items.store.map(asset => {
          var status = 'sortable-drag';
          var target = null;

          if (!asset.disabled) {
            if (asset.target) {
              target = asset.target.join("__");
            }

            let storeItem = $(` <div class="inv__cell sound-hover ${status}" data-type="${asset.type}" data-target="${target}" id="${asset.id}"></div>`);
            storeItem.css('background-image', `url(${this.getAssetByName(asset.id).url})`);
            $tpl.find('#inventar').append(storeItem);
          }
        });
      } else {
        warnMsg = 'Items missing in inventory';
      }
    });
    this.on('inv', show => {
      if (show) {
        if (warnMsg) {
          console.warn(warnMsg);
        }

        $tpl.show();
      } else {
        $tpl.hide();
      }
    });
    var $vnjs = this;

    function checkUnity(chunks) {
      var $chunks = chunks.toArray();
      var target = $($chunks[0]).data('target');
      let isUnity = $chunks.filter(chunk => {
        return target === $(chunk).data('target');
      }).length === 4;

      if (isUnity) {
        $vnjs.exec({
          'set-item': target
        });
        setTimeout(() => {
          $('#' + target).hide();
          $('#' + target).appendTo('.inventar__unity').show(100);
        }, 10);
      }
    }

    function onAdd(e) {
      let typeItem = $(e.item).data('type');
      let typeTarget = $(e.to).data('type');

      if (typeTarget !== typeItem) {
        var i = e.item;
        $(e.item).attr('dragable', true);
        $(e.item).remove();
        $(e.from).append(i);
      } //item.type===item.type
      else {
        let chunks = $(e.to).children();

        if (chunks.length === 4) {
          checkUnity(chunks);
        }
      }
    }

    Sortable.create(document.querySelector('#inventar'), {
      group: {
        name: 'inv',
        put: ['cloth', 'accessor', 'equip', 'craft']
      },
      animation: 150
    });
    Sortable.create(document.querySelector('.inventar__cloth'), {
      group: {
        name: 'cloth',
        pull: 'inv',
        put: to => {
          return to.el.children.length < 4;
        }
      },
      animation: 150,
      onAdd
    });
    Sortable.create(document.querySelector('.inventar__accessor'), {
      group: {
        name: 'accessor',
        pull: 'inv',
        put: to => {
          return to.el.children.length < 4;
        }
      },
      animation: 150,
      onAdd
    });
    Sortable.create(document.querySelector('.inventar__equip'), {
      group: {
        name: 'equip',
        pull: 'inv',
        put: to => {
          return to.el.children.length < 4;
        }
      },
      animation: 150,
      onAdd
    });
    Sortable.create(document.querySelector('.inventar__craft'), {
      group: {
        name: 'craft',
        pull: 'inv',
        put: to => {
          return to.el.children.length < 4;
        }
      },
      animation: 150,
      onAdd,
      onMove: () => {
        $('.inventar__unity').children().hide(200);
      }
    });
    this.on('inv-set', id => {
      var itemInStore = $('#inventar .inv__cell').toArray().filter(item => {
        return $(item).attr('id') === id;
      });

      if (itemInStore.length < 1) {
        var asset = this.TREE.$items.store.filter(asset => asset.id === id)[0];

        if (asset) {
          var status = 'sortable-drag';
          let storeItem = $(` <div id=${asset.id} class="inv__cell sound-hover ${status}" data-type="${asset.type}"></div>`);
          storeItem.css('background-image', `url(${this.getAssetByName(asset.id).url})`);
          $('#inventar').append(storeItem);
        }
      }
    });
    this.on('inv-get', id => {
      $('#inventar').find('#' + id).remove();
    });
  }

  var css$3 = ".stream__show-left {\r\n  position: absolute;\r\n  left: 50px;\r\n  top: 119px;\r\n  width: 260px;\r\n  height: 450px;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center;\r\n  z-index: 9999; }\r\n\r\n.stream__show-center {\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  top: 119px;\r\n  width: 260px;\r\n  height: 450px;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center;\r\n  z-index: 9999; }\r\n\r\n.stream__show-right {\r\n  position: absolute;\r\n  right: 50px;\r\n  top: 119px;\r\n  width: 260px;\r\n  height: 450px;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center;\r\n  z-index: 9999; }\r\n";
  n(css$3,{});

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
      if (id) {
        this.$store.$screen.css({
          'background-image': `url('${this.getAssetByName(id).url}')`
        });
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
        $('.component').toArray().map(component => {
          $(component).hide();
        });
        Object.values(this.$store).map(asset => {
          if (asset.hasOwnProperty("_muted")) {
            asset.stop();
          }
        });
      }
    });
  }

  function loadData() {
    let data = localStorage.getItem('data');

    if (data) {
      this.current.data = JSON.parse(data);
    } else {
      this.current.data = {
        score: null
      };
    }
  }

  function saveData$1() {
    let data = JSON.stringify(this.current.data);
    localStorage.setItem('data', data);
  }

  function clearData$1() {
    localStorage.removeItem('data');
    this.current.data = {
      score: null
    };
  }

  function data () {
    loadData.call(this);
    this.on('set-data', data => {
      for (let key in data) {
        this.current.data[key] = data[key];
      }

      saveData$1.call(this);
    });
    this.on('clear-data', data => {
      clearData$1.call(this);
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

  var css$2 = "\r\n\r\n.stream__qa{\r\n  display: none;\r\n  z-index: 8888;\r\n  width: 60%;\r\n  flex-direction: column;\r\n}\r\n\r\n.stream__qa--item{\r\n\r\n  color: white;\r\n  cursor: pointer;\r\n  color: wheat;\r\n  transition: 0.1s;\r\n  margin-bottom: 10px;\r\n  border-style: solid;\r\n  border-width: 3px;\r\n  border-color: black;\r\n  color: white;\r\n  background: grey;\r\n}\r\n.stream__qa--item:last-child{\r\n  margin-bottom: 0;\r\n}\r\n.stream__qa--item:hover {\r\n  background: rgba(100, 200, 100, 0.7);\r\n}\r\n\r\n.stream__qa--quetion{\r\n  background: rgba(0,0,0,0.7);\r\n  pointer-events: none;\r\n  text-overflow: unset;\r\n  height: auto;\r\n  white-space: unset;\r\n}\r\n.stream__qa--quetion span{\r\n  text-overflow: unset;\r\n  height: auto;\r\n  overflow: auto;\r\n  white-space: unset;\r\n  line-height: 28px;\r\n\r\n}\r\n.stream__qa--item span{\r\n  padding: 7px 20px;\r\n  display: block;\r\n}\r\n.stream__qa--item .stream__qa--name{\r\n  padding: unset;\r\n  display: none;\r\n}\r\n/*\r\n.stream__qa--name:after{\r\n  content: \" :\"\r\n}\r\n*/\r\n.stream__qa--reply{\r\n  padding: unset;\r\n  padding-left: 20px;\r\n}";
  n(css$2,{});

  var tpl = "<div class=\"stream__qa component center\"></div>";

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

  function saveData() {
    let data = JSON.stringify(this.current.data);
    localStorage.setItem('data', data);
  }

  function clearData() {
    if (this.current.data.score) {
      this.current.data.score = new Score();
      saveData.call(this);
      this.emit('setScore');
    }
  }

  function qa () {
    if (!this.current.data.score) {
      this.current.data.score = new Score();
    }

    var $tpl = $(tpl);
    this.$store.$stream.append($tpl);

    var setScore = data => {
      for (let key in data) {
        for (let param in data[key]) {
          this.current.data.score[key][param] += data[key][param];
        }
      }

      saveData.call(this);
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

  var css$1 = ".screen-stream__slide{\r\n  position: absolute;\r\n  display: none;\r\n  top: 5%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.5);\r\n  z-index: 2000;\r\n}";
  n(css$1,{});

  const $tpl$1 = $(`<img class="screen-stream__slide component"/>`);
  function slide () {
    this.$store.$stream.append($tpl$1);
    this.on('slide', id => {
      if (typeof id === 'string') {
        $tpl$1.attr('src', this.getAssetByName(id).url).fadeIn();
      } else if (typeof id === 'object') {
        $tpl$1.attr('src', this.getAssetByName(id.name).url).css(id.css).fadeIn();
      } else {
        $tpl$1.hide();
      }
    });
  }

  var css = ".stream__stage{\r\n  margin: 1% 0;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  background: #333;\r\n  width: 70%;\r\n  padding: 5px;\r\n  height: 548px;\r\n  overflow: auto;\r\n}\r\n.stream__stage li{\r\n  list-style-type: none;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  display: block;\r\n}\r\n.stream__stage li:last-child{\r\n  margin-bottom: 0px;\r\n}\r\n.stage-children li:not(.stage-child){\r\n  display: none;\r\n}\r\n.stage-parent{\r\n  padding: 5px;\r\n  background: rgba(0, 0, 0, 0.1);\r\n  margin-bottom: 5px;\r\n}\r\n/*Том*/\r\n.stage-vol{\r\n  padding: 10px;\r\n  transition: 0.3s;\r\n  background: #000;\r\n  color: darkcyan;\r\n}\r\n.stage-vol:hover{\r\n  color: #34d1a2;\r\n  background: rgba(0, 0, 0, 0.7);\r\n}\r\n.stage-children{\r\n  padding-left: 20px;\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n/*Глава*/\r\n.stage-child{\r\n  color: darkcyan;\r\n  padding: 10px;\r\n  transition: 0.3s;\r\n  background: #000;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.stage-child:hover{\r\n  color: #34d1a2;\r\n  background: rgba(0, 0, 0, 0.7);\r\n}\r\n";
  n(css,{});

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

  var icoPlay = "data:image/jpeg;base64,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AABDcHRuYm9vbAAAAAAAQ2xicmJvb2wAAAAAAFJnc01ib29sAAAAAABDcm5DYm9vbAAAAAAAQ250Q2Jvb2wAAAAAAExibHNib29sAAAAAABOZ3R2Ym9vbAAAAAAARW1sRGJvb2wAAAAAAEludHJib29sAAAAAABCY2tnT2JqYwAAAAEAAAAAAABSR0JDAAAAAwAAAABSZCAgZG91YkBv4AAAAAAAAAAAAEdybiBkb3ViQG/gAAAAAAAAAAAAQmwgIGRvdWJAb+AAAAAAAAAAAABCcmRUVW50RiNSbHQAAAAAAAAAAAAAAABCbGQgVW50RiNSbHQAAAAAAAAAAAAAAABSc2x0VW50RiNQeGxAUgAAAAAAAAAAAAp2ZWN0b3JEYXRhYm9vbAEAAAAAUGdQc2VudW0AAAAAUGdQcwAAAABQZ1BDAAAAAExlZnRVbnRGI1JsdAAAAAAAAAAAAAAAAFRvcCBVbnRGI1JsdAAAAAAAAAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAAAAAEGNyb3BXaGVuUHJpbnRpbmdib29sAAAAAA5jcm9wUmVjdEJvdHRvbWxvbmcAAAAAAAAADGNyb3BSZWN0TGVmdGxvbmcAAAAAAAAADWNyb3BSZWN0UmlnaHRsb25nAAAAAAAAAAtjcm9wUmVjdFRvcGxvbmcAAAAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAFo4QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAA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b2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTEtMDZUMTA6NDA6MzUrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMTEtMDZUMTA6NDA6MzUrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTExLTA2VDEwOjQwOjM1KzAzOjAwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZDMxMzVjMGYtMWYyMi05ZDQ5LTgzYTAtMDFjZjMzY2YzZTUxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmQzMTM1YzBmLTFmMjItOWQ0OS04M2EwLTAxY2YzM2NmM2U1MSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQzMTM1YzBmLTFmMjItOWQ0OS04M2EwLTAxY2YzM2NmM2U1MSI+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkFCOEEzMTkwMjI5NTE4Q0E5RjI4MURCNjA3RTYwRkUxPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDMxMzVjMGYtMWYyMi05ZDQ5LTgzYTAtMDFjZjMzY2YzZTUxIiBzdEV2dDp3aGVuPSIyMDIxLTExLTA2VDEwOjQwOjM1KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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";

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
          eventRegistration.call(this, event, embed[event]);
        }
      }
    });
  }

  function eventRegistration(event, tpl) {
    var $tpl = $(tpl);
    $tpl.hide().addClass("component");
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

  const event$1 = "zim-intro";
  function init$2() {
    var $vnjs = this;
    window.frame = new Frame('zim', 1024, 768, light, dark);
    frame.on("ready", () => {
      const stage = frame.stage;
      frame.width;
      frame.height;
      new Circle(100, blue).center().drag();
      var checkBox = new CheckBox({
        label: "next",
        startChecked: false
      }).pos(650, 10, stage);
      checkBox.on("change", function () {
        $vnjs.exec({
          jump: 'beginning.plug',
          screen: 'stream'
        }); //$vnjs.exec({ next: true })
      });
      stage.update();
    });
  }

  function zimIntro () {
    this.on(event$1, data => {
      if (window.frame) frame.dispose();

      if (data) {
        init$2.call(this);
        this.exec({
          screen: 'zim'
        });
      } else {
        this.exec({
          screen: 'stream'
        });
      }
    });
  }

  const event = "zim-ui";
  function init$1() {
    const $vnjs = this;
    window.frame = new Frame('zim', 1024, 768, light, dark);
    frame.on("ready", function () {
      var stage = frame.stage;
      var stageW = frame.width;
      frame.height;
      frame.outerColor = frame.grey;
      frame.color = frame.lighter; // ~~~~~~~~~ COLUMN 1 ~~~~~~~~~~

      new Label("ZIM COMPONENTS").pos(50, 50, stage).alp(.5);
      var button = new Button({
        backgroundColor: frame.pink,
        rollBackgroundColor: frame.blue,
        corner: 0,
        gradient: .1
      }).pos(50, 150, stage);
      button.on("click", function () {
        pane.show();
      });
      var pane = new Pane({
        width: 400,
        height: 300,
        close: true,
        displayClose: false,
        draggable: true,
        titleBar: "Pane"
      });
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
      var radio = new RadioButtons({
        size: 40,
        buttons: ["Radio 1", "Radio 2", "Radio 3", "Radio 4"]
      }).pos(60, 360, stage);
      radio.selectedIndex = 1;
      radio.on("change", function () {
        indicator.selectedIndex = radio.selectedIndex;
        stage.update();
      });
      var indicator = new Indicator({
        backdropColor: frame.grey,
        backgroundColor: frame.light,
        foregroundColor: frame.pink,
        num: 4,
        width: 250,
        interactive: true
      }).pos(50, 650, stage);
      indicator.selectedIndex = 1;
      indicator.on("change", function () {
        radio.selectedIndex = indicator.selectedIndex;
        stage.update();
      }); // ~~~~~~~~~ COLUMN 2 ~~~~~~~~~~

      var dial = new Dial({
        backgroundColor: frame.blue
      }).loc(400, 180);
      dial.on("change", function () {
        slider.currentValue = dial.currentValue;
        stage.update();
      });
      var stepper = new Stepper({
        continuous: true,
        stepperType: "number",
        min: 1,
        max: 9
      }).pos(500, 155, stage).sca(.5);
      stepper.on("change", function () {
        pad.selectedIndex = stepper.selectedIndex;
        stage.update();
      });
      var slider = new Slider({
        step: 1,
        useTicks: true
      }).center().mov(0, -80);
      slider.on("change", function () {
        dial.currentValue = slider.currentValue;
        stage.update();
      });
      var waiter = new Waiter({
        backgroundColor: frame.pink,
        corner: 0
      }).show();
      timeout(2, function () {
        waiter.hide();
      });
      var win = new Window({
        height: 220,
        padding: 10,
        scrollBarDrag: true
      }).pos(360, 480, stage);
      win.add(new Label({
        text: "Window\n0\n1\n2\n3\n4\n5\n6\n7\n8",
        color: frame.light
      })); // ~~~~~~~~~ COLUMN 3 ~~~~~~~~~~

      var backing = new Rectangle(400, 70, frame.green).pos(stageW - 400, 0, stage);
      var tabs = new Tabs({
        corner: 20,
        width: 300
      }).pos(backing.x + 50, 10, stage);
      tabs.on("change", function () {
        textArea.text = "TextArea\nTab " + tabs.text;
      });
      var pad = new Pad().pos(780, 120, stage);
      pad.selectedIndex = 0;
      pad.on("change", function () {
        stepper.selectedIndex = pad.selectedIndex;
        stage.update();
      });
      var colorPicker = new ColorPicker({
        colors: [frame.pink, frame.blue, frame.green, frame.yellow, frame.orange, frame.red],
        greyPicker: false,
        alphaPicker: false,
        buttonBar: false,
        cols: 6,
        width: 300
      }).center().mov(310);
      colorPicker.selectedColor = frame.green;
      colorPicker.on("change", function () {
        backing.color = colorPicker.selectedColor;
        stage.update();
      });
      stage.update(); // this is needed to show any changes
    });
  }

  function zimUI () {
    this.on(event, data => {
      if (window.frame) frame.dispose();

      if (data) {
        init$1.call(this);
        this.exec({
          screen: 'zim'
        });
      } else {
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
    this.use(mainMenuScreen);
    this.use(streamScreen);
    this.use(loaderScreen);
    this.use(zimScreen);
    /*components*/

    this.use(scene);
    this.use(show);
    this.use(audio);
    this.use(animate);
    this.use(menu);
    this.use(term);
    this.use(inv);
    this.use(cloud);
    this.use(soundHover);
    this.use(clear);
    this.use(dialogBox);
    this.use(hands);
    this.use(data);
    this.use(qa);
    this.use(loadScene);
    this.use(slide);
    this.use(content);
    this.use(voice);
    this.use(embed);
    /*zim*/

    this.use(zimIntro);
    this.use(zimUI);
  }

  /**
   * Загрузка игры
   */

  fetch(`scenes/vn.json`).then(r => r.json()).then(tree => init(tree)).catch(err => console.error('Ivalid script', err.message));

  function init(tree) {
    var debug = tree.$root.package.debug;
    /*
      conf: {
        debug: true,
        $: {id: '$', name: 'Автор', replyColor: 'red'} //default character
      }
     */

    var vnjs = new Vnjson({
      debug
    });
    window.$vnjs = vnjs;
    plugins.call(vnjs);
    vnjs.setTree(tree);
    vnjs.on('postload', () => {
      vnjs.exec({
        'jump': '$root.$init'
      });
    });
    vnjs.on('init', () => {
      vnjs.exec();
    });
  }

})();
