import { createStore } from "vuex";
const store = createStore({
  state: {
    user: {
      name: "Gokhan",
      lname: "Kandemir",
      age: 33,
      address: {},
      password: 123123123,
      tc: 11111
    },
    theme: "dark",
    fullName: "Defne Kandemir",
    permissions: [1, 2, 3, 4, 5],
    userList: ["Gokhan", "Tayfun", "İlker", "Ramazan", "Defne", "Kamil", "Cemil"],
    itemList: [
      { id: 1, title: "Masa", type: "mobilya" },
      { id: 2, title: "Sandalye", type: "mobilya" },
      { id: 3, title: "TV", type: "elektronik" },
      { id: 4, title: "Monitor", type: "elektronik" },
      { id: 5, title: "Bardak", type: "plastik" }
    ]
  },
  //senkron sekilde state uzerinde modifikasyon yapmamızı saglar
  //state i alır ve ornegin eklenecek yeni item i da pareametre olarak alacak
  mutations: {
    newItem(state, item) {
      state.itemList.push(item);
    }
    // changeUser(state, payload){}
  },
  //asenkron bir sekilde async await yapımızda kullanabilecegimiz yapıdır
  // context nesnesi alır. vuex in bir instance i olarak dusunulebilir 
  actions: {
      //context nesnesi degilde sadece commit işlemi yapacagimiz icin newItem a bu sekilde gonderdik
    newItem({ commit }, item) {
      console.log("item :>> ", item);
      setTimeout(() => {
        // context.commit("newItem", item);
        //dispatch etmedik cunku burada mutations ımız oldugu icin asenkron yapı tamam landıgı zaman mutation umuz uzerinden 
        //commit islemini gerceklestirecegiz
        commit("newItem", item);
      }, 1000);
    }
  },
  //state imizdeki degerlerimize ulasmamız icin
  getters: {
    _woodItems: state => state.itemList.filter(i => i.type === "mobilya"),
    _activeUser(state) {
      const user = {
        ...state.user
      };
      //statte bulunan user ı spread edip ornegin istedigimiz property i gizleyebiliriz uı kısmında kullanıcı gormez
      delete user.password;
      return user;
    }
  }
});

export default store;