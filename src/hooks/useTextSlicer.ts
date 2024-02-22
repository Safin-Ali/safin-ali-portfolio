import {useState} from 'react';

interface Arg {
	range:number,
	text:string,
}

interface StatenObject {
	slicedText:string,
	isSliced:boolean,
}

interface ReturnObject extends StatenObject {
	callback:() => void,
}

export default function useTextSlicer (arg:Arg):ReturnObject {
	const [slicedObj,setSlicedObj] = useState<StatenObject> ({
		isSliced:true,
		slicedText:arg.text.slice(0,arg.range)
	});

	const handleSlicedText = () => setSlicedObj({
		isSliced:!slicedObj.isSliced,
		slicedText:slicedObj.slicedText.length <= arg.range ? arg.text : arg.text.slice(0,arg.range)
	})

	return {
		callback:handleSlicedText,
		...slicedObj
	}

}