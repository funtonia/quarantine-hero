(this["webpackJsonpquarantine-hero"]=this["webpackJsonpquarantine-hero"]||[]).push([[0],{44:function(e,t,n){e.exports=n(69)},49:function(e,t,n){},50:function(e,t,n){},59:function(e,t,n){e.exports=n.p+"static/media/logo.f5ab7345.png"},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(39),i=n.n(l),s=(n(49),n(50),n(21)),c=n(5),o=n(3),m=n(40),u=n(12),d=n.n(u),h=(n(29),n(51),n(52),n(53),{apiKey:"AIzaSyD_56raelEZfC-QpWyqeREePInKPM4u88I",authDomain:"quarantine-hero.firebaseapp.com",databaseURL:"https://quarantine-hero.firebaseio.com",projectId:"quarantine-hero",storageBucket:"quarantine-hero.appspot.com",messagingSenderId:"634343616076",appId:"1:634343616076:web:2aa2153615cd5123b38ee9",measurementId:"G-2PBE89H418"}),b=new function e(){Object(m.a)(this,e),d.a.initializeApp(h),this.app=d.a,this.auth=d.a.auth(),this.db=d.a.database(),d.a.analytics(),this.store=d.a.firestore()},g=n(43),f=n(71);function p(e){var t,n=e.showFullText,a=void 0!==n&&n,l=e.location,i=void 0===l?"":l,s=e.id,c=void 0===s?"":s,m=e.request,u=void 0===m?"":m,d=e.timestamp,h=void 0===d?Date.now():d,b=Object(g.a)(new Date(h),Date.now(),{locale:f.a});return t=a?u:u.length>300?u.substring(0,300)+"...":u,r.a.createElement(o.b,{to:"/offer-help/".concat(e.id),className:"shadow bg-white p-4 border border-gray-400 rounded w-full my-3 text-xl block",key:c},"Jemand in ",r.a.createElement("span",{className:"font-bold"},i)," braucht Hilfe!",r.a.createElement("p",{className:"italic mt-3"},t),r.a.createElement("br",null),r.a.createElement("span",{className:"text-gray-500 inline-block text-right w-full text-base"},"vor ",b))}function E(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),l=t[0],i=t[1],m=b.store.collection("ask-for-help");return Object(a.useEffect)((function(){m.get().then((function(e){console.log(e.docs),i(e.docs.map((function(e){return Object(s.a)({},e.data().d,{id:e.id})})))}))}),[]),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"w-full flex flex-col justify-center items-center mt-16"},r.a.createElement("img",{src:n(59)}),r.a.createElement("p",{className:"text-xl py-4"},"Wir sind Menschen. In Zeiten der Not helfen wir uns. Sei ein Teil davon.")),r.a.createElement("p",{className:"text-xl pt-2 pb-2"},"Viele Menschen befinden sich aktuell freiwillig oder notwendigerweise in h\xe4uslicher Quarant\xe4ne. Wenn ihr diesen Menschen helfen wollt, k\xf6nnt ihr hier sehen, wobei ihr eure Mitmenschen in eurer Nachbarschaft unterst\xfctzen k\xf6nnt!",r.a.createElement("br",null),r.a.createElement("br",null),"Wenn ihr gerade in h\xe4uslicher Quarant\xe4ne seid und Unterst\xfctzung bei Eink\xe4ufen, Boteng\xe4ngen oder Gassigehen mit dem Hund ben\xf6tigt k\xf6nnt ihr das hier euren Mitmenschen mitteilen!"),r.a.createElement("div",{className:"flex justify-between"},r.a.createElement(o.b,{to:"/overview",className:"font-bold py-8 px-4 rounded bg-primary text-center text-white flex-1 mr-4"},"Ich m\xf6chte helfen"),r.a.createElement(o.b,{to:"/signup",className:"font-bold py-8 px-4 rounded bg-primary text-center text-white flex-1"},"Ich brauche Hilfe")),l.map((function(e){return r.a.createElement(p,Object.assign({},e,{key:e.id}))}))))}var w=n(14),v=n(20);function k(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(""),o=Object(c.a)(i,2),m=o[0],u=o[1],d=Object(a.useState)({id:null,location:null,request:null,timestamp:null}),h=Object(c.a)(d,2),g=h[0],f=h[1],E=Object(w.h)().id,k=new v.GeoFirestore(b.store).collection("/ask-for-help");return Object(a.useEffect)((function(){k.doc(E).get().then((function(e){e.exists?(console.log("Document data:",e.data()),f(Object(s.a)({id:e.id},e.data()))):console.log("No such document!")}))}),[]),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b.store.collection("/ask-for-help/".concat(E,"/offer-help")).add({answer:n,email:m,timestamp:Date.now()})}},r.a.createElement("div",{className:"mt-4 p-1"},r.a.createElement("label",{className:"text-base text-gray-700"},"Anfrage"),r.a.createElement(p,Object.assign({},g,{showFullText:!0}))),r.a.createElement("div",{className:"mt-4 p-1 w-full"},r.a.createElement("label",{className:"text-base text-gray-700"},"Deine Antwort"),r.a.createElement("textarea",{className:"border rounded border-gray-400 p-4 text-xl w-full",onChange:function(e){return l(e.target.value)},placeholder:"Ich kann helfen!"})),r.a.createElement("div",{className:"mt-4 p-1 w-full"},r.a.createElement("label",{className:"text-base text-gray-700"},"Deine E-Mail"),r.a.createElement("input",{className:"border rounded border-gray-400 p-4 text-xl w-full",type:"email",onChange:function(e){return u(e.target.value)},placeholder:"ich@helfer.de"})),r.a.createElement("div",{className:"mt-4 m-1 w-full"},"Wenn Sie das abschicken stimmen Sie zu, dass wir ihre Kontaktdaten an den Anfragensteller weiterleiten."),r.a.createElement("div",{className:"mt-4 m-1 w-full"},r.a.createElement("button",{type:"submit",className:"btn-primary"},"Senden")))}function x(){return r.a.createElement("div",null,r.a.createElement("div",{className:"mt-4"},r.a.createElement("p",{className:"text-2xl font-semibold"},"Hier werden deine wichtigsten Fragen beantwortet!"),r.a.createElement("p",{className:"text-xl font-semibold mt-2"},"Wie l\xe4uft das ganze ab?"),r.a.createElement("p",{className:"mt-1"},"Auf quarant\xe4nehelden.de findest du Anfragen von Personen, die etwas ben\xf6tigen. Du kannst dir Anfrangen in deiner N\xe4he anzeigen lassen und Diese beantworten. Wir leiten deine Nachricht dann an den Anfragensteller weiter der dann zu dir Kontakt aufnimmt. Dann k\xf6nnt ihr alles weitere wie Details zur Anfrage und \xdcbergabe Zeit und Ort kl\xe4ren."),r.a.createElement("p",{className:"text-xl font-semibold mt-2"},"Welche Art von Anfragen kann ich stellen?"),r.a.createElement("p",{className:"mt-1"},"Prinzipiell kann man alle Anfragen stellen, bei der Hilfe von au\xdfen ben\xf6tigt wird. Das kann ein Einkauf der n\xf6tigsten Lebensmittel oder ein Botengang oder irgendetwas anderes sein."),r.a.createElement("p",{className:"text-xl font-semibold mt-2"},"Wie bezahlt man f\xfcr einen Einkauf?"),r.a.createElement("p",{className:"mt-1"},"Handelt es sich bei der Anfrage um einen Einkauf k\xf6nnt ihr selbst ausmachen wir ihr die Bezahlung des Einkaufs handhabt. Eine M\xf6glichkeit w\xe4re, das Geld \xfcber Paypal zu senden."),r.a.createElement("p",{className:"text-xl font-semibold mt-2"},"Wer kann meine Hilfeanfrage sehen?"),r.a.createElement("p",{className:"mt-1"},"Deine Anfrage und eine ungef\xe4hrer Ort ist \xf6ffentlich einsehbar. Dein Name und deine Emailadresse ist nicht einsehbar."),r.a.createElement("p",{className:"text-xl font-semibold mt-2"},"Wie nehmen Helfer Kontakt zu mir auf?"),r.a.createElement("p",{className:"mt-1"},"Helfer k\xf6nnen auf unser Webseite ",r.a.createElement(o.b,{to:"/"},"hier")," nach Anfragen in ihrer N\xe4he suchen. Dann kann man auf die ausgew\xe4hlte Anfrage klicken und im Formular ein Email an die Person in Quarant\xe4ne schicken."),r.a.createElement("p",{className:"text-xl font-semibold mt-2"},"Was muss man bei einer \xdcbergabe beachten?"),r.a.createElement("p",{className:"mt-1"},"Bitte achtet bei einer \xdcbergabe, dass es keine Kontakt zwischen einer Person in Quarant\xe4ne und der Helfenden Person gibt. Ihr k\xf6nnt zum Beispiel etwas vor die T\xfcr legen und dann anrufen, dass es da ist."),r.a.createElement("p",{className:"text-xl font-semibold mt-2"},"Werde ich daf\xfcr bezahlt?"),r.a.createElement("p",{className:"mt-1"},"Nein. Das Helfen findet auf freiwilliger Basis statt."),r.a.createElement("p",{className:"text-xl font-semibold mt-2"},"Was ist mit meiner Sicherheit?"),r.a.createElement("p",{className:"mt-1"},"Bitte stelle stets deine eigene Sicherheit an erste Stelle und vermeide direkten Kontakt."),r.a.createElement("p",{className:"text-xl font-semibold mt-2"},"Wieso soll ich das tun?"),r.a.createElement("p",{className:"mt-1"},"Wir sind alle Menschen. Besonders in schwierigen Zeiten m\xfcssen wir zusammen halten. Helfe deinen Nachbarn in Quarant\xe4ne und erm\xf6gliche so eine best m\xf6gliche Einschr\xe4nkung des Viruses."),r.a.createElement("p",{className:"text-xl font-semibold mt-2"},"Wie wei\xdf ich, dass die Person wirklich in Quarant\xe4ne ist?"),r.a.createElement("p",{className:"mt-1"},"Unsere Plattform funktioniert nur \xfcber die Ehrlichkeit der Nutzer. Wenn du dir unsicher bist, kannst du das dem Anfragesteller mitteilen und zum Beispiel ein Attest erfragen."),r.a.createElement("p",{className:"text-xl font-semibold mt-2"},"Wie euch unterst\xfctzen?"),r.a.createElement("p",{className:"mt-1"},"Schau einfach mal ob einer deiner Nachbarn Hilfe ben\xf6tigt!"),r.a.createElement("p",{className:"text-xl font-semibold mt-2"},"Wer seid ihr?"),r.a.createElement("p",{className:"mt-1"},"Wir sind eine Florian, Henrike und Keno, eine Gruppe von Freunden, die mit diesem kleine Projekt Menschen helfen m\xf6chten.")))}function N(){return r.a.createElement("div",null,r.a.createElement("div",{className:"mt-4"},r.a.createElement("div",{className:"impressum"},r.a.createElement("h1",null,"Impressum"),r.a.createElement("p",null,"Angaben gem\xe4\xdf \xa7 5 TMG"),r.a.createElement("p",null,"Keno Dre\xdfel ",r.a.createElement("br",null),"Georgenschwaigstra\xdfe 16a",r.a.createElement("br",null),"80807 M\xfcnchen"),r.a.createElement("p",null,r.a.createElement("strong",null,"Vertreten durch: "),r.a.createElement("br",null),"Keno Dre\xdfel",r.a.createElement("br",null),"Henrike von Zimmermann",r.a.createElement("br",null),"Florian Schmidt",r.a.createElement("br",null)),r.a.createElement("p",null,r.a.createElement("strong",null,"Kontakt:")," ",r.a.createElement("br",null),"Telefon: 089-35627565",r.a.createElement("br",null),"E-Mail: ",r.a.createElement("a",{href:"mailto:quarant\xe4nehelden@keno.digital"},"quarant\xe4nehelden@keno.digital")),r.a.createElement("p",null,r.a.createElement("strong",null,"Haftungsausschluss: "),r.a.createElement("br",null),r.a.createElement("strong",null,"Haftung f\xfcr Links"),r.a.createElement("br",null),"Unser Angebot enth\xe4lt Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\xf6nnen wir f\xfcr diese fremden Inhalte auch keine Gew\xe4hr \xfcbernehmen. F\xfcr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m\xf6gliche Rechtsverst\xf6\xdfe \xfcberpr\xfcft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",r.a.createElement("br",null),r.a.createElement("strong",null,"Urheberrecht"),r.a.createElement("br",null),"Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\xe4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\xdferhalb der Grenzen des Urheberrechtes bed\xfcrfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f\xfcr den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",r.a.createElement("br",null),r.a.createElement("strong",null,"Datenschutz"),r.a.createElement("br",null),"Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten m\xf6glich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit m\xf6glich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdr\xfcckliche Zustimmung nicht an Dritte weitergegeben. ",r.a.createElement("br",null),"Wir weisen darauf hin, dass die Daten\xfcbertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitsl\xfccken aufweisen kann. Ein l\xfcckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m\xf6glich. ",r.a.createElement("br",null),"Der Nutzung von im Rahmen der Impressumspflicht ver\xf6ffentlichten Kontaktdaten durch Dritte zur \xdcbersendung von nicht ausdr\xfccklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdr\xfccklich widersprochen. Die Betreiber der Seiten behalten sich ausdr\xfccklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("strong",null,"Google Analytics"),r.a.createElement("br",null)),r.a.createElement("p",null,"Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie erm\xf6glicht. Die durch den Cookie erzeugten Informationen \xfcber Ihre Benutzung dieser Website (einschlie\xdflich Ihrer IP-Adresse) wird an einen Server von Google in den USA \xfcbertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports \xfcber die Websiteaktivit\xe4ten f\xfcr die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte \xfcbertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie k\xf6nnen die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht s\xe4mtliche Funktionen dieser Website voll umf\xe4nglich nutzen k\xf6nnen. Durch die Nutzung dieser Website erkl\xe4ren Sie sich mit der Bearbeitung der \xfcber Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden."),"Impressum vom ",r.a.createElement("a",{href:"https://www.impressum-generator.de"},"Impressum Generator")," der ",r.a.createElement("a",{href:"https://www.kanzlei-hasselbach.de/standorte/bonn/"},"Kanzlei Hasselbach, Bonn"))))}var y=n(26),z=n(27),S=n.n(z),D=S.a.auth(),A={googleProvider:new u.auth.GoogleAuthProvider},j=Object(y.a)({providers:A,firebaseAppAuth:D})((function(e){var t=r.a.useState(""),n=Object(c.a)(t,2),a=n[0],l=n[1],i=r.a.useState(""),s=Object(c.a)(i,2),o=s[0],m=s[1],u=e.user,d=(e.signOut,e.signInWithEmailAndPassword,e.createUserWithEmailAndPassword);e.signInWithFacebook,e.signInWithGoogle;return u?r.a.createElement(w.a,{to:"/ask-for-help"}):r.a.createElement("form",null,r.a.createElement("div",{className:"mb-4"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username"},"Email"),r.a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Username",value:a,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"mb-6"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password"},"Passwort"),r.a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************",value:o,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"flex items-center justify-between"},r.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:function(){return d(a,o)}},"Jetzt Registrieren")))})),I=n(17),W=n.n(I);function O(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(""),s=Object(c.a)(i,2),o=s[0],m=s[1],u=Object(a.useState)({lat:null,lng:null}),d=Object(c.a)(u,2),h=d[0],g=d[1],f=Object(w.g)();return Object(a.useEffect)((function(){console.log(o)})),r.a.createElement("form",{style:{maxWidth:"1000px",margin:"auto"},onSubmit:function(e){return e.preventDefault(),new v.GeoFirestore(b.store).collection("ask-for-help").add({request:n,uid:b.auth.currentUser.uid,timestamp:Date.now(),coordinates:new b.app.firestore.GeoPoint(h.lat,h.lng),location:o}),f.push("/success")}},r.a.createElement("h1",{className:"text-4xl py-4 pt-10"},"Um Unterst\xfctzung bitten"),r.a.createElement("div",{className:"py-3"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"phone"},"Wo bist du?"),r.a.createElement(W.a,{onChange:m,value:o,onSelect:function(e){m(e),Object(I.geocodeByAddress)(e).then((function(e){return Object(I.getLatLng)(e[0])})).then(g).catch((function(e){return console.error("Error",e)}))},searchOptions:{types:["(regions)"]}},(function(e){var t=e.getInputProps,n=e.suggestions,a=e.getSuggestionItemProps,l=e.loading;return r.a.createElement("div",null,r.a.createElement("input",Object.assign({required:"required"},t({placeholder:"Deine Stadt...",className:"location-search-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}))),r.a.createElement("div",{className:"autocomplete-dropdown-container"},l&&r.a.createElement("div",null,"Loading..."),n.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",n=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",a(e,{className:t,style:n}),r.a.createElement("span",null,e.description))}))))}))),r.a.createElement("div",{className:"py-3"},r.a.createElement("div",{className:"w-full"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"phone"},"Wobei kann man dir helfen?"),r.a.createElement("textarea",{className:"border leading-tight rounded border-gray-400 py-2 px-3 pb-20 w-full",required:"required",placeholder:"Deine Anfrage hier",onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"mt-8 mb-10 w-full text-gray-700"},"Sobald du deine Anfrage absendest ist diese \xf6ffentlich f\xfcr andere einsehbar. Deine Email-Adresse ist f\xfcr andere nicht einsehbar. ",r.a.createElement("br",null),"Wenn dir jemand helfen m\xf6chte, kann er dich \xfcber diese Website kontaktieren und wir leiten die Kontaktanfrage automatisch an deine Email weiter. Ab dann k\xf6nnt ihr euch unter euch absprechen."),r.a.createElement("div",{className:"mt-4 w-full"},r.a.createElement("button",{type:"submit",className:"btn-primary"},"Jetzt um Hilfe bitten"))))}function B(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)([]),o=Object(c.a)(i,2),m=o[0],u=o[1],d=new v.GeoFirestore(b.store).collection("ask-for-help");return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-4xl py-4 pt-10"},"Hilfe Anbieten"),r.a.createElement("div",{className:"py-3"},r.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"phone"},"Wo bist du?"),r.a.createElement(W.a,{onChange:l,value:n,onSelect:function(e){l(e),Object(I.geocodeByAddress)(e).then((function(e){return Object(I.getLatLng)(e[0])})).then((function(e){d.near({center:new b.app.firestore.GeoPoint(e.lat,e.lng),radius:30}).get().then((function(e){u(e.docs.map((function(e){return Object(s.a)({},e.data(),{id:e.id})})))}))})).catch((function(e){return console.error("Error",e)}))},searchOptions:{types:["(regions)"]}},(function(e){var t=e.getInputProps,n=e.suggestions,a=e.getSuggestionItemProps,l=e.loading;return r.a.createElement("div",null,r.a.createElement("input",t({placeholder:"Deine Stadt...",className:"location-search-input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"})),r.a.createElement("div",{className:"autocomplete-dropdown-container"},l&&r.a.createElement("div",null,"Loading..."),n.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",n=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",a(e,{className:t,style:n}),r.a.createElement("span",null,e.description))}))))}))),r.a.createElement("div",{className:"py-3"},0===m.length?0===n.length?r.a.createElement("span",null,"Bitte gib deinen Standort ein."):r.a.createElement("span",null,"Bei in der N\xe4he hat aktuell Niemand Hilfe angefragt."):m.map((function(e){return r.a.createElement(p,e)}))))}function G(){return r.a.createElement("div",null,r.a.createElement("div",{className:"mt-4 p-1"},r.a.createElement("p",{className:"text-2xl font-semibold"},"Vielen Dank, wir haben deine Anfrage eingestellt."),r.a.createElement(o.b,{className:"btn-primary mt-4",to:"/"},"Zur Startseite")))}var P=S.a.auth(),H={googleProvider:new u.auth.GoogleAuthProvider};var F=Object(y.a)({providers:H,firebaseAppAuth:P})((function(e){var t=e.user,n=e.signOut;return r.a.createElement("div",{className:"flex justify-center bg-secondary min-h-screen"},r.a.createElement("div",{className:"phone-width"},r.a.createElement(o.a,null,r.a.createElement("div",{className:"mt-4 flex justify-between items-center"},r.a.createElement("div",null,r.a.createElement(o.b,{to:"/",className:"font-bold mr-2 text-sm"},"Home"),r.a.createElement(o.b,{to:"/faq",className:"font-bold mx-2 text-sm"},"FAQs"),r.a.createElement(o.b,{to:"/impressum",className:"font-bold ml-2 text-sm"},"Impressum")),t?r.a.createElement("div",null,r.a.createElement("span",{className:"text-gray-700 text-sm"},t.email),r.a.createElement("button",{className:"bg-primary p-2 ml-4 text-white rounded text-sm",onClick:n},"Logout")):null),r.a.createElement(w.d,null,r.a.createElement(w.b,{path:"/offer-help/:id"},r.a.createElement(k,null)),r.a.createElement(w.b,{path:"/signup"},r.a.createElement(j,null)),r.a.createElement(w.b,{path:"/ask-for-help"},r.a.createElement(O,null)),r.a.createElement(w.b,{path:"/dashboard"},r.a.createElement("div",null,"Dashboard")),r.a.createElement(w.b,{path:"/faq"},r.a.createElement(x,null)),r.a.createElement(w.b,{path:"/impressum"},r.a.createElement(N,null)),r.a.createElement(w.b,{path:"/overview"},r.a.createElement(B,null)),r.a.createElement(w.b,{path:"/success"},r.a.createElement(G,null)),r.a.createElement(w.b,{path:"/"},r.a.createElement(E,null))))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.b442d21c.chunk.js.map