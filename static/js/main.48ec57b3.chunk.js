(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e){e.exports=[{title:"Vist - TV Show App",codesite:"https://github.com/chrisgud/TV-show-list",deployedsite:"https://vist5.herokuapp.com/",image:"images/vist.webp",description:"Consumers watch television more than ever before and keeping track of shows is difficult across many different streaming sites and networks. This application puts all of the relevant TV guide information in one neat interface. VIST allows TV viewers to create a catalog of shows that they want to watch or are currently watching."},{title:"Google Book Finder - React",codesite:"https://github.com/Cmoney45/google_books_react_app",deployedsite:"https://glacial-brook-57502.herokuapp.com/",image:"images/bookFinder.png",description:"React App that uses google book api to display books"},{title:"Memory Game",codesite:"https://github.com/Cmoney45/Memory_game",deployedsite:"https://cmoney45.github.io/Memory_game/",image:"images/dinosaur.png",description:"This app is designed to be a simple memory game. Using React's states to keep an active state on the board. I chose dinosaurs because my nephews are yount and love dinosaurs. I was hoping to have them play this and add different characters if they guess the first group of creatures."},{title:"Employee Scheduler",codesite:"https://github.com/Cmoney45/Sml-comp-scheduler",deployedsite:"https://morning-lake-34727.herokuapp.com/",image:"images/employeeScheduler.jpg",description:"Small Company scheduler is a simple app that was designed for creating a quick an easy way a small company could schedule employees for their time. It has a simple login with different views for manager and employees. Managers can schedule employees on a week to week basis and employees can see their scheduled time to work."},{title:"Mongo News-Scraper",codesite:"https://github.com/Cmoney45/Mongo_scraper",deployedsite:"https://afternoon-springs-19945.herokuapp.com/",image:"images/newspaper.jpg",description:"Mongo Scraper is a news scraper website. It is designed to scrape articles from different news sites and pull them into a MongoDB database. We use Mongoose to create structure for the database. The articles are then displayed in an easy fashion with an article title, snippet and link to the article. A user can save an article to create notes on if they choose to."},{title:"Home Manager",codesite:"https://github.com/nicksedillos/project-1",deployedsite:"https://nicksedillos.github.io/project-1/",image:"images/homeStorage.jpg",description:"Home Manager is a tool for keeping track of what items you have, and how many of each. It lets you tag items with their physical Location, Category or type of product, and if desired, a UPC for future shopping. With this tool, you don\u2019t have to memorize an inventory or physically check it each time you go shopping. This could be useful for families, office teams, or anyone else who shares things scattered across multiple locations and needs a simple way to keep track of them."},{title:"Train Scheduler",codesite:"https://github.com/Cmoney45/Train-Scheduler",deployedsite:"https://cmoney45.github.io/Train-Scheduler/",image:"images/trainScheduler.jpg",description:"This app was built as a base to use Firebase and pull train times added by the user."},{title:"Trivia Game",codesite:"https://github.com/Cmoney45/TriviaGame",deployedsite:"https://cmoney45.github.io/TriviaGame/",image:"images/trivia.jpg",description:"A mobile responsive Trivia game. It has two difficulty settings and currently two word banks."},{title:"Giftastic",codesite:"https://github.com/Cmoney45/GifTastic",deployedsite:"https://cmoney45.github.io/GifTastic/",image:"images/giphytastic.gif",description:"Purpose: The purpose of this website design is to generate random GIFs using the giphy API. This is to give users default buttons to click but then also add their own when needed."},{title:"Superhero - Word Guess Game",codesite:"https://github.com/Cmoney45/Word-Guess-Game",deployedsite:"https://cmoney45.github.io/Word-Guess-Game/",image:"images/dcDefault.jpg",description:"A word guess game for superheros. Very simple deployment with basic HTMl/CSS/JS."},{title:"Friend Finder",codesite:"https://github.com/Cmoney45/FriendFinder",deployedsite:"https://secret-crag-95048.herokuapp.com/",image:"images/friendFinder.jpg",description:"This application was created to design a simple friend/dating app. It uses frontend Javascript to submit a form and submit it to a javascript server on the backend. The backend then takes that information and returns the closest match based on the answers given in the quiz."},{title:"Burger Eater!",codesite:"https://github.com/Cmoney45/burger",deployedsite:"https://vast-peak-72405.herokuapp.com/",image:"images/burger.jpg",description:"This app was designed to be simple and interact with a backend database of MySQL. It allows you to post to the database as well as change states based on which buttons are clicked"},{title:"Star Wars RPG",codesite:"https://github.com/Cmoney45/Basic-StarWars-RPG",deployedsite:"https://cmoney45.github.io/Basic-StarWars-RPG/",image:"images/starwars.png",description:"Choose a character and try to defeat all of the other characters by repeadly hitting the attack button."},{title:"BAMazon",codesite:"https://github.com/Cmoney45/Bamazon",deployedsite:"N/A",image:"images/Bamazon.jpg",description:"This application is a simple command line storefront using the npm inquirer package and the MySQL database together with the npm mysql package. It also uses the npm table package to make our display look more uniform for the command line."}]},18:function(e,t,a){e.exports=a(41)},24:function(e,t,a){},26:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(14),r=a.n(i),s=a(2),c=a(3),l=a(6),m=a(4),u=a(5),p=a(43),d=a(44),h=a(45),g=a(42),b=(a(24),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="wrapper ".concat(this.props.classPass);return o.a.createElement("div",{className:e},this.props.children)}}]),t}(n.Component)),f=(a(26),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).changeCurrentPage=function(e){a.setState({currentPage:"React-portfolio/".concat(e)})},a.state={currentPage:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({currentPage:"React-portfolio/".concat(window.location.pathname)})}},{key:"render",value:function(){var e=this;return o.a.createElement("header",null,o.a.createElement(b,null,o.a.createElement("h1",null,"Colton Scherer"),o.a.createElement("nav",null,o.a.createElement("div",{className:"btn-group"},[{text:"About",route:"/",number:1},{text:"Portfolio",route:"/portfolio",number:2},{text:"Contact",route:"/contact",number:3}].reverse().map(function(t){return o.a.createElement(g.a,{to:"React-portfolio/".concat(t.route),key:t.number,className:e.state.currentPage===t.route?"button currentPage":"button",onClick:function(){return e.changeCurrentPage(t.route)}},t.text)})))))}}]),t}(n.Component)),y=(a(30),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("h2",null,this.props.headerTitle)}}]),t}(n.Component)),v=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,{headerTitle:"About Me"}),o.a.createElement("div",null,o.a.createElement("img",{id:"bio-img",src:"images/20180702_171051.jpg",alt:"Me"}),o.a.createElement("p",null,"My name is ",o.a.createElement("b",null,"Colton Arlin Scherer")," and I am an aspiring computer programmer. I took an intro to computer science course in college, where I worked with C++. From then on I wanted to learn more about programming. From working at a software company as an accountant, I saw web development as an important coding base to know in an evolving SAAS and app based business environment."),o.a.createElement("p",null," I graduated in December 2014 from Hamline University with a Bachelors Degree in Business Administration, majoring in Accounting. After college, I worked for a software company from February 2015 to November 2017 as an accountant. I used my knowledge of coding practices to create unique excel spreadsheets that would help automate and speed up the processes that I was tasked with. I was often an excel-guru for various teams to help them do the same within their own departments. I eventually delved into excels VBA developer module and I started to ask myself if I should be tyring to learn a real coding languages vs using a spreadsheet tool. Working for the company heightened my interest in software development even more, as the people I met were very interesting and I related with immensely. After finding accounting work outside of a software environment, I knew I really wanted to get back to that type of work-life as it was more challenging and interesting to me as well.")))}}]),t}(n.Component),w=a(10),k=(a(32),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("a",{className:"carousel__arrow carousel__arrow--left",onClick:this.props.onClick},o.a.createElement("span",{className:"fa fa-2x fa-angle-left"}))}}]),t}(n.Component)),j=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("a",{className:"carousel__arrow carousel__arrow--right",onClick:this.props.onClick},o.a.createElement("span",{className:"fa fa-2x fa-angle-right"}))}}]),t}(n.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("li",null,o.a.createElement("a",{className:this.props.index===this.props.activeIndex?"carousel__indicator carousel__indicator--active":"carousel__indicator",onClick:this.props.onClick}))}}]),t}(n.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("li",{className:this.props.index===this.props.activeIndex?"carousel__slide carousel__slide--active":"carousel__slide"},o.a.createElement("img",{src:this.props.slide.image,className:"carousel__image",alt:this.props.slide.title}),o.a.createElement("h2",null,this.props.slide.title),o.a.createElement("p",{className:"carousel-slide__content"},this.props.slide.description),o.a.createElement("p",null,o.a.createElement("a",{className:"carousel__button",href:this.props.slide.deployedsite,rel:"noopener"},"Deployed Site"),"     ",o.a.createElement("a",{className:"carousel__button",href:this.props.slide.codesite,rel:"noopener"},"Code")))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).goToSlide=a.goToSlide.bind(Object(w.a)(Object(w.a)(a))),a.goToPrevSlide=a.goToPrevSlide.bind(Object(w.a)(Object(w.a)(a))),a.goToNextSlide=a.goToNextSlide.bind(Object(w.a)(Object(w.a)(a))),a.state={activeIndex:0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"goToSlide",value:function(e){this.setState({activeIndex:e})}},{key:"goToPrevSlide",value:function(e){e.preventDefault();var t=this.state.activeIndex,a=this.props.slides.length;t<1&&(t=a),--t,this.setState({activeIndex:t})}},{key:"goToNextSlide",value:function(e){e.preventDefault();var t=this.state.activeIndex;t===this.props.slides.length-1&&(t=-1),++t,this.setState({activeIndex:t})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"carousel"},o.a.createElement(k,{onClick:function(t){return e.goToPrevSlide(t)}}),o.a.createElement("ul",{className:"carousel__slides"},this.props.slides.map(function(t,a){return o.a.createElement(E,{key:a,index:a,activeIndex:e.state.activeIndex,slide:t})})),o.a.createElement(j,{onClick:function(t){return e.goToNextSlide(t)}}),o.a.createElement("ul",{className:"carousel__indicators"},this.props.slides.map(function(t,a){return o.a.createElement(O,{key:a,index:a,activeIndex:e.state.activeIndex,isActive:e.state.activeIndex==a,onClick:function(t){return e.goToSlide(a)}})})))}}]),t}(n.Component),S=a(15),I=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,{headerTitle:"Portfolio"}),o.a.createElement(C,{slides:S}))}}]),t}(n.Component),T=(a(34),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{method:"POST",action:"https://formspree.io/cmoney11550@gmail.com"},o.a.createElement("div",{className:"row gtr-50"},o.a.createElement("div",{className:"col-6 col-12-mobile"},o.a.createElement("input",{type:"text",className:"text",name:"name",placeholder:"Name"})),o.a.createElement("div",{className:"col-6 col-12-mobile"},o.a.createElement("input",{type:"text",className:"text",name:"email",placeholder:"Email"})),o.a.createElement("div",{className:"col-12"},o.a.createElement("textarea",{name:"message",placeholder:"Message"})),o.a.createElement("div",{className:"col-12"},o.a.createElement("ul",{className:"actions"},o.a.createElement("li",null,o.a.createElement("input",{type:"submit",value:"Send Message"})))))))}}]),t}(n.Component)),x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,{headerTitle:"Contact Me"}),o.a.createElement(T,null))}}]),t}(n.Component),_=(a(36),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(w.a)(Object(w.a)(a))),a.state={isOpen:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/colton-scherer-11161b83/",target:"_blank",rel:"noopener"},o.a.createElement("i",{className:"fab fa-linkedin fa-2x"})),o.a.createElement("a",{href:"https://github.com/Cmoney45",target:"_blank",rel:"noopener"},o.a.createElement("i",{className:"fab fa-github fa-2x"})),o.a.createElement("p",null," Work of University of MN Bootcamp "))}}]),t}(n.Component)),N=(a(38),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(f,null),o.a.createElement(b,{classPass:"push"},o.a.createElement("div",{id:"main-body"},o.a.createElement(d.a,{id:"main-body"},o.a.createElement(h.a,{exact:!0,path:"/",component:v}),o.a.createElement(h.a,{exact:!0,path:"/portfolio",component:I}),o.a.createElement(h.a,{exact:!0,path:"/contact",component:x}),o.a.createElement(h.a,{component:v})))),o.a.createElement(_,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.48ec57b3.chunk.js.map