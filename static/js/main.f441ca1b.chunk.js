(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),o=n.n(s),i=(n(29),n(22)),r=n(2),u=n(3),l=n.p+"static/media/header_logo.8724261e.svg",p=n(8),d=n(0);function h(e){return Object(d.jsxs)("header",{className:"header page__header",children:[Object(d.jsx)("img",{className:"header__logo",src:l,alt:"\u041b\u043e\u0433\u043e Mesto"}),e.loggedIn&&Object(d.jsx)(u.b,{exact:!0,path:"/",children:Object(d.jsxs)("div",{className:"header__container",children:[Object(d.jsx)("p",{className:"header__email",children:e.email}),Object(d.jsx)(p.b,{className:"header__sign-out",onClick:e.onLogout,to:"/sign-in",children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(p.b,{className:"header__link",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(p.b,{className:"header__link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})})]})}function j(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),i=Object(r.a)(o,2),u=i[0],l=i[1];return Object(d.jsxs)("section",{className:"auth page__auth",children:[Object(d.jsx)("h2",{className:"auth__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onLogin({email:a,password:u})},children:[Object(d.jsx)("input",{className:"auth__input auth__input_type_email",type:"email",name:"emailInput",placeholder:"Email",required:!0,onChange:function(e){s(e.target.value)},value:a}),Object(d.jsx)("input",{className:"auth__input auth__input_type_password",type:"password",name:"passwordInput",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,onChange:function(e){l(e.target.value)},value:u}),Object(d.jsx)("button",{className:"auth__submit-button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}function b(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),i=Object(r.a)(o,2),u=i[0],l=i[1];return Object(d.jsxs)("section",{className:"auth page__auth",children:[Object(d.jsx)("h2",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onRegister({email:a,password:u})},children:[Object(d.jsx)("input",{className:"auth__input auth__input_type_email",type:"email",name:"emailInput",placeholder:"Email",required:!0,onChange:function(e){s(e.target.value)},value:a}),Object(d.jsx)("input",{className:"auth__input auth__input_type_password",type:"password",name:"passwordInput",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,onChange:function(e){l(e.target.value)},value:u}),Object(d.jsx)("button",{className:"auth__submit-button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(d.jsx)(p.b,{className:"auth__link",to:"/sign-in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})}var m=c.a.createContext();function _(e){var t=c.a.useContext(m),n=e.card.owner._id===t._id,a="card__delete-button ".concat(n?"":"card__delete-button_disabled"),s=e.card.likes.some((function(e){return e._id===t._id})),o="card__like-button ".concat(s?"card__like-button_active":"");return Object(d.jsxs)("li",{className:"card",children:[Object(d.jsx)("button",{className:a,onClick:function(){e.onCardDelete(e.card)}}),Object(d.jsx)("button",{className:"card__open-photo-button",type:"button","aria-label":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c",onClick:function(){e.onCardClick(e.card)},children:Object(d.jsx)("img",{className:"card__photo",src:e.link,alt:e.name})}),Object(d.jsxs)("div",{className:"card__description",children:[Object(d.jsx)("h2",{className:"card__title",children:e.name}),Object(d.jsxs)("div",{className:"card__like-container",children:[Object(d.jsx)("button",{className:o,type:"button","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",onClick:function(){e.onCardLike(e.card)}}),Object(d.jsx)("p",{className:"card__like-counter",children:e.likes.length})]})]})]})}function f(e){var t=c.a.useContext(m);return Object(d.jsxs)("main",{className:"content page__content",children:[Object(d.jsxs)("section",{className:"profile content__profile",children:[Object(d.jsx)("button",{className:"profile__avatar-button",type:"button",onClick:e.onEditAvatar,children:Object(d.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440"})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__name",children:t.name}),Object(d.jsx)("p",{className:"profile__about",children:t.about}),Object(d.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:e.onEditProfile})]}),Object(d.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:e.onAddPlace})]}),Object(d.jsx)("section",{className:"cards content__cards",children:Object(d.jsx)("ul",{className:"cards__list",children:e.cards.map((function(t){return Object(d.jsx)(_,{card:t,name:t.name,link:t.link,likes:t.likes,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})}function O(e){return Object(d.jsx)("footer",{className:"footer page__footer",children:e.loggedIn&&Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})}function g(e){return Object(d.jsx)("div",{className:"popup page__popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{className:"popup__close-button",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(d.jsx)("h2",{className:"popup__title",children:e.title}),Object(d.jsxs)("form",{className:"popup__form",name:e.name,noValidate:!0,onSubmit:e.onSubmit,children:[e.children,Object(d.jsx)("button",{className:"popup__save-button",type:"submit",children:e.buttonText})]})]})})}function x(e){var t=c.a.useContext(m),n=c.a.useState(""),a=Object(r.a)(n,2),s=a[0],o=a[1],i=c.a.useState(""),u=Object(r.a)(i,2),l=u[0],p=u[1];return c.a.useEffect((function(){(t.name||t.description)&&(o(t.name),p(t.about))}),[t]),Object(d.jsx)(g,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:l})},children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_name",id:"name-input",type:"text",name:"nameInput",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0,value:s,onChange:function(e){o(e.target.value)}}),Object(d.jsx)("span",{className:"popup__input-error",id:"name-input-error"}),Object(d.jsx)("input",{className:"popup__input popup__input_type_about",id:"about-input",type:"text",name:"aboutInput",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0,value:l,onChange:function(e){p(e.target.value)}}),Object(d.jsx)("span",{className:"popup__input-error",id:"about-input-error"})]})})}function v(e){var t=c.a.useRef("");return c.a.useEffect((function(){e.isOpen||(t.current.value="")}),[e.isOpen]),Object(d.jsx)(g,{name:"change-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_link",id:"avatar-link-input",type:"url",name:"avatarLinkInput",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:t}),Object(d.jsx)("span",{className:"popup__input-error",id:"avatar-link-input-error"})]})})}function N(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),i=Object(r.a)(o,2),u=i[0],l=i[1];return c.a.useEffect((function(){e.isOpen||(s(""),l(""))}),[e.isOpen]),Object(d.jsx)(g,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:e.isLoading?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:u})},children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{className:"popup__input popup__input_type_place",id:"place-input",type:"text",name:"placeInput",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0,onChange:function(e){s(e.target.value)},value:a}),Object(d.jsx)("span",{className:"popup__input-error",id:"place-input-error"}),Object(d.jsx)("input",{className:"popup__input popup__input_type_link",id:"link-input",type:"url",name:"linkInput",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:function(e){l(e.target.value)},value:u}),Object(d.jsx)("span",{className:"popup__input-error",id:"link-input-error"})]})})}function C(e){return Object(d.jsx)("div",{className:"popup page__popup popup_type_view-image ".concat(e.card.link&&"popup_opened"),children:Object(d.jsxs)("figure",{className:"popup__image-container",children:[Object(d.jsx)("button",{className:"popup__close-button popup__close-button_type_view-image",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(d.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(d.jsxs)("figcaption",{className:"popup__image-title",children:[e.card.name," "]})]})})}function k(e){return Object(d.jsx)(g,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:e.isLoading?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onConfirm(e.card)}})}function y(e){return Object(d.jsx)("div",{className:"popup page__popup ".concat(e.isOpen&&"popup_opened"),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{className:"popup__close-button",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(d.jsx)("img",{className:"popup__tooltip-image",src:e.image,alt:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(d.jsx)("h2",{className:"popup__tooltip-title",children:e.title})]})})}var S=n(20),L=n(21),E=new(function(){function e(t){Object(S.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(L.a)(e,[{key:"getUserData",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(t){return e._getResponse(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(t){return e._getResponse(t)}))}},{key:"editUserData",value:function(e){var t=this,n=e.name,a=e.about;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:n,about:a})}).then((function(e){return t._getResponse(e)}))}},{key:"postNewCard",value:function(e){var t=this,n=e.name,a=e.link;return fetch("".concat(this.baseUrl,"/cards "),{method:"POST",headers:this.headers,body:JSON.stringify({name:n,link:a})}).then((function(e){return t._getResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._getResponse(e)}))}},{key:"changeUserAvatar",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._getResponse(e)}))}},{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return t?fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return n._getResponse(e)})):fetch("".concat(this.baseUrl,"/cards/likes/").concat(e," "),{method:"PUT",headers:this.headers}).then((function(e){return n._getResponse(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"ee997593-23fa-4bcc-b338-c6e6a2cbbaea","Content-Type":"application/json"}}),U=n.p+"static/media/Success.a9eb6caf.svg",w=n.p+"static/media/Error.d4ce2a26.svg",I=n(23),T=n(24),P=function(e){var t=e.component,n=Object(T.a)(e,["component"]);return Object(d.jsx)(u.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(I.a)({},n)):Object(d.jsx)(u.a,{to:"/sign-in"})}})},D="https://auth.nomoreparties.co",A=function(e){return e.ok?e.json():Promise.reject(e.status)};var R=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),o=Object(r.a)(s,2),l=o[0],p=o[1],_=c.a.useState(!1),g=Object(r.a)(_,2),S=g[0],L=g[1],I=c.a.useState(!1),T=Object(r.a)(I,2),R=T[0],q=T[1],F=c.a.useState(!1),J=Object(r.a)(F,2),B=J[0],M=J[1],z=c.a.useState({}),H=Object(r.a)(z,2),G=H[0],V=H[1],K=c.a.useState({}),Q=Object(r.a)(K,2),W=Q[0],X=Q[1],Y=c.a.useState([]),Z=Object(r.a)(Y,2),$=Z[0],ee=Z[1],te=c.a.useState(!1),ne=Object(r.a)(te,2),ae=ne[0],ce=ne[1],se=c.a.useState({}),oe=Object(r.a)(se,2),ie=oe[0],re=oe[1],ue=c.a.useState(!1),le=Object(r.a)(ue,2),pe=le[0],de=le[1],he=c.a.useState(""),je=Object(r.a)(he,2),be=je[0],me=je[1],_e=c.a.useState(""),fe=Object(r.a)(_e,2),Oe=fe[0],ge=fe[1],xe=c.a.useState(""),ve=Object(r.a)(xe,2),Ne=ve[0],Ce=ve[1],ke=Object(u.g)(),ye=c.a.useCallback((function(){var e,t=localStorage.getItem("token");t&&(e=t,fetch("".concat(D,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(A)).then((function(e){e.data&&(de(!0),Ce(e.data.email),ke.push("/"))})).catch((function(e){ke.push("sign-in"),400===e?console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e," - \u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439")):401===e&&console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e," - \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"))}))}),[ke]);function Se(){a(!1),p(!1),L(!1),q(!1),M(!1),V({}),ge(""),me("")}function Le(e){"Escape"===e.key&&Se()}function Ee(e){e.target.classList.contains("popup")&&Se()}return c.a.useEffect((function(){ye()}),[ye]),c.a.useEffect((function(){Promise.all([E.getUserData(),E.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];X(n),ee(a)})).catch((function(e){console.log(e)}))}),[]),c.a.useEffect((function(){return document.addEventListener("keydown",Le),document.addEventListener("mouseup",Ee),function(){document.removeEventListener("keydown",Le),document.removeEventListener("mouseup",Ee)}})),Object(d.jsx)(m.Provider,{value:W,children:Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("div",{className:"page__container",children:[Object(d.jsx)(h,{loggedIn:pe,email:Ne,onLogout:function(){localStorage.removeItem("token"),de(!1),Ce("")}}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(j,{onLogin:function(e){(function(e){var t=e.email,n=e.password;return fetch("".concat(D,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n,email:t})}).then(A)})(e).then((function(t){t.token&&(localStorage.setItem("token",t.token),de(!0),Ce(e.email),ke.push("/"))})).catch((function(e){me("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!\n\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."),ge(w),M(!0),400===e?console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e," - \u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439")):401===e&&console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e," - \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"))}))}})}),Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(b,{onRegister:function(e){(function(e){var t=e.email,n=e.password;return fetch("".concat(D,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n,email:t})}).then(A)})(e).then((function(e){e.data.email&&(ke.push("/sign-in"),me("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),ge(U),M(!0))})).catch((function(e){me("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!\n\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."),ge(w),M(!0),400===e&&console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e," - \u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"))}))}})}),Object(d.jsx)(P,{exact:!0,path:"/",component:f,loggedIn:pe,onEditProfile:function(){a(!0)},onAddPlace:function(){p(!0)},onEditAvatar:function(){L(!0)},onCardClick:V,cards:$,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===W._id}));E.changeLikeCardStatus(e._id,t).then((function(t){var n=$.map((function(n){return n._id===e._id?t:n}));ee(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){q(!0),re(e)}})]}),Object(d.jsx)(O,{loggedIn:pe}),Object(d.jsx)(x,{isOpen:n,onClose:Se,onUpdateUser:function(e){ce(!0),E.editUserData(e).then((function(e){X(e),ce(!1),Se()})).catch((function(e){console.log(e)}))},isLoading:ae}),Object(d.jsx)(v,{isOpen:S,onClose:Se,onUpdateAvatar:function(e){ce(!0),E.changeUserAvatar(e).then((function(e){X(e),ce(!1),Se()})).catch((function(e){console.log(e)}))},isLoading:ae}),Object(d.jsx)(N,{isOpen:l,onClose:Se,onAddPlace:function(e){var t=e.name,n=e.link;ce(!0),E.postNewCard({name:t,link:n}).then((function(e){ee([e].concat(Object(i.a)($))),ce(!1),Se()})).catch((function(e){console.log(e)}))},isLoading:ae}),Object(d.jsx)(k,{isOpen:R,onClose:Se,onConfirm:function(e){ce(!0),E.deleteCard(e._id).then((function(){var t=$.filter((function(t){return t._id!==e._id}));ee(t),Se(),ce(!1)})).catch((function(e){console.log(e)}))},card:ie,isLoading:ae}),Object(d.jsx)(C,{card:G,onClose:Se}),Object(d.jsx)(y,{isOpen:B,onClose:Se,image:Oe,title:be})]})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p.a,{children:Object(d.jsx)(R,{})})}),document.getElementById("root")),q()}},[[36,1,2]]]);
//# sourceMappingURL=main.f441ca1b.chunk.js.map