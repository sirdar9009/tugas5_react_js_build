(this.webpackJsonptugas5_react_js=this.webpackJsonptugas5_react_js||[]).push([[0],{13:function(a,e,n){},14:function(a,e,n){},15:function(a,e,n){"use strict";n.r(e);var t=n(0),l=n.n(t),r=n(7),u=n.n(r),i=(n(13),n(14),n(2)),s=n(3),m=n(5),o=n(4),c=[{NamaMakanan:"Nasi Padang",Harga:"20.000",img:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"},{NamaMakanan:"Sate",Harga:"20.000",img:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"},{NamaMakanan:"Soto",Harga:"10.000",img:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"},{NamaMakanan:"Uduk",Harga:"10.000",img:"https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"},{NamaMakanan:"Nasi Kuning",Harga:"15.000",img:"https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg"}],h=[{NamaMakanan:"Nasi Padang",Harga:"20.000"},{NamaMakanan:"Sate",Harga:"20.000"},{NamaMakanan:"Soto",Harga:"10.000"},{NamaMakanan:"Uduk",Harga:"10.000"},{NamaMakanan:"Nasi Kuning",Harga:"15.000"},{NamaMakanan:"Ayam Geprek",Harga:"15.000"},{NamaMakanan:"Pecel Lele",Harga:"10.000"},{NamaMakanan:"Pecel",Harga:"10.000"},{NamaMakanan:"Mie Ayam",Harga:"10.000"}],g=function(a){Object(m.a)(n,a);var e=Object(o.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Daftar Makanan Favorit"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,c.map((function(a,e){return l.a.createElement("td",{key:e},l.a.createElement("img",{src:a.img,alt:"Product Makanan",width:"150",height:"100"}),l.a.createElement("center",null,l.a.createElement("p",null,a.NamaMakanan),l.a.createElement("p",null,"Harga : Rp. ",a.Harga)))}))))),l.a.createElement("h1",null,"List Makanan"),h.map((function(a,e){return l.a.createElement("div",{key:e},l.a.createElement("p",null,a.NamaMakanan,"| Harga Makanan : ",a.Harga))})))}}]),n}(t.Component),p=n(1),d=function(a){Object(m.a)(n,a);var e=Object(o.a)(n);function n(a){var t;return Object(i.a)(this,n),(t=e.call(this,a)).state={pesanan:"",jumlah:""},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t.handleChangeJumlah=t.handleChangeJumlah.bind(Object(p.a)(t)),t.fokus=l.a.createRef(),t}return Object(s.a)(n,[{key:"handleChange",value:function(a){a.preventDefault(),this.setState({pesanan:a.target.value})}},{key:"handleChangeJumlah",value:function(a){a.preventDefault(),this.setState({jumlah:a.target.value})}},{key:"handleSubmit",value:function(a){a.preventDefault(),alert("Pesanan Anda Adalah : "+this.state.pesanan+" | Jumlah Pesanan : "+this.state.jumlah),this.setState({pesanan:"",jumlah:""}),this.fokus.current.focus()}},{key:"render",value:function(){var a=this;return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{onChange:function(e){return a.handleChange(e)},type:"text",value:this.state.pesanan,ref:this.fokus,placeholder:"Masukan Pesan Anda"}),l.a.createElement("input",{onChange:function(e){return a.handleChangeJumlah(e)},type:"number",value:this.state.jumlah,ref:this.pesanan,placeholder:"Masukan Jumlah Pesanan"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"pesan"}))))}}]),n}(t.Component);var k=function(){return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},8:function(a,e,n){a.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.9da5eb41.chunk.js.map