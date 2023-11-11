import { createStore } from "vuex";

export default createStore({
  state: {
	productsList: [
		{
		  id: 1,
		  title: "Ноутбук ASUS TUF Gaming A15 (2023)",
		  imgSrc: "https://content.rozetka.com.ua/goods/images/original/349586929.jpg",
		  price: 51999,
		  link: "https://rozetka.com.ua/ua/asus-90nr0e88-m004h0/p386766864/?xnpe_tifc=OfnDx.Vd4IEshIod4kHZb9pZhfEWVjQsVuU_O.YD4.bpxFo74jX8hFE.4kxZhFVdxIhu4ueL&utm_source=dm&utm_campaign=goodspromo&utm_medium=email&xnpe_cmp=.eJwTUqgR-LfxDuexFM741z-nNP-se3gzVHky5yuvrCgec94j99YYXr8519PY56ZjVAOjvn5SfkqlfkliUk6qfkmRfkmKfnJqXklqEYoQjB1tGIvMRZEyR5PKQGZHG8WiG1JckJinn5jFE8WsUujpeSZtqsOhgwBfmUjy.qdmatQgmmIGl4g",
		  category: "Ноутбуки",
		},
		{
		  id: 2,
		  title: "Ноутбук ASUS TUF Gaming F15 FX506HF-HN038 ...",
		  imgSrc: "https://content.rozetka.com.ua/goods/images/original/323437245.jpg",
		  price: 32499,
		  link: "https://rozetka.com.ua/ua/asus-90nr0hb4-m00520/p372852162/?xnpe_tifc=xDsLhIx84FHDOfhN4Ies4ypZhfEWVjQsVuU_O.YD4.bpxFo74jXpOk4s4FUNhFYdxIxJbDzl&utm_source=dm&utm_campaign=goodspromo&utm_medium=email&xnpe_cmp=.eJwTUqgR-LfxDuexFM741z-nNP-se3gzVHky5yuvrCgec94j99YYXr8519PY56ZjVAOjvn5SfkqlfkliUk6qfkmRfkmKfnJqXklqEYoQjB1tGIvMRZGyQJPKQGZHG8WiG1JckJinn5jFE8WsUujpeSZtqsOhgwBf3Ujz.nfb4MGEULEEl-g",
		  category: "Ноутбуки",
		},
		{
		  id: 3,
		  title: "Ноутбук HP Victus Gaming Laptop ...",
		  imgSrc: "https://content.rozetka.com.ua/goods/images/original/368225648.jpg",
		  price: 34999,
		  link: "https://rozetka.com.ua/ua/hp-8f2s4ea/p397582845/?utm_source=dm&xnpe_tifc=OIxj4.oX4FzlbDo7xdo8OMpZhfEWVjQsVuU_O.YD4.bpxFo74jXDxkolb.1j4D4N4FQN4DUs&utm_campaign=goodspromo&utm_medium=email&xnpe_cmp=.eJwTUqgR-LfxDuexFM741z-nNP-se3gzVHky5yuvrCgec94j99YYXr8519PY56ZjVIW-flJ-SqV-SWJSTqp-SZF-SYp-cmpeSWoRihCMHW0Yi8xFkbJEk8pAZoM1IulKzOKJYlYp9PQ8kzbV4dBBAAynRiA.8OgifIFrTu4XFw",
		  category: "Ноутбуки",
		},
		{
			id: 4,
			title: "Телевізор Blaupunkt 32HBE4000",
			imgSrc: "https://content.rozetka.com.ua/goods/images/big/372488166.jpg",
			price: 4999,
			link: "https://rozetka.com.ua/ua/blaupunkt-32hbe4000/p399919011/",
			category: "Телевізори",
		 },
		 {
			id: 5,
			title: "Телевізор Samsung QE55Q60CAUXUA",
			imgSrc: "https://content1.rozetka.com.ua/goods/images/big/364929632.jpg",
			price: 35999,
			link: "https://rozetka.com.ua/ua/samsung-qe55q60cauxua/p373026732/",
			category: "Телевізори",
		 },
		 {
			id: 6,
			title: "Телевізор LG 50UR78006LK",
			imgSrc: "https://content1.rozetka.com.ua/goods/images/big/351024741.jpg",
			price: 19999,
			link: "https://rozetka.com.ua/ua/lg_50ur78006lk/p386410440/",
			category: "Телевізори",
		 },
		 {
			id: 7,
			title: "Планшет Samsung Galaxy Tab S9 5G 12/256GB",
			imgSrc: "https://content1.rozetka.com.ua/goods/images/big/353709133.jpg",
			price: 34999,
			link: "https://rozetka.com.ua/ua/samsung-sm-x716bzaesek/p386457897/",
			category: "Планшети",
		 },
		 {
			id: 8,
			title: "Планшет Lenovo Tab P11 Wi-Fi 128GB",
			imgSrc: "https://content2.rozetka.com.ua/goods/images/big/228625046.jpg",
			price: 9999,
			link: "https://rozetka.com.ua/ua/planshet-lenovo-tab-p11-plus-wi-fi-128gb/g42081133/",
			category: "Планшети",
		 },
		 {
			id: 9,
			title: "Планшет Lenovo Tab M10 ",
			imgSrc: "https://content2.rozetka.com.ua/goods/images/big/286999814.jpg",
			price: 6299,
			link: "https://rozetka.com.ua/ua/lenovo-zaae0027ua/p350834451/",
			category: "Планшети",
		 },
	 ],
	categoryList:[
		{
			id:'1',
			category:'Телевізори'
		},
		{
			id:'2',
			category:'Ноутбуки'
		},
		{
			id:'3',
			category:'Планшети'
		},
	
	],
	products:['ok']
  },
  getters: {
	getCategoryList:({categoryList})=>categoryList,
	getProductsByCategory: state=>productCategory=>state.productsList.filter((product)=>product.category===productCategory)
  },
  mutations: {},
  actions: {},
  modules: {},
});