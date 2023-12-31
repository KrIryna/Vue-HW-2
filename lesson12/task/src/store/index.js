import { createStore } from "vuex";
import candidates from "./modules/candidates";
import workers from "./modules/workers";
import interviews from "./modules/interviews";
import weekDays from "./modules/weekDays";


export default createStore({
	namespaced: true,

	modules: {
	candidates,
	workers,
	interviews, 
	weekDays
	},
});


