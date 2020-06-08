(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-react', 'kotlin-extensions', 'kotlinx-html-js', 'kotlin-react-dom', 'kotlinx-coroutines-core', 'kotlin-wrappers-kotlin-css', 'kotlin-styled'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-react'), require('kotlin-extensions'), require('kotlinx-html-js'), require('kotlin-react-dom'), require('kotlinx-coroutines-core'), require('kotlin-wrappers-kotlin-css'), require('kotlin-styled'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinForBrowser'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinForBrowser'.");
    }if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'KotlinForBrowser'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'KotlinForBrowser'.");
    }if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'KotlinForBrowser'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'KotlinForBrowser'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'KotlinForBrowser'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'KotlinForBrowser'.");
    }if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'KotlinForBrowser'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'KotlinForBrowser'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'KotlinForBrowser'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'KotlinForBrowser'.");
    }if (typeof this['kotlin-wrappers-kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'KotlinForBrowser'. Its dependency 'kotlin-wrappers-kotlin-css' was not found. Please, check whether 'kotlin-wrappers-kotlin-css' is loaded prior to 'KotlinForBrowser'.");
    }if (typeof this['kotlin-styled'] === 'undefined') {
      throw new Error("Error loading module 'KotlinForBrowser'. Its dependency 'kotlin-styled' was not found. Please, check whether 'kotlin-styled' is loaded prior to 'KotlinForBrowser'.");
    }root.KotlinForBrowser = factory(typeof KotlinForBrowser === 'undefined' ? {} : KotlinForBrowser, kotlin, this['kotlin-react'], this['kotlin-extensions'], this['kotlinx-html-js'], this['kotlin-react-dom'], this['kotlinx-coroutines-core'], this['kotlin-wrappers-kotlin-css'], this['kotlin-styled']);
  }
}(this, function (_, Kotlin, $module$kotlin_react, $module$kotlin_extensions, $module$kotlinx_html_js, $module$kotlin_react_dom, $module$kotlinx_coroutines_core, $module$kotlin_wrappers_kotlin_css, $module$kotlin_styled) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var useState = $module$kotlin_react.react.useState_mh5how$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var Unit = Kotlin.kotlin.Unit;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var functionalComponent = $module$kotlin_react.react.functionalComponent_1klik0$;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var child = $module$kotlin_react.react.child_9r8yuv$;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H2_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
  var RDOMBuilder_init = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var enumEncode = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var BUTTON_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var DIV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var INPUT_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var SPAN_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var hashCode = Kotlin.hashCode;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var useEffect = $module$kotlin_react.react.useEffect_wrbdb4$;
  var Display = $module$kotlin_wrappers_kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_wrappers_kotlin_css.kotlinx.css.set_display_qidz4o$;
  var FlexDirection = $module$kotlin_wrappers_kotlin_css.kotlinx.css.FlexDirection;
  var set_flexDirection = $module$kotlin_wrappers_kotlin_css.kotlinx.css.set_flexDirection_c4dh0c$;
  var Align = $module$kotlin_wrappers_kotlin_css.kotlinx.css.Align;
  var set_alignItems = $module$kotlin_wrappers_kotlin_css.kotlinx.css.set_alignItems_olgsez$;
  var set_alignContent = $module$kotlin_wrappers_kotlin_css.kotlinx.css.set_alignContent_olgsez$;
  var get_px = $module$kotlin_wrappers_kotlin_css.kotlinx.css.get_px_rcaex3$;
  var set_width = $module$kotlin_wrappers_kotlin_css.kotlinx.css.set_width_n8chyh$;
  var set_margin = $module$kotlin_wrappers_kotlin_css.kotlinx.css.set_margin_krvuuu$;
  var set_marginBottom = $module$kotlin_wrappers_kotlin_css.kotlinx.css.set_marginBottom_n8chyh$;
  var enumEncode_0 = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_1 = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var BUTTON_init_0 = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var StyledDOMBuilder_init = $module$kotlin_styled.styled.StyledDOMBuilder;
  var html = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init_0 = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  function h2$lambda(closure$classes) {
    return function (it) {
      return new H2_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function span$lambda(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function hello$lambda$lambda(closure$setName, closure$setEditingName) {
    return function (event) {
      var tmp$, tmp$_0;
      var $receiver = (tmp$_0 = Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : null) != null ? tmp$_0.value : null;
      var newName = $receiver != null ? $receiver : '';
      closure$setName(newName);
      if (isBlank(newName))
        closure$setEditingName(true);
      return Unit;
    };
  }
  function hello$lambda$lambda_0(closure$setEditingName) {
    return function (f) {
      closure$setEditingName(true);
      return Unit;
    };
  }
  function hello$lambda$lambda_1(closure$setEditingName) {
    return function (event) {
      closure$setEditingName(false);
      return Unit;
    };
  }
  function hello$lambda($receiver, it) {
    var tmp$ = useState('');
    var name = tmp$.component1()
    , setName = tmp$.component2();
    var tmp$_0 = useState(true);
    var isEditingName = tmp$_0.component1()
    , setEditingName = tmp$_0.component2();
    var onNameChange = hello$lambda$lambda(setName, setEditingName);
    var onEditName = hello$lambda$lambda_0(setEditingName);
    var onSaveName = hello$lambda$lambda_1(setEditingName);
    var $receiver_0 = new RDOMBuilder_init(div$lambda(null));
    var tmp$_1 = $receiver_0.attrs;
    var $receiver_1 = {};
    $receiver_1.display = 'flex';
    set_style(tmp$_1, $receiver_1);
    var $receiver_0_0 = new RDOMBuilder_init(h2$lambda(null));
    $receiver_0_0.unaryPlus_pdl1vz$('Hello, ');
    nameComponent($receiver_0_0, isEditingName, name, onNameChange, onEditName);
    $receiver_0_0.unaryPlus_pdl1vz$('!');
    $receiver_0.child_52psg1$($receiver_0_0.create());
    if (isEditingName) {
      var $receiver_0_1 = new RDOMBuilder_init(button$lambda(null, null, null, null));
      set_onClickFunction($receiver_0_1.attrs, onSaveName);
      $receiver_0_1.unaryPlus_pdl1vz$('Save');
      $receiver_0.child_52psg1$($receiver_0_1.create());
    }$receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var hello;
  function nameComponent($receiver, isEditingName, name, onNameChange, onEditName) {
    if (isEditingName)
      editNameComponent($receiver, name, onNameChange);
    else
      displayNameComponent($receiver, name, onEditName);
  }
  function editNameComponent($receiver, name, onNameChange) {
    var $receiver_0 = new RDOMBuilder_init(input$lambda(null, null, null, null, null));
    var $receiver_1 = $receiver_0.attrs;
    set_onChangeFunction($receiver_1, onNameChange);
    $receiver_1.value = name;
    $receiver.child_52psg1$($receiver_0.create());
  }
  function displayNameComponent($receiver, name, onEditName) {
    var $receiver_0 = new RDOMBuilder_init(span$lambda(null));
    set_onClickFunction($receiver_0.attrs, onEditName);
    $receiver_0.unaryPlus_pdl1vz$(name);
    $receiver.child_52psg1$($receiver_0.create());
  }
  function hello$lambda_0($receiver) {
    return Unit;
  }
  function hello_0($receiver) {
    return child($receiver, hello, void 0, hello$lambda_0);
  }
  function styledButton$lambda(closure$formEncType, closure$formMethod, closure$type) {
    return function (it) {
      return new BUTTON_init_0(attributesMapOf_1(['formenctype', closure$formEncType != null ? enumEncode_0(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode_0(closure$formMethod) : null, 'type', closure$type != null ? enumEncode_0(closure$type) : null]), it);
    };
  }
  function styledDiv$lambda(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  function JokeResponseValue(id, joke) {
    this.id = id;
    this.joke = joke;
  }
  JokeResponseValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JokeResponseValue',
    interfaces: []
  };
  JokeResponseValue.prototype.component1 = function () {
    return this.id;
  };
  JokeResponseValue.prototype.component2 = function () {
    return this.joke;
  };
  JokeResponseValue.prototype.copy_19mbxw$ = function (id, joke) {
    return new JokeResponseValue(id === void 0 ? this.id : id, joke === void 0 ? this.joke : joke);
  };
  JokeResponseValue.prototype.toString = function () {
    return 'JokeResponseValue(id=' + Kotlin.toString(this.id) + (', joke=' + Kotlin.toString(this.joke)) + ')';
  };
  JokeResponseValue.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.joke) | 0;
    return result;
  };
  JokeResponseValue.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.joke, other.joke)))));
  };
  function JokeResponse(value) {
    this.value = value;
  }
  JokeResponse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JokeResponse',
    interfaces: []
  };
  JokeResponse.prototype.component1 = function () {
    return this.value;
  };
  JokeResponse.prototype.copy_pywju9$ = function (value) {
    return new JokeResponse(value === void 0 ? this.value : value);
  };
  JokeResponse.prototype.toString = function () {
    return 'JokeResponse(value=' + Kotlin.toString(this.value) + ')';
  };
  JokeResponse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  JokeResponse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function jokes$lambda$lambda(closure$setJokeHashCode, closure$joke) {
    return function (f) {
      closure$setJokeHashCode(hashCode(closure$joke));
      return Unit;
    };
  }
  function Coroutine$jokes$lambda$lambda$lambda(closure$setJoke_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$setJoke = closure$setJoke_0;
  }
  Coroutine$jokes$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$jokes$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$jokes$lambda$lambda$lambda.prototype.constructor = Coroutine$jokes$lambda$lambda$lambda;
  Coroutine$jokes$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var jokesUrl = 'http://api.icndb.com/jokes/random/';
            this.state_0 = 2;
            this.result_0 = await_0(window.fetch(jokesUrl), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            if (response.ok) {
              this.state_0 = 3;
              this.result_0 = await_0(response.json(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 3:
            var newJokeResponse = this.result_0;
            return this.local$closure$setJoke(newJokeResponse.value.joke), Unit;
          case 4:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function jokes$lambda$lambda$lambda(closure$setJoke_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$jokes$lambda$lambda$lambda(closure$setJoke_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function jokes$lambda$lambda_0(closure$setJoke) {
    return function () {
      launch(coroutines.GlobalScope, void 0, void 0, jokes$lambda$lambda$lambda(closure$setJoke));
      return Unit;
    };
  }
  function jokes$lambda($receiver, it) {
    var tmp$ = useState('');
    var joke = tmp$.component1()
    , setJoke = tmp$.component2();
    var tmp$_0 = useState(0);
    var jokeHashCode = tmp$_0.component1()
    , setJokeHashCode = tmp$_0.component2();
    var onGetJoke = jokes$lambda$lambda(setJokeHashCode, joke);
    useEffect(listOf(jokeHashCode), jokes$lambda$lambda_0(setJoke));
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_1 = $receiver_0.css;
    set_display($receiver_1, Display.flex);
    set_flexDirection($receiver_1, FlexDirection.column);
    set_alignItems($receiver_1, Align.center);
    set_alignContent($receiver_1, Align.center);
    set_width($receiver_1, get_px(400));
    set_margin($receiver_1, 'auto');
    var $receiver_0_0 = new StyledDOMBuilder_init(styledButton$lambda(null, null, null));
    set_marginBottom($receiver_0_0.css, get_px(20));
    set_onClickFunction($receiver_0_0.attrs, onGetJoke);
    $receiver_0_0.unaryPlus_pdl1vz$('New Joke');
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver_0.unaryPlus_pdl1vz$(joke);
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var jokes;
  function jokes$lambda_0($receiver) {
    return Unit;
  }
  function jokes_0($receiver) {
    return child($receiver, jokes, void 0, jokes$lambda_0);
  }
  function main$lambda($receiver) {
    hello_0($receiver);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  _.hello_ss14n$ = hello_0;
  _.JokeResponseValue = JokeResponseValue;
  _.JokeResponse = JokeResponse;
  $$importsForInline$$['kotlin-styled'] = $module$kotlin_styled;
  _.jokes_ss14n$ = jokes_0;
  _.main = main;
  hello = functionalComponent(hello$lambda);
  jokes = functionalComponent(jokes$lambda);
  main();
  Kotlin.defineModule('KotlinForBrowser', _);
  return _;
}));

//# sourceMappingURL=KotlinForBrowser.js.map
