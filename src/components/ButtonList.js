import { bodyButtonsList } from "../utils/constants";

const ButtonList = () => {
    return (
        <div className="flex w-full overflow-x-auto m-2 p-2 border">
            {bodyButtonsList.map((element, index) => <RenderButton key={index} name={element}/>)}
            <RenderButton name={"All"}/>
        </div>
    )
};

const RenderButton = ({name}) => {
    return (
        <div className="p-1 w-full">
            <button className="bg-gray-300  hover:bg-gray-400  rounded-lg text-black  h-10 m-2 py-2 px-4 w-full ">{name}</button>
        </div>
    )
}

export default ButtonList;