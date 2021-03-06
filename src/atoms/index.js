import { atom } from "recoil";

export const user = atom({
  key: "user", // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const allUsersState = atom({
  key: "allUsersState",
  default: []
})
export const allUsersInProject = atom({
  key: "allUsersInProject",
  default:[]
})

export const projectInvited = atom({
  key: "projectInvited", // unique ID (with respect to other atoms/selectors)
  default: {
    invited:[],
    selected:{},
    observer:''
  }, // default value (aka initial value)
});

export const isLoading = atom({
  key: "loading",
  default: false
});


export const pagos = atom({
  key: "pagos",
  default: {
    pending:[],
    observer:''
  }
  
});


export const atomPayments = atom({
  key: "NextPayments",
  default: {
    nextPayments:[],
    selected:''
  } 
});


export const atomLogin = atom({
  key: "login",
  default: {
    loading:false,
    errorCode:'',
    errorMessage:''
  }
});
