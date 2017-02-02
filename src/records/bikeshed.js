import Immutable from 'immutable';

const Bikeshed = Immutable.Record({
	name: "",
	colours: Immutable.List(["black","red","blue","green","orange","purple"]),
	colour: "white",
});

export default Bikeshed;